/* global beforeEach describe it $ */
beforeEach(async () => {
    await browser.url('/cascader/')
  })
  
  describe('Testing functionallity for cascader ', () => {
    it('Testing the first cascader', () => {
      browser.pause(200)
  
      const res1 = $('#uno')
      const res2 = $('#dos')
      browser.pause(200)
      res1.click()
      // browser.takeSnapshot('cascader page')
      browser.pause(300)
      res2.click()
      browser.pause(300)
    })
  })
  