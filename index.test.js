const errReplacer = require('./')

test('should be defined', () => {
  expect(errReplacer).toBeDefined()
})

test('should stringify a error', () => {
  const err = new Error('foo')
  expect(JSON.stringify(err, errReplacer)).toMatch(/"message":"foo"/)
})
