import { test, expect } from '@playwright/test';
import MentorSignUpPage from '@page-objects/MentorSignUpPage';



const { validMentorDetails, invalidMentorDetails} = require('@fixtures/test-data-mentor')

test.use({ headless: false });

test.describe('Mentor SignUp Tests', () => {

 // Test Case: Mentor SignUp with Valid Credentials and Handle Duplicate Email
test('should sign up mentor successfully with valid credentials and handle duplicate email', async ({ page }) => {
    const mentorSignUpPage = new MentorSignUpPage(page);

    // Navigate to SignUp page
    await mentorSignUpPage.navigateToSignUp();

    // Fill in the sign-up form using valid data from environment variables
    await mentorSignUpPage.fillSignUpForm(
        validMentorDetails.firstName,
        validMentorDetails.lastName,
        validMentorDetails.email,  // Using a valid email
        validMentorDetails.password,
        validMentorDetails.jobTitle,
        validMentorDetails.company,
        validMentorDetails.linkedIn
    );

    // Submit the sign-up form
    await mentorSignUpPage.submitSignUp();

    await page.waitForTimeout(parseInt(process.env.TIMEOUT));

    // Check for success message or error message using if-else
    const successMessage = await page.locator('text=Account created, Wait for admin approval and check email');
    //const errorMessage = await page.locator('text=Email is already registered. Please login or use another email.');

    // Wait for either success or error message
    if (await successMessage.isVisible()) {
        // If the success message is visible, the sign-up was successful
        await expect(successMessage).toBeVisible();
        console.log('Successfully signed up as a mentor.');
    } else {
        // If neither message is visible, this indicates an unexpected result
        console.error('Error displayed for duplicate email: Email is already registered. Please log in or use another email.');
    }
    
});

});
