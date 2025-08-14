package com.dharma.education.dto.response;

import com.dharma.education.entity.Course;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseResponse {
    private Long id;
    private String title;
    private String description;
    private UserResponse teacher;
    private String category;
    private BigDecimal price;
    private Integer durationWeeks;
    private String level;
    private String imageUrl;
    private Boolean isActive;
    private Integer enrollmentCount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public static CourseResponse fromEntity(Course course) {
        return CourseResponse.builder()
                .id(course.getId())
                .title(course.getTitle())
                .description(course.getDescription())
                .teacher(course.getTeacher() != null ? UserResponse.fromEntity(course.getTeacher()) : null)
                .category(course.getCategory())
                .price(course.getPrice())
                .durationWeeks(course.getDurationWeeks())
                .level(course.getLevel() != null ? course.getLevel().name() : null)
                .imageUrl(course.getImageUrl())
                .isActive(course.getIsActive())
                .enrollmentCount(course.getEnrollmentCount())
                .createdAt(course.getCreatedAt())
                .updatedAt(course.getUpdatedAt())
                .build();
    }
}