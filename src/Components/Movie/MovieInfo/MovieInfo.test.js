import React from 'react';
import { shallow } from 'enzyme';
import MovieInfo from './MovieInfo';

describe('<MovieInfo /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<MovieInfo/>);
    });
});