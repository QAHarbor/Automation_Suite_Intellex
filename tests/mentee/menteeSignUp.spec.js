import { test, expect } from '@playwright/test';
import { ValidMentee_SignUp, urls } from '@fixtures/test-data-mentee';
import SignUp_Mentee from '@page-objects/MenteeSignUpPage';

test.use({ headless: false });

test.describe('Mentee SignUp Tests', () => {

  test('should sign up successfully with valid credentials', async ({ page }) => {
    const signupPage = new SignUp_Mentee(page);
    await signupPage.navigateToSignUpMentee();
    await signupPage.FillSignUpForm(
      page,
      ValidMentee_SignUp.firstName,
      ValidMentee_SignUp.lastName,
      ValidMentee_SignUp.email,
      ValidMentee_SignUp.password,
      ValidMentee_SignUp.dob
    );

    // Wait for success message
    const successMessage = page.locator('.success');
    await expect(successMessage).toHaveText('User created successfully. Please check your email to verify your account.', { timeout: parseInt(process.env.TIMEOUT) });

    console.log('Assertion passed: Mentee sign up successfully with valid credentials');
  });

  test('Navigate to SignUp page and then Privacy Policy Page', async ({ page }) => {
    const SignUp = new SignUp_Mentee(page);
  
    // Open the Sign-Up page and perform actions
    await SignUp.navigateToPrivacyPage();
  
    // Listen for a new tab being opened
    const [newTab] = await Promise.all([
      page.waitForEvent('popup'), // This will wait for the new tab
    ]);
  
    // Wait for the header element to be visible in the new tab
    await newTab.waitForSelector('p.header-text', { state: 'visible' });
  
    // Retrieve the header text from the new tab
    const headerText = await newTab.textContent('p.header-text');
  
    // Assert that the header text matches the expected value
    if (headerText.trim() === 'Privacy Policy') {
      console.log('Assertion Passed: Header text matches "Privacy Policy"');
    } else {
      console.error(`Assertion Failed: Expected "Privacy Policy", but got "${headerText.trim()}"`);
    }
  });
  
  test('Navigate to SignUp page and then Terms and Condition Page', async ({ page }) => {
    const SignUp = new SignUp_Mentee(page);

    // Navigate to sign-up page and perform actions
    await SignUp.navigateToTermPage();

    // Listen for a new tab being opened (Terms & Conditions page)
    const [newTab] = await Promise.all([
      page.waitForEvent('popup'), // This waits for the new tab (Terms and Conditions page)
    ]);

    // Wait for the header element to be visible in the new tab
    await newTab.waitForSelector('p.MuiTypography-root.header-text', { state: 'visible' });

    // Retrieve the header text from the new tab
    const headerText = await newTab.textContent('p.MuiTypography-root.header-text');

    // Assert that the header text matches the expected value
    if (headerText.trim() === 'Terms & Conditions') {
      console.log('Assertion Passed: Header text matches "Terms & Conditions"');
    } else {
      console.error(`Assertion Failed: Expected "Terms & Conditions", but got "${headerText.trim()}"`);
    }
  });
  
});
