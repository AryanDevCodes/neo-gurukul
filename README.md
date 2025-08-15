# 🕉️ Dharma Education Platform

## 📚 Project Overview

A comprehensive digital learning ecosystem focused on traditional Indian education, Sanskrit studies, philosophy, and spiritual wisdom. This platform combines cutting-edge educational technology with ancient knowledge systems to create an immersive learning experience.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (recommended: use nvm)
- Java 17+ (for backend)
- MySQL 8.0+

### Frontend Setup
```bash
# Clone the repository
git clone <YOUR_GIT_URL>
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

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Modern component library

### Backend
- **Java Spring Boot** - Enterprise framework
- **MySQL** - Relational database
- **JWT** - Secure authentication
- **Flyway** - Database migrations

### Additional Technologies
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Radix UI** - Accessible primitives
- **Lucide Icons** - Beautiful icon set

## ✨ Key Features

### 🎓 Educational Tools
- **Interactive Quiz Builder** - Create assessments with multiple question types
- **AI Study Planner** - Personalized learning schedules
- **Virtual Classroom** - Live video sessions with collaboration tools
- **Knowledge Repository** - Searchable ancient texts and resources

### 👥 User Management
- **Multi-role System** - Students, Teachers, Parents, Admins
- **Progress Tracking** - Comprehensive learning analytics
- **Achievement System** - Badges and certifications
- **Community Hub** - Forums and discussions

### 📱 Modern Features
- **Responsive Design** - Works on all devices
- **Dark/Light Mode** - Automatic theme switching
- **Offline Support** - Progressive Web App capabilities
- **Multilingual** - Sanskrit, English, and regional languages

## 🏗️ Architecture

### Frontend Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── enhanced/        # Educational tools
│   ├── student/         # Student features
│   ├── teacher/         # Teacher features
│   └── knowledge/       # Content components
├── pages/               # Route components
├── contexts/            # State management
├── hooks/               # Custom hooks
└── lib/                 # Utilities
```

### Backend Structure
```
dharma-education-backend/
├── controller/          # REST endpoints
├── service/            # Business logic
├── repository/         # Data access
├── entity/             # Database models
├── security/           # Authentication
└── config/             # Spring configuration
```

## 🔧 Development

### Environment Setup
Create `.env.local`:
```bash
VITE_API_BASE_URL=http://localhost:8080/api
VITE_APP_NAME=Dharma Education Platform
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📖 Documentation

For comprehensive documentation, see [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md) which includes:
- Detailed feature specifications
- API documentation
- Deployment guides
- Security considerations
- Performance optimization

## 🚀 Deployment

### Quick Deploy with Lovable
Simply open [Lovable](https://lovable.dev/projects/c0e36e6f-d079-49cc-84ce-491d006d1807) and click Share → Publish.

### Manual Deployment
- **Frontend**: Vercel, Netlify, or any static hosting
- **Backend**: Docker, AWS, or cloud platforms
- **Database**: MySQL on cloud or self-hosted

### Custom Domain
Navigate to Project → Settings → Domains in Lovable to connect your domain.

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 🌟 Features in Detail

### Quiz Builder
- Multiple question types (MCQ, True/False, Short Answer, Essay)
- Automatic grading with instant feedback
- Progress tracking and analytics
- Time limits and attempt restrictions

### Study Planner
- AI-powered schedule optimization
- Goal setting and milestone tracking
- Visual progress indicators
- Calendar integration

### Virtual Classroom
- HD video conferencing
- Screen sharing and whiteboard
- Real-time chat and Q&A
- File sharing and resources

### Knowledge Base
- Ancient Sanskrit texts with translations
- Audio pronunciation guides
- Modern commentary and interpretations
- Advanced search capabilities

## 📊 Analytics & Insights

The platform provides comprehensive analytics for:
- Learning progress and performance
- Engagement metrics and time tracking
- Quiz results and improvement areas
- Community participation and discussions

## 🔐 Security

- JWT-based authentication
- Role-based access control
- Data encryption and privacy protection
- Regular security audits and updates

## 📱 Mobile Support

- Responsive design for all screen sizes
- Touch-optimized interactions
- Progressive Web App capabilities
- Offline content synchronization

## 🌍 Internationalization

- Sanskrit with Devanagari script support
- English and regional language support
- Cultural adaptation for different regions
- Right-to-left language support (future)

## 📞 Support

- **Documentation**: Comprehensive guides and tutorials
- **Community**: Active forums and discussions
- **Email**: support@dharma-education.com
- **Video Tutorials**: Step-by-step feature guides

---

**Built with ❤️ for preserving and sharing ancient wisdom through modern technology**
