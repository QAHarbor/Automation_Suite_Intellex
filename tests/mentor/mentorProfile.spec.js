import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';
import MentorProfile from '@page-objects/MentorProfile';

const { validVolunteer, urls, validMentorLogin } = require('@fixtures/test-data-mentor');

test.use({ headless: false });

test.describe('Mentor Profile Test Cases', () => {
  test('Successfully Make mentor volunteer', async ({ page }) => {
    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validVolunteer.email, validVolunteer.password);
    
    // Wait for success message
    const successMessage = page.locator('.success'); // Replace with the actual class for the success toast
    await expect(successMessage).toHaveText('Signed In Successfully!', { timeout: parseInt(process.env.TIMEOUT) });

    // Wait for navigation to portal
    await page.waitForURL(`${process.env.PORTAL_URL}`);

    const profilepage = new MentorProfile(page);
    await profilepage.NavigateToProfile();
    await profilepage.MakeVolunteer();
  });

  test('Login successfully with valid credentials and change password', async ({ page }) => {
    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
    await page.waitForTimeout(parseInt(process.env.TIMEOUT));

    const profilepage = new MentorProfile(page);

    await profilepage.NavigateToProfile();
    await profilepage.PasswordChange('Password#123', 'Password#123');

    await page.waitForTimeout(parseInt(process.env.TIMEOUT));
  });

  test('Login successfully with valid credentials and see notifcations', async ({ page }) => {
    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
    await page.waitForTimeout(parseInt(process.env.TIMEOUT));

    const profilepage = new MentorProfile(page);

    await profilepage.NavigateToProfile();
    await profilepage.NotificationVisit();

    console.log('Sucessfully See all Notifications');
  });

  test('Login successfully and see own profile', async ({ page }) => {
    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
    await page.waitForTimeout(parseInt(process.env.TIMEOUT));

    const profilepage = new MentorProfile(page);
    await profilepage.NavigateToProfile();
    await profilepage.VisitOwnProfile()


    console.log('Sucessfully See Mentors own profile');

  });

  test('Mentor can update bio', async ({ page }) => {

    const mentorloginpage = new AuthPage(page);

    await mentorloginpage.navigateToLogin(urls.baseUrl);
    await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
    await page.waitForTimeout(parseInt(process.env.TIMEOUT));

    const profilepage = new MentorProfile(page);

    await profilepage.NavigateToProfile();
    await profilepage.UpdateBio('I am a new user and excited to be here!', 'I have worked as a software engineer for 2 years.', 'I have a degree in Computer Science.', ' because it offers great growth opportunities.', 'Take risks and trust your instincts');

    await page.waitForTimeout(parseInt(process.env.TIMEOUT));

    // Add the final check or any expectations needed
    console.log('Sucessfully Updated Mentor Bio');

  });
});
