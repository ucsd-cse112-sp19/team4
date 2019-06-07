/* global beforeEach describe it */
beforeEach(async () => {
  await browser.url('/cascader/')
})

// this will test the cascader component to ensure that it is visable in different browswers
describe('Testing integration for cascader ', () => {
  it('Checking if the Cascaders are displayed correctly in the browser ', () => {
    browser.pause(300)
    // browser.takeSnapshot('cascader page')
    browser.pause(200)
  })
})
