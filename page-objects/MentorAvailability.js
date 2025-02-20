class Availability {
    constructor(page) {
        this.page = page;
    
        this.AvailabilityBtn = page.locator("(//p[normalize-space()='Availability'])[1]");
        this.AddOverrideBtn = page.locator("(//button[normalize-space()='Add an override'])[1]");
        this.NextMonthBtn = page.locator("//button[@title='Next month']//*[name()='svg']");
        this.datePickBtn = page.locator("(//button[normalize-space()='3'])[1]");
        
        this.AddSaveBtn = page.locator("(//button[normalize-space()='Add override'])[1]");
        this.FinalSaveBtn = page.locator("(//button[normalize-space()='Save changes'])[1]");

    }

    async NavigatetoAvailability() {
        await this.AvailabilityBtn.click();
        
        
        await this.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight); 
        });
    }

    async AddAvailableDate() {
        await this.AddOverrideBtn.click();
        await this.page.waitForTimeout(5000); 
        await this.NextMonthBtn.click();
        await this.datePickBtn.click();
        await this.AddSaveBtn.click();
        await this.FinalSaveBtn.click();
    }
   
    }

module.exports = Availability;
