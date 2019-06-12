/* global beforeEach describe it */
beforeEach(async () => {
  // this will set the endpoint to be the button component page
  await browser.url('/button')
})

// this will test the button component to ensure that it is visable in different browswers
describe('Testing integration for buttons ', () => {
  it('Checking if the buttons are displayed correctly on the browser', () => {
    // this pause is used to ensure that the webpage is loaded before starting ui test
    browser.pause(300)
    browser.takeSnapshot('button page')
    browser.pause(200)
  })
})
