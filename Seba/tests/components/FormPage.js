var webdriver = require('selenium-webdriver');

function FormPage(driver, link) {
    
    this.driver = driver;
    this.url = link;
    this.TAB = '\ue004';
    this.ENTER = '\ue007';
    this.ARROW_DOWN = '\ue015';
    this.buttonZaloguj = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[4]/button');
    this.loginInput = webdriver.By.id('username');
    this.passwordInput = webdriver.By.id('password');
    this.informatorSelect = webdriver.By.xpath('//*[@id="options-panel"]/div[1]/button');
    this.languageSelect = webdriver.By.xpath('//*[@id="options-panel"]/div[2]/button');
};

FormPage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};
FormPage.prototype.setText = function(path, text){
    var name = this.driver.findElement(path);
    name.sendKeys(text);
};
FormPage.prototype.clickIn = function(path){
    this.driver.findElement(path).click();
};

FormPage.prototype.getElement = function(path){
    return this.driver.findElement(path);
};

FormPage.prototype.getElementText = function(path){
    return this.driver.findElement(path).getText();
};
FormPage.prototype.getUserData = function(path){
    var userdata = this.driver.findElement({xpath: path});
    return userdata.getText();
};

FormPage.prototype.waitTo = function(name){
    this.driver.wait(webdriver.until.titleIs(name), 5000);
};
FormPage.prototype.sleep = function(name){
    this.driver.sleep(name);
};
FormPage.prototype.getLabelText = function(path) {
  var d = webdriver.promise.defer();
  this.driver.findElement(path).
  getText().then(function(text) {
    d.fulfill(text);
  });
  return d.promise;
}
FormPage.prototype.waitToElement = function(path){
    return this.driver.wait(webdriver.until.elementLocated(path), 2000);
}

FormPage.prototype.isElement = function(element) {
  this.driver.findElement(element).then(function(webElement) {
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            return 'no such element' ;
        } else {
            return 'is';
        }
    });
}
<<<<<<< HEAD
FormPage.prototype.clickIn = function(object) {
    this.driver.findElement(object).click();
};
FormPage.prototype.chooseLanguage = function(IDLanguage) {
    this.clickIn(this.languageSelect);
    this.clickIn(webdriver.By.xpath('//*[@id="locale"]/li[' + IDLanguage + ']'));
}
FormPage.prototype.chooseInformator = function(IDInformator) {
    this.clickIn(this.informatorSelect);
    this.clickIn(webdriver.By.xpath('//*[@id="domain"]/li[' + IDInformator + ']'));
};
FormPage.prototype.writeSomewhere = function(destination, text) {
    this.driver.findElement(destination).sendKeys(text);
}
FormPage.prototype.fillForm = function(login, password, IDInformator, IDJezyk) {
    this.writeSomewhere(this.loginInput, login);
    this.writeSomewhere(this.passwordInput, password);
    this.chooseInformator(IDInformator); //UX USERS TEST 12, PLATFORM 11
    this.chooseLanguage(IDJezyk); //PL 16 ENG 2
}
FormPage.prototype.logIn = function(login, password, IDInformator, IDJezyk) {
    this.fillForm(login, password, IDInformator, IDJezyk);
    this.clickIn(this.buttonZaloguj);
}
module.exports = FormPage;
=======
module.exports = FormPage;
>>>>>>> origin/master
