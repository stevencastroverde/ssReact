import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviePage from './MoviePage';
import HomePage from "../Home/HomePage";

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

    describe('Movie Page functions', () => {
        let history = [];
        let event = {};
        const wrapper = shallow(<MoviePage location={testPaths.lordOfTheRings} history={history} match={testParams}/>);
        const instance = wrapper.instance();
        xit('selects related movie when clicked', () => {
            instance.selectedMovie(event, 35);
            console.log(instance.props)
        })
    });
});


