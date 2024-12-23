import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage'; // Alias for page objects
import MenteeProfilePage from '@page-objects/MenteeProfilePage';
import { credentials, personalDetails, bio, interests } from '@fixtures/test-data-mentee';
const { validCredentials, urls } = require('@fixtures/test-data');



test.describe('Mentee Profile Tests', () => {
    let authPage;
    let profilePage;

    // Before each test, initialize pages and log in
    test.beforeEach(async ({ page }) => {
        authPage = new AuthPage(page);
        profilePage = new MenteeProfilePage(page);

        // Navigate to login page and log in
        await authPage.navigateToLogin(urls.baseUrl);
        await authPage.login(credentials.valid.email, credentials.valid.password);

        // Navigate to profile page
        await page.getByRole('button', { name: 'Profile' }).click();
    });



    
    // Test case: Successfully updates personal details
    test('Mentee Successfully Updates Personal Details', async ({ page }) => {
        // Update personal details
        await profilePage.updatePersonalDetails(
            personalDetails.valid.firstName,
            personalDetails.valid.lastName
        );
        // Verify updated personal details
        const updatedDetails = await profilePage.getPersonalDetails();
        expect(updatedDetails.firstName).toBe(personalDetails.valid.firstName);
        expect(updatedDetails.lastName).toBe(personalDetails.valid.lastName);
    });


    

    test('Mentee Successfully changed password', async ({ page }) => {

        await profilePage.changePassword('Test@12345678', 'Test@12345678');
        console.log('Changed password sucessfully');

    });

    
    // Test case: Successfully updates bio
    test('Mentee Successfully Updates Their Bio', async ({ page }) => {

       
        await profilePage.updateBio(bio.valid.bio, bio.valid.goal);

        console.log(bio.valid.bio);

        const updatedBio = await profilePage.getBio();
        expect(updatedBio).toBe(bio.valid.bio);
    });


    // Test case: Successfully views bio
    test('Mentee Successfully Views Their Bio', async ({ page }) => {

        const bioText = await profilePage.getBio();
        console.log(bio.valid.bio);

        expect(bioText).toBe(bio.valid.bio);
    });

    test('Mentee Successfully Update Preferences', async ({ page }) => {
        // Update interests first
        await profilePage.updateInterests();
    
        // Fetch the updated interests text
        const updatedInterestsText = await profilePage.getInterests();
    
        // Assert that the updated interests text matches the expected value
        const expectedInterestsText = 'My interests/preferences'; // Replace with the actual expected text
        expect(updatedInterestsText).toBe(expectedInterestsText);
    });
   
});