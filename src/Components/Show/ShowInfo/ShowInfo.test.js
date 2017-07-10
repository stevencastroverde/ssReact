import React from 'react';
import { shallow } from 'enzyme';
import ShowInfo from './ShowInfo';

describe('<ShowInfo /> UI Component', () => {
    let wrapper, testProps;
    testProps = {
        status: 'Continuing',
        day: 'Thursday',
        time: '7:30 PM',
    };
    wrapper = shallow(<ShowInfo {...testProps}/>);
    it('renders without crashing', () => {
        shallow(<ShowInfo {...testProps}/>);
    });
    it('shows On Going if show status is true', () => {
        expect(wrapper.find('#status').text()).toEqual('On Going');
    });
    it('shows Completed when show is finished', () => {
        wrapper.setProps({status: 'Completed'});
        expect(wrapper.find('#status').text()).toEqual('Completed')
    })
});