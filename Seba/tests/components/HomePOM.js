var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
var LocalStorage = require('node-localstorage').LocalStorage,
localStorage = new LocalStorage('./scratch');
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
var LanguageInput = webdriver.By.xpath('//input[contains(@name, "locale")]');
var usernameLabel = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[1]/label')
var passwordLabel = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[2]/label');
var t = webdriver.By.xpath('//div[contains(@class, "options-panel-toggle")]');
var LanguageDropdown = webdriver.By.xpath('//div[contains(@class, "options-panel")]/div[2]/button');
var LanguageOptionEnglish = webdriver.By.xpath('//ul[contains(@id, "locale")]/li[2]/a');
var Logo = webdriver.By.className('logo-container');
var xpathFormContainerInputUsername = webdriver.By.xpath('//div[contains(@class, "form-container")]/form/div[1]/input');
var xpathFormContainerInputPassword = webdriver.By.xpath('//div[contains(@class, "form-container")]/form/div[2]/input');
var xpathFormContainerUsername = webdriver.By.xpath('//div[contains(@class, "form-container")]/form/div[1]');
var xpathFormContainerPassword = webdriver.By.xpath('//div[contains(@class, "form-container")]/form/div[2]');
test.describe('Test poprawnosci nazwy, hasla oraz dropdown wiecej mozliwosci', function() {

    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver);

    test.it('czy po kliknieciu na input username lub password placeholder podnosi sie do gory', function(){
      this.timeout(5000);
      page.visit();

      
      page.klik(xpathFormContainerInputUsername);
      page.sleep(5000);
      page.getElement(xpathFormContainerUsername).getAttribute('class').then(function(text){
          expect(text).to.have.string('has-focus');
      });

      page.klik(xpathFormContainerInputPassword);
      page.sleep(5000);
      page.getElement(xpathFormContainerPassword).getAttribute('class').then(function(text){
          expect(text).to.have.string('has-focus');
      });

      page.klik(Logo); //odklikniecie

    });

      test.it('czy w przypadku pustego pola username i password, dostajemy informacje ze pole jest wymagane ?', function() {

        page.klik(loginBtn);
        page.getUserData('//div[contains(@class,"is-invalid")]/span[contains(@class, "validation-message")]').then(function(text){
        	assert.equal(text, 'This field is required')
        });
      });

       test.it('czy po uzupelnieniu username , password nadal jest wymagany ?', function(){
        //page.sleep(1000);
      	page.setText(usernameIn, 'Sebastian');
      	page.getUserData('//div[contains(@class,"is-invalid")]/span[contains(@class, "validation-message")]').then(function(text){
        	assert.equal(text, 'This field is required')
        });
      });

      test.it('czy po uzupelnieniu username i password, znika informacja ze pola sa wymagane ?', function(){
        //page.sleep(1000);
      	page.setText(passwordIn, 'password');
      	page.getUserData('//span[contains(@class, "validation-message")][1]').then(function(text){
        	assert.equal(text, '')
        });
      });

      test.it('czy panel z Directory i Language jest widoczny bez zadnej poczatkowej interakcji', function(){
        //page.sleep(1000);
      	page.getElement(xpathOptionsPanel).getAttribute('aria-hidden').then(function(text){
          assert.equal(text, 'false')
        });
      });

      test.it('czy panel z Directory i Language zostaje ukryty po jego kliknieciu', function(){
        //page.sleep(1000)
        page.klik(moreOptionContainer);
        page.getElement(xpathOptionsPanel).getAttribute('aria-hidden').then(function(text){
          assert.equal(text, 'true')
        })
        page.sleep(1000)
        page.klik(moreOptionContainer);
      });

    test.it('klikniecie zmiany jezyka i sprawdzenie czy placeholdery zmienily jezyk w formularzu', function(){
      var usernameLabelOld = page.getElement(usernameLabel);
      var passwordLabelOld = page.getElement(passwordLabel);

      var usernameLabelNew = page.getLabelText(usernameLabel);

      page.getLabelText(usernameLabel).then(function(text) {
        usernameLabelOld = text;
        console.log(usernameLabelOld);
      });

      page.getLabelText(passwordLabel).then(function(text) {
        passwordLabelOld = text;
        console.log(passwordLabelOld);
      });

      page.klik(LanguageDropdown);
      page.sleep(1000);
      page.klik(LanguageOptionEnglish);

      page.getLabelText(usernameLabel).then(function(text) {
        console.log(text);
        assert.notEqual(text, usernameLabelOld)
      });

      page.getLabelText(passwordLabel).then(function(text) {
        console.log(text);
        assert.notEqual(text, passwordLabelOld)
      });

 });

});