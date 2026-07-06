CREATE DATABASE IF NOT EXISTS bda_lab;
USE bda_lab;

-- =====================================================
-- FACULTY TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS faculty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(255),
    description TEXT,
    email VARCHAR(255),
    image_url TEXT,
    scholar_url TEXT,
    profile_url TEXT,
    external_links LONGTEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =====================================================
-- STUDENTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('postdoc','phd','graduated','mtech') NOT NULL,
    batch_year INT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    research_topic TEXT,
    image_url TEXT,
    scholar_url TEXT,
    profile_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =====================================================
-- RESEARCH UPDATES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS research_updates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_research_year ON research_updates(year);

-- =====================================================
-- CONTACT MESSAGES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(15) NOT NULL,
    query_message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- FUNDING & COLLABORATION TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS funding_collaboration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    partner_name VARCHAR(255) NOT NULL,
    logo VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- EVENTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category_id VARCHAR(50) NOT NULL,
    category_label VARCHAR(100) NOT NULL,
    citation TEXT NOT NULL,
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================================
-- PUBLICATIONS TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS publications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('journals','conferences','books') NOT NULL,
    year INT NOT NULL,
    citation TEXT NOT NULL,
    link VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_publications_category ON publications(category);

-- =====================================================
-- PUBLICATION STATISTICS TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS publication_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    label VARCHAR(50) NOT NULL UNIQUE,
    all_count INT NOT NULL DEFAULT 0,
    since_2021 INT NOT NULL DEFAULT 0
);

-- =====================================================
-- PUBLICATION YEARLY STATISTICS TABLE
-- =====================================================

CREATE TABLE IF NOT EXISTS publication_yearly_stats (
    year INT PRIMARY KEY,
    total INT NOT NULL DEFAULT 0
);

/* ===========================================================
   BLOGS TABLE
=========================================================== */

CREATE TABLE IF NOT EXISTS blogs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255),
    link VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

USE bda_lab;

CREATE TABLE IF NOT EXISTS admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    reset_token VARCHAR(255) DEFAULT NULL,
    reset_token_expiry DATETIME DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admin_users (username, email, password)
VALUES (
    'admin',
    'admin@bdalab.com',
    '$2y$10$8K1p/a0dL1LXMIgoEDFrwO3SbiWnzkeP0fiD8n53uZ9ec0XZC0YjK'
);