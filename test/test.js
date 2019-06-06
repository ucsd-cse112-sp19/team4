/* global beforeEach describe it $ */
beforeEach(async () => {
  await browser.url('/')
})

describe('Testing functionallity for buttons ', () => {
  it('Testing the top row checking if the button\'s interact correctly', () => {
    browser.pause(300)
    browser.takeSnapshot('button page')
  })
})
