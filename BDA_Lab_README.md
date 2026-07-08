# BDA Lab Portal

A full-stack website for **BDA Lab, IIIT Allahabad**. The frontend is built with **React + Vite** and the backend is built with **PHP + MySQL**. It includes a public website and an admin panel to manage website content.

---

## 1. Main Features

### Public website

- Home page
- Faculty page
- Students page
- Publications page
- Projects page
- Resources page
- Datasets page
- Blog / Insights gallery
- Events page
- Contact page
- Funding & Collaboration section
- Special project pages such as GestureCare, Health Monitoring, CEP, Ontology, Cloud Platform, Mobile App

### Admin panel

Admin can manage:

- Dashboard statistics
- Funding & Collaboration
- Faculty and Students
- Publications and publication statistics
- Research Updates
- Events
- Blogs / gallery images
- Contact messages

Security features:

- Admin login
- Login OTP verification through email
- Forgot password with OTP verification
- Password reset email alert
- Login email alert

---

## 2. Technology Used

- React 18
- Vite
- React Router DOM
- PHP
- MySQL / MariaDB
- XAMPP
- PHPMailer for email alerts and OTP
- CSS modules / normal CSS files
- Chart libraries: Chart.js, Recharts

---

## 3. Folder Structure

```txt
bda_lab/
│
├── backend/                    # PHP backend APIs
│   ├── auth/                   # Login, logout, OTP, password reset
│   ├── blogs/                  # Blog image CRUD APIs
│   ├── contact/                # Contact message APIs
│   ├── dashboard/              # Admin dashboard stats
│   ├── database/               # schema.sql and seed.sql
│   ├── events/                 # Events CRUD APIs
│   ├── funding/                # Funding CRUD APIs
│   ├── people/                 # Faculty and student CRUD APIs
│   ├── publications/           # Publications and stats APIs
│   ├── research_updates/       # Research update CRUD APIs
│   ├── uploads/                # Uploaded images/files
│   ├── config/                 # config.php and db.php
│   ├── PHPMailer/              # Manual PHPMailer library
│   └── utils/                  # send_alert.php
│
├── public/                     # Static frontend assets
├── public_html/                # Static files used by hosted build / old image assets
│
├── src/
│   ├── admin/                  # Admin panel React pages
│   ├── api/                    # Frontend API URL config
│   ├── assets/                 # React assets
│   ├── components/             # Public website React components
│   ├── data/                   # Static data files
│   ├── ontology/               # Ontology sub-project
│   ├── portfolio/              # Portfolio sub-project
│   ├── styles/                 # Public website CSS
│   ├── App.jsx                 # Main routes
│   └── main.jsx                # React entry point
│
├── .env                        # Frontend API base URL
├── package.json
└── vite.config.js
```

---

## 4. Requirements for a New Member

Install these first:

1. **XAMPP** for Apache, PHP and MySQL.
2. **Node.js** and **npm**.
3. **VS Code**.
4. A browser such as Chrome or Edge.

Check versions:

```bash
node -v
npm -v
php -v
```

---

## 5. Local Setup Using XAMPP

### Step 1: Place project inside XAMPP

Copy the project folder here:

```txt
C:\xampp\htdocs\bda_lab
```

Final path should look like:

```txt
C:\xampp\htdocs\bda_lab\backend
C:\xampp\htdocs\bda_lab\src
C:\xampp\htdocs\bda_lab\package.json
```

### Step 2: Start XAMPP

Open XAMPP Control Panel and start:

```txt
Apache
MySQL
```

### Step 3: Create database

Open phpMyAdmin:

```txt
http://localhost/phpmyadmin
```

Create database:

```sql
CREATE DATABASE bda_lab;
```

Then import:

```txt
backend/database/schema.sql
backend/database/seed.sql
```

Import order:

1. `schema.sql`
2. `seed.sql`

### Step 4: OTP columns

If OTP login and OTP password reset are enabled, make sure these columns exist in `admin_users`:

```sql
ALTER TABLE admin_users
ADD login_otp VARCHAR(10) NULL,
ADD login_otp_expiry DATETIME NULL,
ADD reset_otp VARCHAR(10) NULL,
ADD reset_otp_expiry DATETIME NULL;
```

If the columns already exist, phpMyAdmin may show a duplicate-column error. That is fine; it means they are already added.

