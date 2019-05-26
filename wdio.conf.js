const { join } = require('path')

// wdio.conf.js
exports.config = {
  // ...
  // =====
  // Setup
  // =====
  services: [
    ['image-comparison',
      // The options
      {
        // Some options, see the docs for more
        baselineFolder: join(process.cwd(), './tests/sauceLabsBaseline/'),
        formatImageName: '{tag}-{logName}-{width}x{height}',
        screenshotPath: join(process.cwd(), '.tmp/'),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true

      }]
  ]

}
