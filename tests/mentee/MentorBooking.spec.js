import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage'; 
import MenteeAction from '@page-objects/MenteeAction';
import BookMentor from '@page-objects/BookMentor';

const { validCredentials, invalidCredentials, urls } = require('../fixtures/test-data');

test.use({headless : false})

test.describe('Mentee Login Tests', () => {
    test('should log in successfully with valid credentials', async ({ page }) => {
        const authPage = new AuthPage(page);

        // Navigate to login page
        await authPage.navigateToLogin(urls.baseUrl);

        // Perform login with valid credentials
        await authPage.login(validCredentials.email, validCredentials.password);

        await page.waitForTimeout(5000)

        const browseMentor = new MenteeAction (page);
        await browseMentor.navigateToBrowsePage();

        const filterSearch = new MenteeAction (page);
        await filterSearch.FilterBySearchbar('tony')

        const Searchselect = new MenteeAction (page);
        await Searchselect.SelectSearchProfile();

        const Mentorbooking = new BookMentor(page);
        await Mentorbooking.BookingMentor('4000 0503 6000 0019','12 / 25','123');

        await page.waitForTimeout(8000);

      
        console.log('Booking confirmed and returned to the home page.');

    });


});