# Git Help: Common Commands, Workflow, and Explanations

This page is a beginner-friendly reference for using Git. It covers the most common commands, explains what each does, and provides examples. Use this as your cheat sheet as you learn!

---

## General Git Workflow

1. **Clone or initialize a repository**
2. **Create or switch to a branch**
3. **Make changes to your files**
4. **Check the status of your changes**
5. **Stage your changes**
6. **Commit your changes with a message**
7. **Push your changes to GitHub**
8. **Pull the latest changes from GitHub**
9. **Merge branches as needed**

---

## 1. Repository Setup

### Clone a repository from GitHub
```sh
git clone https://github.com/username/repository.git
```
- Downloads a copy of a remote repository to your computer.

### Initialize a new repository
```sh
git init
```
- Starts tracking the current folder with Git.

---

## 2. Configuration

### Set your name and email (for all commits)
```sh
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```
- Sets your identity for all repositories on your computer.

### View your configuration
```sh
git config --global --list
```
- Shows your current Git settings.

---

## 3. Checking Status and History

### Check the status of your files
```sh
git status
```
- Shows which files are changed, staged, or untracked.

### View commit history
```sh
git log
```
- Shows a list of past commits.

### View a simple, one-line log
```sh
git log --oneline
```
- Shows a compact list of commits.

---

## 4. Working with Branches

### List all branches
```sh
git branch
```
- Shows all local branches. The current branch has a * next to it.

### Create and switch to a new branch
```sh
git checkout -b new-branch
```
- Creates a new branch and switches to it.

### Switch to an existing branch
```sh
git checkout branchname
```
- Switches to another branch.

### (Modern) Create and switch to a new branch
```sh
git switch -c new-branch
```

### (Modern) Switch to an existing branch
```sh
git switch branchname
```

### Delete a branch
```sh
git branch -d branchname
```
- Deletes a branch (only if it’s fully merged).

---

## 5. Staging and Committing Changes

### Add a specific file to staging
```sh
git add filename.txt
```
- Stages a file for commit.

### Add all changed files to staging
```sh
git add .
```
- Stages all changes in the current directory.

### Commit staged changes with a message
```sh
git commit -m "Describe your changes"
```
- Saves your staged changes to the repository.

---

## 6. Pushing and Pulling

### Push your branch to GitHub
```sh
git push
```
- Sends your commits to the remote repository.

### Push a new branch and set upstream
```sh
git push -u origin branchname
```
- Pushes a new branch and sets it as the default for future pushes.

### Pull the latest changes from GitHub
```sh
git pull
```
- Updates your local branch with changes from the remote repository.

---

## 7. Merging and Collaboration

### Merge another branch into your current branch
```sh
git merge branchname
```
- Combines changes from another branch into your current branch.

### Resolve merge conflicts
- If you see a conflict, open the file, look for lines marked with <<<<<<<, =======, and >>>>>>>, and edit as needed. Then:
```sh
git add conflictedfile.txt
```
- After resolving all conflicts:
```sh
git commit
```

---

## 8. Undoing Changes

### Undo changes in a file (restore from last commit)
```sh
git checkout -- filename.txt
```
- Discards local changes in a file.

### Unstage a file (remove from staging area)
```sh
git reset HEAD filename.txt
```
- Removes a file from the staging area but keeps your changes.

### Amend the last commit (change the message or add files)
```sh
git commit --amend
```
- Lets you modify the last commit.

---

## 9. Other Useful Commands

### See remote repositories
```sh
git remote -v
```
- Shows the URLs of your remote repositories.

### Fetch changes from remote (but don’t merge)
```sh
git fetch
```
- Downloads new data from the remote but doesn’t change your files.

### Show differences between commits or branches
```sh
git diff
```
- Shows what has changed but not yet staged.

---

## Example Workflow: Create, Commit, Push, and Merge

1. **Create a new branch for your work:**
   ```sh
   git checkout -b feature/my-feature
   ```
2. **Make changes to your files.**
3. **Check the status:**
   ```sh
   git status
   ```
4. **Stage your changes:**
   ```sh
   git add .
   ```
5. **Commit your changes:**
   ```sh
   git commit -m "Add my new feature"
   ```
6. **Push your branch to GitHub:**
   ```sh
   git push -u origin feature/my-feature
   ```
7. **Open a Pull Request on GitHub to merge your branch into main or dev.**
8. **After review, merge the branch on GitHub.**
9. **Pull the latest changes to your local main/dev branch:**
   ```sh
   git checkout main
   git pull
   ```

---

**Tip:** If you ever get stuck, use `git status` to see what's going on!

---

## 🚨 TROUBLESHOOTING: Git Lock File Issues

### **Problem: "Another git process seems to be running"**
If you see this error:
```
fatal: Unable to create 'C:/StrideTrack/.git/index.lock': File exists.
Another git process seems to be running in this repository
```

### **Solution: Remove the lock file**
```bash
Remove-Item .git\index.lock
```

### **Then try your command again:**
```bash
git commit -m "Your commit message"
```

### **Why this happens:**
- Git process didn't finish properly (like when Vim editor gets stuck)
- Git creates a lock file to prevent conflicts
- The lock file needs to be manually removed

### **Prevention:**
- Always close Git editors properly
- Use `git commit -m "message"` instead of just `git commit` to avoid opening editors
- If you get stuck in Vim, press `Esc` then type `:q!` and press Enter 