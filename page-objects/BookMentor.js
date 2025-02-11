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
    }

    async BookingMentor(cardnumber, expirydate, securitycode) {
        // Set viewport size
        await this.page.setViewportSize({ width: 1200, height: 800 });

        // Wait for the calendar to be fully loaded
        await this.page.waitForSelector('.MuiPickersDay-root.is-available'); // Ensure that we target available days

        // Get all available dates
        const availableDates = await this.page.$$('.MuiPickersDay-root.is-available'); // Filter by the is-available class
        const randomIndex = Math.floor(Math.random() * availableDates.length);
        await availableDates[randomIndex].click();

        // await this.page.waitForLoadState('domcontentloaded');

        // Select a random radio button
        await this.page.waitForSelector(`input.PrivateSwitchBase-input[type="radio"]`);
        const radioButtons = await this.page.$$('input.PrivateSwitchBase-input[type="radio"]');
        console.log(radioButtons.length);
        const randomIndexSlot = Math.floor(Math.random() * radioButtons.length);
        console.log(randomIndexSlot);
        await radioButtons[randomIndexSlot].click();
        
        // await this.BooknowBtn.click();

        // // Enter payment details in iframe
        // await this.CardNumberInput.fill(cardnumber);
        // await this.ExpiryDateInput.fill(expirydate);
        // await this.SecurityCode.fill(securitycode);

        // // Confirm payment
        // await this.ConfirmPayBtn.click();
    }

    getConfirmMessage() {
        return this.ConfirmMessage;
    }
}

module.exports = BookMentor;
