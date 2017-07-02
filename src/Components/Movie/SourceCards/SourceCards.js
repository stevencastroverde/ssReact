import React from 'react';
import PropTypes from 'prop-types';
import './SourceCards.css'

import Source from './Source/Source';


const SourceCards = props => {
    const userSubscriptions = props.subscriptionSources.length === 0 ?
        <h4>The Subscriptions you have don't stream this movie</h4>  :
        props.subscriptionSources.map((source, i) => <Source key={'subscription ' + i} subscription={source}/>);
    const freeContent = props.freeSources.length === 0 ?
        <h4>Sorry we couldn't find anywhere where you can watch this movie for free</h4> :
        props.freeSources.map((source, i) => <Source key={'free ' + i} free={source}/>);
    const purchaseContent = props.rentBuySources.map((source, i) => <Source key={'rent/buy' + i} rentBuy={source}/>);
    return (
        <section className="movie-sources">
            <h3>Subscription Sources:</h3>
            <div className="subscription-sources">
                {(props.userSubscriptions === 'free')? 'You Havent Selected Any Subscription Sources' : userSubscriptions}
            </div>
            <hr/>
            <h3>Free Sources:</h3>
            <div className="free-sources">
                {freeContent}
            </div>
            <hr/>
            <h3>Rent/Buy:</h3>
            <div className="rent-buy">
                {purchaseContent}
            </div>

        </section>
    )
};


SourceCards.propTypes = {
    subscriptionSources: PropTypes.arrayOf(PropTypes.object),
    freeSources: PropTypes.arrayOf(PropTypes.object),
    rentBuySources: PropTypes.arrayOf(PropTypes.object).isRequired,
    userSubscriptions: PropTypes.string

};


export default SourceCards