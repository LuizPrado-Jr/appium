const wd = require('wd');
const { expect } = require('chai');
const FormPage = require('../pages/FormPage');

describe('Form submission test on mobile app', () => {
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

  it('should fill and submit the form successfully', async () => {
    const formPage = new FormPage(driver);

    await formPage.fillForm({
      name: 'Luiz Teste',
      email: 'luiz@email.com',
      comments: 'Testando envio do formulário.'
    });

    await formPage.submitForm();

    const success = await formPage.successMessageVisible();
    expect(success).to.be.true;
  });
});