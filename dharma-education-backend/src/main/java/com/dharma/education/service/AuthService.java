package com.dharma.education.service;

import com.dharma.education.dto.request.LoginRequest;
import com.dharma.education.dto.request.RegisterRequest;
import com.dharma.education.dto.response.JwtResponse;
import com.dharma.education.dto.response.UserResponse;
import com.dharma.education.entity.User;
import com.dharma.education.exception.BadRequestException;
import com.dharma.education.exception.UnauthorizedException;
import com.dharma.education.repository.UserRepository;
import com.dharma.education.security.JwtUtils;
import com.dharma.education.security.UserPrincipal;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class AuthService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    
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
            
            User user = userRepository.findById(userPrincipal.getId())
                    .orElseThrow(() -> new UnauthorizedException("User not found"));
            
            return JwtResponse.builder()
                .token(jwt)
                .type("Bearer")
                .id(userPrincipal.getId())
                .email(userPrincipal.getUsername())
                .role(userPrincipal.getRole().name())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
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
            .phoneNumber(request.getPhoneNumber())
            .gradeLevel(request.getGradeLevel())
            .specialization(request.getSpecialization())
            .bio(request.getBio())
            .build();
            
        User savedUser = userRepository.save(user);
        log.info("New user registered: {}", savedUser.getEmail());
        
        return UserResponse.fromEntity(savedUser);
    }
}