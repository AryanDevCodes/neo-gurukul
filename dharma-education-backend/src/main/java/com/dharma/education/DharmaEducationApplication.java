package com.dharma.education;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class DharmaEducationApplication {
    public static void main(String[] args) {
        SpringApplication.run(DharmaEducationApplication.class, args);
    }
}