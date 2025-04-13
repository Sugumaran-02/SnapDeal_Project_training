const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'reports', // Path to the folder where the JSON file is generated
  reportPath: 'reports/html', // Output folder for HTML report
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows', // or mac / linux
      version: '11'
    }
  },
});