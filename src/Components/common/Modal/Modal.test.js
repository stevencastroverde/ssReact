import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal/> UI Component', () =>{
    const testMessage = {
        greeting: 'hello',
        message: 'poop',
        links: []
    };
    const wrapper = shallow(<Modal message={testMessage} onClose={jest.fn()} show={false}/>);
    it('renders without crashing', () => {
       shallow(<Modal message={testMessage} onClose={jest.fn()} show={false}/>);
    });
    it('should return null when props.show is false', () => {
        expect(wrapper.get(0)).toEqual(null);
    });
    it('should show message when props.show is true', () => {
        wrapper.setProps({ show:true });
        expect(wrapper.text()).toEqual('hellopoop')
    })
});