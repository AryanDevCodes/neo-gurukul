# Complete Java Spring Boot Backend Structure

## Project Structure Overview

```
dharma-education-backend/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/dharma/education/
│   │   │       ├── DharmaEducationApplication.java
│   │   │       ├── config/
│   │   │       │   ├── SecurityConfig.java
│   │   │       │   ├── CorsConfig.java
│   │   │       │   ├── JpaConfig.java
│   │   │       │   ├── AwsConfig.java
│   │   │       │   └── SwaggerConfig.java
│   │   │       ├── controller/
│   │   │       │   ├── AuthController.java
│   │   │       │   ├── UserController.java
│   │   │       │   ├── CourseController.java
│   │   │       │   ├── MediaController.java
│   │   │       │   ├── EnrollmentController.java
│   │   │       │   ├── ProgressController.java
│   │   │       │   └── AssessmentController.java
│   │   │       ├── dto/
│   │   │       │   ├── request/
│   │   │       │   │   ├── LoginRequest.java
│   │   │       │   │   ├── RegisterRequest.java
│   │   │       │   │   ├── CourseRequest.java
│   │   │       │   │   └── AssessmentRequest.java
│   │   │       │   └── response/
│   │   │       │       ├── JwtResponse.java
│   │   │       │       ├── UserResponse.java
│   │   │       │       ├── CourseResponse.java
│   │   │       │       └── ProgressResponse.java
│   │   │       ├── entity/
│   │   │       │   ├── User.java
│   │   │       │   ├── Course.java
│   │   │       │   ├── Enrollment.java
│   │   │       │   ├── LearningModule.java
│   │   │       │   ├── StudentProgress.java
│   │   │       │   ├── Assessment.java
│   │   │       │   ├── MediaFile.java
│   │   │       │   └── Achievement.java
│   │   │       ├── repository/
│   │   │       │   ├── UserRepository.java
│   │   │       │   ├── CourseRepository.java
│   │   │       │   ├── EnrollmentRepository.java
│   │   │       │   ├── ProgressRepository.java
│   │   │       │   ├── AssessmentRepository.java
│   │   │       │   └── MediaFileRepository.java
│   │   │       ├── service/
│   │   │       │   ├── AuthService.java
│   │   │       │   ├── UserService.java
│   │   │       │   ├── CourseService.java
│   │   │       │   ├── MediaService.java
│   │   │       │   ├── ProgressService.java
│   │   │       │   ├── AssessmentService.java
│   │   │       │   └── EmailService.java
│   │   │       ├── security/
│   │   │       │   ├── JwtUtils.java
│   │   │       │   ├── JwtAuthenticationFilter.java
│   │   │       │   ├── UserPrincipal.java
│   │   │       │   └── CustomUserDetailsService.java
│   │   │       ├── exception/
│   │   │       │   ├── GlobalExceptionHandler.java
│   │   │       │   ├── ResourceNotFoundException.java
│   │   │       │   ├── BadRequestException.java
│   │   │       │   └── UnauthorizedException.java
│   │   │       └── util/
│   │   │           ├── FileUtils.java
│   │   │           ├── ValidationUtils.java
│   │   │           └── Constants.java
│   │   └── resources/
│   │       ├── application.yml
│   │       ├── application-dev.yml
│   │       ├── application-prod.yml
│   │       └── db/migration/
│   │           ├── V1__Create_users_table.sql
│   │           ├── V2__Create_courses_table.sql
│   │           ├── V3__Create_enrollments_table.sql
│   │           └── V4__Create_media_files_table.sql
│   └── test/
│       └── java/
│           └── com/dharma/education/
│               ├── controller/
│               ├── service/
│               └── repository/
│
├── pom.xml
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Key Dependencies (pom.xml)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.0</version>
        <relativePath/>
    </parent>
    
    <groupId>com.dharma</groupId>
    <artifactId>education-backend</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>
    
    <properties>
        <java.version>17</java.version>
    </properties>
    
    <dependencies>
        <!-- Spring Boot Starters -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
        </dependency>
        
        <!-- Database -->
        <dependency>
            <groupId>org.postgresql</groupId>
            <artifactId>postgresql</artifactId>
            <scope>runtime</scope>
        </dependency>
        
        <!-- JWT -->
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>0.11.5</version>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        
        <!-- AWS SDK -->
        <dependency>
            <groupId>software.amazon.awssdk</groupId>
            <artifactId>s3</artifactId>
            <version>2.20.26</version>
        </dependency>
        
        <!-- Flyway for DB migrations -->
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-core</artifactId>
        </dependency>
        
        <!-- OpenAPI/Swagger -->
        <dependency>
            <groupId>org.springdoc</groupId>
            <artifactId>springdoc-openapi-starter-webmvc-ui</artifactId>
            <version>2.2.0</version>
        </dependency>
        
        <!-- Testing -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        
        <dependency>
            <groupId>org.springframework.security</groupId>
            <artifactId>spring-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        
        <!-- H2 for testing -->
        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>
    
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

## Core Entity Classes

### User.java
```java
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false)
    @Email
    private String email;
    
    @Column(nullable = false)
    @JsonIgnore
    private String password;
    
    @Column(name = "first_name", nullable = false)
    private String firstName;
    
    @Column(name = "last_name", nullable = false)
    private String lastName;
    
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;
    
    @Column(name = "phone_number")
    private String phoneNumber;
    
    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;
    
    @Column(name = "profile_image_url")
    private String profileImageUrl;
    
    @Column(name = "is_active")
    @Builder.Default
    private Boolean isActive = true;
    
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Relationships
    @OneToMany(mappedBy = "teacher", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Course> taughtCourses;
    
    @OneToMany(mappedBy = "student", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Enrollment> enrollments;
    
    public enum Role {
        STUDENT, TEACHER, PARENT, ADMIN
    }
}
```

### Course.java
```java
@Entity
@Table(name = "courses")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "teacher_id")
    private User teacher;
    
    private String category;
    
    @Column(precision = 10, scale = 2)
    @Builder.Default
    private BigDecimal price = BigDecimal.ZERO;
    
    @Column(name = "duration_hours")
    private Integer durationHours;
    
    @Column(name = "difficulty_level")
    @Enumerated(EnumType.STRING)
    private DifficultyLevel difficultyLevel;
    
    @Column(name = "thumbnail_url")
    private String thumbnailUrl;
    
    @Column(name = "is_published")
    @Builder.Default
    private Boolean isPublished = false;
    
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Relationships
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<LearningModule> modules;
    
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Enrollment> enrollments;
    
    @OneToMany(mappedBy = "course", cascade = CascadeType.ALL)
    private List<Assessment> assessments;
    
    public enum DifficultyLevel {
        BEGINNER, INTERMEDIATE, ADVANCED
    }
}
```

## Service Layer Example

### AuthService.java
```java
@Service
@Transactional
@Slf4j
public class AuthService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    
    public AuthService(UserRepository userRepository, 
                      PasswordEncoder passwordEncoder,
                      JwtUtils jwtUtils,
                      AuthenticationManager authenticationManager) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
    }
    
    public JwtResponse login(LoginRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getEmail(), 
                    request.getPassword()
                )
            );
            
            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            String jwt = jwtUtils.generateJwtToken(userPrincipal);
            
            return JwtResponse.builder()
                .token(jwt)
                .type("Bearer")
                .id(userPrincipal.getId())
                .email(userPrincipal.getUsername())
                .role(userPrincipal.getRole().name())
                .build();
                
        } catch (BadCredentialsException e) {
            log.error("Invalid credentials for user: {}", request.getEmail());
            throw new UnauthorizedException("Invalid email or password");
        }
    }
    
    public UserResponse register(RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("Email is already taken!");
        }
        
        User user = User.builder()
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .firstName(request.getFirstName())
            .lastName(request.getLastName())
            .role(User.Role.valueOf(request.getRole().toUpperCase()))
            .build();
            
        User savedUser = userRepository.save(user);
        log.info("New user registered: {}", savedUser.getEmail());
        
        return UserResponse.fromEntity(savedUser);
    }
    
    public void logout(String token) {
        // Add token to blacklist if implementing token blacklisting
        log.info("User logged out");
    }
}
```

## Controller Layer Example

### CourseController.java
```java
@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "*", maxAge = 3600)
@Validated
@Slf4j
public class CourseController {
    
