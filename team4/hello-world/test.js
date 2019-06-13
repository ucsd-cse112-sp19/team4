/* global suite test assert */
/* global HelloWorldComponent */

/**
 * This will assert both that the component contains the attribute and has the value.
 * @param {HTMLElement} component The comonent to test
 * @param {string} attribute The attribute of component to test
 * @param {*} value The value that it should be equal to
 */
function attributeEqualHelloWorld (component, attribute, value) {
  assert.isDefined(component)
  assert.isString(attribute)
  assert.include(HelloWorldComponent.observedAttributes, attribute)
  assert.equal(component[attribute], value)
}

/**
 * This will assert that the attribute is valid and then sets it.
 * @param {HTMLElement} component The component to set
 * @param {string} attribute The attribute of component to set
 * @param {*} newValue The vew value to set
 */
function safeSetHelloWorld (component, attribute, newValue) {
  assert.isDefined(attribute)
  assert.isString(attribute)
  assert.include(HelloWorldComponent.observedAttributes, attribute)
  component[attribute] = newValue
}

suite('hello-world-component', function () {
  test('temp', function () {
    const component = document.createElement('hello-world')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqualHelloWorld(component, 'language', 'en')
    attributeEqualHelloWorld(component, 'rainbow', 'false')
  })
  // Tests to see if the default language value is en
  test('default language is en', function () {
    const component = document.createElement('hello-world')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqualHelloWorld(component, 'language', 'en')
  })
  // Tests to see if the default rainbow value is false
  test('default rainbow is false', function () {
    const component = document.createElement('hello-world')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqualHelloWorld(component, 'rainbow', 'false')
  })
  // Tests to see if it handles changing the language value
  test('changing language works', function () {
    const component = document.createElement('hello-world')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqualHelloWorld(component, 'language', 'en')
    safeSetHelloWorld(component, 'language', 'fr')
    attributeEqualHelloWorld(component, 'language', 'fr')
    safeSetHelloWorld(component, 'language', 'en')
    attributeEqualHelloWorld(component, 'language', 'en')
  })
  // Tests to see if it handles changing the rainbow value
  test('changing rainbow works', function () {
    const component = document.createElement('hello-world')
    document.body.append(component)
    assert.isDefined(component)
    attributeEqualHelloWorld(component, 'rainbow', 'false')
    safeSetHelloWorld(component, 'rainbow', 'true')
    attributeEqualHelloWorld(component, 'rainbow', 'true')
    safeSetHelloWorld(component, 'rainbow', 'false')
    attributeEqualHelloWorld(component, 'rainbow', 'false')
  })
})
