var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var ActionSequence = require('selenium-webdriver/lib/actions');
var FormPage = require('./FormPage.js');
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/';
var ENTER = '\ue007';
var TAB = '\ue004';
var ARROW_DOWN = '\ue015';
//https://seleniumhq.github.io/selenium/docs/api/py/webdriver/selenium.webdriver.common.keys.html#selenium.webdriver.common.keys.Keys.ENTER
test.describe('Accessibility - only keyboard', function(){
/*
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

    test.it('site loading', function(){
        this.timeout(5000);
        page.visit();
    });

    test.it('Log in', function(done){
        this.timeout(5000);
        //chagne language and directory

        var inputUser = driver.findElement(webdriver.By.xpath('//input[contains(@id, "username")]'));
        var inputPass = driver.findElement(webdriver.By.xpath('//input[contains(@id, "password")]'));
        var toggle = driver.findElement(webdriver.By.xpath('//div[contains(@class, "options-panel-toggle")]'));
        var directory = driver.findElement(webdriver.By.xpath('//div[contains(@class, "options-panel")]/div[1]/button'));
        var language = driver.findElement(webdriver.By.xpath('//div[contains(@class, "options-panel")]/div[2]/button'));
        //var loginBtn = driver.findElement(webdriver.By.xpath('//div[contains(@class, "form-container")]/form/div[4]/button'));
        var i = 0;
        inputUser.sendKeys(TAB);
        inputUser.sendKeys('marcin');
       // page.sleep(1000);
        inputPass.sendKeys(TAB);
        inputPass.sendKeys('changeme');
        //page.sleep(1000);
        toggle.sendKeys(TAB);
        //page.sleep(1000);
        directory.sendKeys(TAB);
        directory.sendKeys(ENTER);

        while(i<9) //user database
        {
            directory.sendKeys(ARROW_DOWN);
            //page.sleep(250);
            i++;
        }
        directory.sendKeys(ENTER);
        language.sendKeys(TAB);
        i=0;
        while(i<15) //Polski
        {
            language.sendKeys(ARROW_DOWN);
            //page.sleep(250);
            i++;
        }
        language.sendKeys(ENTER);
        inputUser.sendKeys(ENTER); //enter
        //setTimeout(done, 15000);
        
    })*/
});