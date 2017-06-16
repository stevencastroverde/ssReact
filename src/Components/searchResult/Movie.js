import React, { Component } from 'react'





class Movie extends Component{
    render(){

    return (
        <div onClick={this.props.clickedMovie} className="result-card">
            <img className="poster" src={this.props.poster} alt={this.props.title + 'movie poster'} />
            <div className="caption">
                <h3 className="truncate title">{this.props.title}</h3>
                <h2 className="year">{this.props.year}</h2>
            </div>
        </div>
    )
    };
}

export default Movie;