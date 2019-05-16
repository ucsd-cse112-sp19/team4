/* global suite test assert */

suite('button-component', function () {
  test('temp', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.size, 'medium')
    assert.equal(component.type, 'primary')
    assert.equal(component.plain, 'false')
    assert.equal(component.round, 'false')
    assert.equal(component.circle, 'false')
  })
  // Tests to see if the default plain attribute is false
  test('default plain is false', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.plain, 'false')
  })
  // Tests to see if the default round attribute is false
  test('default round is false', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.round, 'false')
  })
  // Tests to see if the default circle attribute is false
  test('default circle is false', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.circle, 'false')
  })
  // Tests to see if it handles changing the size value
  test('changing size works', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.size, 'medium')
    component.language = 'small'
    assert.equal(component.size, 'small')
    component.language = 'mini'
    assert.equal(component.language, 'mini')
    component.language = 'medium'
    assert.equal(component.size, 'medium')
  })
  // Tests to see if it handles changing the type value
  test('changing type works', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.type, 'primary')
    component.type = 'success'
    assert.equal(component.type, 'success')
    component.type = 'warning'
    assert.equal(component.type, 'warning')
    component.type = 'danger'
    assert.equal(component.type, 'danger')
    component.type = 'info'
    assert.equal(component.type, 'info')
    component.type = 'primary'
    assert.equal(component.type, 'primary')
  })
  // Tests to see if it handles changing the plain value
  test('changing plain works', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.plain, 'false')
    component.plain = 'true'
    assert.equal(component.plain, 'true')
    component.plain = 'false'
    assert.equal(component.plain, 'false')
  })
  // Tests to see if it handles changing the round value
  test('changing plain works', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.round, 'false')
    component.round = 'true'
    assert.equal(component.round, 'true')
    component.round = 'false'
    assert.equal(component.round, 'false')
  })
  // Tests to see if it handles changing the circle value
  test('changing plain works', function () {
    const component = document.createElement('button')
    component.size = 'medium'
    component.type = 'primary'
    document.body.append(component)
    assert.isDefined(component)
    assert.equal(component.circle, 'false')
    component.circle = 'true'
    assert.equal(component.circle, 'true')
    component.circle = 'false'
    assert.equal(component.circle, 'false')
  })
})
