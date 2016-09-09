var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var ConsolePage = require('../lib/consolePage.js');
var LoginPage = require('../lib/loginPage.js');
import {expect} from 'chai';
var driver;

const TimeOut = 30000; //ms

test.before(function() {
    this.timeout(TimeOut);
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
});

test.describe('Strona logowania', function() {
    this.timeout(TimeOut);

    test.it('czy po wpisaniu blednego hasla pojawia sie "Password failed"', function() {
      this.timeout(TimeOut);
			var loginPage = new LoginPage(driver);
	    loginPage.visit();
      loginPage.driver.wait(webdriver.until.titleIs('Konsola Bezpieczeństwa'), 1000);
      loginPage.fillForm('Jakub', 'Chodorowski', 12, 16);
			loginPage.clickSomething(loginPage.buttonZaloguj);
      driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[2]')).isEnabled();
    });

    test.it('zbadaj czy w local storage sa odpowiednie wartosci jezyka i informatora', function() {
			var loginPage = new LoginPage(driver);
	    loginPage.visit();
      loginPage.fillForm('Jakub', 'Chodorowski', 12, 16);

      loginPage.checkLocalStorage('locale').then(function(value) {
        assert.equal(value, 'pl-PL', 'Bledna wartosc locale w localStorage');
      });

      loginPage.checkLocalStorage('domain').then(function(value) {
        assert.equal(value, 'UX.USERS.TEST', 'Bledna wartosc domain w localStorage');
      });

    });

		test.it('zbadaj czy mozna wyczyscic formularz oraz czy pojawia sie komunikat o obowiazku ich wypelnienia', function() {
      var loginPage = new LoginPage(driver);
	    loginPage.visit();
      loginPage.fillForm('Jakub', 'Chodorowski', 12, 16);

      loginPage.cleanUsername();
      loginPage.cleanPassword();

      loginPage.getInputText(loginPage.loginInput).then(function(text) {
        assert.equal(text, '', 'Nie wyczyszczono pola login');
      });

      loginPage.getInputText(loginPage.passwordInput).then(function(text) {
        assert.equal(text, '', 'Nie wyczyszczono pola haslo');
      });

      loginPage.getInputText(loginPage.spanValidationLogin).then(function(text) {
        assert.equal(text, 'This field is required', 'Nie pojawia sie komunikat przy loginie');
      });

      loginPage.getInputText(loginPage.spanValidationPassword).then(function(text) {
        assert.equal(text, 'This field is required', 'Nie pojawia sie komunikat przy hasle');
      });

		});
    test.it('zbadaj czy w input przesuwa sie do gory i ma kolor czerwony', function() {
      var loginPage = new LoginPage(driver);
      loginPage.visit();

      loginPage.fillForm('Jakub', 'Chodorowski', 12, 16);

      loginPage.cleanUsername();

      loginPage.driver.findElement(loginPage.loginDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(loginPage.correctClass)
      });

      loginPage.driver.findElement(loginPage.loginDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(loginPage.classInvalid)
      });

      loginPage.cleanPassword();

      loginPage.driver.findElement(loginPage.passwordDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(loginPage.classInvalid)
      });

      loginPage.driver.findElement(loginPage.passwordDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(loginPage.correctClass)
      });
    });
});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
