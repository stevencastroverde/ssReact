import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './SearchResult';

describe('<SearchResult /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<SearchResult/>);
    });
});