---

## 6. Backend Configuration

Open:

```txt
backend/config/config.php
```

Local XAMPP values:

```php
"db_host" => "localhost",
"db_name" => "bda_lab",
"db_user" => "root",
"db_pass" => "",
"FRONTEND_URL" => "http://localhost:5173",
```

Open:

```txt
backend/config/db.php
```

This file connects PHP to MySQL. Usually no change is needed if your database name is `bda_lab` and XAMPP MySQL user is `root` with no password.

---

## 7. Frontend Configuration

Open:

```txt
.env
```

For XAMPP Apache backend, use:

```env
VITE_API_BASE=http://localhost/bda_lab/backend
```

For PHP built-in server backend, use:

```env
VITE_API_BASE=http://localhost:8000
```

After changing `.env`, restart Vite.

Frontend API config is here:

```txt
src/api/apiConfig.js
```

It reads the API URL from `.env`:

```js
export const API_BASE = import.meta.env.VITE_API_BASE;
```

---

## 8. Install and Run Frontend

Open terminal in project root:

```bash
cd C:\xampp\htdocs\bda_lab
npm install
npm run dev
```

Frontend URL:

```txt
http://localhost:5173
```

Because the project uses `HashRouter`, routes look like this:

```txt
http://localhost:5173/#/
http://localhost:5173/#/faculty
http://localhost:5173/#/publications
```

---

## 9. Backend Run Options

### Option A: Use XAMPP Apache

Use this `.env`:

```env
VITE_API_BASE=http://localhost/bda_lab/backend
```

Test backend API:

```txt
http://localhost/bda_lab/backend/funding/list.php
http://localhost/bda_lab/backend/blogs/list.php
http://localhost/bda_lab/backend/events/list.php
```

### Option B: Use PHP built-in server

Open terminal in project root:

```bash
php -S localhost:8000 -t backend
```

Use this `.env`:

```env
VITE_API_BASE=http://localhost:8000
```

Test backend API:

```txt
http://localhost:8000/funding/list.php
http://localhost:8000/blogs/list.php
http://localhost:8000/events/list.php
```

Use only one backend option at a time.

---

## 10. Important URLs

### Public website

```txt
http://localhost:5173/#/
```

### Admin login

```txt
http://localhost:5173/#/admin/login
```

### Admin dashboard

```txt
http://localhost:5173/#/admin/dashboard
```

### Admin pages

```txt
http://localhost:5173/#/admin/funding
http://localhost:5173/#/admin/people
http://localhost:5173/#/admin/publications
http://localhost:5173/#/admin/research-updates
http://localhost:5173/#/admin/events
http://localhost:5173/#/admin/blogs
http://localhost:5173/#/admin/contact-messages
```

### Forgot password

```txt
http://localhost:5173/#/admin/forgot-password
```

### Reset password

```txt
http://localhost:5173/#/admin/reset-password
```

---

## 11. Admin Login

Admin users are stored in MySQL table:

```txt
admin_users
```

Default seed creates one admin user. If the password is unknown, reset it manually from phpMyAdmin.

Generate a new password hash using PHP:

```bash
php -r "echo password_hash('newpassword123', PASSWORD_DEFAULT);"
```

Copy the generated hash and update `admin_users.password` in phpMyAdmin.

Then login from:

```txt
http://localhost:5173/#/admin/login
```

---

## 12. Email Alert and OTP Setup

The project uses PHPMailer manually. Files are here:

```txt
backend/PHPMailer/src/PHPMailer.php
backend/PHPMailer/src/SMTP.php
backend/PHPMailer/src/Exception.php
backend/utils/send_alert.php
```

Open:

```txt
backend/utils/send_alert.php
```

Update these values:

```php
$mail->Username = "your_email@gmail.com";
$mail->Password = "your_16_digit_app_password";
$mail->setFrom("your_email@gmail.com", "BDA Lab Admin");
$mail->addAddress("admin_receiver_email@gmail.com");
```

Use a Gmail **App Password**, not the normal Gmail password.

Google Account path:

```txt
Google Account → Security → 2-Step Verification → App passwords
```

Test email:

```txt
http://localhost/bda_lab/backend/utils/test_mail.php
```

If using PHP built-in server:

