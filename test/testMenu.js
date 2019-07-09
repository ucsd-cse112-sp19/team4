/* global beforeEach describe it */
beforeEach(async () => {
  // this will set the endpoint to be the menu component page
  await browser.url('/team4/team4/menu/')
})

// this suite will test the menu component to ensure that it is visable in different browswers
describe('Testing integration for Menu ', () => {
  it('Checking if the Menu\'s are displayed correctly on the browser', () => {
    // this pause is used to ensure that the webpage is loaded before starting ui test
    browser.pause(300)
    browser.takeSnapshot('menu page')
    browser.pause(200)
  })
})