class MenteeProfilePage {
    constructor(page) {
        this.page = page;
        this.baseUrl = process.env.BASE_URL || `${this.baseUrl}`; 
        this.profileUrl = process.env.PROFILE_URL || `${this.baseUrl}/portal/profile`; 
        console.log(this.profileUrl);
    }

    async navigateToProfile() {
        await this.page.goto(this.baseUrl);
        await this.page.getByRole('link', { name: 'Log In' }).click();
    }

   
    async openProfile() {
       
       await this.page.goto(this.profileUrl); 
    }
    async changePassword(currentPass, newPass) {
        await this.page.locator('(//button[@type="button" and text()="Change"])[1]').click();
        await this.page.locator('input[placeholder="Enter your current password"]').fill(currentPass);
        await this.page.locator('input[placeholder="Enter your new password"]').fill(newPass);
        await this.page.click("(//button[normalize-space()='Confirm'])[1]");
        await this.page.waitForTimeout(6000);

    }



    async updatePersonalDetails(firstName, lastName,) {
        await this.page.getByPlaceholder('Enter your first name').fill(firstName);
        await this.page.getByPlaceholder('Enter your last name').fill(lastName);
        await this.page.getByPlaceholder('DD-MM-YYYY').fill('02-04-2006');
        await this.page.click('(//input[@id=":r5:"])[1]');
        await this.page.click('//li[@id=":r9:-option-1"]');
        await this.page.click("(//button[normalize-space()='Save'])[1]");
        await this.page.waitForTimeout(6000);

    }

    async getPersonalDetails() {
        const firstName = await this.page.getByPlaceholder('Enter your first name').inputValue();
        const lastName = await this.page.getByPlaceholder('Enter your last name').inputValue();
        return { firstName, lastName};
    }

    async updateBio(bio, goal) {
        await this.page.getByRole('tab', { name: 'Bio' }).click();
        await this.page.fill('//textarea[@id="intro"]', bio);  
        await this.page.fill('//textarea[@id="goal"]', goal);

        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(6000);
    }

    async getBio() {
    
        await this.page.getByRole('tab', { name: 'Bio' }).click();
        const bioText = await this.page.getByPlaceholder('Write a few sentence about').inputValue();
        return bioText;
    }

    async updateInterests() {
        await this.page.getByRole('tab', { name: 'My interests/preferences' }).click();
        await this.page.click("(//div[@class='MuiStack-root mui-6fx5r7'])[1]");
        await this.page.click('(//input[@type="checkbox"])[5]');
        await this.page.click('body');
        await this.page.click("(//div[@class='MuiStack-root mui-6fx5r7'])[2]");
        await this.page.click("(//input[@type='checkbox'])[2]");
        await this.page.click('body');
        await this.page.getByRole('button', { name: 'Save' }).click();
        await this.page.waitForTimeout(6000);
    }
    



    async getInterests() {
    
        const interestsText = await this.page.getByRole('tab', { name: 'My interests/preferences' }).textContent();
        return interestsText;
    }

    async setInvalidProfilePicture() {
        await this.page.getByRole('button', { name: 'Edit Picture' }).click();
        
    }

    async validateBlankRequiredFields() {
        await this.page.getByRole('button', { name: 'Edit' }).first().click();
        await this.page.getByPlaceholder('Enter your first name').fill('');
        await this.page.getByPlaceholder('Enter your last name').fill('');
        await this.page.getByRole('button', { name: 'Save' }).click();
    }
}


module.exports = MenteeProfilePage;