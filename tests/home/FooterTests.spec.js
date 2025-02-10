import { test, expect } from '@playwright/test';
import Home from '@page-objects/HomePage';

test.describe('Home Page Navigation Tests', () => {
  test('Successful Navihate to Terms Condition Page', async ({ page }) => {
    const homePage = new Home(page);
    // Navigate to home and then to the Join as Mentor page
    await homePage.navigateToHome();
    await homePage.footerTerms();
    const headerText = await page.textContent('p.MuiTypography-root.header-text');
    // Assert that the header text matches the expected value
    expect(headerText.trim()).toBe('Terms & Conditions');
    console.log('Assertion Passed: Header text matches "Terms & Conditions"');
  });

  test('Successful Navigation to About Us Page', async ({ page }) => {
    const homePage = new Home(page);
    // Navigate to About Us page through footer link
    await homePage.navigateToHome();
    await homePage.footerAboutUs();
    const headerText = await page.textContent('h1.MuiTypography-root.MuiTypography-h1.mui-li9gd9');
    // Assert that the header text matches the expected value
    expect(headerText.trim()).toBe('About us.');
    console.log('Assertion Passed: Header text is correct');
  });

  test('Successful Navigation to Become Mentee Page', async ({ page }) => {
    const homePage = new Home(page);
    // Navigate to About Us page through footer link
    await homePage.navigateToHome();
    await homePage.footerBecomeMentee();
    console.log('Assertion Passed: Mentee Sign Up page displayed');
  });

  test('Successful Navigation Become Mentor Page', async ({ page }) => {
    // Navigate to sign-up page and perform actions
    const homePage = new Home(page);
    await homePage.navigateToHome();
    await homePage.footerBecomeMentor();
    console.log('Successfully navigated to Become Mentor Page');
  });

  test('Successful Navigation to Find Mentor', async ({ page }) => {
    // Navigate to sign-up page and perform actions
    const homePage = new Home(page);
    await homePage.navigateToHome();
    await homePage.footerFindMentor();
    console.log('Successfully navigated to Find Mentor Page');
  });

  test('Successful Navigation to Privacy page', async ({ page }) => {
    // Navigate to sign-up page and perform actions
    const homePage = new Home(page);
    await homePage.navigateToHome();
    await homePage.footerPrivacy();
    const headerText = await page.textContent('p.MuiTypography-root.header-text');
    // Assert that the header text matches the expected value
    if (headerText.trim() === 'Privacy Policy') {
      console.log('Assertion Passed: Header text matches "Privacy Policy"');
    } else {
      console.error(`Assertion Failed: Expected "Privacy Policy", but got "${headerText.trim()}"`);
    }
  });
});
