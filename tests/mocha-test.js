var assert = require('assert');
var fs = require('fs');
var webdriver = require('browserstack-webdriver');
var test = require('browserstack-webdriver/testing');
var objectMerge = require('object-merge');

var browserStackConfig = {
  'browserstack.local' : 'true',
  'browserstack.user' : 'sparkart',
  'browserstack.key' : '***REMOVED***',
  'project': 'Alerter Block'
}

//If browser_version is not specified, the latest version is used
var setups = [
      { browser: 'Chrome'},
      { browser: 'Chrome',  browser_version: '35.0'},
      { browser: 'Safari'},
      { browser: 'Safari',  browser_version: '6.1'},
      { browser: 'IE'},
      { browser: 'IE',  browser_version: '10.0'},
      { browser: 'IE',  browser_version: '9.0'},
      { browser: 'Firefox'},
      { browser: 'Firefox',  browser_version: '30.0'},
      { device: 'iPhone 5S'},
      { device: 'iPhone 5'},
      { device: 'LG Nexus 4'},
      { device: 'Motorola Razr'}
   ];

function setupDriver(capabilities) {
  driver = new webdriver.Builder().
    usingServer('http://hub.browserstack.com/wd/hub').
    withCapabilities(capabilities).
    build();

    driver.get('http://lvh.me:8080/tests/tests.html');
  return driver;
}

setups.forEach(function (setup) {

  var setupDescription;
  if (setup.browser) {
    setupDescription = ' in ' + setup.browser +
    ' ' + (setup.browser_version || 'latest');
  } else if (setup.device) {
    setupDescription = ' on ' + setup.device;
  }

  test.describe('Alerter works' + setupDescription, function() {
    var driver;

    test.before(function() {
      var capabilities = objectMerge(browserStackConfig, setup);
      driver = setupDriver(capabilities);
    });

    test.it('returns true', function() {
      var result = true;
      var expectedResult = true;
      return expectedResult.test(result);
    });

    test.after(function() { driver.quit(); });
  });

});