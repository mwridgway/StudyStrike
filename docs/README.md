# StudyStrike Documentation 📚

Welcome to the StudyStrike documentation! This collection of documents provides comprehensive information about the StudyStrike platform, designed to help gaming students excel academically through gamified learning experiences.

## 📋 Documentation Overview

### **Core System Documentation**

#### [📖 Main README](../README.md)
The primary project overview, including features, installation instructions, and technical details.

#### [🎯 Personas](PERSONAS.md)
Detailed user personas for StudyStrike, focusing on the primary target user: gaming students aged 14-19, with secondary personas for parents/guardians.

#### [💰 Currency System](CURRENCY_SYSTEM.md)
Comprehensive guide to the StudyCoins (SC) system, including earning mechanisms, spending options, and parent controls.

#### [🎮 Quest System](QUEST_SYSTEM.md)
Complete specification for the quest system, including quest creation, frequencies, completion criteria, and parent configuration options.

#### [📚 Subject Management](SUBJECT_MANAGEMENT.md)
Detailed guide to subject configuration, including parent admin interface, quest-subject integration, and academic organization.

#### [📱 Quest UI Specification](QUEST_UI_SPECIFICATION.md)
Comprehensive UI specification for the student quest interface, including component design, user experience flows, and technical implementation.

#### [🔐 Authentication System](AUTHENTICATION.md)
Complete JWT-based authentication system with email/password login, user account management, and parent-child linking.

## 🎯 System Architecture

### **Core Components**

1. **StudyCoins (SC) Currency System**
   - In-game currency earned through academic activities
   - Exchangeable for real-world gaming rewards
   - Parent-controlled reward configuration
   - Comprehensive analytics and tracking

2. **Quest System**
   - Configurable academic challenges
   - Multiple frequencies (Daily, Weekly, Monthly, Term, Annual)
   - Clear completion criteria
   - Subject-specific quests
   - Parent creation and management tools

3. **Subject Management**
   - Parent-configured academic subjects
   - Visual organization with colors and icons
   - Subject-specific goals and rewards
   - Integration with quest system

4. **Student Interface**
   - Gaming-inspired UI design
   - Clear quest display with all relevant details
   - Progress tracking and analytics
   - Mobile-first responsive design

## 🎮 Key Features

### **For Students**
- **StudyCoins (SC)**: Earn in-game currency for gaming rewards
- **Quests**: Engaging academic challenges with clear objectives
- **Progress Tracking**: Visual progress indicators and analytics
- **Reward System**: Exchange SC for Steam wallet, peripherals, game time

### **For Parents/Guardians**
- **Quest Creation**: Customize academic challenges for their child
- **Subject Management**: Configure and organize academic subjects
- **Reward Configuration**: Set up gaming rewards and exchange rates
- **Progress Monitoring**: Track academic performance and quest completion
- **Analytics Dashboard**: Comprehensive insights into learning patterns

## 🔧 Technical Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand / React Context + useReducer
- **Backend**: Spring Boot with Java
- **Database**: PostgreSQL
- **Authentication**: JWT-based authentication (email/password)
- **Build Tool**: Maven

## 📊 Implementation Strategy

### **Phase 1: Core System**
- Basic StudyCoins earning through study sessions
- Simple quest system with daily/weekly quests
- Basic subject management
- Parent approval system

### **Phase 2: Advanced Features**
- Achievement system with SC rewards
- Custom exchange rates and reward configuration
- Advanced analytics and reporting
- Expanded quest types and frequencies

### **Phase 3: Social Features**
- SC gifting between students
- Competitive challenges with SC prizes
- Community marketplace for rewards

## 🎯 Target Users

### **Primary Persona: The Gamer (Thomas, 17)**
- High school student heavily involved in competitive CS2
- Needs motivation to study academic subjects
- Values gaming rewards and achievements
- Requires flexible scheduling around gaming commitments

### **Secondary Persona: The Parent (Michelle, 45)**
- Wants to help child study better
- Needs tools to monitor progress without micromanaging
- Values clear structure and accountability
- Wants to tie academic work to meaningful rewards

## 📈 Success Metrics

### **Student Engagement**
- Daily active users earning StudyCoins
- Average SC earned per study session
- Quest completion rates
- Study session duration and frequency

### **Academic Impact**
- Grade improvement correlation
- Study habit consistency
- Subject performance trends
- Long-term retention rates

### **Parent Satisfaction**
- Reward effectiveness ratings
- Academic improvement satisfaction
- Platform recommendation rates
- Quest completion monitoring success

## 🔗 Quick Links

- **[Main Project README](../README.md)**
- **[Personas](PERSONAS.md)**
- **[Currency System](CURRENCY_SYSTEM.md)**
- **[Quest System](QUEST_SYSTEM.md)**
- **[Subject Management](SUBJECT_MANAGEMENT.md)**
- **[Quest UI Specification](QUEST_UI_SPECIFICATION.md)**
- **[Authentication System](AUTHENTICATION.md)**

---

*This documentation provides a comprehensive guide to the StudyStrike platform, ensuring all stakeholders understand the system's capabilities, implementation strategy, and user experience.* 