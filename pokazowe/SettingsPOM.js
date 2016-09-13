var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var utcPage = require('./utcPage.js');
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/settings/system';

var passwordBtn = webdriver.By.xpath('//a[contains(@title, "Passwords")]');
var sessionsBtn = webdriver.By.xpath('//a[contains(@title, "Sessions")]');
var contactBtn = webdriver.By.xpath('//a[contains(@title, "Contact")]');
test.describe('Test zakladki Settings', function(){
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.edge()).
        build();
    var page = new utcPage(driver);

	test.describe('Passwords', function(){

        test.it('czy wyswietla sie lista z opcjami po prawej stronie', function(){
            this.timeout(5000);
            page.visit();
            page.clickIn(passwordBtn);
            page.sleep(5000);
            driver.findElement(webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]')).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('czy lista po prawej stronie nalezy do danego przycisku', function(){
            page.getLabelText(webdriver.By.xpath('//h3[contains(@class, "panel-title side-panel-title")]')).then(function(text){
                assert.equal(text, 'Passwords');
            })
        });

	});

    test.describe('Sessions', function(){

        test.it('czy wyswietla sie lista z opcjami po prawej stronie', function(){
            page.clickIn(sessionsBtn);
            page.sleep(5000);
            driver.findElement(webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]')).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('czy lista po prawej stronie nalezy do danego przycisku', function(){
            page.getLabelText(webdriver.By.xpath('//h3[contains(@class, "panel-title side-panel-title")]')).then(function(text){
                assert.equal(text, 'Sessions');
            })
        });

    });

    test.describe('Contact', function(){

        test.it('czy wyswietla sie lista z opcjami po prawej stronie', function(){
            page.clickIn(contactBtn);
            page.sleep(5000);
            driver.findElement(webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]')).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('czy lista po prawej stronie nalezy do danego przycisku', function(){
            page.getLabelText(webdriver.By.xpath('//h3[contains(@class, "panel-title side-panel-title")]')).then(function(text){
                assert.equal(text, 'Contact');
            })
        });

    });
    */
});
