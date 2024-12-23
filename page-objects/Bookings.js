class Bookings {
    constructor(page) {
        this.page = page;
    
       //Bookings
        this.BookingsBtn = page.locator("(//p[normalize-space()='Bookings'])[1]");
        this.UpcomingBtn = page.locator("//button[normalize-space()='Upcoming']");
        this.PendingBtn = page.locator("//button[normalize-space()='Pending']");
        this.HistoryBtn = page.locator("//button[normalize-space()='History']");
        this.CancelBtn = page.locator("//button[normalize-space()='Cancelled']");

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
