BDA LAB ADMIN PANEL - CONTACT MESSAGES RUN COMMANDS

1) Start XAMPP

Open XAMPP Control Panel:

Apache → Start
MySQL → Start


2) Backend PHP Run

Open Command Prompt:

cd C:\xampp\htdocs\bda_lab_admin\backend

php -S localhost:8000

If php command not recognized:

C:\xampp\php\php.exe -S localhost:8000


3) Test Backend API

Open browser:

http://localhost:8000/contact/get_messages.php


4) Database

Open browser:

http://localhost/phpmyadmin

Create database:

bda_lab

Import SQL file:

backend/database/schema.sql


5) Frontend React Run

Open second Command Prompt:

cd C:\xampp\htdocs\bda_lab_admin\frontend

npm install

npm run dev


6) Open Admin Contact Messages Page

http://localhost:5173/#/admin/contact-messages


7) Important React API URLs

Get messages:

http://localhost:8000/contact/get_messages.php

Delete message:

http://localhost:8000/contact/delete_message.php?id=1


8) Stop Project

Stop React:

Ctrl + C

Stop PHP Backend:

Ctrl + C