import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviePage from './MoviePage';

describe('<MoviePage /> UI Component', () => {
    const testParams = {
        params:{
            subscriptions:'hulu_plus',
            id: 71445
        }
    };
    const testPaths = {
        theMask: {
            pathname: '/movie/39014/demo'
        },
        lordOfTheRings: {
            pathname: '/movie/71445/demo'
        }
    };

    it('renders demo movie the Mask', () => {
        shallow(<MoviePage location={testPaths.theMask} match={testParams} />);
    });

    it('renders demo movie Lord of the Rings', () => {
        shallow(<MoviePage location={testPaths.lordOfTheRings} match={testParams}/>)
    });


});


