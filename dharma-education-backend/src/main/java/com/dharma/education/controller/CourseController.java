package com.dharma.education.controller;

import com.dharma.education.dto.request.CourseRequest;
import com.dharma.education.dto.response.CourseResponse;
import com.dharma.education.service.CourseService;
import com.dharma.education.security.UserPrincipal;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "*", maxAge = 3600)
@Tag(name = "Courses", description = "Course management APIs")
@Slf4j
@RequiredArgsConstructor
public class CourseController {
    
    private final CourseService courseService;
    
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
    public ResponseEntity<String> enrollInCourse(
            @PathVariable Long id,
            Authentication authentication) {
        
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        courseService.enrollInCourse(id, userPrincipal.getId());
        
        return ResponseEntity.ok("Successfully enrolled in course");
    }
    
    @GetMapping("/my-courses")
    @PreAuthorize("hasRole('STUDENT')")
    @Operation(summary = "Get enrolled courses")
    public ResponseEntity<List<CourseResponse>> getEnrolledCourses(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        List<CourseResponse> courses = courseService.getEnrolledCourses(userPrincipal.getId());
        return ResponseEntity.ok(courses);
    }
}