import React from 'react';
import { shallow } from 'enzyme';
import ShowPage from './ShowPage';

describe('<ShowPage /> UI Component', () => {
   let wrapper, instance, testProps;
   testProps = [
       [
           {}
       ],
       [
           {}
       ],
       [
           {}
       ]
   ];
   wrapper = shallow(<ShowPage location={{pathname:'/show/969/demo'}}/>);
   instance = wrapper.instance();
    it('renders without crashing', () => {
        shallow(<ShowPage location={{pathname:'/show/969/demo'}}/>);
    });
});