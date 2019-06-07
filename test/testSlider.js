/* global beforeEach describe it */
beforeEach(async () => {
  await browser.url('/slider/')
})

// this will test the cascader component to ensure that it is visable in different browswers
describe('Testing integration for sliders ', () => {
  it('Checking if the sliders are displayed correctly in the browser', () => {
    browser.pause(300)
    // browser.takeSnapshot('slider page')
    browser.pause(200)
  })
})
