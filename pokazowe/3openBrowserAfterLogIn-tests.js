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

test.describe('Dziala tylko gdy uruchamiamy gdy sie zalogowalismy i wylaczylismy przegladarke', function() {
    this.timeout(TimeOut);

    test.it('czy po zamknieciu przegladarki dalej jest sie zalogowanym', function() {
			var page = new utcPage(driver);
      this.timeout(TimeOut);
	    page.visit();
      driver.sleep(1000);
      driver.getCurrentUrl().then(function(url) {
        assert.equal('http://10.0.100.171:8082/#/console', url, 'Nie jestes zalogowany');
      });
      var currentUrl = driver.getCurrentUrl().toString();
      page.url = currentUrl;
      driver.sleep(1000);
    });
});
/*
test.afterEach(function() {
    driver.manage().deleteAllCookies();
});
*/
test.after(function() {
    driver.quit();
});
