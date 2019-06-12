/* global beforeEach describe it */
beforeEach(async () => {
  // this will set the endpoint to be the slider component page
  await browser.url('/slider/')
})

// this suite will test the slider component to ensure that it is visable in different browswers
describe('Testing integration for sliders ', () => {
  it('Checking if the sliders are displayed correctly in the browser', () => {
    // this pause is used to ensure that the webpage is loaded before starting ui test
    browser.pause(300)
    browser.takeSnapshot('slider page')
    browser.pause(200)
  })
})
