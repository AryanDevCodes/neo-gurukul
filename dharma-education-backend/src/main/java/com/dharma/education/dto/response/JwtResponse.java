package com.dharma.education.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private String type;
    private Long id;
    private String email;
    private String role;
    private String firstName;
    private String lastName;
    
    @Builder.Default
    private String tokenType = "Bearer";
}