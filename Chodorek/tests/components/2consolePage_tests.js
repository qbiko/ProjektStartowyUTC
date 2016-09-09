var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var consolePage = require('../lib/consolePage.js');
var loginPage = require('../lib/loginPage.js');
import {expect} from 'chai';
var driver;
var url;
const TimeOut = 30000; //ms

test.before(function() {
    this.timeout(TimeOut);
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.edge()).build();
});

test.beforeEach(function() {
  var testPage = new loginPage(driver);
  this.timeout(TimeOut);
  testPage.visit();

  driver.sleep(1000);
  driver.getCurrentUrl().then(function(url) {
    if(url == 'http://10.0.100.171:8082/#/console') {
      driver.sleep(1000);
      driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li')).click();
      driver.sleep(1000);
      driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[4]')).click();
      driver.sleep(1000);
    }
  });
});

test.describe('Strona - kontrola bezpieczeństwa', function() {
    this.timeout(TimeOut);

    test.it('czy po zalogowaniu pojawia sie odpowiednia strona i czy poprawnie wylogowuje', function() {
			var pageLogin = new loginPage(driver);
      this.timeout(TimeOut);
	    pageLogin.visit();
      pageLogin.fillForm('marcin', 'changeme', 11, 16);
			pageLogin.clickSomething(pageLogin.buttonZaloguj);
      driver.sleep(1000);
      driver.getCurrentUrl().then(function(url) {
        assert.equal('http://10.0.100.171:8082/#/console', url, 'Niepoprawny adres po zalogowaniu');
      });

      var currentUrl;
      pageLogin.getUrl().then(function(text) {
          currentUrl = text.toString();
        });
      var pageConsole = new consolePage(driver, currentUrl);
      pageConsole.logout();
      driver.sleep(1000);
      driver.getCurrentUrl().then(function(url) {
        assert.equal('http://10.0.100.171:8082/#/', url, 'Niepoprawny adres po wylogowaniu');
      });
    });

    test.it('czy po zalogowaniu pojawiaja sie wszystkie opcje do wyboru', function() {
      var pageLogin = new loginPage(driver);
      this.timeout(TimeOut);
      pageLogin.visit();
      pageLogin.fillForm('marcin', 'changeme', 11, 16);
      pageLogin.clickSomething(pageLogin.buttonZaloguj);
      driver.sleep(1000);

      var currentUrl = driver.getCurrentUrl().toString();
      var pageConsole = new consolePage(driver, currentUrl);

      pageConsole.isElement(pageConsole.userManagement);
      pageConsole.isElement(pageConsole.level3);
      pageConsole.isElement(pageConsole.desktopApp);
      pageConsole.isElement(pageConsole.settings);
      pageConsole.isElement(pageConsole.userDrop);

      pageConsole.clickSomething(pageConsole.userDrop);
      pageConsole.isElement(pageConsole.myAccount);
      pageConsole.isElement(pageConsole.help);
      pageConsole.isElement(pageConsole.about);
      pageConsole.isElement(pageConsole.logoutButton);
    });

/*
		test.it('zbadaj czy mozna wyczyscic formularz oraz czy pojawia sie komunikat o obowiazku ich wypelnienia', function() {
      var page = new loginPage(driver);
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
      var page = new loginPage(driver);
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
    */
});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
