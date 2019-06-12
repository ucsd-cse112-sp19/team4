/* global beforeEach describe it */
beforeEach(async () => {
  // this will set the endpoint to be the link component page
  await browser.url('/link/')
})

// this suite will test the link component to ensure that it is visable in different browswers
describe('Testing integration for link ', () => {
  it('Checking if the link\'s are displayed correctly on the browser', () => {
    // this pause is used to ensure that the webpage is loaded before starting ui test
    browser.pause(300)
    browser.takeSnapshot('link page')
    browser.pause(200)
  })
})