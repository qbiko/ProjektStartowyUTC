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
var addBtn = webdriver.By.xpath('//a[contains(@title, "Add user")]');
var inputFirst = webdriver.By.xpath('//input[contains(@id, "user-firstname")]');
var inputMiddle = webdriver.By.xpath('//input[contains(@id, "user-middlename")]');
var inputLast = webdriver.By.xpath('//input[contains(@id, "user-lastname")]');
var inputEmail = webdriver.By.xpath('//input[contains(@id, "user-email")]');
var listInternalAccount = webdriver.By.xpath('//div[contains(@class, "panel-group side-panel-accordion")]/div[2]/div[1]');
var username = webdriver.By.xpath('//input[contains(@name, "user_name")]');
var password = webdriver.By.xpath('//input[contains(@name, "password")]');
var saveBtn = webdriver.By.xpath('//button[contains(@type, "submit")]');
var closeBtn = webdriver.By.xpath('//a[contains(@title, "Close")]');
var performanceContainer = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');

test.describe('Test zakladki User Managment', function(){
/*
    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    var page = new FormPage(driver, link);

test.describe('Podzakladka Users', function(){

        test.it('zaladowanie strony', function(){
            this.timeout(5000);
            page.visit();
        });
        test.it('Przejscie do zakladki tworzenia nowego uzytkownika', function(){
            //go to new user window
            page.waitToElement(addBtn);
            //page.klik(addBtn);
            //check that the container is loaded
            driver.findElement(performanceContainer).isDisplayed().then(function(text){
                assert.equal(text, true);
            })
        })
        test.it('Dodanie nowego uzytkownika, zakladka New User', function(){
            //set text to all inputs
            page.waitToElement(inputFirst);
            page.setText(inputFirst, 'random1');
            page.setText(inputMiddle, '');
            page.setText(inputLast, 'random1');
            page.setText(inputEmail, 'random1@random1.pl');
        })

        test.it('Dodanie nowego uzytkownika, zakladka Internal Account', function(){
            
            page.klik(listInternalAccount);
            page.waitToElement(username);
            page.setText(username, 'random1');
            page.setText(password, 't34875b385');
            page.klik(saveBtn);
            page.sleep(2000);
        })
        //sprawdzic czy jest na liscie ?

        test.it('blokowanie mozliowsci wprowadzenia ciagu znakow dluzszego niz 32', function(){
           /* var user = webdriver.By.xpath('//a[contains(@title, "lstNm_dds10")]');
            page.waitToElement(user);
            page.klik(user);

            var inputFirst = webdriver.By.xpath('//input[contains(@id, "user-firstname")]');
            var inputMiddle = webdriver.By.xpath('//input[contains(@id, "user-middlename")]');

            page.waitToElement(inputFirst);
            page.setText(inputFirst, 'duzoduzoduzoduzfghfdhfdh'); //powyzej 32 znaki  

            var valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]span[2]');  
            page.waitToElement(valMsg);   

            page.getLabelText(valMsg).then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })
            
            valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/span[2]');   
            page.waitToElement(valMsg);                   
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })

            valMsg = webdriver.By.xpath('//div[contains(@id, "user-details-accordion")]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/span[2]');
            page.waitToElement(valMsg);         
            page.getElement(valMsg).getText().then(function(text){
                assert.equal(text,'This field is limited to 32 characters');
            })
            
        });

        });*/
});