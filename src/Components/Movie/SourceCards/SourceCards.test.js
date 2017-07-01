import React from 'react';
import { shallow } from 'enzyme';
import SourceCards from './SourceCards';

describe('<SourceCards /> UI Component', () => {
    const testArray = [{
        name:'test'
    }];
    it('renders rent/buy source', () => {
        shallow(<SourceCards subscriptionSources={[]} freeSources={[]} rentBuySources={testArray}/>)
    });
    it('renders subscription sources', () => {
        shallow(<SourceCards rentBuySources={[]} subscriptionSources={testArray} freeSources={[]}/>)
    });
    it('renders free sources', () => {
        shallow(<SourceCards rentBuySources={[]} subscriptionSources={[]} freeSources={testArray}/>)
    })
});