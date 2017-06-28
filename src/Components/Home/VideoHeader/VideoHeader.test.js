import React from 'react';
import { shallow } from 'enzyme';
import VideoHeader from './VideoHeader';

describe('<VideoHeader /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<VideoHeader/>);
    });
});