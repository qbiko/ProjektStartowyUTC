var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/umm/users';


test.describe('Test zakladki User Managment', function(){
/*
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

    test.it('site loading', function(){
        this.timeout(5000);
        page.visit();
    });

    test.it('Add new user in UMMM', function(){
        //this.timeout(5000);
        //page.waitToElement(webdriver.By.xpath('//aside[contains(@class, "sidebar")]'));
        driver.switchTo().activeElement();
        //driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/aside/a')).sendKeys('\ue004');
        //driver.findElement(webdriver.By.xpath('html/body/div/section/div/aside/nav/ul/li/a')).sendKeys('\ue004');

        var el = driver.findElement(webdriver.By.xpath('//a[contains(@title, "Add user")]'));
        el.sendKeys('\ue007');
        driver.findElement(webdriver.By.xpath('//a[contains(@title, "Add user")]')).sendKeys('\ue007');
    });
*/
});