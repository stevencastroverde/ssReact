import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<SearchBar/>);
    });

    it('renders 9  source checkboxes' , () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.find('.checkbox')).toHaveLength(9);
    });

    it('invokes onSubmit', () => {
        const _submit = jest.fn();
        mount(<SearchBar submitSearch={_submit}/>)
            .find('#submitButton')
            .simulate('submit');
            expect(_submit).toBeCalled()
    });

    it('calls function on checkbox clicked', () => {
        const _checkbox = jest.fn();
        const checkTest = {
            type:'checkbox',
            name:'test check',
            checked: true,
            value: 'poop'
        };
        mount(<SearchBar inputChange={_checkbox}/>)
            .find('.checkbox').first()
            .simulate('change', {target: checkTest});
        expect(_checkbox).toBeCalled()
    });

    it('calls changeFunction for text input change', () => {
        const _typing = jest.fn();
        mount(<SearchBar inputChange={_typing}/>)
            .find('#search-input')
            .simulate('change');
        expect(_typing).toHaveBeenCalled();
    });
    it('calls changeFunction multiple times', () => {
       const _multiTyping = jest.fn();
        const wrapper = mount(<SearchBar inputChange={_multiTyping}/>);
        const searchInput = wrapper.find('#search-input');
        searchInput.simulate('change');
        searchInput.simulate('change');
        searchInput.simulate('change');
        expect(_multiTyping).toHaveBeenCalledTimes(3);
    });
    it('calls function on radio button change', () => {
        const _radioChange = jest.fn();
        mount(<SearchBar radioCheck={_radioChange}/>)
            .find('input[type="radio"]').first()
            .simulate('change');
        expect(_radioChange).toHaveBeenCalled();
    });
    it('changes search type on radio change', () => {
        const _change = jest.fn();
        const wrapper = mount(<SearchBar radioCheck={_change}/>);
        const tvRadio = wrapper.find('#tv-radio-btn');
        const movieRadio = wrapper.find('#movie-radio-btn');
        tvRadio.simulate('change');
        movieRadio.simulate('change');
        tvRadio.simulate('change');
        expect(_change).toHaveBeenCalledTimes(3);
    })
});