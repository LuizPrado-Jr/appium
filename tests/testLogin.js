const wd = require('wd');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

describe('Login flow test on mobile app', () => {
  let driver;
  const caps = {
    platformName: 'Android',
    deviceName: 'Android Emulator',
    app: 'android-apk.apk',
    automationName: 'UiAutomator2'
  };

  before(async () => {
    driver = await wd.promiseChainRemote('http://localhost:4723');
    await driver.init(caps);
  });

  after(async () => {
    await driver.quit();
  });

  it('should login and see home screen', async () => {
    const loginPage = new LoginPage(driver);
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
    await loginPage.tapLoginButton();

    const homePage = new HomePage(driver);
    const visible = await homePage.validateHomeScreen();
    expect(visible).to.be.true;
  });
});