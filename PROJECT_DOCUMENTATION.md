# Dharma Education Platform - Comprehensive Documentation

## 🚀 Project Overview

The Dharma Education Platform is a comprehensive digital learning ecosystem focused on traditional Indian education, Sanskrit studies, philosophy, and spiritual wisdom. It combines modern educational technology with ancient knowledge systems to create an immersive learning experience.

## 📚 Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Components](#components)
- [API Integration](#api-integration)
- [Educational Tools](#educational-tools)
- [User Roles](#user-roles)
- [Deployment](#deployment)

## 🛠 Tech Stack

### Frontend Technologies
- **React 18.3.1** - Modern JavaScript library for building user interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React Router DOM 6.26.2** - Client-side routing for single-page applications

### UI Framework & Components
- **shadcn/ui** - Modern, accessible React component library
- **Radix UI** - Low-level UI primitives for building design systems
- **Lucide React** - Beautiful & consistent icon library
- **Framer Motion 12.23.12** - Production-ready motion library for React

### State Management & Data
- **React Context API** - Built-in state management for authentication
- **React Hook Form 7.53.0** - Performant forms with easy validation
- **Zod 3.23.8** - TypeScript-first schema validation

### Styling & Design
- **Google Fonts Integration** - Inter, JetBrains Mono, Noto Sans Devanagari
- **Custom Design System** - Educational platform specific color palette
- **Dark/Light Mode** - Automatic theme switching with system preference
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

### Backend Integration
- **Java Spring Boot Backend** - RESTful API services
- **MySQL Database** - Relational database for data persistence
- **JWT Authentication** - Secure token-based authentication
- **Flyway Migration** - Database version control

### Development Tools
- **ESLint** - Code linting and formatting
- **Bun/npm** - Package management
- **Vite Plugin React SWC** - Fast refresh and compilation
- **TypeScript Config** - Strict type checking configuration

## ✨ Features

### Core Educational Features
1. **Interactive Learning Modules**
   - Sanskrit language learning with Devanagari script support
   - Ancient text studies (Bhagavad Gita, Upanishads, Vedas)
   - Philosophy and ethical teachings
   - Yoga and meditation practices
   - Ayurveda and traditional medicine

2. **Advanced Assessment System**
   - Interactive quiz builder with multiple question types
   - Automatic grading and instant feedback
   - Progress tracking and analytics
   - Adaptive difficulty based on performance

3. **Virtual Classroom Environment**
   - Live video conferencing for remote learning
   - Real-time collaboration tools
   - Screen sharing and interactive whiteboard
   - File sharing and resource management

4. **Intelligent Study Planner**
   - AI-powered study schedule optimization
   - Goal setting and progress tracking
   - Personalized learning paths
   - Performance analytics and insights

### User Management
- **Multi-role Authentication** (Student, Teacher, Parent, Admin)
- **Profile Management** with specialized dashboards
- **Progress Tracking** across all learning activities
- **Achievement System** with badges and certifications

### Content Management
- **Knowledge Repository** with searchable ancient texts
- **Audio-Visual Resources** for pronunciation and meditation
- **Modern Commentary** connecting ancient wisdom to contemporary life
- **Multilingual Support** with Sanskrit, English, and regional languages

### Community Features
- **Discussion Forums** for academic discourse
- **Teacher Directory** with specialization filters
- **Parent Dashboard** for monitoring child progress
- **Community Hub** for cultural events and discussions

## 🏗 Architecture

### Frontend Architecture
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── enhanced/        # Custom educational components
│   ├── student/         # Student-specific components
│   ├── teacher/         # Teacher-specific components
│   └── knowledge/       # Knowledge base components
├── pages/               # Route-based page components
├── contexts/            # React Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and API clients
└── assets/              # Static assets and images
```

### Backend Architecture
```
dharma-education-backend/
├── src/main/java/com/dharma/education/
│   ├── controller/      # REST API endpoints
│   ├── service/         # Business logic layer
│   ├── repository/      # Data access layer
│   ├── entity/          # JPA entities
│   ├── dto/             # Data transfer objects
│   ├── security/        # JWT and authentication
│   └── config/          # Spring configuration
└── src/main/resources/
    ├── db/migration/    # Flyway database migrations
    └── application.yml  # Application configuration
```

### Database Schema
- **users** - User authentication and profile information
- **courses** - Course catalog and metadata
- **enrollments** - Student course enrollments and progress
- **learning_modules** - Individual learning units within courses
- **assessments** - Quizzes, tests, and evaluation tools
- **student_progress** - Detailed progress tracking
- **media_files** - Educational content and resources

## 🚀 Installation

### Prerequisites
- Node.js 18+ (recommended: use nvm)
- Java 17+ (for backend)
- MySQL 8.0+
- Git

### Frontend Setup
```bash
# Clone the repository
git clone <repository-url>
cd dharma-education-platform

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup
```bash
# Navigate to backend directory
cd dharma-education-backend

# Run with Maven
./mvnw spring-boot:run

# Or with Docker
docker-compose up
```

### Environment Configuration
Create environment files:

**.env.local** (Frontend)
```
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_NAME=Dharma Education Platform
```

**application.yml** (Backend)
```yaml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/dharma_education
    username: ${DB_USERNAME:root}
    password: ${DB_PASSWORD:password}
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
```

## 🎨 Components

### Core UI Components (shadcn/ui)
- **Card** - Content containers with consistent styling
- **Button** - Interactive elements with multiple variants
- **Input/Form** - Form controls with validation
- **Dialog/Modal** - Overlay components for focused interactions
- **Navigation** - Breadcrumbs, menus, and navigation elements
- **Data Display** - Tables, badges, progress indicators

### Educational Components
- **QuizBuilder** - Interactive assessment creation tool
- **StudyPlanner** - Personalized learning schedule management
- **VirtualClassroom** - Live video conferencing interface
- **KnowledgeBase** - Searchable ancient text repository
- **ProgressTracker** - Visual progress and achievement display

### Layout Components
- **ResponsiveHeader** - Adaptive navigation header
- **ThemeProvider** - Dark/light mode management
- **ProtectedRoute** - Role-based access control
- **LoadingSpinner** - Async operation feedback

## 🔗 API Integration

### Authentication Endpoints
```typescript
POST /api/auth/login    # User authentication
POST /api/auth/register # User registration
POST /api/auth/logout   # Session termination
GET  /api/auth/me       # Current user profile
```

### Course Management
```typescript
GET    /api/courses         # List all courses
GET    /api/courses/:id     # Get course details
POST   /api/courses         # Create new course
PUT    /api/courses/:id     # Update course
DELETE /api/courses/:id     # Delete course
POST   /api/courses/:id/enroll # Enroll in course
```

### User Management
```typescript
GET    /api/users           # List users (admin only)
GET    /api/users/:id       # Get user profile
PUT    /api/users/:id       # Update user profile
GET    /api/users/:id/progress # Get learning progress
```

### Assessment System
```typescript
GET    /api/assessments     # List assessments
POST   /api/assessments     # Create assessment
GET    /api/assessments/:id/results # Get results
POST   /api/assessments/:id/submit  # Submit answers
```

## 🎓 Educational Tools

### 1. Interactive Quiz Builder
**Features:**
- Multiple question types (Multiple choice, True/False, Short answer, Essay)
- Automatic grading with instant feedback
- Time limits and attempt restrictions
- Analytics and performance tracking
- Multimedia support (images, audio, video)

**Usage:**
```typescript
// Create a new quiz
const quiz = {
  title: "Sanskrit Grammar Basics",
  questions: [
    {
      type: "multiple-choice",
      question: "What is the Sanskrit word for 'knowledge'?",
      options: ["Vidya", "Dharma", "Karma", "Moksha"],
      correctAnswer: "Vidya"
    }
  ]
};
```

### 2. AI-Powered Study Planner
**Features:**
- Personalized study schedules based on learning goals
- Progress tracking with visual indicators
- Adaptive scheduling based on performance
- Goal setting and milestone tracking
- Integration with calendar systems

**Components:**
- Weekly calendar view with task visualization
- Progress tracking with percentage completion
- Priority-based task organization
- Focus time tracking and productivity metrics

### 3. Virtual Classroom
**Features:**
- HD video conferencing for up to 50 participants
- Screen sharing and presentation tools
- Interactive whiteboard with drawing tools
- Breakout rooms for group activities
- Recording and playback capabilities
- Real-time chat and Q&A

**Technical Implementation:**
- WebRTC for peer-to-peer video communication
- Socket.io for real-time messaging
- Canvas API for whiteboard functionality
- File upload and sharing system

### 4. Knowledge Repository
**Features:**
- Searchable database of ancient texts
- Sanskrit-English translations
- Audio pronunciation guides
- Commentary and interpretations
- Cross-references and related content

**Content Categories:**
- **Vedas** - Ancient Sanskrit texts
- **Upanishads** - Philosophical treatises
- **Puranas** - Mythological and historical texts
- **Dharma Shastras** - Legal and ethical codes
- **Kavya** - Classical Sanskrit poetry

## 👥 User Roles

### Student Role
**Permissions:**
- Access enrolled courses and materials
- Take assessments and view results
- Participate in virtual classrooms
- Track personal learning progress
- Interact with community forums

**Dashboard Features:**
- Course progress overview
- Upcoming assignments and deadlines
- Achievement badges and certificates
- Study streak tracking
- Personalized recommendations

### Teacher Role
**Permissions:**
- Create and manage courses
- Design assessments and quizzes
- Conduct virtual classroom sessions
- Monitor student progress
- Grade assignments and provide feedback

**Dashboard Features:**
- Course management interface
- Student progress analytics
- Teaching resource library
- Class scheduling calendar
- Communication tools

### Parent Role
**Permissions:**
- Monitor child's learning progress
- View attendance and participation
- Access progress reports
- Communicate with teachers
- Set learning goals and restrictions

**Dashboard Features:**
- Child progress overview
- Performance analytics
- Communication center
- Goal setting interface
- Attendance tracking

### Admin Role
**Permissions:**
- System-wide configuration
- User management (all roles)
- Content moderation
- Platform analytics
- Technical support access

**Dashboard Features:**
- System health monitoring
- User activity analytics
- Content management tools
- Security configuration
- Backup and maintenance

## 🎨 Design System

### Color Palette
**Primary Colors:**
- Primary Blue: `hsl(210, 98%, 45%)` - Main interactive elements
- Success Green: `hsl(142, 76%, 36%)` - Positive feedback and progress
- Warning Orange: `hsl(38, 92%, 50%)` - Attention and warnings
- Info Cyan: `hsl(196, 93%, 56%)` - Informational content
- Knowledge Purple: `hsl(263, 85%, 55%)` - Learning and wisdom themes

**Semantic Colors:**
- Background: Adaptive based on theme
- Foreground: High contrast text
- Muted: Secondary text and disabled states
- Border: Subtle element separation
- Accent: Highlight and emphasis

### Typography
**Font Families:**
- **Inter** - Primary UI font (clean, modern)
- **JetBrains Mono** - Code and technical content
- **Noto Sans Devanagari** - Sanskrit and Hindi text

**Type Scale:**
- Headings: 2.5rem, 2rem, 1.5rem, 1.25rem
- Body: 1rem (16px) base with 1.5 line height
- Small: 0.875rem for secondary information
- Code: Monospace with adjusted spacing

### Component Styling
**Cards:**
- Subtle shadows with border radius
- Glass-morphism effects for modern appearance
- Hover animations with scale and glow effects

**Buttons:**
- Multiple variants (primary, secondary, outline, ghost)
- Consistent padding and transition animations
- Loading states with spinners

**Forms:**
- Clear labeling and error messaging
- Consistent input styling across components
- Validation feedback with color coding

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
# Build the application
npm run build

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
npx netlify deploy --prod --dir=dist
```

### Backend Deployment (Docker)
```dockerfile
FROM openjdk:17-jdk-slim
COPY target/dharma-education-*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]
```

### Database Setup (Production)
```sql
-- Create database
CREATE DATABASE dharma_education;

-- Create user
CREATE USER 'dharma_user'@'%' IDENTIFIED BY 'secure_password';
GRANT ALL PRIVILEGES ON dharma_education.* TO 'dharma_user'@'%';
FLUSH PRIVILEGES;
```

### Environment Variables (Production)
```bash
# Backend
SPRING_PROFILES_ACTIVE=production
DATABASE_URL=mysql://user:pass@host:port/database
JWT_SECRET=your-secret-key
CORS_ALLOWED_ORIGINS=https://yourdomain.com

# Frontend
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_ENV=production
```

## 📊 Performance Optimization

### Frontend Optimizations
- **Code Splitting** - Route-based lazy loading
- **Tree Shaking** - Unused code elimination
- **Image Optimization** - WebP format with lazy loading
- **Caching** - Service worker for offline functionality
- **Bundle Analysis** - Regular bundle size monitoring

### Backend Optimizations
- **Database Indexing** - Optimized queries for frequent operations
- **Caching** - Redis for session and data caching
- **Connection Pooling** - Efficient database connection management
- **API Rate Limiting** - Protection against abuse
- **Compression** - GZIP response compression

## 🔒 Security Features

### Authentication & Authorization
- **JWT Tokens** - Secure, stateless authentication
- **Role-Based Access Control** - Granular permission system
- **Password Hashing** - BCrypt with salt
- **Session Management** - Secure token refresh mechanism

### Data Protection
- **Input Validation** - Server-side validation for all inputs
- **SQL Injection Prevention** - Parameterized queries
- **XSS Protection** - Content sanitization
- **CSRF Protection** - Token-based request verification

### Privacy Compliance
- **Data Minimization** - Collect only necessary information
- **Encryption** - Sensitive data encryption at rest
- **Audit Logging** - Track data access and modifications
- **User Consent** - Clear privacy policy and consent management

## 📈 Analytics & Monitoring

### Learning Analytics
- **Progress Tracking** - Detailed learning path analytics
- **Performance Metrics** - Quiz scores, completion rates
- **Engagement Analytics** - Time spent, feature usage
- **Learning Outcomes** - Goal achievement tracking

### System Monitoring
- **Application Performance** - Response time monitoring
- **Error Tracking** - Automated error reporting
- **User Activity** - Session tracking and user journey analysis
- **Resource Usage** - Server performance metrics

## 🤝 Contributing

### Development Guidelines
1. **Code Style** - Follow ESLint and Prettier configurations
2. **Commit Messages** - Use conventional commit format
3. **Testing** - Write unit tests for new features
4. **Documentation** - Update docs with new features
5. **Review Process** - All changes require peer review

### Feature Request Process
1. Create issue with feature template
2. Discuss implementation approach
3. Create development branch
4. Implement with tests
5. Submit pull request
6. Code review and merge

## 📞 Support & Contact

### Technical Support
- **Documentation** - Comprehensive guides and API references
- **Community Forum** - Peer-to-peer support
- **Email Support** - support@dharma-education.com
- **Video Tutorials** - Step-by-step feature guides

### Educational Support
- **Teacher Training** - Platform usage workshops
- **Curriculum Guidance** - Ancient text study programs
- **Content Review** - Academic accuracy verification
- **Cultural Consultation** - Traditional practice guidance

---

## 📝 Changelog

### Version 1.0.0 (Current)
- ✅ Complete authentication system
- ✅ Multi-role user management
- ✅ Course creation and enrollment
- ✅ Interactive quiz builder
- ✅ Virtual classroom functionality
- ✅ Knowledge repository
- ✅ Progress tracking system
- ✅ Responsive design with dark mode

### Upcoming Features (v1.1.0)
- 🔄 AI-powered learning recommendations
- 🔄 Advanced analytics dashboard
- 🔄 Mobile application (React Native)
- 🔄 Offline content synchronization
- 🔄 Multi-language interface support
- 🔄 Integration with external LMS platforms

---

*This documentation is continuously updated to reflect the latest features and improvements in the Dharma Education Platform. For the most current information, please refer to the official repository.*