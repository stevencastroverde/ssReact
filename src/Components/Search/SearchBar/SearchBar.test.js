import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('<SearchBar /> UI Component', () => {
    it('renders without crashing', () => {
        shallow(<SearchBar/>);
    });

    it('renders 9  source checkboxes' , () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.find('.checkbox')).toHaveLength(9);
    });

    xit('invokes onSubmit', () => {
        const _submit = jest.fn();
        shallow(<SearchBar onSubmit={_submit}/>)
            .find('[type="submit"]')
            .simulate('click')

            expect(_submit).toBeCalled()

    })
});