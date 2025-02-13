import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';

const { validMentorLogin, urls } = require('@fixtures/test-data-mentor')

test.use({ headless: false });

test.describe('Mentor Login Tests', () => {

    // Test Case: Mentor login sucessfully
    test('should login mentor successfully with valid credentials', async ({ page }) => {
        const mentorloginpage = new AuthPage(page);

        await mentorloginpage.navigateToLogin(urls.baseUrl);
        await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);

        // Wait for success message
        const successMessage = page.locator('.success'); // Replace with the actual class for the success toast
        await expect(successMessage).toHaveText('Signed In Successfully!', { timeout: parseInt(process.env.TIMEOUT) });

        // Wait for navigation to portal
        await page.waitForURL(`${process.env.PORTAL_URL}`);
    });

});