    private final CourseService courseService;
    
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }
    
    @GetMapping
    @Operation(summary = "Get all courses with pagination and filtering")
    public ResponseEntity<Page<CourseResponse>> getAllCourses(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String search) {
        
        Pageable pageable = PageRequest.of(page, size, 
            Sort.by(Sort.Direction.fromString(sortDir), sortBy));
            
        Page<CourseResponse> courses = courseService.getAllCourses(
            pageable, category, search);
            
        return ResponseEntity.ok(courses);
    }
    
    @GetMapping("/{id}")
    @Operation(summary = "Get course by ID")
    public ResponseEntity<CourseResponse> getCourseById(@PathVariable Long id) {
        CourseResponse course = courseService.getCourseById(id);
        return ResponseEntity.ok(course);
    }
    
    @PostMapping
    @PreAuthorize("hasRole('TEACHER') or hasRole('ADMIN')")
    @Operation(summary = "Create a new course")
    public ResponseEntity<CourseResponse> createCourse(
            @Valid @RequestBody CourseRequest request,
            Authentication authentication) {
        
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        CourseResponse course = courseService.createCourse(request, userPrincipal.getId());
        
        return ResponseEntity.status(HttpStatus.CREATED).body(course);
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('TEACHER') or hasRole('ADMIN')")
    @Operation(summary = "Update course")
    public ResponseEntity<CourseResponse> updateCourse(
            @PathVariable Long id,
            @Valid @RequestBody CourseRequest request,
            Authentication authentication) {
        
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        CourseResponse course = courseService.updateCourse(id, request, userPrincipal.getId());
        
        return ResponseEntity.ok(course);
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('TEACHER') or hasRole('ADMIN')")
    @Operation(summary = "Delete course")
    public ResponseEntity<Void> deleteCourse(
            @PathVariable Long id,
            Authentication authentication) {
        
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        courseService.deleteCourse(id, userPrincipal.getId());
        
        return ResponseEntity.noContent().build();
    }
    
    @PostMapping("/{id}/enroll")
    @PreAuthorize("hasRole('STUDENT')")
    @Operation(summary = "Enroll in course")
    public ResponseEntity<EnrollmentResponse> enrollInCourse(
            @PathVariable Long id,
            Authentication authentication) {
        
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        EnrollmentResponse enrollment = courseService.enrollStudent(id, userPrincipal.getId());
        
        return ResponseEntity.ok(enrollment);
    }
}
```

## Security Configuration

### SecurityConfig.java
```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
public class SecurityConfig {
    
    private final CustomUserDetailsService userDetailsService;
    private final JwtAuthenticationEntryPoint unauthorizedHandler;
    
    public SecurityConfig(CustomUserDetailsService userDetailsService,
                         JwtAuthenticationEntryPoint unauthorizedHandler) {
        this.userDetailsService = userDetailsService;
        this.unauthorizedHandler = unauthorizedHandler;
    }
    
    @Bean
    public JwtAuthenticationFilter jwtAuthenticationFilter() {
        return new JwtAuthenticationFilter();
    }
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable()
            .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers("/api/courses/public/**").permitAll()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/courses/**").permitAll()
                .anyRequest().authenticated()
            );
        
        http.addFilterBefore(jwtAuthenticationFilter(), UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
}
```

## Database Migration Scripts

### V1__Create_users_table.sql
```sql
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('STUDENT', 'TEACHER', 'PARENT', 'ADMIN')),
    phone_number VARCHAR(20),
    date_of_birth DATE,
    profile_image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_created_at ON users(created_at);
```

### V2__Create_courses_table.sql
```sql
CREATE TABLE courses (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    teacher_id BIGINT REFERENCES users(id) ON DELETE SET NULL,
    category VARCHAR(100),
    price DECIMAL(10,2) DEFAULT 0,
    duration_hours INTEGER,
    difficulty_level VARCHAR(50) CHECK (difficulty_level IN ('BEGINNER', 'INTERMEDIATE', 'ADVANCED')),
    thumbnail_url VARCHAR(500),
    is_published BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_courses_teacher ON courses(teacher_id);
CREATE INDEX idx_courses_category ON courses(category);
CREATE INDEX idx_courses_published ON courses(is_published);
CREATE INDEX idx_courses_created_at ON courses(created_at);
```

## Deployment Configuration

### Dockerfile
```dockerfile
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY target/education-backend-1.0.0.jar app.jar

EXPOSE 8080

ENV SPRING_PROFILES_ACTIVE=prod

ENTRYPOINT ["java", "-jar", "app.jar"]
```

### docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=docker
      - DATABASE_URL=jdbc:postgresql://db:5432/dharma_education
      - DB_USERNAME=postgres
      - DB_PASSWORD=password
    depends_on:
      - db
    networks:
      - dharma-network

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB=dharma_education
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - dharma-network

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - dharma-network

volumes:
  postgres_data:

networks:
  dharma-network:
    driver: bridge
```

## API Documentation

The backend includes comprehensive API documentation using OpenAPI 3.0 (Swagger). Access it at:
- Development: `http://localhost:8080/swagger-ui/index.html`
- Production: `https://your-api-domain.com/swagger-ui/index.html`

## Testing Strategy

### Unit Tests
- Repository layer tests with @DataJpaTest
- Service layer tests with Mockito
- Controller tests with @WebMvcTest

### Integration Tests
- Full application context tests with @SpringBootTest
- Database integration tests with TestContainers
- Security integration tests

### Performance Tests
- Load testing with JMeter
- Database performance optimization
- Caching strategy validation

## Monitoring and Observability

### Spring Boot Actuator
- Health checks
- Metrics collection
- Application monitoring

### Logging
- Structured logging with Logback
- Log aggregation with ELK stack
- Error tracking with Sentry

This comprehensive Java backend structure provides a solid foundation for your academic project, incorporating industry best practices, security, scalability, and maintainability.