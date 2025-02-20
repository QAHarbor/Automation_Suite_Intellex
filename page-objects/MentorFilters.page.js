// mentorFilters.page.js

class MentorFiltersPage {
  constructor(page) {
    this.page = page;


    this.baseUrl = process.env.BASE_URL || 'https://intellex-stagging.vercel.app';
    this.FindMentorBtn = page.getByRole('link', { name: 'Find a Mentor' });
    // Checkbox filters
    this.interviewPreparationCheckbox = page.locator('label:has-text("Interview Preparation")');
    this.networkingCheckbox = page.locator('label:has-text("Networking")');
    this.clearFiltersButton = page.locator('button:has-text("Clear all")');

//Active tab
    this.tabs = {
      accounting: page.locator('button[role="tab"]:has-text("Accounting")'),
      education: page.locator('button[role="tab"]:has-text("Education")'),
      engineering: page.locator('button[role="tab"]:has-text("Engineering")'),
      technology: page.locator('button[role="tab"]:has-text("Technology")'),
    };

    //Timezone selection
    this.TimeZoneBtn = page.locator("(//input[@id=':r1:'])[1]");

   //Select Price range
   this.minField = page.locator('#minPrice');
   this.maxField = page.locator('#maxPrice');

  }

   async navigateToHome() {
    await this.page.goto(this.baseUrl);
    await this.FindMentorBtn.first().click();
    await this.page.waitForTimeout(4000);

}
  // Select 'Interview Preparation' checkbox
  async checkInterviewPreparation() {
    await this.interviewPreparationCheckbox.check();
  }

  // Select 'Networking' checkbox
  async checkNetworking() {
    await this.networkingCheckbox.check();
  }

  // Clear all filters
  async clearFilters() {
    await this.clearFiltersButton.click();
  }

  // Check if 'Interview Preparation' checkbox is selected
  async isInterviewPreparationChecked() {
    return await this.interviewPreparationCheckbox.isChecked();
  }

  // Check if 'Networking' checkbox is selected
  async isNetworkingChecked() {
    return await this.networkingCheckbox.isChecked();
  }

  // Verify that all filters have been cleared
  async areFiltersCleared() {
    return !(await this.isInterviewPreparationChecked()) && !(await this.isNetworkingChecked());
  }

 
  async switchAndVerifyTabs() {

    for (const [tabName, tabLocator] of Object.entries(this.tabs)) {
      await tabLocator.click();
      await this.page.waitForTimeout(1000); // Ensure the content loads
  
      const mentorsContainer = this.page.locator('div.mentors-container-wrapper.MuiBox-root.mui-0').locator('p').nth(0);
      const textContent = await mentorsContainer.textContent();
  
      console.log(`Clicked on ${tabName} tab`);
      console.log(`Number of mentors available in ${tabName}:`, textContent);
  
      if (tabName === 'education' || tabName === 'technology') {
        await this.page.getByTestId('KeyboardArrowRightIcon').click();
      }
    }
  }

  async SelectTimeZone(){
  
    
    await this.TimeZoneBtn.click();
    await this.TimeZoneBtn.waitFor({ state: 'visible' });
    await this.TimeZoneBtn.fill("Australia/Broken Hill (ACDT)");
    await this.page.waitForTimeout(6000);

  }

  async SelectPriceRange(){
    await this.minField.click();
    await this.minField.fill('500');
    await this.page.waitForTimeout(6000);
    await this.maxField.click();
    await this.maxField.fill('800');
    await this.page.waitForTimeout(6000);

  }

}

module.exports = MentorFiltersPage;
