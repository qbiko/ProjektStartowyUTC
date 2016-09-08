var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';

var usernameIn = webdriver.By.name('username');
var passwordIn = webdriver.By.name('password');
var loginBtn = webdriver.By.className('login-btn');
var moreOptionContainer = webdriver.By.className('options-panel-toggle');
var optionsPanel = webdriver.By.id('options-panel');
var xpathUsernameValidationMsg = webdriver.By.xpath('html/body/div/section');
var xpathOptionsPanel = webdriver.By.xpath('//div[contains(@id, "options-panel")]');
 //
test.describe('Test poprawnosci nazwy, hasla oraz dropdown wiecej mozliwosci', function() {

    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver);

      test.it('czy w przypadku pustego pola username i password, dostajemy informacje ze pole jest wymagane ?', function() {
        this.timeout(5000);
        page.visit();
        page.klik(loginBtn);
        page.getUserData('//div[contains(@class,"is-invalid")]/span[contains(@class, "validation-message")]').then(function(text){
        	assert.equal(text, 'This field is required')
        });
      });

       test.it('czy po uzupelnieniu username , password nadal jest wymagany ?', function(){
      	page.setText(usernameIn, 'Sebastian');
      	page.getUserData('//div[contains(@class,"is-invalid")]/span[contains(@class, "validation-message")]').then(function(text){
        	assert.equal(text, 'This field is required')
        });
      });

      test.it('czy po uzupelnieniu username i password, znika informacja ze pola sa wymagane ?', function(){
      	page.setText(passwordIn, 'password');
      	page.getUserData('//span[contains(@class, "validation-message")][1]').then(function(text){
        	assert.equal(text, '')
        });
      });

      test.it('czy panel z Directory i Language jest widoczny bez zadnej poczatkowej interakcji', function(){
      	page.getElement(xpathOptionsPanel).getAttribute('aria-hidden').then(function(text){
          assert.equal(text, 'false')
        });
      });
      test.it('czy panel z Directory i Language zostaje ukryty po jego kliknieciu', function(){
        page.klik(moreOptionContainer);
        page.getElement(xpathOptionsPanel).getAttribute('aria-hidden').then(function(text){
          assert.equal(text, 'true')
        })
      });
});