var assert = require('assert');
var webdriver = require('selenium-webdriver');
var test = require('selenium-webdriver/testing');
var Page = require('../lib/page.js');
var driver;

const TimeOut = 30000; //ms

test.before(function() {
    this.timeout(TimeOut);
    driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.edge()).build();
});

test.describe('Projekt Startowy UTC', function() {
    this.timeout(TimeOut);

    test.it('zbadaj tytul strony', function() {
			var page = new Page(driver);
	    page.visit();
	    page.titlePage().then(function(title) {
	        assert.notEqual(title, '', 'Bledny tytul strony');
	    });
    });

    test.it('zbadaj czy label oSobie nie jest pusty', function() {
			var page = new Page(driver);
	    page.visit();
	    page.getLabeloSobieText().then(function(text) {
	        assert.notEqual(text, '', 'label oSobie jest pusty');
	    });
    });

		test.it('zbadaj czy formularz poprawnie przesyla informacje', function() {
			var page = new Page(driver);
			page.visit();

			page.fillForm('Jakub', 'Chodorowski', 3, 'solidny, zorganizowany, pracowity :D')
			page.clickSomething(page.buttonWyslij);

			driver.wait(webdriver.until.titleIs('Wypełniono formularz'), 1000);

			page.getFirmaText().then(function(text) {
	        assert.equal(text, 'Intel', 'Bledna nazwa firmy');
	    });

		});
});

test.afterEach(function() {
    driver.manage().deleteAllCookies();
});

test.after(function() {
    driver.quit();
});
