class Bookings {
    constructor(page) {
        this.page = page;
    
       //Bookings
        this.BookingsBtn = page.locator("(//p[normalize-space()='Bookings'])[1]");
        this.UpcomingBtn = page.locator("(//span[normalize-space()='Upcoming'])[1]");
        this.PendingBtn = page.locator("(//span[normalize-space()='Pending'])[1]");
        this.HistoryBtn = page.locator("(//span[normalize-space()='History'])[1]");
        this.CancelBtn = page.locator("(//span[normalize-space()='Cancelled'])[1]");

    }

    
    async NavigatetoBookings() {
        await this.BookingsBtn.click();
        await this.page.waitForTimeout(5000);
    }
    async Check_UpComingSession() {
        await this.UpcomingBtn.click();
        await this.page.waitForTimeout(5000);
    }
    async Check_PendingSession() {
        await this.PendingBtn.click();
        await this.page.waitForTimeout(5000);
    }
    async Check_HistorySession() {
        await this.HistoryBtn.click();
        await this.page.waitForTimeout(5000);
    }

    async Check_CancelledSession() {
        await this.CancelBtn.click();
        await this.page.waitForTimeout(5000);
    }


    }




module.exports = Bookings;
