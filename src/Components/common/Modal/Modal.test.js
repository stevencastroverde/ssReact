import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';

describe('<Modal/> UI Component', () =>{
    it('renders without crashing', () => {
        shallow(<Modal message={'hello'} onClose={jest.fn()} show={false}/>);
    })
});