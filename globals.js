const allureReporter = require('nightwatch-allure');
module.exports = {
  reporter: (results,done)=>{
    const reporter = new allureReporter.NightwatchAllureReporter({});
    reporter.write(results,done);
  }
};

var allure = require("allure-commandline");

module.exports = {
    reporter: function(results , done) {
      let srcResult = "./tests_output/";
      var generation = allure(["generate", "--clean", srcResult]);
      generation.on ('exit',()=>{
        done();
      });
    }
};

var allure = require("nightwatch-allure-adapter");

module.exports = {
    reporter: allure.write
};