```txt
http://localhost:8000/utils/test_mail.php
```

Security note: never commit real Gmail passwords or app passwords to GitHub. If a password was committed, create a new Gmail App Password and delete the old one.

---

## 13. Where to Make Changes

### Navbar

```txt
src/components/Navbar.jsx
src/styles/Navbar.css
```

### Footer

```txt
src/components/Footer.jsx
src/styles/Footer.css
```

### Home page

```txt
src/components/Home.jsx
src/styles/Home.css
```

### Faculty page

```txt
src/components/Faculty.jsx
src/styles/Faculty.css
```

### Students page

```txt
src/components/Students.jsx
src/styles/Students.css
```

### Publications page

```txt
src/components/Publications.jsx
src/styles/Publications.css
```

Admin publications:

```txt
src/admin/Publications/AdminPublications.jsx
backend/publications/
```

### Projects page

```txt
src/components/Projects.jsx
src/styles/Projects.css
src/data/Ongoingprojects.js
src/data/Completedprojects.js
```

### Funding section

Public side:

```txt
src/components/Funding.jsx
src/styles/funding.css
```

Admin side:

```txt
src/admin/FundingCollaboration/FundingCollaboration.jsx
src/admin/FundingCollaboration/FundingCollaboration.css
backend/funding/
```

Database table:

```txt
funding_collaboration
```

Uploaded images:

```txt
backend/uploads/funding/
```

### Blogs / Insights

Public side:

```txt
src/components/Blog.jsx
src/styles/Blog.css
```

Admin side:

```txt
src/admin/Blogs/AdminBlogs.jsx
src/admin/Blogs/AdminBlogs.css
backend/blogs/
```

Database table:

```txt
blogs
```

Uploaded images:

```txt
backend/uploads/blogs/
```

### Events

Public side:

```txt
src/components/Events.jsx
src/styles/events.css
```

Admin side:

```txt
src/admin/AdminEvents/AdminEvents.jsx
src/admin/AdminEvents/AdminEvents.css
backend/events/
```

Database table:

```txt
events
```

### Research Updates

Admin side:

```txt
src/admin/AdminResearchUpdates.jsx
src/admin/AdminResearchUpdates.css
backend/research_updates/
```

Database table:

```txt
research_updates
```

### Contact page

Public side:

```txt
src/components/Contact.jsx
src/styles/contact.css
```

Admin contact messages:

```txt
src/admin/ContactMessages/ContactMessages.jsx
backend/contact/
```

Database table:

```txt
contact_messages
```

### Admin login / OTP / password reset

Frontend:

```txt
src/admin/AdminLogin/AdminLogin.jsx
src/admin/ForgotPassword/ForgotPassword.jsx
src/admin/ResetPassword/ResetPassword.jsx
```

Backend:

```txt
backend/auth/login.php
backend/auth/verify_login_otp.php
backend/auth/forgot_password.php
backend/auth/reset_password.php
backend/auth/check_auth.php
backend/auth/logout.php
```

Database table:

```txt
admin_users
```

### Routes

All main routes are in:

```txt
src/App.jsx
```

---

## 14. Database Tables

Main tables:

```txt
admin_users
blogs
contact_messages
events
faculty
funding_collaboration
publications
publication_citation_stats
publication_yearly_stats
research_updates
students
```

Database files:

```txt
backend/database/schema.sql
backend/database/seed.sql
```

Whenever you add a new table or column, update `schema.sql` also so a new member can set up the project easily.

---

## 15. Upload Folders

Uploaded files are saved inside:

```txt
backend/uploads/blogs/
backend/uploads/funding/
backend/uploads/faculty/
backend/uploads/students/
```

Make sure these folders exist. PHP usually creates them automatically, but on hosting you may need to create them manually and give write permission.

---

## 16. Common Commands

Install dependencies:

```bash
npm install
```

Run frontend:

```bash
npm run dev
```

Build frontend:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Run PHP backend on port 8000:

```bash
php -S localhost:8000 -t backend
or
C:\xampp\php\php.exe -S localhost:8000
```

---

## 17. Deployment Guide

### Frontend deployment

Build React project:

```bash
npm run build
```

This creates:

```txt
dist/
```

Upload the contents of `dist/` to the hosting public folder, usually:

```txt
public_html/
```

