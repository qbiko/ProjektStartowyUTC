var webdriver = require('selenium-webdriver');

function Page(driver) {
    this.driver = driver;
    this.url = 'http://127.0.0.1:10000/index.html';
    this.oSobieSelector = webdriver.By.id('oSobie');
    this.imieInput = webdriver.By.name('imie');
    this.nazwiskoInput = webdriver.By.name('nazwisko');
    this.oSobieTextarea = webdriver.By.name('oSobie');
    this.buttonWyslij = webdriver.By.id('button');
    this.firmaSelect = webdriver.By.name('firma');
    this.imieB = webdriver.By.id('imieINazwisko');
};

Page.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};

Page.prototype.titlePage = function() {
    var d = webdriver.promise.defer();
    this.driver.getTitle().then(function(title) {
        d.fulfill(title);
    });
    return d.promise;
};

Page.prototype.getLabeloSobieText = function() {
    var d = webdriver.promise.defer();
    this.driver.findElement(this.oSobieSelector).getText().then(function(text) {
        d.fulfill(text);
    });
    return d.promise;
};

Page.prototype.getFirmaText = function() {
    var d = webdriver.promise.defer();
    this.driver.findElement(webdriver.By.id('firma')).getText().then(function(text) {
        d.fulfill(text);
    });
    return d.promise;
};



Page.prototype.clickSomething = function(something) {
    this.driver.findElement(something).click();
};

Page.prototype.chooseCompany = function(IDcompany) {
    this.clickSomething(this.firmaSelect);
    this.clickSomething(webdriver.By.xpath("/html/body/form/div[3]/select/option[" + IDcompany + "]"));
}

Page.prototype.writeSomewhere = function(destination, text) {
    this.driver.findElement(destination).sendKeys(text);
}

Page.prototype.fillForm = function(imie, nazwisko, IDfirma, oSobie) {
    this.writeSomewhere(this.imieInput, imie);
    this.writeSomewhere(this.nazwiskoInput, nazwisko);
    this.chooseCompany(IDfirma);
    this.writeSomewhere(this.oSobieTextarea, oSobie);
}

module.exports = Page;
