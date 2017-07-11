import React, { Component } from 'react';
import API from '../../API/apiCalls';
import SearchBar from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';
import Loading from '../common/Loading/Loading';
import './SearchPage.css';
import freeShows from '../../data/freeShows';
import freeMovies from '../../data/freeMovies';


class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchTerm: '',
            searchType: '',
            subscriptions: [],
            isEnabled: false
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.selectCard = this.selectCard.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount(){
        if(this.props.location.pathname === '/search/demo/tv'){
            this.setState({
                results: freeShows
            })
        } else if (this.props.location.pathname === '/search/demo/movies') {
            this.setState({
                results: freeMovies
            })
        } else {
            API.getFreeMovies()
                .then(data => {
                    this.setState({results: data})
                })
        }
    }
        handleCheckboxChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        if (value === true) {
            this.setState(prevState => ({
                subscriptions: prevState.subscriptions.concat(name)
            }));
        } else {
            this.setState({searchTerm: value});
        }
    }
    handleSearch(e){
        e.preventDefault();
        if(this.state.searchType === 'tv') {
            API.searchShows(this.state.searchTerm)
                .then(data => {
                    this.setState({results: data})
                })
        } else {
            API.searchMovies(this.state.searchTerm)
                .then(data => {
                    this.setState({results: data})
                })
        }
    }
    selectCard(e, cardId, isShow){
        let userSubscriptions = (this.state.subscriptions.length === 0)? 'free' : this.state.subscriptions.join();
        if(isShow){
            this.props.history.push('/show/' + cardId + '/' + userSubscriptions );
        } else {
            this.props.history.push('/movie/' + cardId + '/' + userSubscriptions);
        }
    };

    selectSearchType = (e) => {
        this.setState({
            searchType: e.target.value
        })
    };

    render(){
        return (
            <div>
                <SearchBar inputChange={this.handleCheckboxChange} submitSearch={this.handleSearch} radioCheck={this.selectSearchType}/>
                <section className='results-grid'>
                    { (!this.state.results) ? <Loading/> :
                        this.state.results.map((result) => <SearchResult key={result.id} {...result} chooseCard={this.selectCard}/>)}
                </section>
            </div>
        )
    }

}
export default SearchPage