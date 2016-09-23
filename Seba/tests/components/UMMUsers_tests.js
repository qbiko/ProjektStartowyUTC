var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
//var chrome = require('selenium-webdriver/chrome');
//var path = require('chromedriver').path;

//var service = new chrome.ServiceBuilder(path).build();
//chrome.setDefaultService(service);
//userManagement na 14
var utcPage = require('./utcPage.js');
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/'; //tutaj zmienic na strone logowania
var driver;
var page;
var TAB = '\ue004';
//adding new user
var addBtn = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/thead/tr[2]/th/header/div/a');
var lastInput = webdriver.By.xpath('//*[@id="user-lastname"]');
var usernameInput = webdriver.By.xpath('//*[@id="user-username"]');
var passwordInput = webdriver.By.xpath('//*[@id="user-password"]');
var internalAccountDiv = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[2]/div[1]');
//
var user = webdriver.By.xpath('//a[contains(@title, "aaaaaaaa")]');
var userIcon = webdriver.By.xpath('//a[contains(@title, "aaaaaaaa")]/table/tbody/tr/td[1]');
var container = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');
var actionDropdown  = webdriver.By.xpath('//div[contains(@class, "btn-group")]/button');
var saveBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/button');
var disableBtn = webdriver.By.xpath('//ul[contains(@class, "user-card-actions-dropdown")]/li[2]/a');
var enableBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/div/ul/li[2]/a');
var deleteBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/div/ul/li[4]/a');
var closeBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/a');

//popup window
var permanentlyDeleteBtn = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/section/div/div[1]/div/div/button[1]');  
var discardChangesDiv = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]');
var discardChanges = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[1]');
//user groups
var accordionUserGroups = webdriver.By.xpath('//div[contains(@class, "side-panel-accordion")]/div[5]/div[1]');
var panelExpanded =  webdriver.By.xpath('//div[contains(@class, "panel panel-default panel-active panel-expanded")]');
var accordionUserGroupsPanelColapse = webdriver.By.xpath('//div[contains(@class, "panel-collapse")]');
var accordionUserGroupsAssignBtn = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div/div[1]/a');
var assignmentPanelContent = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]');

