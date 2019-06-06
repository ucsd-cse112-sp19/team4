// const { Eyes, Target } = require('@applitools/eyes.webdriverio')
// const eyes = new Eyes()
// eyes.setApiKey(process.env.APPLITOOLS_API_KEY)
// console.log(eyes)

/* global beforeEach describe it $ */
beforeEach(async () => {
  await browser.url('/')
})

describe('Testing functionallity for buttons ', () => {
  it('Testing the top row checking if the button\'s interact correctly', () => {
    browser.pause(300)
    browser.takeSnapshot('button page')
  })

  it('Testing the middle row checking if the button\'s interact correctly', () => {
    
    const res7 = $('#clicker')
    browser.pause(250)
    res7.click()
    browser.pause(1000)
    
  })
})
