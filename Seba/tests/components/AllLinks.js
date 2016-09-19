var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/console';


test.describe('Find all Links', function(){

    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

    test.it('site loading', function(){
        this.timeout(5000);
        page.visit();
    });

    test.it('in log-in page', function(){
        //find all links in log-in page and verify title attribute is present
        
        driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
            elements.forEach(function (element) {
                element.getAttribute('title').then(function(text){
                    assert.notEqual(text, '');
                });
            });
        });
        page.logIn('marcin', 'changeme', 11, 16);
        
    });

    test.it('in Console', function(){
        //find all links in log-in page and verify title attribute is present
        driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
            elements.forEach(function (element) {
                element.getAttribute('title').then(function(text){
                    console.log(text);
                    assert.notEqual(text, '');
                });
            });
        });
    });

});