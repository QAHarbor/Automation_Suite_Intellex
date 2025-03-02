
import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';
import BookMentor from '@page-objects/BookMentor';
const { validCredentials, invalidCredentials, urls } = require('../fixtures/test-data');
test.use({ headless: false })




test('Successfully Booking a Mentor', async ({ page }) => {
    test.setTimeout(90000);
    const mentorName = process.env.MENTOR_NAME || 'Hasnain Nisan';
    const authPage = new AuthPage(page);
   
    await authPage.navigateToLogin(urls.baseUrl);
    await authPage.login(validCredentials.email, validCredentials.password);
   
    await page.waitForURL(`${process.env.PORTAL_URL}`);
   
    const booking = new BookMentor(page);
    await booking.browseMentors();
    await booking.bookSession();
    
   
    await booking.fillPaymentDetails('4000 0503 6000 0019', '12 / 25', '123');
    //await booking.returnHome();
});







