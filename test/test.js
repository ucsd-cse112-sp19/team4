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
  })

  /* global after */
  // runs this after all the tests have been ran
  after(async () => {
    // stops the server hosting the web component
    await showroom.stop()
  })

  /* global beforeEach */
  // runs this before each unit test is ran
  beforeEach(async () => {
    // remakes the web compenent
    await showroom.setTestSubject('hello-world-component')
  })

  /* global it */
  // tests to see if the default language value is en
  it('should display set attribute for lan to be en', async () => {
    const innerLan = await showroom.getAttribute('language')
    assert.strictEqual(innerLan, 'en')
  })

  // tests to see if the default rainbow value is false
  it('should display set attribute for rainbow to be false', async () => {
    const innerRain = await showroom.getAttribute('rainbow')
    assert.strictEqual(innerRain, 'false')
  })

  // tests to see if it handles changes that are due to changing rainbow
  it('should display set attribute for rainbow to be true after changing it', async () => {
    await showroom.setAttribute('rainbow', true)
    const innerRain = await showroom.getAttribute('rainbow')
    assert.strictEqual(innerRain, 'true')
  })
})
