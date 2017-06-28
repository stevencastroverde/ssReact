import React from 'react';
import { shallow } from 'enzyme';
import MoviePage from './MoviePage';

describe('<MoviePage /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<MoviePage/>);
    });
});