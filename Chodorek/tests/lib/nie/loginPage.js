var webdriver = require('selenium-webdriver');

function loginPage(driver) {
    this.driver = driver;
    this.url = 'http://10.0.100.171:8082/';
    //1strona
    this.loginInput = webdriver.By.id('username');
    this.passwordInput = webdriver.By.id('password');
    this.buttonZaloguj = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/div/section/div[3]/form/div[4]/button');
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
    //2strona
    this.userDrop = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li');
    this.logoutButton = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[4]');
    this.userManagement = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[1]');
    this.level3 = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[2]');
    this.desktopApp = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[3]');
    this.settings = webdriver.By.xpath('//*[@id="app"]/section/div/div/div/section/section/ul/li[4]');
    this.myAccount = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[1]');
    this.help = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[2]');
    this.about = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[3]');
    //3strona
    this.roles = webdriver.By.xpath('a[contains(@title, "Roles")]');
    this.jobFunctions = webdriver.By.xpath('a[contains(@title, "Job Functions")]');
};

loginPage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

loginPage.prototype.logout = function() {
    this.clickSomething(this.userDrop);
    this.clickSomething(this.logoutButton);
}

loginPage.prototype.titlePage = function() {
    var d = webdriver.promise.defer();
    this.driver.getTitle().then(function(title) {
        d.fulfill(title);
    });
    return d.promise;
};

loginPage.prototype.isElement = function(element) {
  this.driver.findElement(element).then(function(webElement) {
    }, function(err) {
        if (err.state && err.state === 'no such element') {
            console.log('Nie znaleziono elementu');
        } else {
            webdriver.promise.rejected(err);
        }
    });
}

consolePage.prototype.getInputText = function(input) {
    var d = webdriver.promise.defer();
    this.driver.findElement(input).getText().then(function(text) {
        d.fulfill(text);
    });
    return d.promise;
};

loginPage.prototype.getUrl = function(input) {
    var d = webdriver.promise.defer();
    this.driver.getCurrentUrl().then(function(url) {
      d.fulfill(url);
    });
    return d.promise;
};

loginPage.prototype.clickSomething = function(something) {
    this.driver.findElement(something).click();
};

loginPage.prototype.chooseInformator = function(IDInformator) {
    this.clickSomething(this.informatorSelect);
    this.clickSomething(webdriver.By.xpath('//*[@id="domain"]/li[' + IDInformator + ']'));
};

loginPage.prototype.chooseLanguage = function(IDLanguage) {
    this.clickSomething(this.languageSelect);
    this.clickSomething(webdriver.By.xpath('//*[@id="locale"]/li[' + IDLanguage + ']'));
}

loginPage.prototype.writeSomewhere = function(destination, text) {
    this.driver.findElement(destination).sendKeys(text);
}

loginPage.prototype.fillForm = function(login, password, IDInformator, IDJezyk) {
    this.writeSomewhere(this.loginInput, login);
    this.writeSomewhere(this.passwordInput, password);
    this.chooseInformator(IDInformator); //UX USERS TEST 12, PLATFORM 11
    this.chooseLanguage(IDJezyk); //PL 16
}

loginPage.prototype.checkLocalStorage = function(key) {
    var d = webdriver.promise.defer();
    var temp = String("return window.localStorage.getItem('" + key + "');");
    this.driver.executeScript(temp).then(function(return_value) {
      d.fulfill(return_value);
    });
    return d.promise;
};

loginPage.prototype.cleanUsername = function() {
  this.clickSomething(this.loginInput);
  this.clickSomething(this.spanUsername);
}

loginPage.prototype.cleanPassword = function() {
  this.clickSomething(this.passwordInput);
  this.clickSomething(this.spanPassword);
}




module.exports = loginPage;
