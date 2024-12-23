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

    const availablepage = new Availability(page);
    await availablepage.NavigatetoAvailability();
    await availablepage.AddAvailableDate();

    // Pause to allow manual inspection (can be removed later)
    console.log('Successfully picked an extra date');
  });

  // Test Case: Mentor can view availability
  test('Able to see availability', async ({ page }) => {
    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
    await page.waitForTimeout(2000);

    const availablepage = new Availability(page);
    await availablepage.NavigatetoAvailability();

    // Pause to allow manual inspection (can be removed later)
    console.log('Successfully viewed availability');
  });
});
