module.exports = {
  default: {
    require: ['tests/Steps/*.js'], // Update path to your step definitions
    format: [
      'progress',
      'json:reports/cucumber-report.json' // 👈 This generates the JSON file
    ],
    publishQuiet: true
  }
};