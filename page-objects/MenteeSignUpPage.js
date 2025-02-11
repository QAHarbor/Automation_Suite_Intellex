class SignUp_Mentee {
    constructor(page) {
        this.page = page;
        this.JoinUs = page.locator("(//span[@class='MuiTouchRipple-root mui-w0pj6f'])[2]");
        this.JoinAsMentee = page.locator("(//span[normalize-space()='Join as Mentee'])[1]");
        this.firstname = page.locator('[placeholder="Enter your first name"]');
        this.lastname = page.locator('[placeholder="Enter your last name"]');
        this.dob = page.locator('input[placeholder="DD-MM-YYYY"]');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.timezoneInput = page.locator('(//input[@placeholder="Select timezone"])[1]');
        this.asiaDhakaOption = page.locator("(//li[@id=\":r6:-option-3\"])[1]");
        this.AgreeContinue = page.locator("//button[contains(text(), 'Agree and continue')]");
        this.Industeries = page.locator('//input[@placeholder="Select industries"]');
        this.educationOption = page.locator("(//input[@type='checkbox'])[4]");
        this.skill = page.getByPlaceholder('Select skills');
        this.InteviewOption = page.getByRole('option', { name: 'Interview Preparation' });
        this.finish = page.locator('button', { hasText: 'Finish' });
        this.TermsBtn = page.locator('a[href="/terms-conditions/"]');
        this.PrivacyBtn = page.locator('a[href="/privacy-policy/"]');
        this.timezoneOptions = page.locator("//li[contains(text(), 'Australia/')]");
    }

    async navigateToSignUpMentee() {
        await this.page.goto(process.env.BASE_URL);
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.JoinUs.click();
        await this.JoinAsMentee.click();
    }

    async selectRandomAustraliaTimezone() {
        await this.timezoneInput.click();
        await this.page.waitForTimeout(500); // Wait for dropdown to open
    
        const optionsCount = await this.timezoneOptions.count();
        if (optionsCount > 0) {
            const randomIndex = Math.floor(Math.random() * optionsCount);
            await this.timezoneOptions.nth(randomIndex).click();
        } else {
            throw new Error("No Australia timezone options found!");
        }
    }

    async FillSignUpForm(page, firstname, lastname, email, password, dob) {
        const randomIndices = [0, 1];
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.lastname.fill(lastname);
        await this.dob.fill(dob);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await this.selectRandomAustraliaTimezone(); // Selects a random Australia timezone
        await this.AgreeContinue.click();

        // Select random options from the dropdown
        await this.Industeries.click();
        const industryOptions = await this.page.$$('li.MuiAutocomplete-option');
        for (let index of randomIndices) {
            const option = industryOptions[index];
            await option.click(); 
        }
        await page.click('body');

        // Select random options from the dropdown
        await this.skill.click();
        const skillOptions = await this.page.$$('li.MuiAutocomplete-option');
        for (let index of randomIndices) {
            const option = skillOptions[index];
            await option.click(); 
        }
        await page.click('body');

        await this.finish.click();
    }

    async NameFieldValidation(firstname, lastname) {
        await this.page.goto(process.env.BASE_URL);
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.JoinUs.click();
        await this.JoinAsMentee.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
    }

    async passwordFieldValidation(firstname, lastname, password) {
        await this.page.goto(process.env.BASE_URL);
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.JoinUs.click();
        await this.JoinAsMentee.click();
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.password.fill(password);
    }

    async navigateToTermPage() {
        await this.page.goto(process.env.BASE_URL);
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.JoinUs.click();
        await this.JoinAsMentee.click();
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await this.TermsBtn.waitFor({ state: 'visible' });
        await this.TermsBtn.click();
    }

    async navigateToPrivacyPage() {
        await this.page.goto(process.env.BASE_URL);
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.JoinUs.click();
        await this.JoinAsMentee.click();
        await this.PrivacyBtn.scrollIntoViewIfNeeded();
        await this.PrivacyBtn.click();
    }
}

module.exports = SignUp_Mentee;
