import React, { Component } from 'react';
import './searchResult.css';


class SearchResult extends React.Component {
    render (){
        return (
            <div>
                <img src={this.props.artwork_304x171}/>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default SearchResult