Because the app uses `HashRouter`, routing works on most shared hosting without extra server rewrite rules.

### Backend deployment

Upload this folder to hosting:

```txt
backend/
```

Recommended hosting structure:

```txt
public_html/
│
├── index.html                 # React build files
├── assets/                    # React build assets
│
└── backend/                   # PHP APIs
    ├── auth/
    ├── blogs/
    ├── config/
    ├── uploads/
    └── ...
```

Then update frontend `.env` before building:

```env
VITE_API_BASE=https://yourdomain.com/backend
```

Build again:

```bash
npm run build
```

Then upload the new `dist/` files.

### Backend config on hosting

Open:

```txt
backend/config/config.php
```

Update:

```php
"db_host" => "hosting_db_host",
"db_name" => "hosting_db_name",
"db_user" => "hosting_db_user",
"db_pass" => "hosting_db_password",
"FRONTEND_URL" => "https://yourdomain.com",
```

Import database on hosting phpMyAdmin:

1. Import `backend/database/schema.sql`
2. Import `backend/database/seed.sql`
3. Run OTP column migration if needed

### Upload permissions on hosting

Ensure these folders are writable:

```txt
backend/uploads/blogs/
backend/uploads/funding/
backend/uploads/faculty/
backend/uploads/students/
```

On Linux hosting, permissions are commonly:

```txt
755 or 775
```

If uploads fail, ask hosting support to enable write permission for these folders.

---

## 18. API Testing URLs

Local XAMPP examples:

```txt
http://localhost/bda_lab/backend/dashboard/stats.php
http://localhost/bda_lab/backend/funding/list.php
http://localhost/bda_lab/backend/blogs/list.php
http://localhost/bda_lab/backend/events/list.php
http://localhost/bda_lab/backend/publications/list.php
http://localhost/bda_lab/backend/research_updates/list.php
http://localhost/bda_lab/backend/contact/list.php
```

PHP built-in server examples:

```txt
http://localhost:8000/dashboard/stats.php
http://localhost:8000/funding/list.php
http://localhost:8000/blogs/list.php
http://localhost:8000/events/list.php
```

If an API shows JSON, backend is running.

---

## 19. Common Problems and Fixes

### Problem: Frontend opens but data is not loading

Check `.env`:

```env
VITE_API_BASE=http://localhost/bda_lab/backend
```

Then restart Vite:

```bash
npm run dev
```

### Problem: API gives database connection failed

Check:

```txt
backend/config/config.php
```

Make sure database name, username and password are correct.

### Problem: Login says API connection failed

Check if `send_alert.php` is printing SMTP debug text. It should not echo errors during login.

Do not use this in production:

```php
$mail->SMTPDebug = 2;
echo "Mailer Error...";
```

### Problem: Image not showing

Check database image path.

New uploaded image should look like:

```txt
uploads/blogs/filename.jpg
uploads/funding/filename.png
uploads/faculty/filename.jpg
uploads/students/filename.jpg
```

Image URL should become:

```txt
VITE_API_BASE + /uploads/...
```

Example:

```txt
http://localhost/bda_lab/backend/uploads/funding/logo.png
```

### Problem: React Router warning in console

Warnings like `React Router Future Flag Warning` are not errors. The project can run normally.

### Problem: OTP email not coming

Check:

- Gmail App Password is correct.
- 2-Step Verification is ON.
- `send_alert.php` has correct sender and receiver email.
- Internet is working.
- Hosting allows SMTP.

---

## 20. GitHub Notes for New Members

Do not commit these sensitive values:

- Real Gmail App Password
- Hosting database password
- `.env` production secrets
- Any private keys

Recommended workflow:

```bash
git pull
npm install
npm run dev
```

Before pushing:

```bash
git status
git add .
git commit -m "meaningful message"
git push
```

If you make database changes, also update:

```txt
backend/database/schema.sql
backend/database/seed.sql
```

---

## 21. Quick Start Summary

```bash
cd C:\xampp\htdocs\bda_lab
npm install
npm run dev
```

Start XAMPP:

```txt
Apache ON
MySQL ON
```

Open website:

```txt
http://localhost:5173/#/
```

Open admin:

```txt
http://localhost:5173/#/admin/login
```

Backend test:

```txt
http://localhost/bda_lab/backend/funding/list.php
```

