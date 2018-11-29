import { isMatching } from '../functions'

describe('Test for functions', () => {
    test('isMatching function', () => {
        expect(isMatching('index', 'ind')).toBeTruthy()
        expect(isMatching('index', 'IND')).toBeTruthy()
    })
})
