// mentorFilters.page.js

class MentorFiltersPage {
  constructor(page) {
    this.page = page;

    // Checkbox filters
    this.interviewPreparationCheckbox = page.locator('label:has-text("Interview Preparation")');
    this.networkingCheckbox = page.locator('label:has-text("Networking")');
    this.clearFiltersButton = page.locator('button:has-text("Clear all")');

    // Tab navigation
    this.accountingTab = page.locator('button[role="tab"]:has-text("Accounting")');
    this.educationTab = page.locator('button[role="tab"]:has-text("Education")');
    this.engineeringTab = page.locator('button[role="tab"]:has-text("Engineering")');
    this.technologyTab = page.locator('button[role="tab"]:has-text("Technology")');

    //Timezone selection
    this.TimeZoneBtn = page.locator("(//input[@id=':r1:'])[1]");

   //Select Price range
   this.minField = page.locator('#minPrice');
   this.maxField = page.locator('#maxPrice');

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

  // Tab Navigation Methods

  // Switch to 'Accounting' tab
  async selectAccountingTab() {
    await this.accountingTab.click();
  }

  // Switch to 'Education' tab
  async selectEducationTab() {
    await this.educationTab.click();
  }

  // Switch to 'Engineering' tab
  async selectEngineeringTab() {
    await this.engineeringTab.click();
  }

  // Switch to 'Technology' tab
  async selectTechnologyTab() {
    await this.technologyTab.click();
  }

  async SelectTimeZone(){
    await this.TimeZoneBtn.click();
    await this.TimeZoneBtn.waitFor({ state: 'visible' });
    await this.TimeZoneBtn.fill("Australia/Broken Hill (ACDT)");
  }

  async SelectPriceRange(){
    await this.minField.click();
    await this.minField.fill('10');
    await this.maxField.click();
    await this.maxField.fill('30');
  }

}

module.exports = MentorFiltersPage;
