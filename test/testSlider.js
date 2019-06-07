/* global beforeEach describe it $ */
beforeEach(async () => {
  await browser.url('/slider/')
})

describe('Testing functionallity for sliders ', () => {
  it('Testing the top row checking if the button\'s interact correctly', () => {
    browser.pause(300)
    browser.takeSnapshot('slider page')
    browser.pause(200)
  })
})
