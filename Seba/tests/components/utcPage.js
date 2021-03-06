var webdriver = require('selenium-webdriver');
var assert = require('assert');
import { expect } from 'chai';
const ENTER = '\ue007';
const TAB = '\ue004';
const ARROW_DOWN = '\ue015';
function utcPage(driver) {
    this.driver = driver;
    this.url = 'http://10.0.100.171:8082';
    this.urlToCheck = String(this.url + '/#/');
    this.mainContainer = webdriver.By.id('app');
    //1strona
    this.loginInput = webdriver.By.id('username');
    this.passwordInput = webdriver.By.id('password');
    this.logInButton = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[4]/button');
    this.informatorSelect = webdriver.By.xpath('//*[@id="options-panel"]/div[1]/button');
    this.languageSelect = webdriver.By.xpath('//*[@id="options-panel"]/div[2]/button');
    this.spanUsername = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[1]/span[1]');
    this.spanPassword = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[2]/span[1]');
    this.spanValidationLogin = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[1]/span[3]');
    this.spanValidationPassword = webdriver.By.
    xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[2]/span[3]');
    this.loginDiv = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[1]');
    this.passwordDiv = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[2]');
    this.classInvalid = 'is-invalid';
    this.correctClass = 'has-focus';
    this.optionsPanel = webdriver.By.xpath('//div[contains(@id, "options-panel")]');
    this.moreOptions = webdriver.By.className('options-panel-toggle');
    this.usernameLabel = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[1]/label')
    this.passwordLabel = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[2]/label');
    //2strona
    this.userDrop = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/a');
    this.logoutButton = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[4]/a');
    this.userManagement = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[14]/a');
    this.level3 = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[2]');
    this.desktopApp = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[3]');
    this.settings = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[4]');
    this.myAccount = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[1]');
    this.help = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[2]');
    this.about = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[3]');
    this.directory = '//ul[contains(@class, "moduleCards")]/';
    this.iconClose = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div[1]/div/span');
    //3strona
    this.roles = webdriver.By.xpath('//aside[contains(@class, "sidebar")]//a[contains(@title, "Roles")]');
    this.jobFunctions = webdriver.By.xpath('//aside[contains(@class, "sidebar")]//a[contains(@title, "Job Functions")]');
    this.navbarHeader = webdriver.By.xpath('//nav[contains(@class, "topnav")]//div[contains(@class, "navbar-brand")]');
    this.configuration = webdriver.By.xpath('//aside[contains(@class, "sidebar")]//a[contains(@title, "Configuration")]');
    this.collapse = webdriver.By.xpath('//aside[contains(@class, "sidebar")]//a[contains(@title, "Collapse")]');
    this.collapseLi = webdriver.By.xpath('//*[@id="app"]/section/div/aside/nav/ul[2]/li[2]');
    this.appDiv = webdriver.By.xpath('//*[@id="app"]/section/div');
    this.collapseClass = "app";
    this.moduleTitle = webdriver.By.xpath('//table//header[contains(@class, "module-header")]//h2[contains(@class, "module-title")]');
    this.addButton = webdriver.By.xpath('//table//header[contains(@class, "module-header")]//a[contains(@class, "btn")]');
    this.addForm = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]//section/form');
    this.closeForm = webdriver.By.
    xpath('//form//div[contains(@class, "side-panel-btns-container")]//a[contains(@class, "icon-close")]');
    this.inputRoleName = webdriver.By.id('role-name');
    this.textareaRoleDescription = webdriver.By.id('role-description');
    this.clearRoleName = webdriver.By.xpath('//*[@id="role-details-accordion"]/div[1]/div[2]/div/div/div[1]/div/span[contains(@class, "icon icon-clear")]');
    this.divRoleName = webdriver.By.xpath('//*[@id="role-details-accordion"]/div[1]/div[2]/div/div/div[1]/div');
    this.h4Profile = webdriver.By.xpath('//*[@id="role-details-accordion"]/div[1]/div[1]/h4');
    this.h4JobF = webdriver.By.xpath('//*[@id="role-details-accordion"]/div[2]/div[1]/h4');
    this.h4Users = webdriver.By.xpath('//*[@id="role-details-accordion"]/div[3]/div[1]/h4');
    //settings
    this.passwordBtn = webdriver.By.xpath('//a[contains(@title, "Passwords")]');
    this.sessionsBtn = webdriver.By.xpath('//a[contains(@title, "Sessions")]');
    this.contactBtn = webdriver.By.xpath('//a[contains(@title, "Contact")]');
    this.performanceContainer = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');
    this.performanceH3 = webdriver.By.xpath('//*[@id="heading-profile"]/div[1]/h3[contains(@class, "panel-title side-panel-title")]');
    //UMM USERS
    this.userFirstName = webdriver.By.id('user-firstname');
    this.saveButton = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/button[contains(@class, "btn btn-default")]');
    this.userUserName = webdriver.By.id('user-username');
    this.userPassword = webdriver.By.id('user-password');
    this.userLastName = webdriver.By.id('user-lastname');
    //keyboard
    this.keyboardStart = webdriver.By.className('brand');
    this.stop = false;

    //UMMUsers test
    this.internalAccountDiv = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[2]/div[1]');

    this.container = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');
    this.actionDropdown  = webdriver.By.xpath('//div[contains(@class, "btn-group")]/button');
    this.saveBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/button');
    this.disableBtn = webdriver.By.xpath('//ul[contains(@class, "user-card-actions-dropdown")]/li[2]/a');
    this.enableBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/div/ul/li[2]/a');
    this.deleteBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/div/ul/li[4]/a');
    this.closeBtn = webdriver.By.xpath('//*[@id="heading-profile"]/div[3]/a');

    //popup window
    this.permanentlyDeleteBtn = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/section/div/div[1]/div/div/button[1]');
    //user groups

    this.panelExpanded =  webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div');
    this.accordionUserGroupsAssignBtn = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div/div[1]/a');
    this.assignmentPanelContent = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]');
    this.accordionUserGroups = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]');

    this.examplegroup1 = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]/table/tbody/tr[1]');
    this.exampleAssignedGroup1 = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[2]/div[2]/table/tbody/tr[1]');
    this.saveGroupsBtn = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[1]/button');
    this.countOfGroups = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div/div[1]/strong');

    //All links
    this.admin = webdriver.By.xpath('//a[contains(@title, "admin")]');
    this.panelExpanded2 =  webdriver.By.xpath('//div[contains(@class, "panel panel-default panel-active panel-expanded")]');
    this.accordionUserGroupsAssignBtn = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div/div[1]/a');
    this.assignmentPanelContent = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]');
    this.container = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');
    this.accordionDirectoryAccounts = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[3]/div[1]');
    this.accordionDirectoryAccountsBtn = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[3]/div[2]/div/div[1]/a');

    //adding new user
    this.addBtn = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/thead/tr[2]/th/header/div/a');
};

