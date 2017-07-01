import React from 'react';
import {shallow} from 'enzyme';
import Cast from './Cast';

describe("<Cast /> UI Component", () => {
    it('renders cast member' , () => {
        const wrapper = shallow(<Cast/>);
        expect(wrapper.find('div.cast-member')).toHaveLength(1);
    })




});