import React from 'react';
import { shallow } from 'enzyme';
import SourceCards from './SourceCards';

describe('<SourceCards /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<SourceCards/>);
    });
});