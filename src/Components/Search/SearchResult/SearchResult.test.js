import React from 'react';
import { shallow } from 'enzyme';
import SearchResult from './SearchResult';

describe('<SearchResult /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<SearchResult/>);
    });

    it('renders tv result', () => {
        shallow(<SearchResult tvdb={'test'}/>)
    });

    it('renders movie result', () => {
        shallow(<SearchResult />)
    });

    it('calls chooseCard function on click', () => {
        const _choose = jest.fn();
        shallow(<SearchResult chooseCard={_choose}/>)
            .simulate('click');
        expect(_choose).toHaveBeenCalled()
    });

});