CREATE TABLE IF NOT EXISTS learning_modules (
    id BIGSERIAL PRIMARY KEY,
    course_id BIGINT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    order_index INTEGER DEFAULT 0,
    video_url TEXT,
    duration_minutes INTEGER DEFAULT 0,
    is_published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

CREATE INDEX idx_modules_course ON learning_modules(course_id);
CREATE INDEX idx_modules_order ON learning_modules(order_index);
CREATE INDEX idx_modules_published ON learning_modules(is_published);