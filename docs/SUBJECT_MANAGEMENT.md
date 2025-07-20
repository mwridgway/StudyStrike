# StudyStrike Subject Management System 📚

## 🎯 Overview

The Subject Management System allows parents/guardians to configure their child's academic subjects, set subject-specific goals, and associate quests with particular subjects. This system provides a structured approach to organizing academic work and tracking progress across different subject areas, ensuring comprehensive coverage of all academic disciplines.

## 🏗️ Subject Structure

### **Core Subject Components**
- **Subject Name**: Official academic subject name
- **Subject Code**: Short identifier (e.g., MATH, ENG, SCI)
- **Grade Level**: Current grade/level for the subject
- **Teacher Name**: Subject teacher (optional)
- **Class Schedule**: Days/times when subject is taught
- **Subject Color**: Visual identifier for the subject
- **Subject Icon**: Visual representation (book, calculator, microscope, etc.)

### **Subject Categories**
- **Core Subjects**: Mathematics, English, Science, History
- **Elective Subjects**: Art, Music, Physical Education, Technology
- **Advanced Placement**: AP courses and honors classes
- **Special Programs**: ESL, Special Education, Gifted Programs
- **Extracurricular**: Study groups, tutoring, competitions

## 🎛️ Parent Admin Interface

### **Subject Configuration Dashboard**
- **Add New Subject**: Create new subject entries
- **Edit Existing Subjects**: Modify subject details
- **Subject Status**: Active/Inactive subjects
- **Subject Ordering**: Arrange subjects by priority
- **Bulk Operations**: Add multiple subjects at once

### **Subject Creation Wizard**
```
Step 1: Basic Information
- Subject Name: [Mathematics]
- Subject Code: [MATH]
- Grade Level: [10th Grade]
- Teacher Name: [Ms. Johnson] (optional)

Step 2: Visual Customization
- Subject Color: [Blue]
- Subject Icon: [Calculator]
- Display Name: [Math] (how it appears to student)

Step 3: Academic Settings
- Difficulty Level: [Standard/Advanced/Honors]
- Credit Hours: [1.0]
- Grading Scale: [A-F/Percentage/Pass-Fail]

Step 4: Schedule Information
- Class Days: [Monday, Wednesday, Friday]
- Class Time: [9:00 AM - 10:15 AM]
- Room Number: [Room 205] (optional)
```

### **Subject Management Features**
- **Subject Templates**: Pre-configured common subjects
- **Subject Import**: Import from school systems or CSV
- **Subject Archiving**: Archive completed subjects
- **Subject Duplication**: Copy subjects for multiple children
- **Subject Sharing**: Share subject configurations with other parents

## 📊 Subject-Specific Settings

### **Academic Goals**
- **Grade Targets**: Set target grades for each subject
- **Improvement Goals**: Define improvement targets
- **Study Time Allocation**: Recommended study hours per subject
- **Priority Level**: High/Medium/Low priority subjects

### **Reward Configuration**
- **Subject-Specific Rewards**: Different SC rates per subject
- **Difficulty Multipliers**: Higher rewards for challenging subjects
- **Performance Bonuses**: Extra rewards for exceeding targets
- **Subject Streaks**: Bonus rewards for consistent subject performance

### **Quest Association**
- **Subject Assignment**: Link quests to specific subjects
- **Subject-Specific Quests**: Create quests that only apply to certain subjects
- **Multi-Subject Quests**: Quests that span multiple subjects
- **Subject Rotation**: Automatically rotate quests through subjects

## 🎯 Quest-Subject Integration

### **Quest Creation with Subjects**
```
Quest: Math Problem Solver
Subject: Mathematics
Description: Complete 20 math problems with 90% accuracy
Criteria: Submit completed worksheet with correct answers
Reward: 50 SC
Difficulty: Medium
Frequency: Weekly

Quest: Science Lab Report
Subject: Science
Description: Complete and submit lab report
Criteria: Submit 3-page lab report with proper formatting
Reward: 100 SC
Difficulty: Hard
Frequency: Monthly
```

### **Subject-Based Quest Categories**
- **Daily Subject Quests**: One quest per subject per day
- **Weekly Subject Goals**: Subject-specific weekly objectives
- **Monthly Subject Milestones**: Major subject achievements
- **Term Subject Targets**: Long-term subject goals

### **Subject Performance Tracking**
- **Subject-Specific Analytics**: Track performance per subject
- **Subject Comparison**: Compare performance across subjects
- **Subject Trends**: Monitor improvement over time
- **Subject Weaknesses**: Identify areas needing attention

## 📈 Subject Analytics Dashboard

### **Performance Overview**
- **Subject Grades**: Current grades for all subjects
- **Grade Trends**: Grade progression over time
- **Subject Rankings**: Best to worst performing subjects
- **Improvement Tracking**: Subjects showing most improvement

### **Study Time Analysis**
- **Time per Subject**: Study time allocation across subjects
- **Study Efficiency**: Effectiveness of study time per subject
- **Study Patterns**: When students study each subject
- **Study Gaps**: Subjects receiving insufficient attention

### **Quest Completion by Subject**
- **Quest Success Rate**: Percentage of quests completed per subject
- **Subject Quest Preferences**: Which subjects have most quests
- **Subject Quest Difficulty**: Average difficulty of quests per subject
- **Subject Quest Rewards**: Total SC earned per subject

## 🎨 Visual Subject Organization

### **Subject Dashboard**
- **Subject Cards**: Visual representation of each subject
- **Color Coding**: Different colors for different subjects
- **Progress Indicators**: Visual progress bars per subject
- **Quick Actions**: Fast access to subject-specific features

