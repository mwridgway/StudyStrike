# StudyStrike 📚⚡

A modern, interactive study application designed to help students and learners maximize their productivity and retention through gamified learning experiences.

## 🎯 About

StudyStrike is an innovative study platform designed specifically for students who love gaming. By combining proven learning techniques with familiar gaming mechanics, StudyStrike makes studying engaging and rewarding. Earn points for study sessions, unlock achievements, and exchange your progress for gaming rewards like Steam wallet funds, peripherals, and game time. Whether you're a competitive gamer balancing school and esports, or just want to make homework more enjoyable, StudyStrike provides the motivation and tools you need to succeed academically.

## ✨ Features

### 🎮 Gaming-Inspired Learning
- **StudyCoins (SC)**: Earn in-game currency for gaming rewards (Steam wallet, peripherals, game time)
- **Progress Levels**: Work through different achievement tiers
- **Quests**: Daily/weekly/monthly challenges with rewards
- **Achievement System**: Unlock badges and rewards for academic goals
- **Group Study Sessions**: Study with friends in team mode



### 🎯 Smart Features
- **Progress Analytics**: Detailed insights into your learning patterns
- **Subject Management**: Organize studies across different academic subjects
- **Parent Dashboard**: Monitor progress and set up reward systems
- **Quest System**: Configurable daily/weekly/monthly learning objectives

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Java 17 or higher
- Maven 3.6 or higher
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/StudyStrike.git
   cd StudyStrike
   ```

2. **Start the backend server**
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   The backend will start on `http://localhost:8080`

3. **Start the frontend development server**
   ```bash
   cd frontend
   npm install
   npm start
   ```
   The frontend will start on `http://localhost:3000`

4. **Open your browser**
   Navigate to `http://localhost:3000` to start using StudyStrike!

## 🛠️ Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand / React Context + useReducer
- **Backend**: Spring Boot with Java
- **Database**: H2 (local development)
- **Authentication**: JWT
- **Build Tool**: Maven

## 📁 Project Structure

```
StudyStrike/
├── frontend/          # React TypeScript application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API and external services
│   │   ├── store/         # State management (Zustand stores)
│   │   ├── types/         # TypeScript type definitions
│   │   └── utils/         # Utility functions
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
├── backend/           # Spring Boot Java application
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/      # Java source code
│   │   │   └── resources/ # Configuration files
│   │   └── test/          # Java tests
│   └── pom.xml            # Maven dependencies
├── docs/              # Documentation
└── README.md          # Project overview
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style and conventions
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by effective learning techniques and gamification principles
- Built with modern web technologies for optimal performance
- Community-driven development and feedback

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/StudyStrike/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/StudyStrike/discussions)
- **Email**: support@studystrike.com

## 🗺️ Roadmap

- [ ] Mobile app development
- [ ] Advanced quest analytics dashboard
- [ ] Social learning features and leaderboards
- [ ] Integration with school learning management systems
- [ ] Offline study mode
- [ ] Multi-language support
- [ ] Advanced reward marketplace

---

**Made with ❤️ for learners everywhere**

*StudyStrike - Strike through your study goals!* 