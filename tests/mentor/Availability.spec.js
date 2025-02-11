import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';
import Availability from '@page-objects/MentorAvailability';

const { validMentorLogin, urls } = require('@fixtures/test-data-mentor');

test.use({ headless: false });

test.describe('Mentor Availability Tests', () => {
  // Test Case: Mentor login successfully and pick an extra date
  test('Should pick extra date and override', async ({ page }) => {
    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
    await page.waitForTimeout(5000);

    // Wait for success message
    const successMessage = page.locator('.success'); // Replace with the actual class for the success toast
    await expect(successMessage).toHaveText('Signed In Successfully!', { timeout: parseInt(process.env.TIMEOUT) });

    // Wait for navigation to portal
    await page.waitForURL(`${process.env.PORTAL_URL}`);

    const availablepage = new Availability(page);
    await availablepage.NavigatetoAvailability();
    await availablepage.AddAvailableDate();

    // Pause to allow manual inspection (can be removed later)
    console.log('Successfully picked an extra date');
  });

  // Test Case: Mentor can view availability
  test('User can view availability', async ({ page }) => {
    const mentorLoginPage = new AuthPage(page);

    // Navigate to login page
    await mentorLoginPage.navigateToLogin(urls.baseUrl);
    await mentorLoginPage.login(validMentorLogin.email, validMentorLogin.password);

    // Wait for success message
    const successMessage = page.locator('.success'); // Update class if needed
    await expect(successMessage).toHaveText('Signed In Successfully!', { timeout: parseInt(process.env.TIMEOUT) });

    // Wait for navigation to the portal
    await expect(page).toHaveURL(`${process.env.PORTAL_URL}`);

    // Navigate to the availability page
    const availablePage = new Availability(page);
    await availablePage.NavigatetoAvailability();

    // Verify availability section is visible
    const availabilitySection = page.getByText('Monday'); // Ensure correct selector
    await expect(availabilitySection).toBeVisible({ timeout: 5000 });

    console.info('✅ Availability page is successfully loaded and visible.');
  });

});
