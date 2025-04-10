module.exports = {
  default: {
    require: [
      "Steps/*.js",  // Load step files
      "Hook/*.js"           // Hooks, World
    ],
    format: ["progress"],                  // CLI output style
    tags: "@smoke",                     // Skip tests tagged @skip
    publishQuiet: true,                    // Disable Cucumber cloud logs
    parallel: 1                            // Set to >1 to run in parallel
  }
};