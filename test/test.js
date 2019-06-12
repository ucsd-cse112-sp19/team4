/* global beforeEach describe it */
beforeEach(async () => {
  await browser.url('/')
})

// this will test the button component to ensure that it is visable in different browswers
describe('Testing integration for buttons ', () => {
  it('Checking if the buttons are displayed correctly on the browser', () => {
    cosnt res = $('uno')
    browser.pause(300)
    res.moveTo()
    // browser.takeSnapshot('button page')
    browser.pause(200)
  })
})
