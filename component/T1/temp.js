const showroom = require('showroom/puppeteer')();
(async () => {
  process.stdout.write('start')
  await showroom.start()
  process.stdout.write('test')
  await showroom.stop()
})()
