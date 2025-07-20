# StudyStrike Authentication System 🔐

## 🎯 Overview

StudyStrike uses a secure, standards-based authentication system built on JSON Web Tokens (JWT). Users register and log in with their email and password. Upon successful login, the backend issues a JWT, which the frontend stores and attaches to all subsequent API requests to access protected resources.

## 🔑 Authentication Flow

### **Registration**
1. User clicks "Sign Up"
2. Enters email, password, and selects account type (Parent or Student)
3. Submits registration form
4. Backend creates user account and (optionally) sends verification email

### **Login**
1. User enters email and password
2. Backend verifies credentials
3. If valid, backend returns a JWT token in the response
4. Frontend stores the JWT (e.g., in memory or localStorage)
5. JWT is sent in the `Authorization: Bearer <token>` header for all protected API requests

### **Protected Endpoints**
- All sensitive endpoints require a valid JWT in the Authorization header
- If the JWT is missing or invalid, the backend returns 401 Unauthorized

### **Logout**
- Frontend deletes the JWT from storage
- User is redirected to the login page

## 👥 User Types & Permissions

### **Student Accounts**
- Register with email and password
- Link to parent/guardian account via invitation
- Permissions: View quests, earn StudyCoins, request rewards

### **Parent/Guardian Accounts**
- Register with email and password
- Manage family groups and invitations
- Permissions: Create/manage quests, configure rewards, view analytics

## 🏠 Family Group System

### **Registration Flow**
1. User clicks "Sign Up"
2. Selects account type: Parent or Student
3. Enters email, password, and profile info
4. Account created with selected role

### **Family Group Creation (Parent)**
1. Parent logs in
2. Navigates to "Family Management"
3. Clicks "Create Family Group"
4. Enters group name and description
5. Family group created with unique identifier
6. Parent can send invitations to children

### **Child Invitation Process**
1. Parent enters child's email address
2. System sends invitation email with secure link
3. Invitation stored in database with unique token
4. Child receives email with invitation details
5. Child clicks invitation link (if already registered)
6. Child logs in and accepts invitation
7. Parent-child relationship established

### **Invitation Acceptance (Child)**
1. Child receives invitation email
2. If not registered: Completes registration process first
3. If already registered: Logs in
4. Navigates to "Invitations" section
5. Views pending invitations
6. Accepts invitation to join family group
7. Parent-child relationship verified and established

## 🔧 Technical Implementation

### **Backend (Spring Boot + JWT)**
- `/api/auth/register` (POST): Register new user (email, password, role)
- `/api/auth/login` (POST): Authenticate user, returns JWT
- `/api/auth/profile` (GET): Get current user profile (JWT required)
- `/api/family/groups` (POST): Create family group (JWT required)
- `/api/family/invitations` (POST): Send invitation (JWT required)
- All protected endpoints require `Authorization: Bearer <jwt>` header

#### **JWT Security Configuration Example**
```java
@Configuration
@EnableWebSecurity
public class SecurityConfig {
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests()
                .requestMatchers("/api/auth/register", "/api/auth/login", "/api/health").permitAll()
                .anyRequest().authenticated()
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            .and()
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
```

#### **JWT Usage**
- On login, backend returns `{ "token": "<jwt>" }`
- Frontend stores token and sends it in `Authorization: Bearer <jwt>` for all protected requests
- Backend validates JWT on every request

### **Frontend (React + JWT)**
- Registration and login forms collect email and password
- On successful login, store JWT (e.g., in localStorage or memory)
- Attach JWT to all API requests in the Authorization header
- Logout clears the JWT and redirects to login

#### **Example Login Request**
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### **Example Authenticated Request**
```http
GET /api/family/groups
Authorization: Bearer <jwt>
```

## 🔒 Security Considerations
- Passwords are hashed and never stored in plain text
- JWTs are signed and have expiration times
- All sensitive endpoints require JWT authentication
- Email verification is recommended for new accounts

## 🎯 Configuration
- No OAuth provider setup required
- Only email/password registration and login
- JWT secret and expiration configured in backend application.yml

---
*The JWT authentication system provides a secure, user-friendly login experience without relying on third-party social providers.* 