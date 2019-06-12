/* global beforeEach describe it */
beforeEach(async () => {
  // this will set the endpoint to be the cascader component page
  await browser.url('/team4/team4/cascader/')
})

// this suite will test the cascader component to ensure that it is visable in different browswers
describe('Testing integration for cascader ', () => {
  it('Checking if the Cascaders are displayed correctly in the browser ', () => {
    // this pause is used to ensure that the webpage is loaded before starting ui test
    browser.pause(300)
    browser.takeSnapshot('cascader page')
    browser.pause(200)
  })
})
