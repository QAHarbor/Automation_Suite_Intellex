class MenteeProfilePage {
    constructor(page) {
        this.page = page;
        this.baseUrl = process.env.BASE_URL || `${this.baseUrl}`; // Fallback to the default URL if not set
        this.profileUrl = process.env.PROFILE_URL || `${this.baseUrl}/portal/profile`; // Profile URL
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
        await this.page.locator('input[placeholder="Enter your current password"]').click();
        await this.page.locator('input[placeholder="Enter your current password"]').fill(currentPass);
        await this.page.locator('input[placeholder="Enter your new password"]').click();
        await this.page.locator('input[placeholder="Enter your new password"]').fill(newPass);
        await this.page.locator('(//button[@type="button"])[4]').click();
        await this.page.locator('.MuiButton-containedPrimary').click();
        
    }



    async updatePersonalDetails(firstName, lastName) {
        await this.page.getByRole('button', { name: 'Edit' }).first().click();
        await this.page.getByPlaceholder('Enter your first name').fill(firstName);
        await this.page.getByRole('button', { name: 'Edit' }).first().click();
        await this.page.getByPlaceholder('Enter your last name').fill(lastName);
        
    }

    async getPersonalDetails() {
        // Example: Replace selectors with actual ones from your application
        const firstName = await this.page.getByPlaceholder('Enter your first name').inputValue();
        const lastName = await this.page.getByPlaceholder('Enter your last name').inputValue();
        return { firstName, lastName };
    }

    async updateBio(bio, goal) {
        await this.page.getByRole('tab', { name: 'Bio' }).click();
        await this.page.getByPlaceholder('Write a few sentence about').fill(bio);
        await this.page.getByPlaceholder('What\'s your goal?').fill(goal);
        await this.page.getByRole('button', { name: 'Save' }).click();
    }

    async getBio() {
        // Example: Replace selectors with actual ones from your application
        await this.page.getByRole('tab', { name: 'Bio' }).click();
        const bioText = await this.page.getByPlaceholder('Write a few sentence about').inputValue();
        return bioText;
    }

    async updateInterests() {
        await this.page.getByRole('tab', { name: 'My interests/preferences' }).click();
        await this.page.getByRole('button', { name: 'Edit' }).first().click();
        await this.page.getByRole('button', { name: 'Accounting' }).click();
        await this.page.getByLabel('controlled').check();
        await this.page.getByRole('button', { name: 'Save' }).click();
    }
    



    async getInterests() {
        // Example: Replace selectors with actual ones from your application
        const interestsText = await this.page.getByRole('tab', { name: 'My interests/preferences' }).textContent();
        return interestsText;
    }

    async setInvalidProfilePicture() {
        await this.page.getByRole('button', { name: 'Edit Picture' }).click();
        // Implement logic to upload an invalid image format
        // await this.page.setInputFiles('input[type="file"]', 'path/to/invalidImage.pdf');
    }

    async validateBlankRequiredFields() {
        await this.page.getByRole('button', { name: 'Edit' }).first().click();
        await this.page.getByPlaceholder('Enter your first name').fill('');
        await this.page.getByPlaceholder('Enter your last name').fill('');
        await this.page.getByRole('button', { name: 'Save' }).click();
    }
}


module.exports = MenteeProfilePage;