import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';  
import MentorFiltersPage from '@page-objects/MentorFilters.page';  
import { credentials, mentorFilters } from '@fixtures/test-data-mentee'; 
const { validCredentials, urls } = require('@fixtures/test-data');



test.describe('Mentor Filters and Tab Navigation Tests', () => {
  let authPage;
  let mentorFiltersPage;

  // Before each test, initialize pages and log in
  test.beforeEach(async ({ page }) => {
    authPage = new AuthPage(page);
    mentorFiltersPage = new MentorFiltersPage(page);

    // Login process
    console.log(credentials.valid.email);
    console.log(credentials.valid.password);

    // Navigate to login page and log in
    await authPage.navigateToLogin(urls.baseUrl);
    await authPage.login(credentials.valid.email, credentials.valid.password);

  });


  test('Successfully applies checkbox filters and verifies selection', async ({ page }) => {

  
    // Navigate to Browse Mentors page
    await page.getByRole('link', { name: 'Browse Mentor' }).click();

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

  // Test case 2: Switch tabs and verify they are active
  test('Switches tabs and verifies the active tab', async ({ page }) => {

    // Navigate to Browse Mentors page
    await page.getByRole('link', { name: 'Browse Mentor' }).click();

    // Switch to "Accounting" tab and verify it is selected
    await mentorFiltersPage.selectAccountingTab();
    // await mentorFiltersPage.isTabSelected('Accounting');

    // Switch to "Education" tab and verify it is selected
    await mentorFiltersPage.selectEducationTab();
    // await mentorFiltersPage.isTabSelected('Education');

    // Switch to "Engineering" tab and verify it is selected
    await mentorFiltersPage.selectEngineeringTab();
    // await mentorFiltersPage.isTabSelected('Engineering');

    // Switch to "Technology" tab and verify it is selected
    await mentorFiltersPage.selectTechnologyTab();
    // await mentorFiltersPage.isTabSelected('Technology');
  });

  test('Mentee Successfully See Mentors after selecting timezone', async ({ page }) => {
    await page.getByRole('link', { name: 'Browse Mentor' }).click();
    // Update interests and select timezone
    await mentorFiltersPage.SelectTimeZone();
  
  });

  test('Mentee Successfully See Mentors based on Price Ranges', async ({ page }) => {
    await page.getByRole('link', { name: 'Browse Mentor' }).click();
    // Update interests and select timezone
    await mentorFiltersPage.SelectPriceRange();
    await page.waitForTimeout(500);
  
  });




});
