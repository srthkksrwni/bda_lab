# BDA LAB ADMIN PANEL - PEOPLE MODULE

## Overview

This module is responsible for managing **Faculty** and **Students** from the Admin Panel.

Current Features:

* View Faculty
* Add Faculty
* Edit Faculty
* Delete Faculty
* View Students
* Add Students
* Edit Students
* Delete Students

Student Categories:

* Post-Doctorate
* PhD Scholars
* Graduated PhD
* M.Tech Scholars

---

# Project Structure

```text
backend
│
├── config
│   └── db.php
│
├── people
│   ├── add.php
│   ├── list.php
│   ├── update.php
│   └── delete.php
│
└── database
    └── schema.sql

src
│
├── admin
│   ├── People
│   │
│   ├── AdminFaculty
│   │   ├── AdminFaculty.jsx
│   │   └── AdminFaculty.css
│   │
│   ├── AdminStudents
│   │   ├── AdminStudents.jsx
│   │   └── AdminStudents.css
```

---

# Software Required

Install the following software:

* XAMPP
* Node.js
* VS Code
* Google Chrome

---

# Start XAMPP

Open XAMPP Control Panel.

Start:

```text
Apache

MySQL
```

Both services should be running.

---

# Database Setup

Open phpMyAdmin:

```text
http://localhost/phpmyadmin
```

Create database:

```text
bda_lab
```

Import:

```text
backend/database/schema.sql
```

This creates the required tables.

Current tables:

* faculty
* students

---

# Backend Configuration

Database connection file:

```text
backend/config/db.php
```

Default configuration:

```php
Host : localhost
User : root
Password :
Database : bda_lab
```

---

# Run Backend

Open Command Prompt.

Navigate to backend directory.

Example:

```bash
cd C:\xampp\htdocs\bda_lab
```

Run PHP Server:

```bash
php -S localhost:8000
```

If PHP is not added to PATH:

```bash
C:\xampp\php\php.exe -S localhost:8000
```

Backend will start on:

```text
http://localhost:8000
```

---

# Backend APIs

## Get Faculty

```text
http://localhost:8000/people/list.php?type=faculty
```

---

## Get Students

```text
http://localhost:8000/people/list.php?type=students
```

---

## Get PhD Scholars

```text
http://localhost:8000/people/list.php?type=students&category=phd
```

---

## Add Faculty / Student

```text
http://localhost:8000/people/add.php
```

Method:

```text
POST
```

---

## Update Faculty / Student

```text
http://localhost:8000/people/update.php
```

Method:

```text
POST
```

---

## Delete Faculty / Student

```text
http://localhost:8000/people/delete.php
```

Method:

```text
POST
```

---

# Run React Frontend

Open another Command Prompt.

Navigate to frontend.

```bash
cd C:\xampp\htdocs\bda_lab_admin\frontend
```

Install packages:

```bash
npm install
```

Run React:

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

---

# Admin Pages

Faculty

```text
http://localhost:5173/#/admin/faculty
```

Students

```text
http://localhost:5173/#/admin/students
```

---

# Database Tables

## faculty

Columns:

* id
* name
* designation
* email
* image_url
* scholar_url
* profile_url
* created_at
* updated_at

---

## students

Columns:

* id
* category
* name
* email
* research_topic
* image_url
* scholar_url
* profile_url
* created_at
* updated_at

---

# Current Backend Workflow

```text
Admin Panel

↓

React Fetch API

↓

PHP API

↓

db.php

↓

MySQL Database

↓

JSON Response

↓

React UI
```

---

# Testing APIs

Faculty API

```text
http://localhost:8000/people/list.php?type=faculty
```

Students API

```text
http://localhost:8000/people/list.php?type=students
```

PhD API

```text
http://localhost:8000/people/list.php?type=students&category=phd
```

Expected Response:

```json
{
    "success": true,
    "data": []
}
```

---

# Common Issues

## Database Connection Failed

Check:

* Apache is running.
* MySQL is running.
* Database name is `bda_lab`.
* Username is `root`.
* Password is correct.

---

## 404 Not Found

Verify project location:

```text
C:\xampp\htdocs\bda_lab
```

---

## Empty Data Response

```json
{
    "success": true,
    "data": []
}
```

The API is working correctly.

No records currently exist in the database.

---

## Stop Project

Stop React:

```text
Ctrl + C
```

Stop PHP Backend:

```text
Ctrl + C
```

Stop Apache and MySQL from the XAMPP Control Panel.
