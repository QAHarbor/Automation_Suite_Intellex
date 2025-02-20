class MentorProfile {
    constructor(page) {
        this.page = page;

        //Profile Picture
        this.profilebtn = page.locator("//p[normalize-space()='Profile']");
       

        //own profile
        this.VisitProfileBtn = page.locator("(//a[normalize-space()='View my profile'])[1]");
        //Notification
        this.NotificationBtn = page.locator("(//*[name()='svg'][@class='iconify iconify--lucide'])[1]");
        //Bio tab
        this.BioTab = page.locator("//button[normalize-space()='Bio']");
        this.IntroInput = page.locator('textarea#intro');
        this.ExperienceInput = page.locator('textarea#workExperience');
        this.EducationInput = page.locator('textarea#education');
        this.ReasonInput = page.locator('textarea#reasonForJob');
        this.AdviceInput = page.locator('textarea#bestAdvice');
        //change password
        this.AccountBtn = page.locator("//button[normalize-space()='Account settings']");
        this.changeBtn = page.locator('(//button[@type="button" and text()="Change"])[1]');
        this.currentpassBtn = page.locator('input[placeholder="Enter your current password"]');
        this.newpassBtn = page.locator('input[placeholder="Enter your new password"]');
        this.ConfirmBtn = page.locator('.MuiButton-containedPrimary');
        //Billing Info Tab
        this.BillingTab = page.locator("//button[normalize-space()='Billing information']");
        this.VoluteerBtn = page.locator("(//div[@class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 mui-1qi9qv5'])[1]");
        this.SaveBtn2 = page.locator("(//button[normalize-space()='Save'])[1]");
    }
    async NavigateToProfile() {
        // Set viewport size
        await this.page.setViewportSize({ width: 1200, height: 800 });
        await this.profilebtn.click();
        await this.page.waitForTimeout(3000);
    }
   
    async VisitOwnProfile() {
        await this.VisitProfileBtn.click()
        await this.page.waitForTimeout(3000);
    }

    async updateProfile(){

await this.page.fill('#firstName', 'Hasnain');

await this.page.fill('#lastName', 'vaia');

await this.page.click('(//input[@id=":r4:"])[1]');
await this.page.click('(//li[@id=":ri:-option-1"])[1]');

await this.page.fill('#companyName', 'Ontik');

await this.page.fill('#jobTitle', 'Software Engineer');

await this.page.fill('#linkedInProfile', 'www.linkedin.com/in/xxx');

await this.page.click("(//button[normalize-space()='Save'])[1]");
await this.page.waitForTimeout(5000);

    }


    async UpdateBio(intro, experience, education, reason, advice) {
        await this.BioTab.click();
        await this.IntroInput.click();
        await this.IntroInput.fill(intro);
        await this.ExperienceInput.click();
        await this.ExperienceInput.fill(experience);
        await this.EducationInput.click();
        await this.EducationInput.fill(education);
        await this.ReasonInput.click();
        await this.ReasonInput.fill(reason);
        await this.AdviceInput.click();
        await this.AdviceInput.fill(advice);
        await this.SaveBtn1.click();
        await this.page.waitForTimeout(5000);
    }
    async PasswordChange(currentPass, newPass) {
        await this.AccountBtn.click();
        await this.changeBtn.click();
        await this.currentpassBtn.click();
        await this.currentpassBtn.fill(currentPass);
        await this.newpassBtn.click();
        await this.newpassBtn.fill(newPass);
        await this.ConfirmBtn.click();
        await this.page.waitForTimeout(5000);
    }
    async MakeVolunteer() {
        await this.BillingTab.click();
        await this.VoluteerBtn.click()
        await this.SaveBtn2.click()
    }
    async NotificationVisit() {
        await this.NotificationBtn.click();
        await this.page.evaluate(() => {
            window.scrollBy(0, window.innerHeight); // Scroll down by one viewport height
        });
        await this.page.waitForTimeout(5000);
    }
}
module.exports = MentorProfile;