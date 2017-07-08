import React from 'react';
import {shallow, mount } from 'enzyme';
import Season from './Season';

describe('<Season /> UI Component', () => {
    const testProps = {
        season: 7,
        episodes: [{}, {}]
    };
    it('renders without crashing', () => {
        shallow(<Season {...testProps}/>)
    })
});

describe('<Season /> state/props', () => {
    const testProps = {
        season: 7,
        episodes: [{
            id: 1,
            thumbnail_304x171: 'poop',
            title: 'poop',
            duration: 345,
            overview:'poop',
            subscription_web_sources: [{link:'poop'}]
        },
            {
                id: 3,
                thumbnail_304x171: 'poop',
                title: 'poop',
                duration: 345,
                overview:'poop',
                subscription_web_sources: [{link:'poop'}]
            }]
    };
    const wrapper = mount(<Season {...testProps}/>);
    const div = wrapper.find('.season-heading');

    it('starts collapsed', () => {
        expect(wrapper.state().isExpanded).toEqual(false);
    });
    it('when collapsed, season number color is collapsedColor', () =>{
        const seasonStyle = wrapper.find('.season-number').get(0).style._values;
        expect(seasonStyle).toHaveProperty('background', 'rgb(254, 254, 254)')
    });

    it('when clicked isExpanded equals true',() => {
        div.simulate('click');
        expect(wrapper.state().isExpanded).toEqual(true);
    });
    it('when expanded season number should have expandedColor background', () => {
        const seasonNumber = wrapper.find('.season-number').get(0).style._values;
       expect(seasonNumber).toHaveProperty('background-color', 'rgb(178, 178, 178)');

    });
    it('when clicked twice isExpanded equals false', () => {
        div.simulate('click');
        expect(wrapper.state().isExpanded).toEqual(false);
    });

});