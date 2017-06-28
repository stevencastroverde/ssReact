import React from 'react';
import { shallow } from 'enzyme';
import Source from './Source';

const testData = {
    link: 'testlink',
    display_name: 'Test source',
    source: 'test',
    formats: [{
        format: 'SD',
        price: '2.99',
        type: 'purchase'
    }]
};

describe('<Source /> UI Component', () => {

    it('renders subscription source', () => {
         const wrapper = shallow(<Source subscription={testData}/>);
            expect(wrapper.length).toEqual(1);

    });

    it('renders free source', () => {
        const wrapper = shallow(<Source free={testData}/>);
           expect(wrapper.length).toEqual(1)
    });

    it('renders rent/buy source', () => {
        const wrapper = shallow(<Source rentBuy={testData}/>);
        expect(wrapper.length).toEqual(1)
    })

});