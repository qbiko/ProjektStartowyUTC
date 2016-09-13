var webdriver = require('selenium-webdriver');

function consolePage(driver, url) {
    this.driver = driver;
    this.url = url;
    this.userDrop = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li');
    this.logoutButton = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[4]');
    this.myAccount = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[1]');
    this.help = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[2]');
    this.about = webdriver.By.xpath('//*[@id="app"]/section/div/div/nav/div/ul/li/ul/li[3]');
    this.roles = webdriver.By.xpath('a[contains(@title, "Roles")]');
    this.jobFunctions = webdriver.By.xpath('a[contains(@title, "Job Functions")]');
};

consolePage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

consolePage.prototype.logout = function() {
    this.clickSomething(this.userDrop);
    this.clickSomething(this.logoutButton);
}

consolePage.prototype.titlePage = function() {
    var d = webdriver.promise.defer();
    this.driver.getTitle().then(function(title) {
        d.fulfill(title);
    });
    return d.promise;
};

consolePage.prototype.isElement = function(element) {
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

consolePage.prototype.getUrl = function() {
    var d = webdriver.promise.defer();
    this.driver.getCurrentUrl().then(function(url) {
      d.fulfill(url);
    });
    return d.promise;
};

consolePage.prototype.clickSomething = function(something) {
    this.driver.findElement(something).click();
};

consolePage.prototype.chooseInformator = function(IDInformator) {
    this.clickSomething(this.informatorSelect);
    this.clickSomething(webdriver.By.xpath('//*[@id="domain"]/li[' + IDInformator + ']'));
};

consolePage.prototype.chooseLanguage = function(IDLanguage) {
    this.clickSomething(this.languageSelect);
    this.clickSomething(webdriver.By.xpath('//*[@id="locale"]/li[' + IDLanguage + ']'));
}

consolePage.prototype.writeSomewhere = function(destination, text) {
    this.driver.findElement(destination).sendKeys(text);
}

consolePage.prototype.fillForm = function(login, password, IDInformator, IDJezyk) {
    this.writeSomewhere(this.loginInput, login);
    this.writeSomewhere(this.passwordInput, password);
    this.chooseInformator(IDInformator); //UX USERS TEST 12
    this.chooseLanguage(IDJezyk); //PL 16
}

consolePage.prototype.checkLocalStorage = function(key) {
    var d = webdriver.promise.defer();
    var temp = String("return window.localStorage.getItem('" + key + "');");
    this.driver.executeScript(temp).then(function(return_value) {
      d.fulfill(return_value);
    });
    return d.promise;
};

consolePage.prototype.cleanUsername = function() {
  this.clickSomething(this.loginInput);
  this.clickSomething(this.spanUsername);
}

consolePage.prototype.cleanPassword = function() {
  this.clickSomething(this.passwordInput);
  this.clickSomething(this.spanPassword);
}




module.exports = consolePage;
