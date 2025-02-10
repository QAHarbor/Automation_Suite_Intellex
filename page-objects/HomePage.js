class HomePage {
    constructor(page) {
        this.page = page;

        // URLs
        this.baseUrl = process.env.BASE_URL || 'https://intellex-stagging.vercel.app';
        this.profileUrl = process.env.PROFILE_URL || `${this.baseUrl}/portal/profile`;
        this.homeUrl = process.env.HOME_URL || `${this.baseUrl}/login`;
        
        this.headingLocator = page.locator('h2:has-text("Mentors")');

        // Locators for main buttons
        this.joinUsButton = page.locator('role=button[name="Join Us"]');
        this.joinAsMentorMenuItem = page.locator('role=menuitem[name="Join as Mentor"]');

        this.homeBtn = page.locator('a.MuiStack-root.mui-1g1jecy');
        this.findMentorBtn = page.locator('a.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeLarge.MuiButton-containedSizeLarge.MuiButton-colorPrimary');
        this.createAccBtn = page.locator('a.create-account-btn');
        this.becomeMentor = page.locator('(//a[text()="Become a Mentor"])[1]');
        this.joinMentor = page.locator('(//a[text()="Join as mentor"])[1]');
        this.seeMoreBtn = page.locator('a:has-text("See More")');

        // Footer links
        this.footerBeMenteeBtn = page.locator("//a[@class='footer-links' and text()='Become a Mentee']");
        this.footerFindMentorBtn = page.locator('a.footer-links[href="/mentors/"]');
        this.footerBeMentorBtn = page.locator('a.footer-links[href="/register/?type=mentor"]');
        this.footerAboutBtn = page.locator("a[href='/about/']");
        this.footerPrivacyBtn = page.locator("a[href='/privacy-policy/']");
        this.footerTermsBtn = page.locator("a[href='/terms-conditions/']");
        this.footerLinkedinBtn = page.locator('svg.iconify--mdi');
    }

    // Navigation methods
    async navigateToLoginPage() {
        await this.page.goto(this.homeUrl);
        await this.homeBtn.click();
    }

    async navigateToHome() {
        await this.page.goto(this.baseUrl);
    }

    async navigateToFindMentor() {
        await this.findMentorBtn.click();
    }

    // Assertion: Ensure the heading is visible
    async waitForHeading() {
        await this.headingLocator.waitFor({ state: 'visible' });
    }

    // Get the text content of the heading
    async getHeadingText() {
        return await this.headingLocator.textContent();
    }

    async createNewAcc() {
        await this.createAccBtn.click();
    }

    async discoverMentor() {
        await this.seeMoreBtn.click();
    }

    // Click on the "Join as Mentor" menu item
    async clickJoinAsMentor() {
        await this.joinAsMentorMenuItem.click();
    }

    // Click on the "Join Us" button
    async clickJoinUsButton() {
        await this.joinUsButton.click();
    }

    // Footer navigation methods
    async footerBecomeMentee() {
        await this.footerBeMenteeBtn.click();
    }

    async footerFindMentor() {
        await this.footerFindMentorBtn.click();
    }

    async footerBecomeMentor() {
        await this.footerBeMentorBtn.click();
    }

    async footerAboutUs() {
        await this.footerAboutBtn.click();
    }

    async footerPrivacy() {
        await this.footerPrivacyBtn.click();
    }

    async footerTerms() {
        await this.footerTermsBtn.click();
    }

    async footerLinkedIn() {
        await this.footerLinkedinBtn.click();
    }
}

module.exports = HomePage;
