import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage'; 

const { validCredentials, invalidCredentials, urls } = require('../fixtures/test-data');

test.use({headless : false})

test.describe('Mentee Login Tests', () => {
    test('should log in successfully with valid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        // Navigate to login page
        await authPage.navigateToLogin(urls.baseUrl);

        // Perform login with valid credentials
        await authPage.login(validCredentials.email, validCredentials.password);

        await page.waitForTimeout(5000);
    });

   
    test('should fail to log in with invalid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        // Navigate to login page
        await authPage.navigateToLogin(urls.baseUrl);

        // Perform login with invalid credentials
        await authPage.login(invalidCredentials.email, invalidCredentials.password);

    // Assert that the error message "Incorrect email or password" is visible on the page
  const errorMessage = await page.locator('text=Incorrect email or password');
  await expect(errorMessage).toBeVisible();

    
    });
});
