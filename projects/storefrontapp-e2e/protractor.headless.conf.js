const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  allScriptsTimeout: 10000,
  specs: ['./src/**/*.e2e-spec.ts'],
  SELENIUM_PROMISE_MANAGER: false,
  capabilities: {
    browserName: 'chrome',
    acceptInsecureCerts: true,
    chromeOptions: {
      args: [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--window-size=1024,768'
      ]
    }
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(
      new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      })
    );

    // Add custom locators
    require('./src/custom-locators').addCustomLocators(by);
  }
};
