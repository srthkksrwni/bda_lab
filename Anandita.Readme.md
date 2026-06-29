# BDA Lab Portal - Research Updates Module

This module allows the administrator to manage research updates for the **BDA Lab Website**. The admin can add new research updates, store them in a MySQL database using PHP APIs, and display the latest updates on both the **Admin Panel** and the **Home Page**.

---

# Project Structure

Meaning of the folders:

* `backend/config` contains the database connection file.
* `backend/research_updates` contains all PHP APIs related to Research Updates.
* `src/admin` contains the React Admin Panel.
* `src/components` contains the Home page components.
* `public` stores static assets such as images.

---

# Software You Need

Install the following software:

1. XAMPP
2. Node.js
3. VS Code
4. Google Chrome (or any browser)

---

# Step 1: Install XAMPP

XAMPP provides Apache, PHP and MySQL.

Download:

```text
https://www.apachefriends.org/
```

Install XAMPP and start:

```text
Apache
MySQL
```

Both services should show **Running**.

---

# Step 2: Install Node.js

Download Node.js from:

```text
https://nodejs.org/
```

Install the LTS version.

Verify installation:

```bash
node -v
npm -v
```

---

# Step 3: Clone or Download the Project

Place the project inside:

```text
C:\xampp\htdocs\bda_lab
```

This allows Apache to access the PHP backend.

---

# Step 4: Create the Database

Open phpMyAdmin:

```text
http://localhost/phpmyadmin
```

Create a database named:

```text
bda_lab
```

Create the table:

```sql
CREATE TABLE research_updates (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    year VARCHAR(10) NOT NULL,
    type VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# Step 5: Configure Database Connection

Open:

```text
backend/config/db.php
```

Use the following configuration:

```php
$conn = new mysqli(
    "localhost",
    "root",
    "",
    "bda_lab"
);
```

If you have set a MySQL password, replace the empty password accordingly.

---

# Step 6: PHP Backend

The backend runs automatically using Apache in XAMPP.

No separate PHP server command is required.

Test the API:

```text
http://localhost/bda_lab/backend/research_updates/list.php
```

If configured correctly, it should return JSON data.

---

# Step 7: Run the React Frontend

Open Terminal inside the project folder.

Install dependencies (first time only):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# APIs Used

## Fetch Research Updates

```text
GET
http://localhost/bda_lab/backend/research_updates/list.php
```

Returns all research updates stored in MySQL.

---

## Add Research Update

```text
POST
http://localhost/bda_lab/backend/research_updates/create.php
```

Request Body:

```json
{
    "title": "AI in Healthcare",
    "year": "2026",
    "type": "Publication"
}
```

---

# Module Workflow

### Admin Panel

* Enter Title
* Enter Year
* Enter Type
* Click **Add Research Update**

The React frontend sends the data to the PHP API.

The PHP backend validates the request and stores the data inside the MySQL database.

After successful insertion, the latest records are fetched automatically and displayed in the admin table.

---

### Home Page

The Home page fetches the latest research updates using:

```text
http://localhost/bda_lab/backend/research_updates/list.php
```

The latest entries stored in MySQL are displayed under the **Recent Research Updates** section automatically.

---

# Commands Used

Install packages:

```bash
npm install
```

Run React:

```bash
npm run dev
```

Backend:

```text
Start Apache and MySQL from XAMPP.
```

No additional backend command is required.

---

# Important URLs

Frontend:

```text
http://localhost:5173
```

Admin Panel:

```text
http://localhost:5173/#/admin/research-updates
```

Research Updates API:

```text
http://localhost/bda_lab/backend/research_updates/list.php
```

phpMyAdmin:

```text
http://localhost/phpmyadmin
```

---

# Common Problems

### API returns "Not Found"

Make sure the project is inside:

```text
C:\xampp\htdocs\bda_lab
```

Apache must also be running.

---

### Database Connection Failed

Check:

* MySQL is running.
* Database name is `bda_lab`.
* `db.php` contains correct credentials.

---

### React Cannot Fetch Data

Check:

* Apache is running.
* The API opens correctly in the browser.
* The API URL in React matches:

```text
http://localhost/bda_lab/backend/research_updates
```

---

### npm install fails

Run:

```bash
npm cache clean --force
npm install
```

---

### Stop the Project

Stop React:

```text
Ctrl + C
```

Stop the backend:

Stop **Apache** and **MySQL** from the XAMPP Control Panel.

---

# My Contribution

Implemented the **Research Updates Module**, including:

* React Admin Panel for managing research updates.
* PHP REST APIs for CRUD operations.
* MySQL database integration.
* Automatic fetching and displaying of research updates.
* Dynamic synchronization of research updates between the Admin Panel and the Home Page.
