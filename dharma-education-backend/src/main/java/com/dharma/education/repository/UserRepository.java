package com.dharma.education.repository;

import com.dharma.education.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    
    @Query("SELECT u FROM User u WHERE u.role = ?1 AND u.isActive = true")
    java.util.List<User> findByRoleAndActiveTrue(User.Role role);
}