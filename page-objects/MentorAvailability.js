class Availability {
    constructor(page) {
        this.page = page;
    
        // Profile Picture
        this.AvailabilityBtn = page.locator("(//p[normalize-space()='Availability'])[1]");
        this.AddOverrideBtn = page.locator("(//button[normalize-space()='Add an override'])[1]");
        this.NextMonthBtn = page.locator("//button[@title='Next month']//*[name()='svg']");
        this.datePickBtn = page.locator("(//button[normalize-space()='15'])[1]");
        this.AddSaveBtn = page.locator("(//button[normalize-space()='Add override'])[1]");
        this.FinalSaveBtn = page.locator("(//button[normalize-space()='Save changes'])[1]");
    }

    // Navigate to Availability section
    async NavigatetoAvailability() {
        await this.AvailabilityBtn.click();
        
        // Scroll down the page to make sure content is loaded
        await this.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight); // Scroll by one viewport height
        });
    }

    // Add available date
    async AddAvailableDate() {
        await this.AddOverrideBtn.click();
        await this.page.waitForTimeout(5000); // Wait for 5 seconds for the overlay to load

        // Ensure NextMonthBtn is clickable and then click it
        await this.NextMonthBtn.click();

        // Wait for the date to be available and then select it
        await this.datePickBtn.click();

        // Add override and save the changes
        await this.AddSaveBtn.click();
        await this.FinalSaveBtn.click();
    }
}

module.exports = Availability;
