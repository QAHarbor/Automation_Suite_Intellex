
class MentorProfile
{
    constructor(page) {
        this.page = page;
    
//Profile Picture
this.profilebtn = page.locator("//p[normalize-space()='Profile']");
this.UploadPicBtn = page.getByRole('button', { name: 'Upload' });
this.editBtn= page.locator('button.MuiButtonBase-root.mui-vlhhjv');
this.Selectfile = page.getByRole('button', { name: 'Choose a file' });
this.imageInput = page.locator('input[type="file"]');
this.SaveBtn1 = page.getByRole('button', { name: 'Save' });

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
this.AdviceInput =  page.locator('textarea#bestAdvice');


//change password
this.AccountBtn = page.locator("//button[normalize-space()='Account settings']");
this.changeBtn = page.locator('(//button[@type="button" and text()="Change"])[1]');
this.currentpassBtn = page.locator('input[placeholder="Enter your current password"]');
this.currEyebtn = page.locator('svg.iconify.iconify--akar-icons');
this.newpassBtn =page.locator('input[placeholder="Enter your new password"]');
this.newEyebtn = page.locator('(//button[@type="button"])[4]');
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

        async UpdatePicture() {
            await this.editBtn.click();
            await this.Selectfile.click();
            await this.imageInput.setInputFiles('C:/Users/Dell/Downloads/image (4).png');
            await this.SaveBtn1.click();
            }

            async VisitOwnProfile() {
       
              await this.VisitProfileBtn.click()
              await this.page.waitForTimeout(3000);
            }


            async UpdateBio(intro,experience,education,reason,advice) {
                
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
            }


        async PasswordChange(currentPass,newPass) {
            await this.AccountBtn.click();
            await this.changeBtn.click();
            await this.currentpassBtn.click();
            await this.currentpassBtn.fill(currentPass);
            await this.newpassBtn.click();
            await this.newpassBtn.fill(newPass);
            await this.newEyebtn.click();
            await this.ConfirmBtn.click(); 
            }
            
            async MakeVolunteer() {
                await this.BillingTab.click();
                await this.VoluteerBtn.click()
                await this.SaveBtn2.click()

            }

            async NotificationVisit() {
       
                // Set viewport size
              await this.NotificationBtn.click();

              await this.page.evaluate(() => {
                window.scrollBy(0, window.innerHeight); // Scroll down by one viewport height

                
            });
            await this.page.waitForTimeout(5000);

            }




}
module.exports = MentorProfile;