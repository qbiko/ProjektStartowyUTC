var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var utcPage = require('../lib/utcPage.js');
import {expect} from 'chai';
var driver;

const TimeOut = 30000; //ms

test.before(function() {
    this.timeout(TimeOut);
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.edge()).build();
});

test.describe('Strona logowania', function() {
    this.timeout(TimeOut);

    test.it('czy po wpisaniu blednego hasla pojawia sie "Password failed"', function() {
      this.timeout(TimeOut);
			var page = new utcPage(driver);
	    page.visit();
      page.driver.wait(webdriver.until.titleIs('Konsola Bezpieczeństwa'), 1000);
      page.fillForm('Jakub', 'Chodorowski', 12, 16);
			page.clickSomething(page.buttonZaloguj);
      driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[2]')).isEnabled();
    });

    test.it('zbadaj czy w local storage sa odpowiednie wartosci jezyka i informatora', function() {
			var page = new utcPage(driver);
	    page.visit();
      page.fillForm('Jakub', 'Chodorowski', 12, 16);

      page.checkLocalStorage('locale').then(function(value) {
        assert.equal(value, 'pl-PL', 'Bledna wartosc locale w localStorage');
      });

      page.checkLocalStorage('domain').then(function(value) {
        assert.equal(value, 'UX.USERS.TEST', 'Bledna wartosc domain w localStorage');
      });

    });

		test.it('zbadaj czy mozna wyczyscic formularz oraz czy pojawia sie komunikat o obowiazku ich wypelnienia', function() {
      var page = new utcPage(driver);
	    page.visit();
      page.fillForm('Jakub', 'Chodorowski', 12, 16);

      page.cleanUsername();
      page.cleanPassword();

      page.getInputText(page.loginInput).then(function(text) {
        assert.equal(text, '', 'Nie wyczyszczono pola login');
      });

      page.getInputText(page.passwordInput).then(function(text) {
        assert.equal(text, '', 'Nie wyczyszczono pola haslo');
      });

      page.getInputText(page.spanValidationLogin).then(function(text) {
        assert.equal(text, 'This field is required', 'Nie pojawia sie komunikat przy loginie');
      });

      page.getInputText(page.spanValidationPassword).then(function(text) {
        assert.equal(text, 'This field is required', 'Nie pojawia sie komunikat przy hasle');
      });

		});
    test.it('zbadaj czy w input przesuwa sie do gory i ma kolor czerwony', function() {
      var page = new utcPage(driver);
      page.visit();

      page.fillForm('Jakub', 'Chodorowski', 12, 16);

      page.cleanUsername();

      page.driver.findElement(page.loginDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(page.correctClass)
      });

      page.driver.findElement(page.loginDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(page.classInvalid)
      });

      page.cleanPassword();

      page.driver.findElement(page.passwordDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(page.classInvalid)
      });

      page.driver.findElement(page.passwordDiv)
      .getAttribute('class').then(function(text){
        expect(text).to.have.string(page.correctClass)
      });
    });
});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
