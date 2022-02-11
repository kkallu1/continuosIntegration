"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    'Demo test ecosia.org': function (browser) {
        browser
            .url('https://www.ecosia.org/')
            .waitForElementVisible('body')
            .assert.urlContains("www.ecosia.org")
            .assert.urlEquals("https://www.ecosia.org/")
            .assert.elementPresent("body")
            .end();
    }
};
