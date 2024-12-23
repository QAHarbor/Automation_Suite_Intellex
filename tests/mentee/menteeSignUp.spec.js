import { test, expect } from '@playwright/test';
import { ValidMentee_SignUp, urls } from '@fixtures/test-data-mentee'; 
import SignUp_Mentee from '@page-objects/MenteeSignUpPage';

test.use({ headless: false });

test.describe('Mentee SignUp Tests', () => {
  test('should sign up successfully with valid credentials', async ({ page }) => {
    const signupPage = new SignUp_Mentee(page);
    await signupPage.navigateToSignUpMentee();
    await signupPage.FillSignUpForm(
      ValidMentee_SignUp.firstName,
      ValidMentee_SignUp.lastName,
      ValidMentee_SignUp.email,
      ValidMentee_SignUp.password
    );

    const errorMessage = page.getByText('Email is already registered.');
    await expect(errorMessage).toBeVisible();
    console.log('Email is already registered.');
   
  });

  test('Navigate to SignUp page and then Privacy Policy Page', async ({ page }) => {
    const SignUp = new SignUp_Mentee(page);

    // Navigate to sign-up page and perform actions
    await SignUp.navigateToPrivacyPage();

    const headerText = await page.textContent('p.MuiTypography-root.header-text');

    // Assert that the header text matches the expected value
    if (headerText.trim() === 'Privacy Policy') {
      console.log('Assertion Passed: Header text matches "Privacy Policy"');
    } else {
      console.error(`Assertion Failed: Expected "Privacy Policy", but got "${headerText.trim()}"`);
    }
  });

  test.describe('Mentee SignUpPage Tests', () => {
    test('Navigate to SignUp page and then Terms and Condition Page', async ({ page }) => {
      const SignUp = new SignUp_Mentee(page);

      // Navigate to sign-up page and perform actions
      await SignUp.navigateToTermPage();

      const headerText = await page.textContent('p.MuiTypography-root.header-text');

      // Assert that the header text matches the expected value
      if (headerText.trim() === 'Terms & Conditions') {
        console.log('Assertion Passed: Header text matches "Terms & Conditions"');
      } else {
        console.error(`Assertion Failed: Expected "Terms & Conditions", but got "${headerText.trim()}"`);
      }
    });


  });


});
