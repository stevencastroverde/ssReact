import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';
import freeMovies from '../../dummyData/freeMovies';
import freeShows from '../../dummyData/freeShows';
import './SearchPage.css';


class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: freeMovies,
            shows: freeShows,
            searchTerm: '',
            subscriptions: []
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.selectCard = this.selectCard.bind(this);
    }
    componentDidMount(){
        //if tv is checked get free shows
        //else get free movies
        //maybe move to search results or set state to tv
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
        console.log(this.state.subscriptions, this.state.searchTerm);
    }
    selectCard(e, cardId, isShow){
        if(isShow){
            this.props.history.push('/show/' + cardId + '/' + this.state.subscriptions.join());
        } else {
            this.props.history.push('/movie/' + cardId + '/' + this.state.subscriptions.join());
        }
    };


    render(){
        return (
            <div>
                <SearchBar inputChange={this.handleCheckboxChange} submitSearch={this.handleSearch} />
                <section className='results-grid'>
                    {this.state.movies.map((result) => <SearchResult key={result.id} {...result} chooseCard={this.selectCard}/>)}
                </section>
            </div>
        )
    }

}
export default SearchPage