var assert = require('assert'),
test = require('selenium-webdriver/testing'),
webdriver = require('selenium-webdriver');

test.describe('Projekt Startowy UTC', function() {
  test.it('Formularz - wypelnienie', function() {
    var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.edge()).
    build();
    //1 strona
    driver.get('http://127.0.0.1:10000/index.html/');
    var imieInput = driver.findElement(webdriver.By.name('imie'));
    imieInput.sendKeys('Jakub');

    var nazwiskoInput = driver.findElement(webdriver.By.name('nazwisko'));
    nazwiskoInput.sendKeys('Chodorowski');

    var firmaSelect = driver.findElement(webdriver.By.name('firma'));
    firmaSelect.click();

    var IntelOption = firmaSelect.findElement(webdriver.By.xpath("/html/body/form/div[3]/select/option[3]"));
    IntelOption.click();

    var oSobieTextarea = driver.findElement(webdriver.By.name('oSobie'));
    oSobieTextarea.sendKeys('solidny, zorganizowany, pracowity :D');

    var input = driver.findElement(webdriver.By.id('button'));
    input.click();

    //2 strona
    driver.wait(webdriver.until.titleIs('Wypełniono formularz'), 1000);
    driver.getTitle().then(function(title) {
        assert.equal(title, 'Wypełniono formularz');
    });



    driver.findElement(webdriver.By.id('imieINazwisko')).getText().then(function(text){
      assert.equal(text, 'Jakub Chodorowski');
    });

    driver.findElement(webdriver.By.id('firma')).getText().then(function(text){
      assert.equal(text, 'Intel');
    });

    driver.findElement(webdriver.By.id('oSobie')).getText().then(function(text){
      assert.equal(text, 'solidny, zorganizowany, pracowity :D');
    });
    
    //driver.quit();
  });
});
