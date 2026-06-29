# BDA Lab Portal

A React + Vite web application for the **BDA Lab, IIIT Allahabad**. The project includes an Admin Panel for managing research updates using **PHP** and **MySQL**.

## Tech Stack

* React + Vite
* PHP
* MySQL
* XAMPP

## Setup

1. Start **Apache** and **MySQL** from XAMPP.
2. Place the project inside:

C:\xampp\htdocs\bda_lab

3. Create a MySQL database named:

bda_lab

## Run the Frontend

Install dependencies (first time only):

npm install

Start the React application:

npm run dev

The frontend runs at:

http://localhost:5173

## Backend

The backend is built using PHP and runs automatically through **Apache** in XAMPP.

API example:

http://localhost/bda_lab/backend/research_updates/list.php

## Features

* Admin login panel
* Add research updates
* Store updates in MySQL
* Display research updates in the Admin Panel
* Show recent research updates on the Home page
* Responsive React frontend