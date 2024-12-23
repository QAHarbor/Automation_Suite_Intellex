class SignUp_Mentee {
    constructor(page) {
        this.page = page;
        this.JoinUs = page.locator("(//span[@class='MuiTouchRipple-root mui-w0pj6f'])[2]");
        this.JoinAsMentee = page.locator("(//span[normalize-space()='Join as Mentee'])[1]");
        this.firstname = page.locator('[placeholder="Enter your first name"]');
        this.lastname = page.locator('[placeholder="Enter your last name"]');
        this.email = page.locator('#email');
        this.password = page.locator('#password');
        this.timezoneInput = page.locator('(//input[@placeholder="Select timezone"])[1]');
        this.asiaDhakaOption = page.locator("(//li[@id=\":r6:-option-3\"])[1]");
        this.AgreeContinue = page.locator("(//span[@class='MuiTouchRipple-root mui-w0pj6f'])[4]");
        this.Industeries = page.locator('//input[@placeholder="Select industries"]');
        this.educationOption = page.locator("(//input[@type='checkbox'])[4]");
        this.skill = page.getByPlaceholder('Select skills');
        this.InteviewOption = page.getByRole('option', { name: 'Interview Preparation' });
        this.finish = page.locator("//button[@id=':ra:']");
        this.TermsBtn = page.locator('a[href="/terms-conditions/"]');
        this.PrivacyBtn = page.locator('a[href="/privacy-policy/"]');
    }

    async navigateToSignUpMentee() {
        await this.page.goto(process.env.BASE_URL);
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.JoinUs.click();
        await this.JoinAsMentee.click();
    }

        async FillSignUpForm(firstname, lastname, email, password) {
        await this.firstname.fill(firstname);
        await this.lastname.fill(lastname);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.page.evaluate(() => window.scrollBy(0, window.innerHeight));
        await this.timezoneInput.click();
        await this.asiaDhakaOption.waitFor({ state: 'visible' });
        await this.asiaDhakaOption.click();
        await this.AgreeContinue.click();
        await this.Industeries.click();
        await this.educationOption.waitFor({ state: 'visible' });
        await this.educationOption.click();
        await this.skill.click();
        await this.InteviewOption.click();
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
