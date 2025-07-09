# Setting Up Your Project on GitHub

Follow these steps to get your project on GitHub, even if you have no coding experience:

---

## 1. Create a GitHub Account
Go to [github.com](https://github.com/) and sign up for a free account if you don’t already have one.

## 2. Create a New Repository
- Click the "+" icon in the top right and select “New repository.”
- Name your repository (e.g., `StrideTrack`).
- Choose “Private” (recommended for now) or “Public.”
- Do **not** initialize with a README, .gitignore, or license (we’ll add these locally).
- Click “Create repository.”

---

# Installing Git on Windows (Command Line)

Follow these steps to install Git so you can use the command line for version control and GitHub:

## 1. Download the Git Installer
Go to: https://git-scm.com/download/win
The download should start automatically. Save the `.exe` file.

## 2. Run the Installer
Double-click the downloaded file to start the setup.

## 3. Recommended Options During Installation
You can accept the **default options** for almost everything, but here are the most important screens and what to choose:

- **Select Components:** Leave everything checked (default is fine).
- **Choosing the default editor used by Git:**
  - Leave as “Use Vim” (default) or select “Use Notepad++ as Git’s default editor” if you have Notepad++ installed.
- **Adjusting your PATH environment:**
  - Choose: **“Git from the command line and also from 3rd-party software”** (recommended).
- **Choosing HTTPS transport backend:**
  - Choose: **“Use the OpenSSL library”** (default).
- **Configuring the line ending conversions:**
  - Choose: **“Checkout Windows-style, commit Unix-style line endings”** (default).
- **Configuring the terminal emulator to use with Git Bash:**
  - Choose: **“Use MinTTY (the default terminal of MSYS2)”** (default).
- **Configuring extra options:**
  - Leave the defaults checked (enable file system caching, etc.).
- **Configuring experimental options:**
  - Leave these unchecked unless you know you need them.

## 4. Finish Installation
Click “Install” and wait for it to finish. Click “Finish” to exit the installer.

## 5. Verify Installation
Open the Start menu, search for “Git Bash,” and open it. Type:

```sh
git --version
```

You should see the installed version number.

## 6. (Optional) Set Your Name and Email for Git
In Git Bash, run:

```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

---

## 3. Connect Your Local Project to GitHub
- Open your terminal or command prompt in your project folder (e.g., `C:\Wellness`).
- Run the following commands (replace `YOUR-USERNAME` and `StrideTrack` with your actual GitHub username and repo name):

  ```sh
  git init
  git remote add origin https://github.com/YOUR-USERNAME/StrideTrack.git
  git checkout -b main
  ```

## 4. Add Your Files and Make Your First Commit
- Add all files to Git:

  ```sh
  git add .
  ```
- Commit your changes:

  ```sh
  git commit -m "Initial project setup"
  ```

## 5. Push to GitHub
- Push your code to the `main` branch:

  ```sh
  git push -u origin main
  ```

## 6. Create a Development Branch
- Create and switch to a `dev` branch for ongoing work:

  ```sh
  git checkout -b dev
  git push -u origin dev
  ```

---

## Validation Checkpoint
Go to your GitHub repository in your browser. You should see all your project files and both `main` and `dev` branches.

---

# How to Use Git: Common Commands and Workflow

Git is a tool that helps you track changes in your project, collaborate with others, and safely manage your code. Here are the most common commands and how to use them:

## 1. Initialize a Repository
Start tracking a project folder with Git:
```sh
git init
```

## 2. Check the Status
See which files have changed or are staged for commit:
```sh
git status
```

## 3. Add Files to Staging
Tell Git which files you want to include in your next commit:
```sh
git add filename.txt      # Add a specific file
# or
git add .                 # Add all changed files
```

## 4. Commit Changes
Save your staged changes with a message:
```sh
git commit -m "Describe your changes here"
```

## 5. Push Changes to GitHub
Send your commits to the remote repository:
```sh
git push                  # Push to the current branch
# or, for the first push:
git push -u origin branchname
```

## 6. Pull Latest Changes from GitHub
Update your local project with changes from the remote repository:
```sh
git pull
```

## 7. Create a New Branch
Work on a new feature or fix without affecting the main code:
```sh
git checkout -b new-feature
```

## 8. Switch Branches
Move between branches:
```sh
git checkout branchname
```

## 9. View Commit History
See a list of past commits:
```sh
git log
```

## 10. Configure Your Name and Email
Set your name and email for commits:
```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

## 11. Clone a Repository
Download a project from GitHub to your computer:
```sh
git clone https://github.com/username/repository.git
```

---

# StrideTrack Project: Initial Setup Guide (Phase 1, Task 1.1)

This guide documents all the setup steps for starting the StrideTrack project, following the Bulletproof Methodology. Each step is explained in plain English and includes example commands or actions. You do not need to be a coder to follow these instructions—just copy and paste the commands, or ask your AI assistant to run them for you.

---

## 1. Initialize Git Repository
- **What:** Create a new Git repository to track all project files and changes.
- **How:**
  1. Open a terminal or command prompt in your project folder (e.g., `C:\Wellness`).
  2. Run:
     ```sh
     git init
     git checkout -b main
     git checkout -b dev
     ```
- **Why:** This sets up version control and two main branches: `main` (for production) and `dev` (for development).

---

## 2. Set Up .gitignore
- **What:** Create a `.gitignore` file to tell Git which files/folders to ignore (e.g., dependencies, secrets).
- **How:**
  1. In the project root, create a file named `.gitignore`.
  2. Add these lines:
     ```
     node_modules/
     frontend/node_modules/
     backend/node_modules/
     .env
     .env.local
     .DS_Store
     ```
- **Why:** Prevents sensitive or unnecessary files from being tracked in Git.

---

## 3. Create Project Directory Structure
- **What:** Organize your project into logical folders.
- **How:**
  1. In your project root, create these folders:
     - `frontend`
     - `backend`
     - `docs`
     - `scripts`
     - `tests`
  2. In each folder, add a placeholder file named `README.md` (can be empty or say "Placeholder").
- **Why:** Keeps code and documentation organized from the start.

---

## 4. Set Up Code Quality Tools

**What this does:** Adds tools that help you write better code by catching errors and making it look consistent.

**Why this matters:** These tools help prevent bugs and make your code easier to read and maintain.

### Step 1: Create a package.json file
First, we need to tell npm (Node Package Manager) about our project:

```bash
npm init -y
```

**What this does:** Creates a `package.json` file that tracks your project's dependencies and scripts.

### Step 2: Install the code quality tools
Install ESLint (finds errors) and Prettier (formats code):

```bash
npm install --save-dev eslint prettier
```

**What this does:** Downloads and installs the tools we need. The `--save-dev` means these are only for development, not for running the app.

### Step 3: Set up ESLint (Error Finder)
ESLint will help you find problems in your code. Run this command:

```bash
npx eslint --init
```

**When it asks questions, choose these answers:**
- **"How would you like to use ESLint?"** → Choose "To check syntax and find problems"
- **"What type of modules does your project use?"** → Choose "JavaScript modules (import/export)"
- **"Which framework does your project use?"** → Choose "React"
- **"Does your project use TypeScript?"** → Choose "Yes"
- **"Where does your code run?"** → Choose "Browser"
- **"How would you like to define a style for your project?"** → Choose "Use a popular style guide"
- **"Which style guide do you want to follow?"** → Choose "Airbnb"
- **"What format do you want your config file to be in?"** → Choose "JavaScript"

**What this does:** Creates an ESLint configuration file that tells ESLint how to check your code.

### Step 4: Set up Prettier (Code Formatter)
Prettier will automatically format your code to look nice. Create a configuration file:

```bash
echo '{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}' > .prettierrc
```

**What this does:** Creates a `.prettierrc` file that tells Prettier how to format your code.

### Step 5: Add helpful commands to package.json
Open your `package.json` file and add these lines to the "scripts" section:

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint . --ext .js,.jsx,.ts,.tsx",
  "lint:fix": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
  "format": "prettier --write .",
  "format:check": "prettier --check ."
}
```

**What these commands do:**
- `npm run lint` - Check your code for problems
- `npm run lint:fix` - Fix problems automatically (when possible)
- `npm run format` - Format your code to look nice
- `npm run format:check` - Check if your code is properly formatted

### Step 6: Test that everything works
Try running the tools to make sure they work:

```bash
npm run lint
npm run format
```

**What to expect:** 
- If there are no errors, you'll see a success message
- If there are errors, the tools will tell you what needs to be fixed

### How to use these tools:
- **Before committing code:** Run `npm run lint` to check for problems
- **To fix formatting:** Run `npm run format` to make your code look nice
- **To fix errors automatically:** Run `npm run lint:fix` (fixes what it can)

**Note:** These are manual commands - you run them when you want to check your code. This is simpler than automatic hooks that might block your commits.

---

## 5. Set Up Docker & Environment Management
- **What:** Use Docker to run your app and database in isolated containers, and environment files for secrets/config.
- **How:**
  1. In the project root, create a `Dockerfile` and `docker-compose.yml` for both frontend and backend (templates can be provided).
  2. Add `.env.example` files in both `frontend` and `backend` to show what environment variables are needed.
- **Why:** Makes it easy to run the project anywhere and keeps secrets out of code.

---

## 6. Team Onboarding Instructions
- **What:** Write clear steps for new team members to get started.
- **How:**
  1. In the `docs` folder, create a file called `ONBOARDING.md`.
  2. List the steps: clone the repo, install dependencies, run Docker, etc.
- **Why:** Helps new contributors get up and running quickly.

---

## 7. Validation Checkpoint
- **Goal:** All team members (or you, with AI help) can clone the repo, install dependencies, and run a "Hello World" in both frontend and backend using local setup.

---

## 8. Optional: Add Docker Later (When Ready to Ship)

**When to add Docker:** After your app is working locally and you're ready to deploy or share it with others.

**Why Docker is optional for beginners:**
- Focus on learning core technologies first (React, Node.js, databases)
- Docker adds complexity that can be overwhelming when starting out
- You can always add it later when you understand how everything works

### How to Add Docker Later:

**Step 1: Create a Dockerfile for your frontend**
- Tells Docker how to build and run your React app
- Simple file that says "take my React code and run it in a container"

**Step 2: Create a Dockerfile for your backend**
- Tells Docker how to build and run your Node.js API
- Simple file that says "take my Node.js code and run it in a container"

**Step 3: Create docker-compose.yml**
- Tells Docker how to run frontend, backend, and database together
- One command to start everything: `docker-compose up`

**Step 4: Test with Docker**
- Should work exactly the same as your local setup
- Now you can deploy to any server that supports Docker

### Benefits of Adding Docker Later:
- **Easy deployment** - Works the same everywhere
- **Team collaboration** - Everyone has the same environment
- **Professional setup** - Industry standard for modern apps
- **Scalability** - Easy to run multiple instances

**Note:** Docker is much easier to add after your app is working. You'll appreciate it more when you understand what it's doing!

---

# Phase 1, Task 1.2: Core Infrastructure

## 1. Initialize the Frontend
- **What:** Set up the frontend app using React, TypeScript, and Tailwind CSS.
- **How:**
  1. Open a terminal in your project root.
  2. Run:
     ```sh
     npx create-react-app frontend --template typescript
     ```
  3. Change into the frontend directory:
     ```sh
     cd frontend
     ```
  4. Install Tailwind CSS:
     ```sh
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```
  5. Configure Tailwind by editing `tailwind.config.js` and adding Tailwind to your CSS (ask your AI assistant for details if needed).
- **Why:** This creates a modern, maintainable frontend foundation.

## 2. Initialize the Backend
- **What:** Set up the backend using Node.js, Express, and TypeScript.
- **How:**
  1. In your project root, run:
     ```sh
     mkdir backend
     cd backend
     npm init -y
     npm install express
     npm install --save-dev typescript ts-node @types/node @types/express
     npx tsc --init
     ```
  2. Create a basic Express server file (e.g., `index.ts`).
  3. Add a health check endpoint (`/api/health`).
- **Why:** This provides a robust backend API foundation.

## 3. Set Up the Database (PostgreSQL Local Installation)

### Option A: Local PostgreSQL Installation (Recommended for Beginners)

**What:** Install PostgreSQL directly on your computer for development and learning.

**Why:** Easier to understand, no Docker complexity, works offline, perfect for learning.

#### Step 1: Download PostgreSQL
1. Go to: https://www.postgresql.org/download/windows/
2. Click "Download the installer"
3. Choose the latest version (PostgreSQL 16.x)
4. Download the Windows x86-64 installer

#### Step 2: Install PostgreSQL
1. **Run the installer:**
   - Find the downloaded file (usually in Downloads folder)
   - Double-click to run the installer
   - Click "Next" to start

2. **Installation options (use these recommended settings):**
   - **Installation Directory:** Keep default (`C:\Program Files\PostgreSQL\16\`)
   - **Data Directory:** Keep default (`C:\Program Files\PostgreSQL\16\data\`)
   - **Password:** Set a password for the `postgres` user (write this down!)
   - **Port:** Keep default (5432)
   - **Locale:** Keep default

3. **Complete installation:**
   - Click through remaining steps
   - Let it install all components
   - Click "Finish" when done

#### Step 3: Verify Installation
1. Open Command Prompt or PowerShell
2. Test the connection:
   ```bash
   psql --version
   ```
3. You should see the PostgreSQL version number

#### Step 4: Create Database for StrideTrack
1. Open Command Prompt or PowerShell
2. Connect to PostgreSQL as the postgres user:
   ```bash
   psql -U postgres
   ```
3. Enter the password you set during installation
4. Create the database:
   ```sql
   CREATE DATABASE stridetrack;
   ```
5. Verify the database was created:
   ```sql
   \l
   ```
6. Exit PostgreSQL:
   ```sql
   \q
   ```

#### Step 5: Install Database Driver for Node.js
1. In your backend directory, install the PostgreSQL driver:
   ```bash
   cd backend
   npm install pg
   npm install --save-dev @types/pg
   ```

#### Step 6: Test Database Connection
1. Create a simple test file to verify connection (ask your AI assistant for help)
2. Test that your backend can connect to the database

### Option B: Docker PostgreSQL (Advanced - Add Later)

**When to use:** After your app is working locally and you're ready for deployment.

**What:** Use Docker to run PostgreSQL in a container.

**How:**
1. In your project root, create a `docker-compose.yml` file
2. Add a PostgreSQL service
3. Add `.env.example` files for database connection info

**Why:** Makes deployment easier and ensures consistent environments across different machines.

### Database Schema Setup (For Both Options)

**What:** Create the database tables for StrideTrack.

**Tables needed:**
- **Users:** Store user account information
- **WeeklySubmissions:** Store weekly weight, exercise, and calorie data
- **BonusChallenges:** Store bonus challenge submissions

**How:** Your AI assistant will help you create the SQL commands to set up these tables.

**Why:** Without tables, you can't store any data in the database.

### Troubleshooting Common Database Issues

#### Issue 1: "psql is not recognized"
**Problem:** PostgreSQL command line tools aren't in your PATH.
**Solution:** 
1. Restart your computer after installation
2. Or add PostgreSQL to your PATH manually:
   - Add `C:\Program Files\PostgreSQL\16\bin` to your system PATH

#### Issue 2: "Connection refused" when connecting to database
**Problem:** PostgreSQL service isn't running.
**Solution:**
1. Open Services (Windows + R, type `services.msc`)
2. Find "PostgreSQL" service
3. Make sure it's running (if not, right-click and select "Start")

#### Issue 3: "Authentication failed" when connecting
**Problem:** Wrong password or username.
**Solution:**
1. Make sure you're using the password you set during installation
2. Try connecting as: `psql -U postgres -h localhost`

#### Issue 4: "Database does not exist"
**Problem:** You haven't created the stridetrack database yet.
**Solution:**
1. Connect to PostgreSQL: `psql -U postgres`
2. Create the database: `CREATE DATABASE stridetrack;`

#### Issue 5: "Module not found: pg" in Node.js
**Problem:** PostgreSQL driver not installed.
**Solution:**
1. In your backend directory: `npm install pg @types/pg`

**Remember:** If you get stuck, your AI assistant can help you troubleshoot any database issues!

## 4. Set Up Environment Variable Management

**What:** Use `.env` files to store secrets and configuration (like database passwords).

**Why:** Keeps sensitive information out of your code and makes it easy to change settings.

### Step 1: Install dotenv for Backend
1. In your backend directory:
   ```bash
   cd backend
   npm install dotenv
   ```

### Step 2: Create Environment Files
1. **In the backend directory, create `.env.example`:**
   ```
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=stridetrack
   DB_USER=postgres
   DB_PASSWORD=your_password_here
   
   # Server Configuration
   PORT=3001
   
   # JWT Secret (for authentication)
   JWT_SECRET=your_jwt_secret_here
   ```

2. **Create your actual `.env` file:**
   - Copy `.env.example` to `.env`
   - Replace `your_password_here` with your actual PostgreSQL password
   - Replace `your_jwt_secret_here` with a random string (for security)

3. **In the frontend directory, create `.env.example`:**
   ```
   # API Configuration
   REACT_APP_API_URL=http://localhost:3001
   ```

### Step 3: Update .gitignore
Make sure your `.gitignore` file includes:
```
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

**Important:** Never commit `.env` files to Git - they contain sensitive information!

### Step 4: Load Environment Variables in Backend
In your main server file (`backend/src/index.ts`), add this at the top:
```typescript
import dotenv from 'dotenv';
dotenv.config();
```

**What this does:** Loads your environment variables so your app can use them.

### Step 5: Test Environment Variables
Create a simple test to make sure your database connection works:
```typescript
// Test database connection
console.log('Database Host:', process.env.DB_HOST);
console.log('Database Name:', process.env.DB_NAME);
```

**Why this matters:** Environment variables keep your database password and other secrets safe and make your app work in different environments (development, production, etc.).

## 5. Set Up CI/CD Pipeline
- **What:** Automate code checks and tests on every push.
- **How:**
  1. In your project root, create a `.github/workflows/ci.yml` file (if using GitHub).
  2. Add steps to install dependencies, run linters, and run tests for both frontend and backend (ask your AI assistant for a template if needed).
- **Why:** Ensures code quality and catches errors early.

## 6. Validation Checkpoint
- **Goal:** Both frontend and backend run locally and in Docker, backend connects to the database, and the CI pipeline passes.

---
