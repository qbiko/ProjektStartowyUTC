var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

//userManagement na 14
var utcPage = require('./utcPage.js');
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/'; //tutaj zmienic na strone logowania
var driver;
var page;
const TAB = '\ue004';
const CTRL = '\ue009';
const UP = '\ue013';
const DOWN = '\ue015';
const ENTER = '\ue007';
const TimeOut = 30000; //ms
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
var accordionUserGroups = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]');
var panelExpanded =  webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div');
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


test.before(function(){
    this.timeout(TimeOut);
    driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.edge()).
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
  test.it('Cant save and must focus to element if it havent require filed ', function() {
    this.timeout(TimeOut);
    page.refresh();
    driver.sleep(1000);
    page.waitToElement(page.mainContainer);
    page.waitToElement(page.mainContainer);
    driver.sleep(1000);
    page.waitToElement(page.addButton);
    page.clickIn(page.addButton);
    driver.sleep(1000);
    page.setText(page.userFirstName, 'Wesoly');
    page.waitToElement(page.mainContainer);
    page.waitToElement(page.mainContainer);
    driver.sleep(100);
    page.clickIn(page.saveButton);

    page.waitToElement(page.userUserName)
    page.checkFocusElement(page.userUserName);

    page.setText(page.userUserName, 'Roman3562');
    page.waitToElement(page.mainContainer);
    driver.sleep(100);
    page.clickIn(page.saveButton);

    page.checkFocusElement(page.userPassword);

    page.setText(page.userPassword, 'fajnehaslo');

    page.waitToElement(page.mainContainer);
    driver.sleep(100);
    page.clickIn(page.saveButton);

    driver.sleep(1000);
    page.checkFocusElement(page.userLastName);
    page.waitToElement(page.closeForm);
    page.clickIn(page.closeForm);
    driver.sleep(1000);
    page.waitToElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[1]'));
    page.clickIn(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[1]'));
    driver.sleep(1000);
    page.waitToElement(webdriver.By.id('app'));
    driver.getCurrentUrl().then(function(url) {
      if(url != page.urlToCheck) {
        page.logout();
      }
      driver.sleep(100);
      page.waitToElement(page.loginInput);
      page.logIn('marcin', 'changeme', 11, 16);
      page.waitToElement(page.userManagement);
      driver.sleep(1000);
      page.clickIn(page.userManagement);
    });
    driver.sleep(1000);
    page.waitToElement(page.mainContainer);
    page.waitToElement(page.mainContainer);
  });

    test.it('Add new user', function(){
        this.timeout(TimeOut);
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
        driver.sleep(8000);
    })

    test.it('Disable the user in action dropdown', function(){
        this.timeout(TimeOut);
        driver.sleep(1000);
        page.refresh();

        page.waitToElement(user);
        page.clickIn(user);

        page.waitToElement(actionDropdown);
        page.clickIn(actionDropdown);

        page.waitToElement(disableBtn);
        page.clickIn(disableBtn);

        page.clickIn(closeBtn);
        driver.sleep(1000);
        page.waitToElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[2]'));
        page.clickIn(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[2]'));
        driver.sleep(1000);
    });

    test.it('Disable icon, check result', function(){
        this.timeout(TimeOut);
        driver.sleep(1000);

        page.refresh();
        page.waitToElement(user);
        driver.sleep(2000);
        page.waitToElement(userIcon);
        page.getElement(userIcon).getAttribute('class').then(function(text){
            console.log(text);
            expect(text).to.have.string('icon-disabled-red');
        })
    });

    test.it('Enable the user in action dropdown', function(){
        this.timeout(TimeOut);
        driver.sleep(2000);

        page.refresh();

        page.waitToElement(user);
        page.clickIn(user);

        page.waitToElement(actionDropdown);
        page.clickIn(actionDropdown);

        page.waitToElement(enableBtn);
        page.clickIn(enableBtn);

        page.clickIn(closeBtn);
        driver.sleep(2000);
        page.waitToElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[2]'));
        page.clickIn(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div/button[2]'));
        driver.sleep(2000);

    });

    test.it('Enable icon, check result', function(){
        this.timeout(TimeOut);
        driver.sleep(1000);

        page.refresh();
        page.waitToElement(user);
        driver.sleep(2000);
        page.waitToElement(userIcon);
        page.getElement(userIcon).getAttribute('class').then(function(text){
            console.log(text);
            expect(text).to.not.have.string('icon-disabled-red');
        })
    });


    test.it('Add user to some groups and check', function(){
        this.timeout(TimeOut);
        //choose user
        page.waitToElement(user);
        page.clickIn(user);
        page.waitToElement(container);

        //operations in user groups
        driver.sleep(1000);
        page.waitToElement(page.userLastName);
        page.clickIn(page.userLastName);
        driver.sleep(500);
        var elem;
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, UP);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(ENTER);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(ENTER);

        page.waitToElement(panelExpanded); //wait to expanded
        page.waitToElement(accordionUserGroupsAssignBtn); //wait to assign button
        page.clickIn(accordionUserGroupsAssignBtn); // click assign button
        page.waitToElement(assignmentPanelContent); //wait to assign groups panel content

        //if we add new element to assigned list, second element in available list will be the first after adding, so..
        //can use the same xpath to add next element to available list
        //operations in assign groups
        driver.sleep(100);
        page.waitToElement(examplegroup1);
        page.clickIn(examplegroup1);
        driver.sleep(100);
        page.waitToElement(examplegroup1);
        page.clickIn(examplegroup1);
        driver.sleep(100);
        page.waitToElement(examplegroup1);
        page.clickIn(examplegroup1);
        driver.sleep(100);
        page.waitToElement(saveGroupsBtn);
        page.clickIn(saveGroupsBtn); //save performance
        driver.sleep(100);
        page.refresh(); //refresh page, to check result performance
        driver.sleep(1000);
        //operations after refresh
        page.waitToElement(page.userLastName);
        page.clickIn(page.userLastName);
        driver.sleep(500);
        var elem;
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, UP);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(ENTER);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(ENTER);
        /*
        page.waitToElement(accordionUserGroups); //wait to load accordion
        page.clickIn(accordionUserGroups); //click user groups
        page.waitToElement(panelExpanded); //wait to expanded
        */
        //verify results. We check, if is in user group 3 elements
        page.getElementText(countOfGroups).then(function(text){
            expect(Number(text)).to.equal(3);
        });

    });

    test.it('Remove one group and check', function(){
        this.timeout(TimeOut);
        //accordion is loaded form previous test

        //click assign button

        driver.sleep(1000);

        page.waitToElement(panelExpanded); //wait to expanded
        page.waitToElement(accordionUserGroupsAssignBtn); //wait to assign button
        page.clickIn(accordionUserGroupsAssignBtn); // click assign button
        page.waitToElement(assignmentPanelContent); //wait to assign groups panel content
        //check one form assigned
        driver.sleep(1000);
        page.waitToElement(exampleAssignedGroup1);
        page.clickIn(exampleAssignedGroup1);

        //save performamce
        page.waitToElement(saveGroupsBtn);
        page.clickIn(saveGroupsBtn); //save performance
        driver.sleep(1000);
        page.refresh(); //refresh page, to check result performance
        driver.sleep(1000);
        //operations after refresh
        page.waitToElement(page.userLastName);
        page.clickIn(page.userLastName);
        driver.sleep(500);
        var elem;
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, UP);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(ENTER);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(CTRL, DOWN);
        elem = driver.switchTo().activeElement();
        elem.sendKeys(ENTER);
        //verify results. We check, if is in user group 3 elements
        page.getElementText(countOfGroups).then(function(text){
            expect(Number(text)).to.equal(2);
        });
        driver.sleep(1000);
    });

    test.it('Remove user from the list', function(){
        this.timeout(TimeOut);
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

});

test.after(function() {
    driver.quit();

});
