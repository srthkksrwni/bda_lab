CREATE DATABASE IF NOT EXISTS bda_lab;
USE bda_lab;

-- =====================================================
-- FACULTY TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS faculty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    image_url TEXT,
    scholar_url TEXT,
    profile_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
-- =====================================================
-- STUDENTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('postdoc','phd','graduated','mtech') NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    research_topic TEXT,
    image_url TEXT,
    scholar_url TEXT,
    profile_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
-- ============================================
-- Research Updates Table
-- ============================================

CREATE TABLE IF NOT EXISTS research_updates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_research_year ON research_updates(year);

