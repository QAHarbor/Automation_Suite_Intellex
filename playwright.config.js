// playwright.config.js

module.exports = {
  testDir: './tests',  // Directory for your test files
  timeout: 2000000,      // Timeout for each test
  retries: 0,          // Number of retries for failed tests
  reporter: [
    ['html', { open: 'never' }],          // HTML reporter
    ['json', { outputFile: 'test-results.json' }],  // JSON reporter
    ['allure-playwright'],  // Allure reporter
  ],
  use: {
    baseURL: process.env.BASE_URL,  // Set your base URL if needed
    headless: true,                // Set to false to see the browser
    viewport: { width: 1280, height: 720 },  // Browser viewport size
  },
  workers: 4,
  testMatch: [
    '**/*.spec.js',    // Match test files ending with .spec.js
    '**/*.test.js',    // Match test files ending with .test.js
  ],

};
