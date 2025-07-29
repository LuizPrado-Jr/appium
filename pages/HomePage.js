class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  async validateHomeScreen() {
    const el = await this.driver.elementByAccessibilityId('test-Cart');
    return el.isDisplayed();
  }
}
module.exports = HomePage;