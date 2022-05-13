const deepGet = require('./get.js')

describe('Get', () => {
    const data = {a: [{b: {c: 3}}]}

    it('Invalid Path', () => {
        expect(deepGet(1, data)).toBeUndefined()
    })

    it('Invalid Data', () => {
        expect(deepGet('a.0.b.c', 1)).toBeUndefined()
    })

    it('Wrong Path', () => {
        expect(deepGet('a.0.b.c.v', data)).toBeUndefined()
    })

    it('Dot Syntax', () => {
        expect(deepGet('a.0.b.c', data)).toEqual(3)
    })

    it('JSONPath Syntax', () => {
        const json = {
            "foo": {
              "id": 1,
              "data": "baz"
            },
        
            "bar": {
              "id": 1,
              "data": "quux",
              "description": "hello world"
            }
          }
        expect(deepGet('bar.description', json)).toEqual('hello world')
    })

    it('Array Syntax', () => {
        expect(deepGet('a[0].b.c', data)).toEqual(3)
    })
})