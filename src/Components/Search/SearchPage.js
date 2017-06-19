import React, { Component } from 'react';
import API from '../../API/apiCalls';
import SearchBar from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';
import './SearchPage.css';


class SearchPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            searchTerm: '',
            subscriptions: []
        };
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.selectCard = this.selectCard.bind(this);
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount(){
         API.getFreeMovies()
             .then(data => {
                 this.setState({results: data})
             })





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
        API.searchShows(this.state.searchTerm)
            .then(data => {
                this.setState({results:data})
            })
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
                    {this.state && this.state.results &&
                        this.state.results.map((result) => <SearchResult key={result.id} {...result} chooseCard={this.selectCard}/>)}
                </section>
            </div>
        )
    }

}
export default SearchPage