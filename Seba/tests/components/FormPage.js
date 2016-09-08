var webdriver = require('selenium-webdriver');
 
function FormPage(driver) {
    this.driver = driver;
    this.url = 'http://10.0.100.171:8082/#/';
};
 
FormPage.prototype.visit = function() {
    this.driver.get(this.url);
    return webdriver.promise.fulfilled(true);
};
FormPage.prototype.setText = function(path, text){
    var name = this.driver.findElement(path);
    name.sendKeys(text);
};
FormPage.prototype.klik = function(path){
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
    this.driver.wait(webdriver.until.titleIs(name), 10000);
};
FormPage.prototype.sleep = function(name){
    this.driver.sleep(1000);
};
FormPage.prototype.getLabelText = function(path) {
  var d = webdriver.promise.defer();
  this.driver.findElement(path).
  getText().then(function(text) {
    d.fulfill(text);
  });
  return d.promise;
}
module.exports = FormPage;