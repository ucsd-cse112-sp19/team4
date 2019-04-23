// import webC from '../component/hello-world-component.js'
// import { createElement } from 'lwc'

// /* global describe */
// describe('webComponent tests', () => {
//   /* global afterEach */
//   afterEach(() => {
//     while (document.body.firstChild) {
//       document.body.removeChild(document.body.firstChild)
//     }
//   })

//   /* global it */
//   it('check language', () => {
//     const el = createElement('c-hello', {
//       is: webC
//     })
//     document.body.appendChild(el)

//     const aih = el.shadowRoot.querySelector('h1')
//     /* global expect */
//     expect(aih.textContent).toBe('Hello World!')
//   })
// })

// const sum = require('./sample')
// /* global test */
// test('adds 1 + 2 to equal 3', () => {
//   /* global expect */
//   expect(sum(1, 2)).toBe(3)
//   console.log(webC(true, 'hello'))
// })

const showroom = require('showroom/puppeteer')()

/* global describe */
describe('hello-world-component', () => {
  /* global beforeAll */
  beforeAll(async () => {
    await showroom.start()
    await showroom.setTestSubject('hello-world-component')
  })

  /* global afterAll */
  /* global done */
  afterAll(async () => {
    await showroom.stop()
  })

  /* global beforeEach */
  // beforeEach(async () => {
  //   await showroom.setTestSubject('hello-world-component')
  // })

  /* global test */
  test('should display set attribute for lan to be en', async () => {
    const innerLan = await showroom.getAttribute('language')
    /* global expect */
    expect(innerLan).toBe('en')
  })

  test('should display set attribute for rainbow to be false', async () => {
    const innerRain = await showroom.getAttribute('rainbow')
    expect(innerRain).toBe('false')
  })

  test('should display set attribute for rainbow to be true after changing it', async () => {
    await showroom.setAttribute('rainbow', true)
    const innerRain = await showroom.getAttribute('rainbow')
    expect(innerRain).toBe('true')
  })
})
