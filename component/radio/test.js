/* global suite test assert */

suite('radio-component', function () {
  test('temp', function () {
    const component = document.createElement('radio-component')
    component.value = 1
    component.label = 'option 1'
    component.size = 'medium'
    component.name = 'firstRadio'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.value, 1)
    assert.equal(component.label, 'option 1')
    assert.equal(component.size, 'medium')
    assert.equal(component.name, 'firstRadio')
    assert.equal(component.disabled, false)
    assert.equal(component.border, false)
  })
})
