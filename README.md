# StudyStrike 🎮📚

A gamified learning platform that motivates students to complete academic tasks by earning StudyCoins (SC) that can be spent on real-world gaming rewards.

## 🏗️ Project Structure

```
StudyStrike/
├── frontend/                 # React.js + TypeScript frontend
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   ├── store/           # Zustand state management
│   │   ├── types/           # TypeScript type definitions
│   │   └── utils/           # Utility functions
│   ├── package.json         # Frontend dependencies
│   └── tsconfig.json        # TypeScript configuration
├── backend/                  # Spring Boot + Java backend
│   ├── src/main/java/com/studystrike/
│   │   ├── controller/      # REST API controllers
│   │   ├── service/         # Business logic services
│   │   ├── repository/      # Data access layer
│   │   ├── entity/          # JPA entity classes
│   │   ├── config/          # Spring configuration
│   │   └── dto/             # Data transfer objects
│   ├── pom.xml              # Maven dependencies
│   └── application.yml      # Spring Boot configuration
└── docs/                    # Project documentation
```

## 🚀 Quick Start

### Prerequisites

#### Windows Installation Guide

**1. Node.js (v16+) and npm**
- Download from: https://nodejs.org/
- Choose the LTS version (recommended)
- Run the installer and follow the setup wizard
- Verify installation:
  ```powershell
  node --version
  npm --version
  ```

**2. Java (v17+) and Maven**
- Download OpenJDK 17 from: https://adoptium.net/
- Run the installer and follow the setup wizard
- Download Maven from: https://maven.apache.org/download.cgi
- Extract to `C:\Program Files\Apache\maven` or your preferred location
- Add Maven to PATH environment variable:
  ```powershell
  # Add to user PATH (replace with your Maven path)
  [Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Program Files\Apache\maven\bin", "User")
  ```
- Verify installation:
  ```powershell
  java --version
  mvn --version
  ```

**3. PostgreSQL (v12+)**
- Download from: https://www.postgresql.org/download/windows/
- Run the installer and follow the setup wizard
- Remember the password you set for the postgres user
- Verify installation:
  ```powershell
  psql --version
  ```

**Alternative: Using Chocolatey Package Manager**
If you have Chocolatey installed:
```powershell
# Install Chocolatey first (run as Administrator)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install prerequisites
choco install nodejs
choco install openjdk17
choco install maven
choco install postgresql
```

**Alternative: Using Windows Subsystem for Linux (WSL)**
If you prefer using WSL:
```bash
# Install WSL2 first, then:
sudo apt update
sudo apt install nodejs npm
sudo apt install openjdk-17-jdk
sudo apt install maven
sudo apt install postgresql postgresql-contrib
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

1. **Database Setup**
   ```sql
   CREATE DATABASE studystrike;
   ```

2. **Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   MAIL_USERNAME=your-email@gmail.com
   MAIL_PASSWORD=your-app-password
   JWT_SECRET=your-jwt-secret
   JWT_EXPIRATION_MS=86400000
   ```

3. **Run Backend**
   ```bash
   cd backend
   mvn spring-boot:run
   ```

The backend will run on `http://localhost:8080`

### Troubleshooting Common Windows Issues

**Node.js Issues:**
- If `node` or `npm` commands are not recognized, restart your terminal/PowerShell
- If you get permission errors, run PowerShell as Administrator
- If npm install fails, try: `npm cache clean --force`

**Java/Maven Issues:**
- If `java` command not found, check JAVA_HOME environment variable
- If `mvn` command not found, verify Maven is in your PATH
- If Maven download fails, check your firewall/proxy settings

**PostgreSQL Issues:**
- If `psql` command not found, add PostgreSQL bin directory to PATH
- Default PostgreSQL bin path: `C:\Program Files\PostgreSQL\[version]\bin`
- If connection fails, check if PostgreSQL service is running:
  ```powershell
  Get-Service postgresql*
  Start-Service postgresql*
  ```

**Port Conflicts:**
- If port 3000 is in use: `netstat -ano | findstr :3000`
- If port 8080 is in use: `netstat -ano | findstr :8080`
- Kill process: `taskkill /PID [process_id] /F`

**Firewall Issues:**
- Allow Node.js and Java through Windows Firewall
- Check antivirus software isn't blocking the applications

## 🎯 Key Features

### 🔐 Authentication & User Management
- **JWT Authentication**: Secure login with email and password
- **User Registration**: Parent and Student account types
- **Family Group System**: Secure parent-child linking via email invitations
- **Email Verification**: Verified email addresses for invitation system

### 👨‍👩‍👧‍👦 Family Management
- **Family Group Creation**: Parents create family groups with unique codes
- **Child Invitations**: Secure email-based invitation system
- **Invitation Management**: Students can accept/decline invitations
- **Access Control**: Only invited users can join family groups

### 🎮 Gamification System
- **StudyCoins (SC)**: In-game currency earned through quest completion
- **Quest System**: Configurable tasks with clear completion criteria
- **Subject Management**: Parents configure academic subjects
- **Reward System**: Real-world gaming rewards for StudyCoins

### 📊 Quest Management
- **Quest Frequencies**: Daily, Weekly, Monthly, Term, Annual
- **Subject Association**: Each quest linked to specific subjects
- **Progress Tracking**: Real-time quest completion status
- **Parent Configuration**: Full control over quest creation and rewards

## 🛠️ Technology Stack

### Frontend
- **React.js** with TypeScript
- **Tailwind CSS** for styling
- **Zustand** for state management
- **React Router** for navigation
- **Axios** for API communication

### Backend
- **Spring Boot** 3.1.0 with Java 17
- **Spring Security** with OAuth 2.0
- **Spring Data JPA** for data persistence
- **PostgreSQL** database
- **Maven** build tool

### Authentication
- **JWT** tokens for session management
- **Email verification** system
- **Secure invitation** tokens

## 📁 Documentation

- [Personas](./docs/PERSONAS.md) - User personas and requirements
- [Currency System](./docs/CURRENCY_SYSTEM.md) - StudyCoins implementation
- [Quest System](./docs/QUEST_SYSTEM.md) - Quest management features
- [Subject Management](./docs/SUBJECT_MANAGEMENT.md) - Academic subject configuration
- [Authentication](./docs/AUTHENTICATION.md) - OAuth and security implementation

## 🔒 Security & Privacy

- **GDPR Compliance**: Data protection and user rights
- **COPPA Compliance**: Child privacy protection
- **Secure OAuth**: Industry-standard authentication
- **Email Verification**: Verified user accounts
- **Invitation Security**: Secure token-based invitations

## 🚧 Development Status

- ✅ Project structure setup
- ✅ Frontend React + TypeScript foundation
- ✅ Backend Spring Boot + JPA entities
- ✅ Authentication system design
- ✅ Family group management system
- 🔄 OAuth provider configuration
- 🔄 Database schema implementation
- 🔄 API endpoint development
- 🔄 Frontend-backend integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. 