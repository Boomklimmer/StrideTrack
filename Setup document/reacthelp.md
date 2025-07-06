# React Help: Common Commands, Workflow, and Explanations

This page is a beginner-friendly reference for using React in the StrideTrack project. It covers the most common commands, explains what each does, and provides examples. Use this as your cheat sheet as you learn React!

---

## General React Development Workflow

1. **Navigate to your React project folder**
2. **Start the development server**
3. **Make changes to your code**
4. **See changes instantly in the browser (hot reload)**
5. **Test your changes**
6. **Build for production when ready**
7. **Deploy your application**

---

## 1. Project Setup and Navigation

### Navigate to your React project folder
```bash
cd frontend
```
- Moves you into the React project directory where you can run React commands.

### Check if you're in the right folder
```bash
dir
```
- Shows the files in your current directory. You should see files like `package.json`, `src/`, `public/`, etc.

---

## 2. Development Server Commands

### Start the development server
```bash
npm start
```
- Starts the React development server
- Opens your app in your default web browser (usually at http://localhost:3000)
- Enables "hot reloading" - changes to your code appear instantly in the browser
- **Keep this running** while you're developing

### Stop the development server
```bash
Ctrl + C
```
- Stops the development server
- Use this when you're done working or need to restart the server

### Restart the development server
```bash
npm start
```
- Use this if the server gets stuck or you make changes to configuration files

---

## 3. Building and Testing

### Build your app for production
```bash
npm run build
```
- Creates optimized files for production
- Puts the built files in a `build/` folder
- This is what you'll deploy to a web server

### Run tests
```bash
npm test
```
- Starts the test runner
- Runs automated tests to check if your code works correctly
- Press `q` to quit the test runner

### Run tests once (without watching)
```bash
npm test -- --watchAll=false
```
- Runs all tests once and then stops
- Good for checking if everything works before committing

---

## 4. Package Management

### Install a new package
```bash
npm install package-name
```
- Installs a new package and adds it to your project
- Example: `npm install axios` (for making HTTP requests)

### Install a development-only package
```bash
npm install --save-dev package-name
```
- Installs a package that's only needed during development
- Example: `npm install --save-dev @types/react` (TypeScript types)

### Update packages
```bash
npm update
```
- Updates all packages to their latest compatible versions

### Check for security issues
```bash
npm audit
```
- Checks your packages for known security vulnerabilities

### Fix security issues automatically
```bash
npm audit fix
```
- Automatically fixes security issues when possible

---

## 5. Project Configuration

### View your project configuration
```bash
npm list
```
- Shows all installed packages and their versions

### View package.json
```bash
notepad package.json
```
- Opens your project configuration file
- Shows dependencies, scripts, and project settings

### Check React version
```bash
npm list react
```
- Shows which version of React you're using

---

## 6. Common Development Tasks

### Create a new component file
```bash
echo // New React component > src/components/MyComponent.tsx
```
- Creates a new file for a React component
- Replace `MyComponent` with your component name

### Check for TypeScript errors
```bash
npx tsc --noEmit
```
- Checks your TypeScript code for errors without building
- Shows any type errors in your code

### Format your code
```bash
npm run format
```
- Formats your code using Prettier (if configured)
- Makes your code look consistent and readable

### Check for code issues
```bash
npm run lint
```
- Checks your code for potential problems using ESLint
- Shows warnings and errors that should be fixed

---

## 7. Troubleshooting

### Clear npm cache
```bash
npm cache clean --force
```
- Clears the npm cache if you're having package installation issues

### Delete node_modules and reinstall
```bash
rmdir /s node_modules
npm install
```
- Deletes all installed packages and reinstalls them
- Use this if packages are corrupted or causing issues

### Check for port conflicts
```bash
netstat -ano | findstr :3000
```
- Shows if something else is using port 3000
- If React can't start, another app might be using the port

---

## 8. File Structure Understanding

### Key folders and files:
- **`src/`** - Your React source code goes here
- **`public/`** - Static files (images, HTML template)
- **`package.json`** - Project configuration and dependencies
- **`tsconfig.json`** - TypeScript configuration
- **`node_modules/`** - Installed packages (don't edit this)

### Important source files:
- **`src/App.tsx`** - Main application component
- **`src/index.tsx`** - Entry point of your app
- **`src/components/`** - Your custom React components
- **`src/pages/`** - Page-level components

---

## Example Workflow: Create a New Feature

1. **Start the development server:**
   ```bash
   cd frontend
   npm start
   ```

2. **Create a new component file:**
   ```bash
   echo // New component > src/components/MyFeature.tsx
   ```

3. **Edit the component file** in your code editor

4. **See changes instantly** in the browser (hot reload)

5. **Test your changes:**
   ```bash
   npm test
   ```

6. **Check for code issues:**
   ```bash
   npm run lint
   ```

7. **Format your code:**
   ```bash
   npm run format
   ```

8. **Build for production when ready:**
   ```bash
   npm run build
   ```

---

## StrideTrack-Specific Commands

### For the StrideTrack project, you'll also use:
- **`npm run lint`** - Check code quality (ESLint)
- **`npm run format`** - Format code (Prettier)
- **`npm run lint:fix`** - Fix code issues automatically
- **`npm run format:check`** - Check if code is properly formatted

---

**Tip:** If you ever get stuck, check the terminal output for error messages and use `npm start` to restart the development server! 