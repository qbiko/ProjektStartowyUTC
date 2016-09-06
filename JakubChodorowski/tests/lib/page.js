var webdriver = require('selenium-webdriver');

function Page(driver) {
    this.driver = driver;
    this.url = 'http://127.0.0.1:10000/index.html';
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
    this.driver.findElement(webdriver.By.id('oSobie')).getText().then(function(text) {
        d.fulfill(text);
    });
    return d.promise;
};

module.exports = Page;
