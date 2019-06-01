/* global beforeEach describe it $ */
beforeEach(async () => {
  await browser.url('/slider/')
})

describe('Testing functionallity for sliders ', () => {
  it('Testing the top row checking if the button\'s interact correctly', () => {
    browser.pause(200)

    const res1 = $('#sluno')
    const res2 = $('#sldos')

    // res1.click()
    browser.pause(200)
    // res2.click()
    browser.pause(200)

    // the $(selector) looks in the document to find the unique id
  })
})
