var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
const fnArgs = require('function-arguments');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);
var utcPage = require('./utcPage.js');
import { mount } from 'enzyme';
import { expect } from 'chai';
var link = 'http://10.0.100.171:8082/#/umm/users'; //tutaj zmienic na strone logowania
var driver;
var page;
var TAB = '\ue004';
var Timeout = 5000; 

var admin = webdriver.By.xpath('//a[contains(@title, "admin")]');
var actionDropdown  = webdriver.By.xpath('//div[contains(@class, "btn-group")]/button');
//user groups
var accordionUserGroups = webdriver.By.xpath('//div[contains(@class, "side-panel-accordion")]/div[5]/div[1]');
var panelExpanded =  webdriver.By.xpath('//div[contains(@class, "panel panel-default panel-active panel-expanded")]');
var accordionUserGroupsPanelColapse = webdriver.By.xpath('//div[contains(@class, "panel-collapse")]');
var accordionUserGroupsAssignBtn = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[5]/div[2]/div/div[1]/a');
var assignmentPanelContent = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/div/div/div/div/div[1]/div/div[3]/div[1]/div[2]');
var container = webdriver.By.xpath('//div[contains(@class, "list-with-panel-panel-container")]');

var accordionDirectoryAccounts = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[3]/div[1]');
var accordionDirectoryAccountsBtn = webdriver.By.xpath('//*[@id="user-details-accordion"]/div[3]/div[2]/div/div[1]/a');

test.before(function(){
    this.timeout(Timeout);
    var args = process.argv.slice(2);
    var browser = args[0].substring(2);
    driver = new webdriver.Builder().
        forBrowser(browser).
        build();
    page = new utcPage(driver);
    page.visit();
    page.waitToElement(webdriver.By.id('app'));
    driver.getCurrentUrl().then(function(url) {
    if(url != page.urlToCheck) {
        page.logout();
      }
    });

});
test.describe('Find all objects and check attribute', function(){
    var elementHTML = '//a'; //element to find
    var attribute = 'title'; //attribute to find
    var username = 'marcin';
    var password = 'changeme';
        //find all links in login page and verify the title attribute
        test.it('in log-in page', function(){
            this.timeout(Timeout)
            page.findAllElementsAndCheck(elementHTML, attribute);
        });

        //Blok after login. Check all links in console
        test.describe('After login', function(){
            this.timeout(Timeout)
            //login
            test.before(function(){
                page.logIn(username, password , 11, 16);
                page.waitToElement(page.userManagement);
            });

            //console page
            test.it('in console page', function(){
                this.timeout(Timeout);
                page.findAllElementsAndCheck(elementHTML, attribute);
            });

            //go to UMM bookmark
           test.before(function(){
                page.clickIn(page.userManagement);
                page.waitToElement(page.navbarHeader);

            });

            //UMM(search in navbar, first view of users list, accordion)
            test.it('in UMM page, Users bookmark, with first view of users list(not all list from database) and accordion', function(){
                this.timeout(Timeout);

                //open accordion
                page.waitToElement(admin);
                page.clickIn(admin);
                page.waitToElement(container);
                //wait to dropdown elements
                page.waitToElement(actionDropdown);
                page.clickIn(actionDropdown);

                page.findAllElementsAndCheck(elementHTML, attribute);

            });

            test.it('in UMM page, in accordions Directory Accounts after click assign button', function(){
                this.timeout(Timeout);
                page.refresh();
                //open accordion and open assign popup
                page.clickAssignInAccordionBookmark(admin, accordionDirectoryAccounts, panelExpanded, accordionDirectoryAccountsBtn, assignmentPanelContent)
                page.findAllElementsAndCheck(elementHTML, attribute);

            });

            test.it('in UMM page, in accordions Assign Groups after click assign button', function(){
                this.timeout(Timeout);
                page.refresh();
                //open accordion and open assign popup
                page.clickAssignInAccordionBookmark(admin, accordionUserGroups, panelExpanded, accordionUserGroupsAssignBtn, assignmentPanelContent)
                page.findAllElementsAndCheck(elementHTML, attribute);

            });

        })
  
});

test.after(function() {
    driver.quit();
});
