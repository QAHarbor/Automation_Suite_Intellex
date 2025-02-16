class MentorAvailabilityModify {
  constructor(page) {
    this.page = page;

    // Selectors
    this.emailInput = this.page.getByRole('textbox', { name: 'Email' });
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    this.loginButton = this.page.getByRole('button', { name: 'Log in' });
    this.availabilityButton = this.page.getByRole('button', { name: 'Availability' });
    this.addOverrideButton = this.page.getByRole('button', { name: 'Add an override' });
    this.nextMonthButton = this.page.getByRole('button', { name: 'Next month' });
    this.dayCellsSelector = 'button[role="gridcell"]';
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async navigateToNextMonth() {
    await this.availabilityButton.click();
    await this.addOverrideButton.click();
    await this.nextMonthButton.click();

    // Wait for the calendar grid to load
    await this.page.waitForFunction(() => {
      const dayCells = document.querySelectorAll('button[role="gridcell"]');
      return dayCells.length > 0 && dayCells[0].innerText !== '';
    });
  }

  async clickAnyMonday() {
    const dayCells = await this.page.$$(this.dayCellsSelector);
    
    console.log(`Day cells found: ${dayCells.length}`);
    
    const today = new Date();
    let month = today.getMonth() + 1; // Get the next month (0-indexed)
    let year = today.getFullYear();

    if (month === 12) {
      month = 1;
      year++;
    } else {
      month++;
    }

    for (const cell of dayCells) {
      const cellText = await cell.innerText();
      console.log(`Cell text: '${cellText}'`);

      const day = parseInt(cellText.trim(), 10);
      if (isNaN(day)) continue;

      const currentDate = new Date(year, month - 1, day);
      if (currentDate.getDay() === 1) { // 1 represents Monday
        await cell.click(); // Click on the Monday cell
        console.log(`Clicked on Monday: ${currentDate.toLocaleDateString()}`);
        return currentDate; // Return the clicked date
      }
    }

    console.log('No Mondays were clicked in the next month.');
    return null; // Return null if no Monday was clicked
  }

  async addOverride() {
    await this.page.getByRole('button', { name: 'Add override' }).click();
    await this.page.getByRole('button', { name: 'Save changes' }).click();
  }
}

module.exports = MentorAvailabilityModify;