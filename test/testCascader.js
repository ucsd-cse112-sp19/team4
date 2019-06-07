/* global beforeEach describe it $ */
beforeEach(async () => {
  await browser.url('/cascader/')
})

describe('Testing functionallity for cascader ', () => {
  it('Testing the first cascader', () => {
    browser.pause(300)
    browser.takeSnapshot('cascader page')
    browser.pause(200)
  })
})
