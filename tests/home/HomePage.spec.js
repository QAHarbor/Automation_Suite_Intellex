import { test, expect } from '@playwright/test';
import Home from '@page-objects/HomePage';
import { mentorsHeaderText } from '@fixtures/test-data';

test.describe('Home Page Navigation Tests', () => {
    test('Successful Navigation to Join as Mentor Page', async ({ page }) => {
        const homePage = new Home(page);
        // Navigate to home and then to the Join as Mentor page
        await homePage.navigateToHome();
        await homePage.clickJoinUsButton();
        // Click on the "Join as Mentor" menu item
        await homePage.clickJoinAsMentor();
        // Wait for the URL to change to the expected one
        await page.waitForURL(`${process.env.BASE_URL}/register/?type=mentor`, { timeout: process.env.TIMEOUT });
        // Assert that the URL is correct after navigation
        await expect(page).toHaveURL(`${process.env.BASE_URL}/register/?type=mentor`);
        console.log('Successfully navigated to Join as Mentor.');
    });

    test('Successful Navigation to Find Mentor Page', async ({ page }) => {
        const homePage = new Home(page);
        // Navigate to home and then to the Find Mentor page
        await homePage.navigateToLoginPage();
        await homePage.navigateToFindMentor();
        await homePage.waitForHeading();
        // Get the heading text
        const headingText = await homePage.getHeadingText();
        expect(headingText).toContain(mentorsHeaderText);  // Assert it contains 'Mentors'
        // Print the text to the console
        console.log('Heading Text:', headingText);
    });

    test('Successful Navigation to Home Page', async ({ page }) => {
        const homePage = new Home(page);
        // Navigate to the home page
        await homePage.navigateToHome();
        await expect(page).toHaveURL(`${process.env.BASE_URL}/`);
        console.log('Successfully navigated to Home page.');
    });

    test('Successful Navigation to Mentee Create Account Page', async ({ page }) => {
        const homePage = new Home(page);
        // Navigate to home and then to the Mentee Create Account page
        await homePage.navigateToLoginPage();
        await homePage.createNewAcc();
        // Wait for the URL to change to the Mentee Create Account page
        await page.waitForURL(`${process.env.BASE_URL}/register/?type=mentee`, { timeout: process.env.TIMEOUT });
        // Optionally, assert the URL if needed
        await expect(page).toHaveURL(`${process.env.BASE_URL}/register/?type=mentee`);
        console.log('Successfully navigated to Mentee Create Account page.');
    });

    test('Successful Navigation to Mentor Filter Page', async ({ page }) => {
        const homePage = new Home(page);
        // Navigate to home and then discover mentors
        await homePage.navigateToLoginPage();
        await homePage.discoverMentor();
        // Wait for the URL to change to the Mentor Filter page
        await page.waitForURL(`${process.env.BASE_URL}/mentors/?minPrice=0&maxPrice=1000`, { timeout: process.env.TIMEOUT });
        // Optionally, assert the URL if needed
        await expect(page).toHaveURL(`${process.env.BASE_URL}/mentors/?minPrice=0&maxPrice=1000`);
        console.log('Successfully navigated to Mentor Filter page.');
    });
});
