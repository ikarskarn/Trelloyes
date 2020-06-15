import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from './Card';

describe('Card component', () => {
    
    it('renders empty given no item', () => {
        const wrapper = shallow(<Card />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})
