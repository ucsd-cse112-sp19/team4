/* global suite test assert */
/* global SliderComponent */

/**
 * This will assert both that the component contains the attribute and has the value.
 * @param {HTMLElement} component The comonent to test
 * @param {string} attribute The attribute of component to test
 * @param {*} value The value that it should be equal to
 */
function attributeEqualSlider (component, attribute, value) {
  assert.isDefined(component)
  assert.isString(attribute)
  assert.include(SliderComponent.observedAttributes, attribute)
  assert.equal(component[attribute], value)
}

/**
 * This will assert that the attribute is valid and then sets it.
 * @param {HTMLElement} component The component to set
 * @param {string} attribute The attribute of component to set
 * @param {*} newValue The vew value to set
 */
function safeSetSlider (component, attribute, newValue) {
  assert.isDefined(attribute)
  assert.isString(attribute)
  assert.include(SliderComponent.observedAttributes, attribute)
  component[attribute] = newValue
}

suite('slider-component', function () {
  test('temp', function () {
    const component = document.createElement('slider-component')
    document.body.append(component)
    assert.isDefined(component)
  })
  // Tests to see if it handles changing the slider value
  test('changing slider value works', function () {
    const component = document.createElement('slider-component')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqualSlider(component, 'value', '50')
    safeSetSlider(component, 'value', '82')
    attributeEqualSlider(component, 'value', '82')
  })
})