### **Subject Calendar**
- **Class Schedule**: Visual calendar showing class times
- **Assignment Due Dates**: Subject-specific deadlines
- **Test Dates**: Upcoming tests and exams
- **Study Sessions**: Scheduled study time per subject

### **Subject Reports**
- **Subject Report Cards**: Detailed subject performance reports
- **Subject Progress Charts**: Visual progress tracking
- **Subject Comparison Charts**: Compare multiple subjects
- **Subject Achievement Certificates**: Celebrate subject milestones

## 🔧 Technical Implementation

### **Subject Database Schema**
```java
@Entity
@Table(name = "subjects")
public class Subject {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "parent_id")
    private Parent parent;
    
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;
    
    private String subjectName;
    private String subjectCode;
    private String gradeLevel;
    private String teacherName;
    private String classDays;
    private String classTime;
    private String roomNumber;
    private String subjectColor;
    private String subjectIcon;
    private String difficultyLevel;
    private Double creditHours;
    private String gradingScale;
    private Boolean isActive;
    
    @CreatedDate
    private LocalDateTime createdDate;
    
    @LastModifiedDate
    private LocalDateTime updatedDate;
}

@Entity
@Table(name = "subject_quests")
public class SubjectQuest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    @JoinColumn(name = "subject_id")
    private Subject subject;
    
    @ManyToOne
    @JoinColumn(name = "quest_id")
    private Quest quest;
    
    private Boolean isRequired;
    private Integer questOrder;
    
    @CreatedDate
    private LocalDateTime createdDate;
}
```

### **Subject API Endpoints**
```java
@RestController
@RequestMapping("/api/subjects")
public class SubjectController {
    
    @GetMapping
    public List<Subject> getAllSubjects();
    
    @GetMapping("/{id}")
    public Subject getSubjectById(@PathVariable String id);
    
    @PostMapping
    public Subject createSubject(@RequestBody Subject subject);
    
    @PutMapping("/{id}")
    public Subject updateSubject(@PathVariable String id, @RequestBody Subject subject);
    
    @DeleteMapping("/{id}")
    public void archiveSubject(@PathVariable String id);
    
    @GetMapping("/{id}/quests")
    public List<Quest> getQuestsForSubject(@PathVariable String id);
    
    @PostMapping("/{id}/quests")
    public Quest addQuestToSubject(@PathVariable String id, @RequestBody Quest quest);
}
```

### **Subject Integration**
- **Quest System**: Automatic subject assignment for quests
- **Currency System**: Subject-specific reward calculations
- **Analytics System**: Subject-based performance tracking
- **Notification System**: Subject-specific reminders

## 📋 Subject Configuration Examples

### **Standard High School Subjects**
```
Mathematics (MATH)
- Grade Level: 10th Grade
- Teacher: Ms. Johnson
- Schedule: Mon, Wed, Fri 9:00-10:15
- Color: Blue
- Icon: Calculator
- Difficulty: Standard
- Target Grade: B+

English Literature (ENG)
- Grade Level: 10th Grade
- Teacher: Mr. Smith
- Schedule: Tue, Thu 10:30-11:45
- Color: Green
- Icon: Book
- Difficulty: Standard
- Target Grade: A-

Biology (BIO)
- Grade Level: 10th Grade
- Teacher: Dr. Wilson
- Schedule: Mon, Wed 1:00-2:15
- Color: Purple
- Icon: Microscope
- Difficulty: Standard
- Target Grade: B

World History (HIST)
- Grade Level: 10th Grade
- Teacher: Mrs. Davis
- Schedule: Tue, Thu 2:30-3:45
- Color: Red
- Icon: Globe
- Difficulty: Standard
- Target Grade: B+
```

### **Advanced Placement Subjects**
```
AP Calculus (APCALC)
- Grade Level: 11th Grade
- Teacher: Dr. Brown
- Schedule: Daily 8:00-9:15
- Color: Dark Blue
- Icon: Advanced Calculator
- Difficulty: Advanced
- Target Grade: A-

AP English (APENG)
- Grade Level: 11th Grade
- Teacher: Prof. Miller
- Schedule: Daily 9:30-10:45
- Color: Dark Green
- Icon: Classic Book
- Difficulty: Advanced
- Target Grade: A
```

### **Elective Subjects**
```
Computer Science (CS)
- Grade Level: 10th Grade
- Teacher: Mr. Tech
- Schedule: Fri 1:00-3:00
- Color: Orange
- Icon: Computer
- Difficulty: Standard
- Target Grade: A

Physical Education (PE)
- Grade Level: 10th Grade
- Teacher: Coach Johnson
- Schedule: Tue, Thu 3:00-4:00
- Color: Yellow
- Icon: Sports
- Difficulty: Standard
- Target Grade: Pass
```

## 🎯 Best Practices

### **Subject Organization**
- **Logical Grouping**: Group related subjects together
- **Priority Setting**: Mark high-priority subjects clearly
- **Consistent Naming**: Use consistent naming conventions
- **Regular Updates**: Keep subject information current

### **Quest Distribution**
- **Balanced Coverage**: Ensure all subjects have quests
- **Difficulty Variation**: Mix easy and hard quests per subject
- **Frequency Balance**: Distribute daily/weekly/monthly quests
- **Reward Equity**: Fair reward distribution across subjects

### **Parent Involvement**
- **Regular Review**: Check subject performance monthly
- **Teacher Communication**: Update subject info from teacher feedback
- **Student Input**: Consider student preferences for subject organization
- **Goal Adjustment**: Modify subject goals based on performance

---

*The Subject Management System provides the foundation for organized, subject-specific learning experiences that help students excel in all academic areas.* 