const sum = require('./sample')
/* global test */
test('adds 1 + 2 to equal 3', () => {
  /* global expect */
  expect(sum(1, 2)).toBe(3)
})
