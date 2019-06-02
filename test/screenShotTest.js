/* global beforeEach describe it expect $ */
beforeEach(async () => {
  await browser.url('/')
})

describe('Integration test with visual testing', function() {
  it('Loads the example.com site', async function() {
    //await browser.url('/')
    await percySnapshot(browser, this.test.fullTitle())
  })
})

describe('Example', () => {
  it('should save some screenshots', () => {
    // Save a screen
    browser.saveScreen('examplePaged', { /* some options */ })

    // Save an element
    // browser.saveElement($('#element-id'), 'firstButtonElement', { /* some options */ })

    // Save a full page screens
    browser.saveFullPageScreen('fullPage', { /* some options */ })
  })

  it('should compare successful with a baseline', () => {
    // Check a screen
    console.log(expect(browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0))
    expect(browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0)

    // Check an element
    // expect(browser.checkElement($('#element-id'), 'firstButtonElement', { /* some options */ })).toEqual(0)

    // Check a full page screens
    console.log(expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0))
    expect(browser.checkFullPageScreen('fullPage', { /* some options */ })).toEqual(0)
  })
})
