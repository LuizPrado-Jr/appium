class LoginPage {
  constructor(driver) {
    this.driver = driver;
  }

  async enterUsername(username) {
    const el = await this.driver.elementByAccessibilityId('test-Username');
    return el.sendKeys(username);
  }

  async enterPassword(password) {
    const el = await this.driver.elementByAccessibilityId('test-Password');
    return el.sendKeys(password);
  }

  async tapLoginButton() {
    const el = await this.driver.elementByAccessibilityId('test-LOGIN');
    return el.click();
  }
}
module.exports = LoginPage;