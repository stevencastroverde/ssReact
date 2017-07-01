import React from 'react';
import { shallow } from  'enzyme';
import RelatedContent from './RelatedContent';

describe('<RelatedContent /> UI Component', () => {
    it('renders without crashing', () =>{
        shallow(<RelatedContent id={1} isTV={true} selectRelated={jest.fn()} thumbnail={'hello'} />)
    })





});