/* global beforeEach describe it */
beforeEach(async () => {
  // this will set the endpoint to be the radio component page
  await browser.url('/team4/team4/radio/')
})

// this suite will test the radio component to ensure that it is visable in different browswers
describe('Testing integration for radio ', () => {
  it('Checking if the radio\'s are displayed correctly on the browser', () => {
    // this pause is used to ensure that the webpage is loaded before starting ui test
    browser.pause(300)
    browser.takeSnapshot('radio page')
    browser.pause(200)
  })
})