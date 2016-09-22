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
    /*
    this.timeout(5000);
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    page = new utcPage(driver);
    page.visit();
    */
});

test.describe('Find all Links', function(){
/*
        //find all links in login page and verify the title attribute
        test.it('in log-in page', function(){
            driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
                elements.forEach(function (element) {
                    element.getAttribute('title').then(function(text){
                        console.log('log-in ' + text);
                        assert.notEqual(text, '');
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
                            console.log('console ' + text);
                            //assert.notEqual(text, '');
                        });
                    });
                });

            });

        })

        //Check all links in bookmark UMM
        test.describe('After login, all bookmarks', function(){
            //login
           test.before(function(){
                page.clickIn(page.userManagement);
                page.waitToElement(page.navbarHeader);

            });

            //UMM
            test.it('in UMM page, without users list', function(){

                driver.findElements(webdriver.By.xpath('//a')).then(function(elements){
                    elements.forEach(function (element) {
                        element.getAttribute('title').then(function(text){
                            console.log('UMM ' + text);
                            //assert.notEqual(text, '');
                        });
                    });
                });

            });

            test.it('in UMM page, users list', function(){
                //wait to download admin
                var admin = webdriver.By.xpath('//table[contains(@class, "list-container-table")]/tbody/tr/td/div/div/div[3]/a'); //admin
                page.waitToElement(admin);

                     
                var e=0;
                var i=0;
                var next = 0;
                while(i<30)
                {
                    
                    driver.findElements(webdriver.By.xpath('//div[contains(@class, "infinite-list-item")]/a')).then(function(elements){
                        e = elements.length;
                        var where = e+1;
                        console.log(where);
                        admin = webdriver.By.xpath('//table[contains(@class, "list-container-table")]/tbody/tr/td/div/div/div[' + where + ']/a'); //last element to click
                        driver.findElement(admin).isDisplayed().then(function(text){
                            if(text==false)
                            {
                                next = false;
                            }
                            else
                            {
                                next = true;console.log(text);
                                driver.findElement(admin).sendKeys(TAB);
                            }
                        });

                    }); 
                    console.log(i);
                    i++;
                }
                                
                    driver.findElements(webdriver.By.xpath('//div[contains(@class, "infinite-list-item")]/a')).then(function(elements){
                        console.log(elements.length);
                        elements.forEach(function (element) {
                            element.getAttribute('title').then(function(text){
                                console.log('user ' + text);
                                //assert.notEqual(text, '');
                            });
                        });
                    });
                    
                    var len = 0;
                    driver.findElements(webdriver.By.xpath('//div[contains(@class, "infinite-list-item")]/a')).then(function(elements){
                        len = elements.length;
                        console.log(len);

                    })

                    driver.findElements(webdriver.By.xpath('//div[contains(@class, "infinite-list-item")]/a')).then(function(elements){
                        var e = elements.length;
                        var where = e+1;
                        console.log(where);
                        
                        admin = webdriver.By.xpath('//table[contains(@class, "list-container-table")]/tbody/tr/td/div/div/div[' + where + ']/a'); //last element to click
                        page.waitToElement(admin);
                        driver.findElement(admin).sendKeys(TAB);
                        where = where+1;
                        
                        admin = webdriver.By.xpath('//table[contains(@class, "list-container-table")]/tbody/tr/td/div/div/div[' + where + ']/a'); //last element to click

                        page.waitToElement(admin);
                        driver.findElement(admin).sendKeys(TAB);


                    }); 
                    driver.findElements(webdriver.By.xpath('//div[contains(@class, "infinite-list-item")]/a')).then(function(elements){
                        console.log(elements.length);
                        elements.forEach(function (element) {
                            element.getAttribute('title').then(function(text){
                                console.log('user ' + text);
                                //assert.notEqual(text, '');
                            });
                        });
                    })

                //page.logout();
            });

        })
*/
});
/*
test.after(function() {
    driver.quit();
});*/
