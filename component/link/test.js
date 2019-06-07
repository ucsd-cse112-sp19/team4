/* global suite test assert */
/* global LinkComponent */

/**
 * This will assert both that the component contains the attribute and has the value.
 * @param {HTMLElement} component The comonent to test
 * @param {string} attribute The attribute of component to test
 * @param {*} value The value that it should be equal to
 */
function attributeEqulLink (component, attribute, value) {
  assert.isDefined(component)
  assert.isString(attribute)
  assert.include(LinkComponent.observedAttributes, attribute)
  assert.equal(component[attribute], value)
}

/**
 * This will assert that the attribute is valid and then sets it.
 * @param {HTMLElement} component The component to set
 * @param {string} attribute The attribute of component to set
 * @param {*} newValue The vew value to set
 */
function safeSetLink (component, attribute, newValue) {
  assert.isDefined(attribute)
  assert.isString(attribute)
  assert.include(LinkComponent.observedAttributes, attribute)
  component[attribute] = newValue
}

suite('link-component', function () {
  test('all attributes are in component', function () {
    assert.isDefined(LinkComponent)
    const attributes = ['type', 'href', 'underline', 'disabled', 'theme']
    for (var i = 0; i < attributes.length; i += 1) {
      assert.include(LinkComponent.observedAttributes, attributes[i])
    }
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'type', 'primary')
    attributeEqulLink(component, 'href', null)
    attributeEqulLink(component, 'disabled', false)
    attributeEqulLink(component, 'underline', true)
  })
  // Tests to see if the default underline if true
  test('default underline is false', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'underline', true)
  })
  // Tests to see if the default disabled is false
  test('default disabled is false', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'disabled', false)
  })
  // Tests to see if the default theme is false
  test('default disabled is false', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'theme', false)
  })
  // Tests to see if it handles changing the type value
  test('changing type works', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'type', 'primary')
    safeSetLink(component, 'type', 'success')
    attributeEqulLink(component, 'type', 'success')
    safeSetLink(component, 'type', 'warning')
    attributeEqulLink(component, 'type', 'warning')
    safeSetLink(component, 'type', 'danger')
    attributeEqulLink(component, 'type', 'danger')
    safeSetLink(component, 'type', 'info')
    attributeEqulLink(component, 'type', 'info')
    safeSetLink(component, 'type', 'primary')
    attributeEqulLink(component, 'type', 'primary')
  })
  // Tests to see if it handles changing the underline value
  test('changing underline works', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'underline', true)
    component.underline = false
    attributeEqulLink(component, 'underline', false)
    component.underline = true
    attributeEqulLink(component, 'underline', true)
  })
  // Tests to see if it handles changing the disabled value
  test('changing disabled works', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'disabled', false)
    component.disabled = true
    attributeEqulLink(component, 'disabled', true)
    component.disabled = false
    attributeEqulLink(component, 'disabled', false)
  })
  // Tests to see if link's theme is bootsrap
  test('testing bootsrap works', function () {
    const component = document.createElement('link-component')
    safeSetLink(component, 'type', 'primary')
    safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    safeSetLink(component, 'theme', 'bootstrap')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqulLink(component, 'theme', 'bootstrap')
  })
})
