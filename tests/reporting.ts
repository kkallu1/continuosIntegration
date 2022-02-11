import { NightwatchBrowser } from "nightwatch";

module.exports = {
    'Demo test ecosia.org' : function(browser:NightwatchBrowser) {
      browser
        .url('https://www.ecosia.org/')
        .waitForElementVisible('body')
        .assert.urlContains("www.ecosia.org")
        .assert.urlEquals("https://www.ecosia.org/")
        .assert.elementPresent("body")
        
        .end();
    }
  };