var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/settings/system';

var passwordBtn = webdriver.By.xpath('//a[contains(@title, "Passwords")]');
var sessionsBtn = webdriver.By.xpath('//a[contains(@title, "Sessions")]');
var contactBtn = webdriver.By.xpath('//a[contains(@title, "Contact")]');

var performanceContainer = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');
var performanceH3 = webdriver.By.xpath('//h3[contains(@class, "panel-title side-panel-title")]');


test.describe('Test zakladki Settings', function(){
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

	test.describe('Passwords', function(){

        test.it('czy wyswietla sie lista z opcjami po prawej stronie', function(){
            this.timeout(5000);
            page.visit();
            page.waitToElement(passwordBtn);
            page.klik(passwordBtn);
            driver.findElement(performanceContainer).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('czy lista po prawej stronie nalezy do danego przycisku', function(){
            page.waitToElement(performanceH3);
            page.getLabelText(performanceH3).then(function(text){
                assert.equal(text, 'Passwords');
            })
        });

	});

    test.describe('Sessions', function(){

        test.it('czy wyswietla sie lista z opcjami po prawej stronie', function(){
            page.waitToElement(sessionsBtn);
            page.klik(sessionsBtn);
            driver.findElement(performanceContainer).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('czy lista po prawej stronie nalezy do danego przycisku', function(){
            page.waitToElement(performanceH3);
            page.getLabelText(performanceH3).then(function(text){
                assert.equal(text, 'Sessions');
            })
        });

    });

    test.describe('Contact', function(){

        test.it('czy wyswietla sie lista z opcjami po prawej stronie', function(){
            page.waitToElement(contactBtn);
            page.klik(contactBtn);
            driver.findElement(performanceContainer).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('czy lista po prawej stronie nalezy do danego przycisku', function(){
            page.waitToElement(performanceH3);
            page.getLabelText(performanceH3).then(function(text){
                assert.equal(text, 'Contact');
            })
        });

    });
});