import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage'; 
import MenteeAction from '@page-objects/MenteeAction';
import BookMentor from '@page-objects/BookMentor';

const { validCredentials, invalidCredentials, urls } = require('../fixtures/test-data');

test.use({headless : false})

test.describe('Mentee Login and Booking Process Tests', () => {
    test('should log in successfully with valid credentials and book a mentor', async ({ page }) => {
        const mentorName = process.env.MENTOR_NAME || 'Hasnain Nisan';

        const authPage = new AuthPage(page);

        // Navigate to login page
        await authPage.navigateToLogin(urls.baseUrl);

        // Perform login with valid credentials
        await authPage.login(validCredentials.email, validCredentials.password);

        // Wait for success message
        const successMessage = page.locator('.success'); // Replace with the actual class for the success toast
        await expect(successMessage).toHaveText('Signed In Successfully!', { timeout: parseInt(process.env.TIMEOUT) });

        // Wait for navigation to portal
        await page.waitForURL(`${process.env.PORTAL_URL}`);

        const browseMentor = new MenteeAction (page);
        await browseMentor.navigateToBrowsePage();

        const filterSearch = new MenteeAction (page);
        await filterSearch.FilterBySearchbar(mentorName)
        await page.waitForLoadState('domcontentloaded');

        // const Searchselect = new MenteeAction (page);
        // await Searchselect.SelectSearchProfile(mentorName);

        const mentorCard = page.locator(`p.MuiTypography-body1:has-text("${mentorName}")`);
        await mentorCard.waitFor();
        await mentorCard.click();
        await page.waitForLoadState('domcontentloaded');

        const Mentorbooking = new BookMentor(page);
        await Mentorbooking.BookingMentor('4000 0503 6000 0019','12 / 25','123');

        // await page.waitForTimeout(8000);

      
        console.log('Booking confirmed and returned to the home page.');

    });


});