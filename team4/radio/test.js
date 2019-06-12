/* global suite test assert */

suite('radio-component', function () {
  test('temp', function () {
    const component = document.createElement('radio-component')
    const optionA = document.createElement('radio-option')
    const optionB = document.createElement('radio-option')

    optionA.value = 'optionA'
    optionA.label = 'optionA'
    optionB.value = 'optionB'
    optionB.label = 'optionB'
    component.appendChild(optionA)
    component.appendChild(optionB)
    component.name = 'option1'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.name, 'option1')
  })
})
