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
- **What:** Add tools to automatically check and format your code.
- **How:**
  1. In both `frontend` and `backend`, you will later run:
     ```sh
     npm install --save-dev prettier eslint husky
     ```
  2. Add configuration files for Prettier and ESLint (these can be generated or copied from templates).
  3. Set up Husky to run checks before each commit.
- **Why:** Ensures code is clean, consistent, and error-free.

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
- **Goal:** All team members (or you, with AI help) can clone the repo, install dependencies, and run a "Hello World" in both frontend and backend using Docker or local setup.

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

## 3. Set Up the Database
- **What:** Use Docker to run a PostgreSQL (or MongoDB) database.
- **How:**
  1. In your project root, create a `docker-compose.yml` file.
  2. Add a service for the database (ask your AI assistant for a template if needed).
  3. Add `.env.example` files in both frontend and backend for database connection info.
- **Why:** This ensures your data is stored safely and can be accessed by the backend.

## 4. Set Up Environment Variable Management
- **What:** Use `.env` files to store secrets and configuration.
- **How:**
  1. In both `frontend` and `backend`, create a `.env.example` file listing required variables (e.g., DB connection string, JWT secret).
  2. Never commit real `.env` files to Git.
- **Why:** Keeps sensitive info out of your codebase.

## 5. Set Up CI/CD Pipeline
- **What:** Automate code checks and tests on every push.
- **How:**
  1. In your project root, create a `.github/workflows/ci.yml` file (if using GitHub).
  2. Add steps to install dependencies, run linters, and run tests for both frontend and backend (ask your AI assistant for a template if needed).
- **Why:** Ensures code quality and catches errors early.

## 6. Validation Checkpoint
- **Goal:** Both frontend and backend run locally and in Docker, backend connects to the database, and the CI pipeline passes.

---
