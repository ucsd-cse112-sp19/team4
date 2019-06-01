/* global beforeEach describe it $ */
// beforeEach(async () => {
//   await browser.url('/')
// })

describe('Testing functionallity for buttons ', () => {
  it('Testing the top row checking if the button\'s interact correctly', async () => {
    await browser.url('/')
    browser.pause(200)

    // the $(selector) looks in the document to find the unique id
    const res1 = $('#uno')
    const res2 = $('#dos')
    const res3 = $('#tre')
    const res4 = $('#qua')
    const res5 = $('#cin')
    const res6 = $('#ses')
    const res7 = $('#clicker')

    // browser.pause(200)
    // browser.moveToObject(res1,1,1)
    // res1.moveTo(1,1)
    // browser.pause(200)

    res1.click()
    browser.pause(200)
    res2.click()
    browser.pause(200)
    res3.click()
    browser.pause(200)
    res4.click()
    browser.pause(200)
    res5.click()
    browser.pause(200)
    res6.click()
    browser.pause(300)
    res7.click()
    browser.pause(300)

    // res1.moveTo()
    // browser.pause(125)
    // res2.moveTo()
    // browser.pause(125)
    // res3.moveTo()
    // browser.pause(125)
    // res4.moveTo()
    // browser.pause(125)
    // res5.moveTo()
    // browser.pause(125)
    // res6.moveTo()
    // browser.pause(125)

    // res1.dragAndDrop(res1, 200)
    // browser.pause(125)
    // res2.dragAndDrop(res2, 200)
    // browser.pause(125)
    // res3.dragAndDrop(res3, 200)
    // browser.pause(125)
    // res4.dragAndDrop(res4, 200)
    // browser.pause(125)
    // res5.dragAndDrop(res5, 200)
    // browser.pause(125)
    // res6.dragAndDrop(res6, 200)

    // res6.dragAndDrop(res6, 200)
    // browser.pause(125)
    // res5.dragAndDrop(res5, 200)
    // browser.pause(125)
    // res4.dragAndDrop(res4, 200)
    // browser.pause(125)
    // res3.dragAndDrop(res3, 200)
    // browser.pause(125)
    // res2.dragAndDrop(res2, 200)
    // browser.pause(125)
    // res1.dragAndDrop(res1, 200)
    // browser.pause(200)

    // console.log(res4.getCSSProperty('background-color'))
    // console.log(res4.getCSSProperty('background-color'))
    // browser.pause(1000)
  })

  it('Testing the middle row checking if the button\'s interact correctly', () => {
    await browser.url('/slider/')
    browser.pause(500)

    const res1 = $('#sluno')
    const res2 = $('#sldos')
    // const res3 = $('#tre1')
    // const res4 = $('#qua1')
    // const res5 = $('#cin1')
    // const res6 = $('#ses1')

    res1.click()
    browser.pause(200)
    res2.click()
    browser.pause(200)

    // res1.dragAndDrop(res1, 200)
    // browser.pause(125)
    // res2.dragAndDrop(res2, 200)
    // browser.pause(125)
    // res3.dragAndDrop(res3, 200)
    // browser.pause(125)
    // res4.dragAndDrop(res4, 200)
    // browser.pause(125)
    // res5.dragAndDrop(res5, 200)
    // browser.pause(125)
    // res6.dragAndDrop(res6, 200)
    // browser.pause(125)

    // res6.dragAndDrop(res6, 200)
    // browser.pause(125)
    // res5.dragAndDrop(res5, 200)
    // browser.pause(125)
    // res4.dragAndDrop(res4, 200)
    // browser.pause(125)
    // res3.dragAndDrop(res3, 200)
    // browser.pause(125)
    // res2.dragAndDrop(res2, 200)
    // browser.pause(125)
    // res1.dragAndDrop(res1, 200)
    // browser.pause(500)

    // console.log(res4.getCSSProperty('background-color'))
    // console.log(res4.getCSSProperty('background-color'))
    browser.pause(1000)
  })

  // it('Testing the bottom row checking if the button\'s interact correctly', () => {
  //   browser.pause(500)

  //   const res1 = $('#uno2')
  //   const res2 = $('#dos2')
  //   const res3 = $('#tre2')
  //   const res4 = $('#qua2')
  //   const res5 = $('#cin2')
  //   const res6 = $('#ses2')

  //   res1.dragAndDrop(res1, 200)
  //   browser.pause(125)
  //   res2.dragAndDrop(res2, 200)
  //   browser.pause(125)
  //   res3.dragAndDrop(res3, 200)
  //   browser.pause(125)
  //   res4.dragAndDrop(res4, 200)
  //   browser.pause(125)
  //   res5.dragAndDrop(res5, 200)
  //   browser.pause(125)
  //   res6.dragAndDrop(res6, 200)
  //   browser.pause(125)

  //   res6.dragAndDrop(res6, 200)
  //   browser.pause(125)
  //   res5.dragAndDrop(res5, 200)
  //   browser.pause(125)
  //   res4.dragAndDrop(res4, 200)
  //   browser.pause(125)
  //   res3.dragAndDrop(res3, 200)
  //   browser.pause(125)
  //   res2.dragAndDrop(res2, 200)
  //   browser.pause(125)
  //   res1.dragAndDrop(res1, 200)
  //   browser.pause(500)

  //   // console.log(res4.getCSSProperty('background-color'))
  //   // console.log(res4.getCSSProperty('background-color'))
  //   browser.pause(1000)
  // })
})
