Meaning of the folders:

- `backend` contains the PHP API.
- `frontend` contains the React website.
- `backend/database/schema.sql` creates the MySQL tables.
- `backend/database/seed.sql` adds sample products, admin login, and coupon.
- `backend/config/config.php` stores database settings.

## Software You Need

Install these first:

1. XAMPP
2. Node.js
3. A code editor such as VS Code
4. A browser such as Chrome

## Step 1: Install XAMPP

XAMPP gives you PHP, MySQL, and phpMyAdmin.

1. Download XAMPP from:

```text
https://www.apachefriends.org/
```

2. Install it.
3. Open XAMPP Control Panel.
4. Start:

```text
Apache
MySQL
```

Both should show green/running.

## Step 2: Install Node.js

React needs Node.js.

1. Download Node.js from:

```text
https://nodejs.org/
```

2. Install the LTS version.
3. After installation, open Command Prompt and check:

```bash
node -v
npm -v
```

If both commands show version numbers, Node.js is installed correctly.

## Step 3: Extract the Project

Extract this zip file:

```text
wigzo-tape-php-mysql-converted.zip
```

You can place it anywhere, for example:

```text
C:\xampp\htdocs\wigzo-tape-php
```

or:

```text
Desktop\wigzo-tape-php
```

For beginners, using `C:\xampp\htdocs\wigzo-tape-php` is easiest.

## Step 4: Create the Database

If you are using the default SQLite mode, you can skip this step.

The PHP backend will automatically create this local database file:

```text
backend/database/wigzo_tape.sqlite
```

Only follow this MySQL step if you changed `db_driver` to `mysql`.

1. Start XAMPP.
2. Make sure MySQL is running.
3. Open your browser.
4. Visit:

```text
http://localhost/phpmyadmin
```

5. Click `New` on the left side.
6. Create a database named:

```text
wigzo_tape_db
```

7. Click the database name `wigzo_tape_db`.
8. Click the `Import` tab.
9. Choose this file:

```text
backend/database/schema.sql
```

10. Click `Go`.

This creates the tables.

Now import the starter data:

1. Stay inside the same database.
2. Click `Import` again.
3. Choose this file:

```text
backend/database/seed.sql
```

4. Click `Go`.

This adds:

- Admin user
- Products
- FIRSTTIME coupon

## Step 5: Configure the Backend

Open this file:

```text
backend/config/config.php
```

For XAMPP, the default settings are usually:

```php
'db_driver' => 'mysql',
'db_host' => '127.0.0.1',
'db_port' => '3306',
'db_name' => 'wigzo_tape_db',
'db_user' => 'root',
'db_pass' => '',
'jwt_secret' => 'change-this-secret-key',
'cors_origins' => 'http://localhost:3000',
```

For easiest local testing without MySQL, use:

```php
'db_driver' => 'sqlite',
```

If you are using XAMPP and you did not set a MySQL password, keep `db_pass` empty.

Important:

- `db_name` must match your database name.
- `db_user` is usually `root` on XAMPP.
- `db_pass` is usually empty on XAMPP.
- `cors_origins` should be `http://localhost:3000` when running React locally.

## Step 6: Run the PHP Backend

Open Command Prompt.

Go to the backend public folder.

Example:

```bash
cd C:\xampp\htdocs\wigzo-tape-php\backend\public
```

Start the PHP backend:

```bash
php -S localhost:8000
```

Keep this window open.

Your backend is now running at:

```text
http://localhost:8000
```

Test the backend by opening this in your browser:

```text
http://localhost:8000/api/products
```

If you see product data, the backend is working.

## Step 7: Configure the Frontend

Open this file:

```text
frontend/.env
```

It should contain:

```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

This tells React where the PHP backend is running.

## Step 8: Run the React Frontend

Open a second Command Prompt.

Go to the frontend folder.

Example:

```bash
cd C:\xampp\htdocs\wigzo-tape-php\frontend
```

Install frontend packages:

```bash
npm install --legacy-peer-deps
```

This can take a few minutes.

After installation, start the frontend:

```bash
npm start
```

The website should open automatically.

If it does not open, visit:

```text
http://localhost:3000
```

## Step 9: Login Details

Admin login:

```text
Email: admin@wigzotape.com
Password: admin123
```

Coupon code:

```text
FIRSTTIME
```

## How to Use the Website

### As a Customer

1. Open:

```text
http://localhost:3000
```

2. Browse products.
3. Register a new account.
4. Login.
5. Add products to cart.
6. Go to cart.
7. Go to checkout.
8. Try coupon code:

```text
FIRSTTIME
```

9. Place the order.
10. View your orders in dashboard.

### As an Admin

1. Open:

```text
http://localhost:3000/login
```

2. Login with:

```text
admin@wigzotape.com
admin123
```

3. Go to:

```text
http://localhost:3000/admin
```

From the admin panel, you can manage:

- Products
- Orders
- Users
- Coupons
- Blogs
- Contact forms

## Important URLs

Frontend:

```text
http://localhost:3000
```

Backend:

```text
http://localhost:8000
```

Products API:

```text
http://localhost:8000/api/products
```

phpMyAdmin:

```text
http://localhost/phpmyadmin
```

## Common Problems and Fixes

### Problem: `php` command is not recognized

This means PHP is not added to your system PATH.

Easy fix:

Use the full PHP path:

```bash
C:\xampp\php\php.exe -S localhost:8000
```

Run this command from:

```text
backend/public
```

### Problem: Backend says database error

Check these things:

1. MySQL is running in XAMPP.
2. Database name is exactly:

```text
wigzo_tape_db
```

3. `backend/config/config.php` has correct database settings.
4. You imported both:

```text
schema.sql
seed.sql
```

### Problem: React says backend not found

Check:

1. PHP backend command is still running.
2. Browser can open:

```text
http://localhost:8000/api/products
```

3. `frontend/.env` contains:

```env
REACT_APP_BACKEND_URL=http://localhost:8000
```

4. Restart React after changing `.env`.

Stop React with `Ctrl + C`, then run:

```bash
npm start
```

### Problem: npm install fails

Try:

```bash
npm cache clean --force
npm install --legacy-peer-deps
```

If it still fails, delete:

```text
frontend/node_modules
frontend/package-lock.json
```

Then run:

```bash
npm install --legacy-peer-deps
```

### Problem: Login not working

Check:

1. `seed.sql` was imported.
2. The users table has the admin user.
3. You are using:

```text
admin@wigzotape.com
admin123
```

### Problem: Port already in use

If port `8000` is busy, use another port:

```bash
php -S localhost:8001
```

Then update:

```text
frontend/.env
```

to:

```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

Restart React after changing this.

## How to Stop the Project

To stop React:

Press:

```text
Ctrl + C
```

in the React terminal.

To stop PHP backend:

Press:

```text
Ctrl + C
```