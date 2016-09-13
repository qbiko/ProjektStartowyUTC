var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var FormPage = require('./FormPage.js');
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/umm/users';
////div[contains(@class, "list-with-panel-container")]/section/section/table/tbody/tr/td/div/div/
var list = '//div[contains(@class, "list-with-panel-container")]/section/section/table/tbody/tr/td/div/div';
var addBtn = webdriver.By.xpath('//div[contains(@class, "pull-right")]/a');

test.describe('Test zakladki User Managment', function(){

    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

test.describe('Podzakladka Users', function(){

        test.it('czy po kliknieciu ADD, pojawia sie po prawiej stronie okno do wprowadzenia dnaych', function(){
            this.timeout(5000);
            page.visit();
            page.klik(addBtn);
            driver.findElement(webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]')).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('blokowanie mozliowsci wprowadzenia ciagu znakow dluzszego niz 32', function(){
            var firstIn = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input');
            var middleIn = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/input');
            var lastIn = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/input');

            var valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/span');
            //page.waitToElement()
            /*
            page.setText(firstIn, 'duzoduzoduzoduzoduzoduzoduzoduzoddfg'); //powyzej 32 znaki            
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })
            page.sleep(2000);
            
            valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/span');
            page.setText(middleIn, 'duzoduzoduzoduzoduzoduzoduzoduzoddgsd'); //powyzej 32 znaki            
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })

            valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/span');
            page.setText(lastIn, 'duzoduzoduzoduzoduzoduzoduzoduzoddgds'); //powyzej 32 znaki            
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })*/
            
        });

        test.it('sprawdzam, czy na uzytkowniku mozna poprawnie wykonac akcje', function(){
            /*var user = webdriver.By.xpath('//a[contains(@title, "lstNm_dds10")]');
            page.klik(user);

            var toggleBtn = webdriver.By.xpath('//button[contains(@class, "user-card-actions-dropdown-button")]');
            page.sleep(1000);
            var dropdownActions = webdriver.By.xpath('//ul[contains(@class, "user-card-actions-dropdown"]/li[2]/a');
            page.sleep(1000);
            var saveBtn = webdriver.By.xpath('//button[contains(@type, "submit")]');*/

        });

            /*
            //czy wyswietla sie lista z opcjami po prawej stronie po kliknieciu w uzytkonika
            where = webdriver.By.xpath(list);
            page.waitToElement(where);

            element = '/div['+i+']/a';
            where = webdriver.By.xpath(list+element);
            var cos = webdriver.By.xpath('//div[contains(@class, "list-with-panel-container")]/section/section/table/tbody/tr/td/div/div/div');

            while(i < cos.length())
            {
                element = '/div['+i+']/a';
                where = webdriver.By.xpath(list+element);
                page.klik(where);

                driver.findElement(webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]')).isDisplayed().then(function(text){
                    assert.equal(text, true);
                })
                i++;   
            }
            */
 /*   test.describe('Dodanie uzytkonika', function(){

        test.it('czy po kliknieciu ADD, pojawia sie po prawiej stronie okno do wprowadzenia dnaych', function(){
            page.klik(addBtn);
            page.sleep(5000);
            driver.findElement(webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]')).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        });

        test.it('blokowanie mozliowsci wprowadzenia ciagu znakow dluzszego niz 32', function(){
            var firstIn = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input');
            var middleIn = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/input');
            var lastIn = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[3]/input');

            var valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/input');
            page.setText(firstIn, 'duzoduzoduzoduzoduzoduzoduzoduzoddfg'); //powyzej 32 znaki            
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })
            
            valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/input');
            page.setText(middleIn, 'duzoduzoduzoduzoduzoduzoduzoduzoddgsd'); //powyzej 32 znaki            
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })

            valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/input');
            page.setText(lastIn, 'duzoduzoduzoduzoduzoduzoduzoduzoddgds'); //powyzej 32 znaki            
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })
            
        });
        
    });

    test.describe('Edycja uzytkownika', function(){
        var user = webdriver.By.xpath('//a[contains(@title, "lstNm_dds10")]');
        page.klik(user);

        var toggleBtn = webdriver.By.xpath('//button[contains(@class, "user-card-actions-dropdown-button")]');
        var dropdownActions = webdriver.By.xpath('//ul[contains(@class, "user-card-actions-dropdown"]/li[2]/a');
        var saveBtn = webdriver.By.xpath('//button[contains(@type, "submit")]');*/
    });

});