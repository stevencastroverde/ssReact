import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<HomePage/>);
    });
});