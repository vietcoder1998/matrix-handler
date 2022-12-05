const Matrix2x2 = require('./index')
const assert = require('assert')

// test create Matrix
describe('create Matrix', function () {
  it('should create a Matrix', function () {
    const a = Matrix2x2(3, 4)
    const setValue = a.set([
      [3, 4, 4],
      [2, 3, 4],
      [1, 2]
    ])
    assert.equal(setValue, 1, "set value should be return 1")
  })
})
