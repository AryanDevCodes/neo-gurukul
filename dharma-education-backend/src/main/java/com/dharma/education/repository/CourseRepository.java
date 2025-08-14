package com.dharma.education.repository;

import com.dharma.education.entity.Course;
import com.dharma.education.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    
    @Query("SELECT c FROM Course c WHERE c.isActive = true")
    Page<Course> findAllActive(Pageable pageable);
    
    @Query("SELECT c FROM Course c WHERE c.isActive = true AND " +
           "(:category IS NULL OR c.category = :category) AND " +
           "(:search IS NULL OR LOWER(c.title) LIKE LOWER(CONCAT('%', :search, '%')) OR " +
           "LOWER(c.description) LIKE LOWER(CONCAT('%', :search, '%')))")
    Page<Course> findActiveCoursesWithFilters(@Param("category") String category, 
                                             @Param("search") String search, 
                                             Pageable pageable);
    
    List<Course> findByTeacherAndIsActiveTrue(User teacher);
    
    @Query("SELECT c FROM Course c JOIN c.enrollments e WHERE e.student.id = :studentId")
    List<Course> findEnrolledCoursesByStudentId(@Param("studentId") Long studentId);
}