var examplegroup1 = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]/table/tbody/tr[1]');
var exampleAssignedGroup1 = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[2]/div[2]/table/tbody/tr[1]');
var nameOfGroup = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]/table/tbody/tr[2]/td[2]/div');
var saveGroupsBtn = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[1]/button');
var countOfGroups = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div/div[1]/strong');
var lastname = 'aaaaaaaa';
var username = 'Sebastian';
var password = 'bardzotajne';
var TAB = '\ue004';
/*
test.before(function(){
    this.timeout(8000);
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.safari()).
        build();
    page = new utcPage(driver);
    page.visit();
    page.waitToElement(webdriver.By.id('app'));
        driver.getCurrentUrl().then(function(url) {
      if(url != page.urlToCheck) {
        page.logout();
      }
    });
    page.waitToElement(page.loginInput);
    page.logIn('marcin', 'changeme', 11, 16);
    page.waitToElement(page.userManagement);
    page.clickIn(page.userManagement);
    
});

test.describe('User Management > Users Test', function(){
    test.it('Add new user', function(){
        this.timeout(5000);
        page.refresh();
        driver.sleep(1000);
        page.waitToElement(addBtn);
        page.clickIn(addBtn);
        page.waitToElement(lastInput); //wait to load input to last name
        page.setText(lastInput, lastname);
        page.waitToElement(internalAccountDiv);
        page.clickIn(internalAccountDiv);//open internal accounts
        page.waitToElement(passwordInput); //wait to load all inputs in internal account
        page.setText(usernameInput, username);
        page.setText(passwordInput, password);
        page.waitToElement(saveBtn);
        page.clickIn(saveBtn);
        page.waitToElement(webdriver.By.className('btn btn-success'));
        driver.sleep(1000);

    });

    test.it('New User in Users List', function(){
        this.timeout(300000);
        page.refresh();
        page.waitToElement(addBtn);
        page.MoveToActiveAddBtn();
        //TODO
        page.checkIfAddUser('Sebastian'); //zmienic zeby byla zmienna
    })

    test.it('Disable the user in action dropdown and check result', function(){
        this.timeout(5000);
        driver.sleep(1000);
        page.refresh();
        page.waitToElement(user);
        page.clickIn(user);
        page.waitToElement(actionDropdown);
        page.clickIn(actionDropdown);
        page.waitToElement(disableBtn);
        page.clickIn(disableBtn);
        page.clickIn(saveBtn); //save
        page.clickIn(closeBtn);
        page.waitToElement(user);
        page.waitToElement(userIcon);
        page.getElement(userIcon).getAttribute('class').then(function(text){
            console.log(text);
            expect(text).to.have.string('icon-disabled-red');
        })


    });
    test.it('Enable the user in action dropdown and check result', function(){
        this.timeout(5000);
        driver.sleep(1000);
        page.refresh();
        page.waitToElement(user);
        page.clickIn(user);
        page.waitToElement(actionDropdown);
        page.clickIn(actionDropdown);
        page.waitToElement(enableBtn);
        page.clickIn(enableBtn); 
        page.waitToElement(saveBtn);
        page.clickIn(saveBtn); //zapis
        page.clickIn(closeBtn);
        page.waitToElement(user);
        page.waitToElement(userIcon);
        page.getElement(userIcon).getAttribute('class').then(function(text){
            console.log(text);
            expect(text).to.not.have.string('icon-disabled-red');
        })
    });

    test.it('Add user to some groups and check', function(){
        this.timeout(5000);
        //choose user
        page.waitToElement(user);
        page.clickIn(user);
        page.waitToElement(container);
        
        //operations in user groups
        page.waitToElement(accordionUserGroups); //wait to load accordion
        page.clickIn(accordionUserGroups); //click user groups
        page.waitToElement(panelExpanded); //wait to expanded
        page.waitToElement(accordionUserGroupsAssignBtn); //wait to assign button
        page.clickIn(accordionUserGroupsAssignBtn); // click assign button
        page.waitToElement(assignmentPanelContent); //wait to assign groups panel content

        //if we add new element to assigned list, second element in available list will be the first after adding, so..
        //can use the same xpath to add next element to available list
        //operations in assign groups
        page.waitToElement(examplegroup1);
        page.clickIn(examplegroup1);
        page.waitToElement(examplegroup1);
        page.clickIn(examplegroup1);
        page.waitToElement(examplegroup1);
        page.clickIn(examplegroup1);
        page.waitToElement(saveGroupsBtn);
        page.clickIn(saveGroupsBtn); //save performance

        page.refresh(); //refresh page, to check result performance

        //operations after refresh
        page.waitToElement(accordionUserGroups); //wait to load accordion
        page.clickIn(accordionUserGroups); //click user groups
        page.waitToElement(panelExpanded); //wait to expanded

        //verify results. We check, if is in user group 3 elements
        page.getElementText(countOfGroups).then(function(text){
            expect(Number(text)).to.equal(3);
        });
        
    });

    test.it('Remove one group and check', function(){
        this.timeout(5000);
        //accordion is loaded form previous test

        //click assign button
        page.waitToElement(accordionUserGroups); //wait to load accordion
        page.clickIn(accordionUserGroupsAssignBtn); // click assign button
        page.waitToElement(assignmentPanelContent); //wait to assign groups panel content

        //check one form assigned
        page.waitToElement(exampleAssignedGroup1);
        page.clickIn(exampleAssignedGroup1);

        //save performamce
        page.waitToElement(saveGroupsBtn);
        page.clickIn(saveGroupsBtn); //save performance

        page.refresh(); //refresh page, to check result performance

        //operations after refresh
        page.waitToElement(accordionUserGroups); //wait to load accordion
        page.clickIn(accordionUserGroups); //click user groups
        page.waitToElement(panelExpanded); //wait to expanded

        //verify results. We check, if is in user group 3 elements
        page.getElementText(countOfGroups).then(function(text){
            expect(Number(text)).to.equal(2);
        });

    });

    test.it('Remove user from the list', function(){
        this.timeout(5000);
        page.refresh();
        page.waitToElement(user);
        page.clickIn(user);
        page.waitToElement(actionDropdown);
        page.clickIn(actionDropdown);
        page.waitToElement(deleteBtn);
        page.clickIn(deleteBtn); 
        driver.sleep(1000);
        page.waitToElement(permanentlyDeleteBtn);
        page.clickIn(permanentlyDeleteBtn);
    });

    test.it('Cant save and must focus to element if it havent require filed ', function() {
      this.timeout(5000);
      driver.sleep(1000);
      var mainContainer = webdriver.By.id('app');
      var userFirstName = webdriver.By.id('user-firstname');
      page.waitToElement(page.mainContainer);
      page.waitToElement(page.mainContainer);
      page.waitToElement(page.addButton);
      page.clickIn(page.addButton);

      page.setText(page.userFirstName, 'Wesoly');
      page.waitToElement(page.mainContainer);
      page.waitToElement(page.mainContainer);
      page.clickIn(page.saveButton);
      
      page.waitToElement(page.userUserName)
      page.checkFocusElement(page.userUserName);

      page.setText(page.userUserName, 'Roman3562');
      page.waitToElement(page.mainContainer);
      page.clickIn(page.saveButton);

      page.checkFocusElement(page.userPassword);

      page.setText(page.userPassword, 'fajnehaslo');

      page.waitToElement(page.mainContainer);
      page.clickIn(page.saveButton);

      driver.sleep(1000);
      page.checkFocusElement(page.userLastName);
    });

});

test.after(function() {
    driver.quit();

});
*/