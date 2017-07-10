import React from 'react';
import { shallow } from 'enzyme';
import Episode from './Episode';

describe('<Episode /> UI Component', () => {
   let testProps;
   testProps = {
       title:'poop',
       thumbnail_304x171: 'test',
       duration: 23.6,
       overview: 'hello',
       subscription_web_sources: [
           {link:'fjdkld'}
       ]

   };
   it('renders without crashing', () => {
       shallow(<Episode {...testProps} />);
   });
});