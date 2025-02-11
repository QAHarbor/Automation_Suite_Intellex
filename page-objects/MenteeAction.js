class MenteeAction {
    constructor(page) {
        this.page = page;

        // Store locator for the Browse Mentor button
        this.BrowseBtn = page.locator('a.MuiButton-containedPrimary');
        this.SearchBar = page.locator('input[placeholder="Search by mentor name or company"]');
        // this.SelectProfile = page.locator('img[alt="Mr Tony"]');
        // this.ProfileName = page.locator('h2', { hasText: 'Mr Tony' });

        // this.favoriteBtn = page.locator("(//input[@type='checkbox'])[1]");
        this.favoriteBtn = page.locator('input.PrivateSwitchBase-input + div svg');

        this.ProfileBtn = page.locator('svg.iconify--heroicons[aria-hidden="true"]');
        this.PortalBtn = page.locator('(//span[text()="My Portal"])[1]');
        this.favoriteList = page.locator('//p[text()="Favourites"]');

        this.UpcomingBtn = page.locator("//button[normalize-space()='Upcoming']");
        this.PendingBtn = page.locator("//button[normalize-space()='Pending']");
        this.HistoryBtn = page.locator("//button[normalize-space()='History']");
        this.CancelBtn = page.locator("//button[normalize-space()='Cancelled']");

    }

    async navigateToBrowsePage() {

        // Set viewport size
        await this.page.setViewportSize({ width: 1200, height: 800 });

        // Wait for the Browse button to be visible and click it
        await this.BrowseBtn.waitFor();
        await this.BrowseBtn.click();
    }

    async CheckingDetails() {

        await this.PendingBtn.click();
        await this.page.waitForTimeout(7000);
        await this.UpcomingBtn.click();
        await this.page.waitForTimeout(7000);
        await this.HistoryBtn.click();
        await this.page.waitForTimeout(7000);
        await this.CancelBtn.click();
        await this.page.waitForTimeout(7000);

    }




    // Wait for the Search bar to be visible and click it
    async FilterBySearchbar(MentorName) {

        await this.SearchBar.click();
        await this.SearchBar.fill(MentorName);
        await this.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight); // Scroll down by one viewport height
        });
    }

    async SelectSearchProfile(name) {
        const mentorCard = this.page.locator(`p.MuiTypography-body1:has-text("${name}")`);
        await mentorCard.waitFor();
        await mentorCard.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async AddFavorite() {
        await this.favoriteBtn.click();
        await this.page.waitForTimeout(7000);
        await this.ProfileBtn.click();
        await this.page.waitForTimeout(7000);
        await this.PortalBtn.click();
        await this.page.waitForTimeout(7000);
        await this.favoriteList.click();
        await this.page.waitForTimeout(7000);

    }
    async RemoveFavorite() {
        await this.favoriteBtn.click();
        await this.ProfileBtn.click();
        await this.PortalBtn.click();
        await this.favoriteList.click();
    }
}

module.exports = MenteeAction;