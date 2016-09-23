var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var utcPage = require('./utcPage.js');
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/umm/users'; //tutaj zmienic na strone logowania
var driver;
var page;
var TAB = '\ue004';

test.before(function(){
    this.timeout(5000);
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    page = new utcPage(driver);
    page.visit();
});

test.describe('Find all Links, and check title attribute', function(){
        //find all links in login page and verify the title attribute
        test.it('in log-in page', function(){
            driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
                elements.forEach(function (element) {
                    element.getAttribute('title').then(function(text){
                        expect(text).to.have.length.above(0);
                    });
                });
            });

        });

        //Blok after login. Check all links in console
        test.describe('After login', function(){
            //login
            test.before(function(){
                page.logIn('marcin', 'changeme', 11, 16);
                page.waitToElement(page.userManagement);
            });

            //console page
            test.it('in console page', function(){

                driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
                    elements.forEach(function (element) {
                        element.getAttribute('title').then(function(text){
                            expect(text).to.have.length.above(0);
                        });
                    });
                });

            });

            //go to UMM bookmark
           test.before(function(){
                page.clickIn(page.userManagement);
                page.waitToElement(page.navbarHeader);

            });

            //UMM
            test.it('in UMM page, Users bookmark, with first view of users list(not all list from database)', function(){

                var div = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/tbody');
                page.waitToElement(div);
                driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
                    elements.forEach(function (element) {
                        element.getAttribute('title').then(function(text){
                            console.log(text);
                            //expect(text).to.have.length.above(0);
                        });
                    });
                });

            });

            test.before(function(){
                page.refresh();
                page.clickIn(page.roles);
                driver.sleep(1000);

            });

            test.it('in UMM page, Roles bookmark, with first view of users list(not all list from database)', function(){


                var div = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/tbody');
                page.waitToElement(div);
                driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
                    elements.forEach(function (element) {
                        element.getAttribute('title').then(function(text){
                            console.log(text);
                            //expect(text).to.have.length.above(0);
                        });
                    });
                });

            });

        })
  
});

test.after(function() {
    driver.quit();
});
