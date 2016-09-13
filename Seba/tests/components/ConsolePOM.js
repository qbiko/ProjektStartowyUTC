var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/console';

var directory = '//ul[contains(@class, "moduleCards")]/';

var appum = webdriver.By.xpath('//ul[contains(@class, "moduleCards")]/li[1]');
var applvl3 = webdriver.By.xpath('//ul[contains(@class, "moduleCards")]/li[2]');
var appthick = webdriver.By.xpath(directory+'li[3]');
var appsettings = webdriver.By.xpath(directory+'li[4]');
var navbar = webdriver.By.className('navbar-brand');

test.describe('Test Konsoli Bezpieczenstwa', function(){
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

    test.it('wyswietla sie napis Konsola Bezpieczenstwa w navbarze', function(){
    	this.timeout(5000);
    	page.visit();
    	page.getElement(navbar).getText().then(function(text){
    		assert.equal(text, 'Konsola Bezpieczeństwa');
    	});
    });

    test.describe('#User Managment', function(){
		var enabled;
		test.it('-Wyswietla sie',function(){
	    	page.getElement(appum).getAttribute('class').then(function(text){
	    		enabled = text;
	    	});

	    	page.getElement(appum).getAttribute('class').then(function(text){
	    		enabled = text;
				   expect(text).to.have.string('enabled')
			});

		});

	    it('-jest zablokowany i nie mozna w niego kliknac',function(){
			if(enabled.indexOf('enabled') !== -1){
				this.skip();
			}
			appum = webdriver.By.xpath(directory+'li[1]'+'/a');
			page.getElement(appum).getAttribute('title').then(function(text){
				assert.equal(text, 'This desktop application is unsupported on your operating system or device.');
			})
		});
	});

	test.describe('#lvl3 Sample Module', function(){
		var enabled;
		test.it('-Wyswietla sie',function(){
	    	page.getElement(applvl3).getAttribute('class').then(function(text){
	    		enabled = text;
	    	});

	    	page.getElement(applvl3).getAttribute('class').then(function(text){
	    		enabled = text;
				   expect(text).to.have.string('enabled')
			});

		});

	    it('-jest zablokowany i nie mozna w niego kliknac',function(){
			if(enabled.indexOf('enabled') !== -1){
				this.skip();
			}
			applvl3 = webdriver.By.xpath(directory+'li[2]'+'/a');
			page.getElement(applvl3).getAttribute('title').then(function(text){
				assert.equal(text, 'This desktop application is unsupported on your operating system or device.');
			})
		});
	});

	test.describe('#App Placeholder', function(){
		var enabled;
		test.it('-Wyswietla sie',function(){
	    	page.getElement(appthick).getAttribute('class').then(function(text){
	    		enabled = text;
	    	});

	    	page.getElement(appthick).getAttribute('class').then(function(text){
	    		enabled = text;
				   expect(text).to.have.string('enabled')
			});

		});

	    test.it('-jest zablokowany i nie mozna w niego kliknac',function(){

			if(enabled.indexOf('enabled') !== -1){
				this.skip();
			}
			appthick  = webdriver.By.xpath(directory+'li[3]'+'/a');
			page.getElement(appthick).getAttribute('title').then(function(text){
				assert.equal(text, 'This desktop application is unsupported on your operating system or device.');
			})
		});

	});

	test.describe('#Settings', function(){
		var enabled;
		test.it('-Wyswietla sie',function(){
	    	page.getElement(appsettings).getAttribute('class').then(function(text){
	    		enabled = text;
	    	});

	    	page.getElement(appsettings).getAttribute('class').then(function(text){
	    		enabled = text;
				   expect(text).to.have.string('enabled')
			});

		});

	    it('-jest zablokowany i nie mozna w niego kliknac',function(){
			if(enabled.indexOf('enabled') !== -1){
				this.skip();
			}
			appsettings = webdriver.By.xpath(directory+'li[4]'+'/a');
			page.getElement(appsettings).getAttribute('title').then(function(text){
				assert.equal(text, 'This desktop application is unsupported on your operating system or device.');
			})
		});
	});

});
