import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchPage from './SearchPage';



describe('<SearchPage /> UI Component', () => {
        let wrapper, instance;
        const testProps = {
            demoTv: {
                pathname: '/search/demo/tv'
            },
            demoMovie: {
                pathname: '/search/demo/movies'
            },
            apiCall: {
                pathname: '/search'
            }
        };
        wrapper = shallow(<SearchPage location={testProps.demoTv}/>);
        instance = wrapper.instance();

        it('renders Tv Demo page', () => {
            shallow(<SearchPage location={testProps.demoTv}/>);
        });
        it('renders Movie Demo page', () => {
            shallow(<SearchPage location={testProps.demoMovie}/>)
        });
        xit('calls api to get Free Movies', () => {
            let wrapper = mount(<SearchPage location={testProps.apiCall}/>);
            let instance = wrapper.instance();
            let expected = ['getFreeMovies Mock'];
            expect.assertions(1);
            expect(instance.state.results).toEqual(expect.arrayContaining(expected));
        });

    describe('Handle Select Search Type', () => {
        const event = {
            tv:{
                target:{
                    value:'tv'
                }
            },
            movie: {
                target: {
                    value:'movies'
                }
            }
        };
        it('updates search type to tv', () => {
            instance.selectSearchType(event.tv);
            expect(instance.state.searchType).toEqual('tv');
        });

        it('updates search type to movies', () => {
           instance.selectSearchType(event.movie);
           expect(instance.state.searchType).toEqual('movies')
        })
    });

    describe('Handle CheckBox Change', () => {
        const events = {
            text: {
                target: {
                    value: 'poop',
                    type: 'text',
                }
            },
            checkbox1: {
                target: {
                    value: 'Hulu Plus',
                    checked: true,
                    name: 'hulu_plus',
                    type: 'checkbox'
                }
            },
            checkbox2: {
                target: {
                    value: 'Free',
                    checked: true,
                    name: 'free',
                    type: 'checkbox'
                }
            }
        };
        it('Changes searchTerm State', () => {
            instance.handleCheckboxChange(events.text);
            expect(instance.state.searchTerm).toEqual('poop')
        });

        it('Adds subscription to State', () => {
            const expected = ['hulu_plus'];
            instance.handleCheckboxChange(events.checkbox1);
            expect(instance.state.subscriptions).toEqual(expect.arrayContaining(expected))
        });

        it('add subscriptions to state', () => {
            const expected = ['hulu_plus','free'];
            instance.handleCheckboxChange(events.checkbox2);
            expect(instance.state.subscriptions).toEqual(expect.arrayContaining(expected))
        })
    });
});