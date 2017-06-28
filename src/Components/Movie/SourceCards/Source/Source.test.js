import React from 'react';
import { shallow } from 'enzyme';
import Source from './Source';

describe('<Source /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<Source/>);
    });
});