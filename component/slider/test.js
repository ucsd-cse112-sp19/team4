/* global suite test assert */

suite('slider-component', function () {
  test('temp', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.max, '100')
    assert.equal(component.min, '0')
    assert.equal(component.show_input, 'false')
    assert.equal(component.value, '42')
  })
  // Tests to see if the default max value is 100
  test('default max is 100', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.max, '100')
  })
  // Tests to see if the default min value is 0
  test('default min is 0', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.min, '0')
  })
  // Tests to see if the default show_input value is false
  test('default show_input is false', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.show_input, 'false')
  })

  // Tests to see if it handles changing the slider value
  test('changing slider value works', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.value, '42')
    component.value = component.min
    assert.equal(component.value, component.min)
    component.language = component.max
    assert.equal(component.language, component.max)
  })
  // Tests to see if it handles changing the show_input value
  test('changing show_input works', function () {
    const component = document.createElement('slider')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.show_input, 'false')
    component.show_input = 'true'
    assert.equal(component.show_input, 'true')
    component.show_input = 'false'
    assert.equal(component.show_input, 'false')
  })
})
