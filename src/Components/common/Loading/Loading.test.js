import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading/> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<Loading/>);
    })
});