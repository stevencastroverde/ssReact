import React from 'react';
import { shallow, mount } from 'enzyme';
import MoviePage from './MoviePage';

describe('<MoviePage /> UI Component', () => {
    const testPath = {pathname:'/movie/39014/demo'};
    const params = {params:{subscriptions:'hulu_plus'}};
    const wrapper = mount(<MoviePage location={testPath} match={params}/>);
    it('renders demo movie', () => {
        shallow(<MoviePage location={testPath} match={params} />);
    });
});


