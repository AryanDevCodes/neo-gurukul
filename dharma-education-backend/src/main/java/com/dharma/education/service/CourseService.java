package com.dharma.education.service;

import com.dharma.education.dto.request.CourseRequest;
import com.dharma.education.dto.response.CourseResponse;
import com.dharma.education.entity.Course;
import com.dharma.education.entity.Enrollment;
import com.dharma.education.entity.User;
import com.dharma.education.exception.BadRequestException;
import com.dharma.education.exception.ResourceNotFoundException;
import com.dharma.education.repository.CourseRepository;
import com.dharma.education.repository.EnrollmentRepository;
import com.dharma.education.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class CourseService {
    
    private final CourseRepository courseRepository;
    private final UserRepository userRepository;
    private final EnrollmentRepository enrollmentRepository;
    
    public Page<CourseResponse> getAllCourses(Pageable pageable, String category, String search) {
        Page<Course> courses = courseRepository.findActiveCoursesWithFilters(category, search, pageable);
        return courses.map(CourseResponse::fromEntity);
    }
    
    public CourseResponse getCourseById(Long id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found with id: " + id));
        return CourseResponse.fromEntity(course);
    }
    
    public CourseResponse createCourse(CourseRequest request, Long teacherId) {
        User teacher = userRepository.findById(teacherId)
                .orElseThrow(() -> new ResourceNotFoundException("Teacher not found"));
        
        Course course = Course.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .teacher(teacher)
                .category(request.getCategory())
                .price(request.getPrice())
                .durationWeeks(request.getDurationWeeks())
                .level(request.getLevel() != null ? Course.DifficultyLevel.valueOf(request.getLevel().toUpperCase()) : null)
                .imageUrl(request.getImageUrl())
                .build();
        
        Course savedCourse = courseRepository.save(course);
        log.info("Course created: {} by teacher: {}", savedCourse.getTitle(), teacher.getEmail());
        
        return CourseResponse.fromEntity(savedCourse);
    }
    
    public CourseResponse updateCourse(Long courseId, CourseRequest request, Long teacherId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found"));
        
        // Verify teacher owns the course or is admin
        if (!course.getTeacher().getId().equals(teacherId)) {
            User user = userRepository.findById(teacherId)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
            if (!user.getRole().equals(User.Role.ADMIN)) {
                throw new BadRequestException("You can only update your own courses");
            }
        }
        
        course.setTitle(request.getTitle());
        course.setDescription(request.getDescription());
        course.setCategory(request.getCategory());
        course.setPrice(request.getPrice());
        course.setDurationWeeks(request.getDurationWeeks());
        if (request.getLevel() != null) {
            course.setLevel(Course.DifficultyLevel.valueOf(request.getLevel().toUpperCase()));
        }
        course.setImageUrl(request.getImageUrl());
        
        Course updatedCourse = courseRepository.save(course);
        return CourseResponse.fromEntity(updatedCourse);
    }
    
    public void deleteCourse(Long courseId, Long teacherId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found"));
        
        // Verify teacher owns the course or is admin
        if (!course.getTeacher().getId().equals(teacherId)) {
            User user = userRepository.findById(teacherId)
                    .orElseThrow(() -> new ResourceNotFoundException("User not found"));
            if (!user.getRole().equals(User.Role.ADMIN)) {
                throw new BadRequestException("You can only delete your own courses");
            }
        }
        
        course.setIsActive(false);
        courseRepository.save(course);
    }
    
    public void enrollInCourse(Long courseId, Long studentId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new ResourceNotFoundException("Course not found"));
        
        User student = userRepository.findById(studentId)
                .orElseThrow(() -> new ResourceNotFoundException("Student not found"));
        
        if (enrollmentRepository.existsByStudentAndCourse(student, course)) {
            throw new BadRequestException("Already enrolled in this course");
        }
        
        Enrollment enrollment = Enrollment.builder()
                .student(student)
                .course(course)
                .build();
        
        enrollmentRepository.save(enrollment);
        log.info("Student {} enrolled in course {}", student.getEmail(), course.getTitle());
    }
    
    public List<CourseResponse> getEnrolledCourses(Long studentId) {
        List<Enrollment> enrollments = enrollmentRepository.findByStudentId(studentId);
        return enrollments.stream()
                .map(enrollment -> CourseResponse.fromEntity(enrollment.getCourse()))
                .collect(Collectors.toList());
    }
}