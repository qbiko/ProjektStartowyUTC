var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
 
test.describe('Sprawdzam czy dane osobowe sa dobrze przeslane', function() {
var driver;

  test.it('imie i nazwisko', function() {
    
    driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.safari()).
    build();

    driver.get('http://127.0.0.1:10000/index.html');

    //wpisuje nazwy do inputow
    var name = driver.findElement(webdriver.By.name('imie'));
    name.sendKeys('Sebastian');
    var nazwisko = driver.findElement(webdriver.By.name('nazwisko'));
    nazwisko.sendKeys('Sarnecki');
    var osobie = driver.findElement(webdriver.By.name('oSobie'));
    osobie.sendKeys('Spoko ziomeczek');

    var firmaSelect = driver.findElement(webdriver.By.name('firma'));
    firmaSelect.click(); //!!! musi jakos czekac na klikniecie
    //wybiera Intel
    var IntelOption = firmaSelect.findElement(webdriver.By.xpath("/html/body/form/div[3]/select/option[3]"));
    IntelOption.click();

    //klikam wyslij
    driver.findElement(webdriver.By.id('wyslij')).click();

    //czekam na zaladowanie
    driver.wait(webdriver.until.titleIs('Wypełniono formularz'), 10000);
    //sprawdzam czy pobrala sie strona
    driver.getTitle().then(function(title){
        assert.equal(title, 'Wypełniono formularz');
    });

    //pobranie danych ktore mamy z serwera
    var daneOsobowe = driver.findElement({xpath:'/html/body/p[1]/b'});
    
    daneOsobowe.getText().then(function(text){
        assert.equal(text, 'SebastianSarnecki');
    });
  });

test.it('firma', function(){
var firma = driver.findElement({xpath:'/html/body/p[2]/b'});
    
    firma.getText().then(function(text){
        assert.equal(text, 'Intel');
    });
});

test.it('oSobie', function(){
var daneOsobowe = driver.findElement({xpath:'/html/body/p[3]/b'});
    
    daneOsobowe.getText().then(function(text){
        assert.equal(text, 'Spoko ziomeczek');
    });
});

});