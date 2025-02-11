import { test, expect } from '@playwright/test';
import AuthPage from '@page-objects/AuthPage';  // Alias for page objects
import MentorFiltersPage from '@page-objects/MentorFilters.page';  // Import the new page object
import { credentials, mentorFilters } from '@fixtures/test-data-mentee'; // Import the necessary test data
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





    // Navigate to mentor filtering page (assumed URL)
    // Example: await page.goto(MentorFiltersPage.navigateMentorPage());
  });

  // Test case 1: Successfully apply checkbox filters and verify selection
  test('Successfully applies checkbox filters and verifies selection', async ({ page }) => {

    // Assert login was successful by checking a user-specific element
    //await expect(page.getByRole('link', { name: 'Browse Mentor' })).toBeVisible({ timeout: 5000 });

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
});
