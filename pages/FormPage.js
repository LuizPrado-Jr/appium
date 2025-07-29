class FormPage {
  constructor(driver) {
    this.driver = driver;
  }

  async fillForm({ name, email, comments }) {
    await this.driver.elementByAccessibilityId('test-Name').sendKeys(name);
    await this.driver.elementByAccessibilityId('test-Email').sendKeys(email);
    await this.driver.elementByAccessibilityId('test-Comments').sendKeys(comments);
  }

  async submitForm() {
    await this.driver.elementByAccessibilityId('test-SUBMIT').click();
  }

  async successMessageVisible() {
    const el = await this.driver.elementByAccessibilityId('test-SUCCESS');
    return el.isDisplayed();
  }
}
module.exports = FormPage;