/* global suite test assert */

suite('slider-component', function () {
  test('temp', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.language, 'en')
    assert.equal(component.rainbow, 'false')
  })
  // Tests to see if the default language value is en
  test('default language is en', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.language, 'en')
  })
  // Tests to see if the default rainbow value is false
  test('default rainbow is false', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.rainbow, 'false')
  })
  // Tests to see if it handles changing the language value
  test('changing language works', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.language, 'en')
    component.language = 'fr'
    assert.equal(component.language, 'fr')
    component.language = 'en'
    assert.equal(component.language, 'en')
  })
  // Tests to see if it handles changing the rainbow value
  test('changing rainbow works', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.rainbow, 'false')
    component.rainbow = 'true'
    assert.equal(component.rainbow, 'true')
    component.rainbow = 'false'
    assert.equal(component.rainbow, 'false')
  })
})
