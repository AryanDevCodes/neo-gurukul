CREATE TABLE IF NOT EXISTS media_files (
    id BIGSERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255),
    file_type VARCHAR(100),
    file_size BIGINT,
    file_url TEXT,
    s3_key TEXT,
    media_type VARCHAR(20) CHECK (media_type IN ('IMAGE', 'VIDEO', 'AUDIO', 'DOCUMENT', 'OTHER')),
    uploaded_by BIGINT,
    course_id BIGINT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL
);

CREATE INDEX idx_media_uploader ON media_files(uploaded_by);
CREATE INDEX idx_media_course ON media_files(course_id);
CREATE INDEX idx_media_type ON media_files(media_type);