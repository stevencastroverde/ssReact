import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

describe('<SearchPage /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<SearchPage/>);
    });
});