utcPage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

utcPage.prototype.logout = function() {
    this.clickIn(this.userDrop);
    this.clickIn(this.logoutButton);
}

utcPage.prototype.titlePage = function() {
    var d = webdriver.promise.defer();
    this.driver.getTitle().then(function(title) {
        d.fulfill(title);
    });
    return d.promise;
};

utcPage.prototype.isElement = function(element) {
  this.driver.findElement(element).then(function(webElement) {
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            console.log('Nie znaleziono elementu');
        } else {
            webdriver.promise.rejected(err);
        }
    });
}

utcPage.prototype.getElement = function(path){
    return this.driver.findElement(path);
};

utcPage.prototype.waitToElement = function(path){
    return this.driver.wait(webdriver.until.elementLocated(path), 5000);
}

utcPage.prototype.getTxt = function(input) {
    var d = webdriver.promise.defer();
    this.driver.findElement(input).getText().then(function(text) {
        d.fulfill(text);
    });
    return d.promise;
};

utcPage.prototype.getUrl = function(input) {
    var d = webdriver.promise.defer();
    this.driver.getCurrentUrl().then(function(url) {
      d.fulfill(url);
    });
    return d.promise;
};

utcPage.prototype.clickIn = function(object) {
    this.driver.findElement(object).click();
};

utcPage.prototype.chooseInformator = function(IDInformator) {
    this.clickIn(this.informatorSelect);
    this.clickIn(webdriver.By.xpath('//*[@id="domain"]/li[' + IDInformator + ']'));
};

utcPage.prototype.chooseLanguage = function(IDLanguage) {
    this.clickIn(this.languageSelect);
    this.clickIn(webdriver.By.xpath('//*[@id="locale"]/li[' + IDLanguage + ']'));
}

utcPage.prototype.fillForm = function(login, password, IDInformator, IDJezyk) {
    this.setText(this.loginInput, login);
    this.setText(this.passwordInput, password);
    this.chooseInformator(IDInformator); //UX USERS TEST 12, PLATFORM 11
    this.chooseLanguage(IDJezyk); //PL 16 ENG 2
}

