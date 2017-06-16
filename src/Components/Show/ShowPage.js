import React, { Component } from 'react';
import API from '../../API/apiCalls';


import './ShowPage.css';

class ShowPage extends Component {
    constructor(props){
        super(props);
        this.state ={};
    }
    componentWillMount() {

        let params = this.props.match.params;
         API.getSpecificShow(params.id, params.subscriptions)
             .then(response => {
                 this.setState({
                     showInfo: response[0],
                     episodes: response[1].results,
                     relatedShows: response[3].results
                 });
             })

    }


    render() {
        return (

            <div>
                {this.state && this.state.showInfo && <h1>{this.state.showInfo.title}</h1>}

            </div>
        )
    }
}

export default ShowPage;
