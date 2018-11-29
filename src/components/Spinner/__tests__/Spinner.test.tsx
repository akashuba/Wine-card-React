import * as React from 'react'
import { Spinner } from '../Spinner'
import { shallow } from 'enzyme'

describe('Component Footer', () => {
    const wrapper = shallow(<Spinner />)

    describe('general markup', () => {
        it('Info block is exist', () => {
            expect(wrapper.find('.spinner')).toHaveLength(1)
        })
    })
})
