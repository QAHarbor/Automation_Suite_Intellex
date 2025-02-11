import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';
import Bookings from '@page-objects/Bookings';


const { validMentorLogin, urls } = require('@fixtures/test-data-mentor')

test.use({ headless: false });

test.describe('Check Bookings Tests', () => {

    test('Sucessfully see cancelled bookings', async ({ page }) => {
        const mentorloginpage = new AuthPage(page);

        await mentorloginpage.navigateToLogin(urls.baseUrl);
        await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
        await page.waitForTimeout(5000);

        const bookingPage = new Bookings(page);
        await bookingPage.NavigatetoBookings();
        await bookingPage.Check_CancelledSession();

        console.log('Sucessfully checked cancelled booking session');

    });

    test('Sucessfully see pending bookings', async ({ page }) => {
        const mentorloginpage = new AuthPage(page);

        await mentorloginpage.navigateToLogin(urls.baseUrl);
        await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
        await page.waitForTimeout(5000);

        const bookingPage = new Bookings(page);
        await bookingPage.NavigatetoBookings();
        await bookingPage.Check_PendingSession();

        console.log('Sucessfully checked pending booking session');

    });

    test('Sucessfully see upcoming bookings', async ({ page }) => {
        const mentorloginpage = new AuthPage(page);

        await mentorloginpage.navigateToLogin(urls.baseUrl);
        await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
        await page.waitForTimeout(5000);

        const bookingPage = new Bookings(page);
        await bookingPage.NavigatetoBookings();
        await bookingPage.Check_UpComingSession();

        console.log('Sucessfully checked upcoming booking session');

    });

    test('Sucessfully see History bookings', async ({ page }) => {
        const mentorloginpage = new AuthPage(page);

        await mentorloginpage.navigateToLogin(urls.baseUrl);
        await mentorloginpage.login(validMentorLogin.email, validMentorLogin.password);
        await page.waitForTimeout(5000);

        const bookingPage = new Bookings(page);
        await bookingPage.NavigatetoBookings();
        await bookingPage.Check_HistorySession();

        console.log('Sucessfully checked history booking session');

    });

});