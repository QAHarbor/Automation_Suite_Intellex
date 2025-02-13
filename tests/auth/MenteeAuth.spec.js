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

        // Wait for success message
        const successMessage = page.locator('.success'); // Replace with the actual class for the success toast
        await expect(successMessage).toHaveText('Signed In Successfully!', { timeout: parseInt(process.env.TIMEOUT) });

        // Wait for navigation to portal
        await page.waitForURL(`${process.env.PORTAL_URL}`);
    });

   
    test('should fail to log in with invalid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        // Navigate to login page
        await authPage.navigateToLogin(urls.baseUrl);

        // Perform login with invalid credentials
        await authPage.login(invalidCredentials.email, invalidCredentials.password);

        // Assert that the error message "Incorrect email or password" is visible on the page
        const errorMessage = await page.locator('.error');
        // await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText('Incorrect email or password', { timeout: parseInt(process.env.TIMEOUT) });
    
    });
});
