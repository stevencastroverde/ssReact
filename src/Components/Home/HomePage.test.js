import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './HomePage';

describe('<HomePage /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<HomePage/>);
    });

    describe('Home Page State', () => {
        let wrapper, instance;
        wrapper = shallow(<HomePage/>);
        instance = wrapper.instance();

        it('isOpen should be false on render', () => {
            expect(instance.state.isOpen).toEqual(false);
        });
        it('changes isOpen state when toggleModal is called', () => {
            instance.toggleModal();
            expect(instance.state.isOpen).toEqual(true);
        })


    })
});