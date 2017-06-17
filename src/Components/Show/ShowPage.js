import React, { Component } from 'react';
import InfoHeader from '../common/InfoHeader/InfoHeader';
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
                {this.state && this.state.showInfo && <InfoHeader {...this.state.showInfo}/> }

            </div>
        )
    }
}

export default ShowPage;
