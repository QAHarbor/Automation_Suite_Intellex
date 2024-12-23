# IntellEx Academic Testing Framework

## Overview
This project uses **Playwright** for running end-to-end tests on the **IntellEx Academic platform**. The framework ensures the platform functions as expected across different environments.

---

## 🛠️ Environment Setup

### 1. Check Node.js Installation
Ensure **Node.js** is installed:
```bash
node -v
```
If not installed, download it from [Node.js](https://nodejs.org/).

### 2. Clone the Repository and Install Dependencies
Clone the project and install the required dependencies:
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
npm playwright install
```

### 3. Install Allure Commandline (Optional)
To generate Allure reports, install the Allure command line:
```bash
npm install -g allure-commandline --save-dev
npm install allure-playwright --save-dev
```

---

## 🚀 Running Tests

### 1. Run All Tests
To run all test cases across the entire project, simply use:
```bash
npx playwright test
```
This will execute all tests defined in the project, running through each test suite in the repository.

### 2. Run a Specific Test Suite
To run a specific test suite (e.g., `HomePage.spec.js`), use:
```bash
npx playwright test HomePage.spec.js
```
This command runs only the `HomePage.spec.js` test suite, so you can isolate specific tests for debugging or specific testing needs.

### 3. View HTML Test Report
To generate and view the HTML report after running tests:
```bash
npx playwright show-report
```

---

## 🗂️ Project Structure

Here's the directory structure for better understanding:
```plaintext
/intell-ex-academic
├── /auth                   # Auth-related test suites
├── /home                   # Home page tests
├── /mentee                 # Mentee-specific tests
├── /mentor                 # Mentor-related tests
├── /page-objects           # Page Object Model files
├── /fixtures               # Test data files
├── /allure-results         # Allure results directory
├── package.json            # Project dependencies
├── playwright.config.js     # Playwright config file
└── README.md               # This file
```

---

## 📊 Generating Allure Reports

### 1. Run Tests with Allure Reporter
To generate Allure-compatible results, run tests with the Allure Playwright reporter:
```bash
npx playwright test --reporter=allure-playwright
```

### 2. Generate and Open Allure Report
Generate the Allure report and open it:
```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## ⚙️ Useful Commands

| Command | Description |
|---------|-------------|
| `npx playwright test` | Run all tests in the project |
| `npx playwright test HomePage.spec.js` | Run specific test suite (`HomePage.spec.js`) |
| `npx playwright show-report` | View HTML report after running tests |
| `npx playwright test --reporter=allure-playwright` | Run tests with Allure reporter |
| `allure generate allure-results --clean -o allure-report` | Generate Allure report |
| `allure open allure-report` | Open Allure report in browser |

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them.
4. Push to your fork and create a pull request.

---

## 📝 License
This project is licensed under the [MIT License](LICENSE).
```

### Key Updates:
- **Run All Tests**: Use `npx playwright test` to run **all** test suites in the project.
- **Run Specific Test Suite**: Use `npx playwright test HomePage.spec.js` to run a **specific test suite** (for example, `HomePage.spec.js`).
- **Simplified Flow**: The instructions are streamlined for easier understanding, with the most essential commands for running tests and viewing reports.

This structure should now clearly differentiate between running all tests and running a specific test suite. Let me know if this works or if you'd like any further modifications!
