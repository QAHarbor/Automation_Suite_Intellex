// 
class BookMentor {
    constructor(page) {
        this.page = page;
       
        // Locators for calendar and booking details
        this.selctCalender = page.getByRole('gridcell', { name: '28', exact: true });
        this.timeselect = page.getByText('4:00 AM');
        this.BooknowBtn = page.getByRole('button', { name: 'Book now' });
       
        // Payment iframe locators
        this.CardNumberInput = page.frameLocator('iframe[title="Secure payment input frame"]').locator('#Field-numberInput');
        this.ExpiryDateInput = page.frameLocator('iframe[title="Secure payment input frame"]').locator('input#Field-expiryInput');
        this.SecurityCode = page.frameLocator('iframe[title="Secure payment input frame"]').locator('input#Field-cvcInput');
        this.ConfirmPayBtn = page.getByRole('button', { name: 'Confirm and Pay' });
        this.ConfirmMessage = page.getByRole('heading', { name: 'Welcome back!' });
       
        // Selectors
        this.browseMentorLink = this.page.getByRole('link', { name: 'Browse Mentor' });
        this.firstMentorButton = this.page.locator('button .MuiPaper-root').nth(0);
        this.dateCell = this.page.getByRole('gridcell');
        this.timeSlot = this.page.locator('div').filter({ hasText: /^10:00 AM$/ });
        this.bookNowButton = this.page.getByRole('button', { name: 'Book now' });
    }


    async BookingMentor(cardnumber, expirydate, securitycode) {
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.page.waitForSelector('.MuiPickersDay-root.is-available');
       
        const availableDates = await this.page.$$('.MuiPickersDay-root.is-available');
        const randomIndex = Math.floor(Math.random() * availableDates.length);
        await availableDates[randomIndex].click();


        await this.page.waitForSelector(`input.PrivateSwitchBase-input[type="radio"]`);
        const radioButtons = await this.page.$$('input.PrivateSwitchBase-input[type="radio"]');
        await radioButtons[Math.floor(Math.random() * radioButtons.length)].click();
    }


    getConfirmMessage() {
        return this.ConfirmMessage;
    }


    async browseMentors() {
        await this.browseMentorLink.click();
        await this.firstMentorButton.click();
    }


    async bookSession() {
        await this.page.waitForTimeout(2000);
        const today = new Date();
        const futureDate = new Date(today);
       // futureDate.setDate(today.getDate() + 4);
       futureDate.setDate(today.getDate()+3);


        await this.page.getByRole('gridcell', { name: futureDate.getDate().toString() }).click();
        await this.timeSlot.click();
        await this.bookNowButton.click();
        await this.page.waitForTimeout(5000);
    }


    async fillPaymentDetails(cardNumber, expiry, securityCode) {
        const stripeIframe = await this.page.waitForSelector('iframe[name*="privateStripeFrame"]', { timeout: 30000 });
        const stripeFrame = await stripeIframe.contentFrame();
        if (!stripeFrame) throw new Error("Stripe iframe not found!");
       
        await stripeFrame.getByRole('textbox', { name: 'Card number' }).fill(cardNumber);
        await stripeFrame.getByRole('textbox', { name: 'Expiration date MM / YY' }).fill(expiry);
        await stripeFrame.getByRole('textbox', { name: 'Security code' }).fill(securityCode);
       
        await this.page.getByRole('button', { name: 'Confirm and Pay' }).click();
        await this.page.waitForTimeout(5000);
    }


    async returnHome() {
        await this.page.waitForSelector('a:text("Return home")', { timeout: 30000 });
        await this.page.getByRole('link', { name: 'Return home' }).click();
    }
}


module.exports = BookMentor;