utcPage.prototype.logIn = function(login, password, IDInformator, IDJezyk) {
    this.fillForm(login, password, IDInformator, IDJezyk);
    this.clickIn(this.logInButton);
}

utcPage.prototype.setText = function(path, text){
    var name = this.driver.findElement(path);
    name.sendKeys(text);
};

utcPage.prototype.waitTo = function(name){
    this.driver.wait(webdriver.until.titleIs(name), 10000);
};

utcPage.prototype.getUserData = function(path){
    var userdata = this.driver.findElement({xpath: path});
    return userdata.getText();
};

utcPage.prototype.checkLocalStorage = function(key) {
    var d = webdriver.promise.defer();
    var temp = String("return window.localStorage.getItem('" + key + "');");
    this.driver.executeScript(temp).then(function(return_value) {
      d.fulfill(return_value);
    });
    return d.promise;
};

utcPage.prototype.cleanUsername = function() {
  this.clickIn(this.loginInput);
  this.clickIn(this.spanUsername);
}

utcPage.prototype.cleanPassword = function() {
  this.clickIn(this.passwordInput);
  this.clickIn(this.spanPassword);
}
utcPage.prototype.cleanTextPlace = function(place, clearIcon) {
  this.clickIn(place);
  this.clickIn(clearIcon);
}
utcPage.prototype.chooseColumn = function() {
  return this.driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/tbody/tr[1]/td/div/table/tbody/tr[1]/td[1]/div'));
}
utcPage.prototype.parse = function(str) {
    var args = [].slice.call(arguments, 1),
        i = 0;

    return str.replace(/%s/g, function() {
        return args[i++];
    });
}
utcPage.prototype.refresh = function(){
    this.driver.navigate().refresh();
}
utcPage.prototype.getElementText = function(path) {
  var d = webdriver.promise.defer();
  this.driver.findElement(path).
  getText().then(function(text) {
    d.fulfill(text);
  });
  return d.promise;
}
utcPage.prototype.checkIfAddUser = function(nazwa) {
    this.stop = false;
  this.waitToElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/tbody/tr/td/div/div/div/a/table/tbody/tr/td[4]/div'));
  this.driver.sleep(100);
  this.driver.findElements(webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/section/section/table/tbody/tr/td/div/div/div/a/table/tbody/tr/td[4]/div'))
  .then(function(userList){
    userList.forEach(function(username){
      username.getText().then(function(name){
          if(name===nazwa) {
            this.stop = true;
          }
        }.bind(this))
      }.bind(this))
      if(this.stop===false){
        var elem;
        elem = this.driver.switchTo().activeElement();
        this.driver.sleep(100);
        elem.sendKeys(TAB);
        return this.checkIfAddUser(nazwa);
      }
      else {
        console.log('Found user: ' + nazwa);
      }
    }.bind(this))
}
utcPage.prototype.checkFocusElement = function(elemToCheck) {
  var focusID;
  this.driver.findElement(elemToCheck).getAttribute('id').then(function(id){
    focusID = id;
  })
  var d = webdriver.promise.defer();
  this.driver.switchTo().activeElement().getAttribute('id').then(function(element){
    assert.equal(element, focusID)
    d.fulfill(element);
  })
  return d.promise;
}

utcPage.prototype.MoveToActiveAddBtn = function(){
    var lenel = this.driver.findElement(webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/a')); //logout dropdown 
    lenel.sendKeys(TAB);
    this.driver.sleep(1000);
}

//funtion to verify all visible elements (check if attribute is present in each elements)
utcPage.prototype.findAllElementsAndCheck = function(elementHTML, attribute){
    this.driver.findElements(webdriver.By.xpath(elementHTML)).then(function(elements){
        elements.forEach(function (element) {
            element.getAttribute(attribute).then(function(text){
                //console.log(text) //if empty space in line, this title is empty
                expect(text).to.have.length.above(0); //if texts  attribute length has 0, test faild
            });
        });
    });
}

//function to choose user in users list, and click assign btn in selected bookmark in accordion and wait to panelContent
utcPage.prototype.clickAssignInAccordionBookmark = function(userToClick, whichBookmarkDiv, expand, elementBtn, panelContent){

    this.waitToElement(userToClick);
    this.clickIn(userToClick);
    this.waitToElement(whichBookmarkDiv); //wait to load accordion
    this.clickIn(whichBookmarkDiv); //click div
    this.waitToElement(expand); //wait to expanded
    this.waitToElement(elementBtn); //wait to assign button
    this.clickIn(elementBtn); // click assign button
    this.waitToElement(panelContent); //wait to panel content;
}

module.exports = utcPage;
