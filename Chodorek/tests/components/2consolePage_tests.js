var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var utcPage = require('../lib/utcPage.js');
import {expect} from 'chai';
var driver;
var url;
const TimeOut = 30000; //ms

test.before(function() {
    this.timeout(TimeOut);
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.edge()).build();
});

test.beforeEach(function() {
  var page = new utcPage(driver);
  this.timeout(TimeOut);
  page.visit();

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
			var page = new utcPage(driver);
      this.timeout(TimeOut);
	    page.visit();
      page.fillForm('marcin', 'changeme', 11, 16);
			page.clickSomething(page.buttonZaloguj);
      driver.sleep(1000);
      driver.getCurrentUrl().then(function(url) {
        assert.equal('http://10.0.100.171:8082/#/console', url, 'Niepoprawny adres po zalogowaniu');
      });

      var currentUrl;
      page.getUrl().then(function(text) {
          currentUrl = text.toString();
        });
      page.url = currentUrl;
      page.logout();
      driver.sleep(1000);
      driver.getCurrentUrl().then(function(url) {
        assert.equal('http://10.0.100.171:8082/#/', url, 'Niepoprawny adres po wylogowaniu');
      });
    });

    test.it('czy po zalogowaniu pojawiaja sie wszystkie opcje do wyboru', function() {
      var page = new utcPage(driver);
      this.timeout(TimeOut);
      page.visit();
      page.fillForm('marcin', 'changeme', 11, 16);
      page.clickSomething(page.buttonZaloguj);
      driver.sleep(1000);

      var currentUrl = driver.getCurrentUrl().toString();
      page.url = currentUrl;

      page.isElement(page.userManagement);
      page.isElement(page.level3);
      page.isElement(page.desktopApp);
      page.isElement(page.settings);
      page.isElement(page.userDrop);

      page.clickSomething(page.userDrop);
      page.isElement(page.myAccount);
      page.isElement(page.help);
      page.isElement(page.about);
      page.isElement(page.logoutButton);
    });

		test.it('czy po kliknieciu w opcje dekstop app pojawia sie popup i czy posiada wszystkie elementy', function() {
      var page = new utcPage(driver);
      this.timeout(TimeOut);
      page.visit();
      page.fillForm('marcin', 'changeme', 11, 16);
      page.clickSomething(page.buttonZaloguj);
      driver.sleep(1000);

      var currentUrl = driver.getCurrentUrl().toString();
      page.url = currentUrl;

      page.clickSomething(page.desktopApp);
      driver.sleep(1000);
      page.isElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]'));
      page.isElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]/div/span'));
      page.isElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]/div/div/button'));
      page.isElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]/div/div/a'));

      page.getInputText(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]/div/div/p[1]')).then(function(text) {
        assert.notEqual(text, '', 'blok p jest pusty');
      });
      page.getInputText(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]/div/div/p[2]/small')).then(function(text) {
        assert.notEqual(text, '', 'blok small jest pusty');
      });

		});

});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
