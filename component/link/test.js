/* global suite test assert */
/* global ButtonComponent */

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
			assert.include(ButtonComponent.observedAttributes, attributes[i])
		}
		const component = document.createElement('link-component')
		safeSetLink(component, 'type', 'primary')
		safeSetLink(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
    	document.body.append(component)
    	assert.isDefined(component)
		attributeEqulButton(component, 'type', 'primary')
		attributeEqulButton(component, 'href', 'https://element.eleme.io/#/en-US/component/link')
		attributeEqulButton(component, 'disabled', false)
		attributeEqulButton(component, 'underline', true)
	}
}