/* global suite test assert */

suite('slider-component', function () {
  test('temp', function () {
    const component = document.createElement('slider-component')
    const component2 = document.createElement('slider-component')
    document.body.append(component)
    assert.isDefined(component)
  })
  // Tests to see if it handles changing the slider value
  test('changing slider value works', function () {
    const component = document.createElement('slider-component')
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.value, 50)
    component.value = 82
    assert.equal(component.value, 82)
  })
})
