import { test, expect } from '@playwright/test';
import MentorFiltersPage from '@page-objects/MentorFilters.page';  
const { validCredentials, urls } = require('@fixtures/test-data');


test.describe('Mentor Filters and Tab Navigation Tests', () => {
  let mentorFiltersPage;

  // Before each test, initialize pages and log in
  test.beforeEach(async ({ page }) => {
    // authPage = new AuthPage(page);
    mentorFiltersPage = new MentorFiltersPage(page);
    await mentorFiltersPage.navigateToHome();

  });

  test('Successfully applies checkbox filters and verifies selection', async ({ page }) => {

    // Select 'Interview Preparation' filter
    await mentorFiltersPage.checkInterviewPreparation();
    expect(await mentorFiltersPage.isInterviewPreparationChecked()).toBeTruthy();

    // Select 'Networking' filter
    await mentorFiltersPage.checkNetworking();
    expect(await mentorFiltersPage.isNetworkingChecked()).toBeTruthy();


    // Clear filters and verify
    await mentorFiltersPage.clearFilters();
    expect(await mentorFiltersPage.areFiltersCleared()).toBeTruthy();
  });

  
  test('Switches tabs and verifies the active tab', async ({ page }) => {
    await mentorFiltersPage.navigateToHome();
    await mentorFiltersPage.switchAndVerifyTabs();
  });


  test('Mentee Successfully See Mentors after selecting timezone', async ({ page }) => {
    
    // Update interests and select timezone
    await mentorFiltersPage.SelectTimeZone();
   
  
  });

  test('Mentee Successfully See Mentors based on Price Ranges', async ({ page }) => {
  
    // Update interests and select timezone
    await mentorFiltersPage.SelectPriceRange();
    await page.waitForTimeout(500);
   
  });




});
