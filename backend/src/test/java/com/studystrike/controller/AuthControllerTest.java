package com.studystrike.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.studystrike.entity.User;
import com.studystrike.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@Transactional
public class AuthControllerTest {
    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        userRepository.deleteAll();
    }

    @Test
    void register_success() throws Exception {
        AuthController.RegisterRequest req = new AuthController.RegisterRequest();
        req.setEmail("test1@example.com");
        req.setName("Test User");
        req.setPassword("password123");
        req.setRole(User.UserRole.PARENT);
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.message", is("Registration successful")));
    }

    @Test
    void register_duplicateEmail() throws Exception {
        User user = new User();
        user.setEmail("test2@example.com");
        user.setName("Test User");
        user.setPassword("hashed");
        user.setRole(User.UserRole.PARENT);
        user.setIsActive(true);
        user.setEmailVerified(false);
        user.setCreatedDate(java.time.LocalDateTime.now());
        user.setUpdatedDate(java.time.LocalDateTime.now());
        userRepository.save(user);
        AuthController.RegisterRequest req = new AuthController.RegisterRequest();
        req.setEmail("test2@example.com");
        req.setName("Another User");
        req.setPassword("password123");
        req.setRole(User.UserRole.STUDENT);
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error", containsString("Email already in use")));
    }

    @Test
    void login_success_and_jwt_issued() throws Exception {
        // Register first
        AuthController.RegisterRequest req = new AuthController.RegisterRequest();
        req.setEmail("test3@example.com");
        req.setName("Test User");
        req.setPassword("password123");
        req.setRole(User.UserRole.PARENT);
        mockMvc.perform(post("/api/auth/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(req)))
                .andExpect(status().isOk());
        // Login
        AuthController.LoginRequest loginReq = new AuthController.LoginRequest();
        loginReq.setEmail("test3@example.com");
        loginReq.setPassword("password123");
        ResultActions result = mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginReq)));
        result.andExpect(status().isOk())
                .andExpect(jsonPath("$.token", not(emptyOrNullString())))
                .andExpect(jsonPath("$.user.email", is("test3@example.com")))
                .andExpect(jsonPath("$.user.role", is("PARENT")));
    }

    @Test
    void login_invalid_credentials() throws Exception {
        AuthController.LoginRequest loginReq = new AuthController.LoginRequest();
        loginReq.setEmail("notfound@example.com");
        loginReq.setPassword("wrong");
        mockMvc.perform(post("/api/auth/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(loginReq)))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.error", containsString("Invalid credentials")));
    }
} 