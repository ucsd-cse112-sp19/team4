const showroom = require('showroom/puppeteer')()
const assert = require('assert')

/* global describe */
// describe holds a set of tests
describe('hello-world-component', () => {
  /* global before */
  // runs this before all the tests have started
  before(async () => {
    // creates the server hosting the web component
    await showroom.start()
    await showroom.setTestSubject('hello-world-component')
  })

  /* global after */
  // runs this after all the tests have been ran
  after(async () => {
    // stops the server hosting the web component
    await showroom.stop()
  })

  /* global beforeEach */
  // need to run this to make sure changes take affect since we are using asycncalls
  beforeEach(function (done) {
    setTimeout(function () {
      done()
    }, 25)
  })

  /* global it */
  // tests to see if the default language value is en
  it('should display set attribute for lan to be en', async () => {
    const innerLan = await showroom.getAttribute('language')
    assert.strictEqual(innerLan, 'en')
  })

  // after changing the language checks to see if it is correctly displayed
  it('testing the text between the custom element', async () => {
    await showroom.setAttribute('language', 'sp')
    const innerLan = await showroom.getAttribute('language')
    assert.strictEqual(innerLan, 'sp')
  })

  // tests to see if the default rainbow value is false
  it('should display set attribute for rainbow to be false', async () => {
    const innerRain = await showroom.getAttribute('rainbow')
    assert.strictEqual(innerRain, 'false')
  })

  // tests to see if it handles changes the rainbow value from false to true
  it('should display set attribute for rainbow to be true after changing it', async () => {
    await showroom.setAttribute('rainbow', true)
    const innerRain = await showroom.getAttribute('rainbow')
    assert.strictEqual(innerRain, 'true')
  })
})
