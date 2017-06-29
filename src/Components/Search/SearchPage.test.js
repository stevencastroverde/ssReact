import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from './SearchPage';

describe('<SearchPage /> UI Component', () => {
    const testProps = {
        demoTv: {
            pathname: '/search/demo/tv'
        },
        demoMovie: {
            pathname: '/search/demo/movies'
        },
        apiCall: {
            pathname: '/search'
        }
    };
    it('renders Tv Demo page', () => {
        shallow(<SearchPage location={testProps.demoTv}/>);
    });
    it('renders Movie Demo page', () => {
        shallow(<SearchPage location={testProps.demoMovie}/>)
    })
});