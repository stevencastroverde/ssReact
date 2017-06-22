import React from 'react';
import PropTypes from 'prop-types';
import './Source.css';


const Source = props => {
    if(props.hasOwnProperty('subscription')){
            return (
                <div className="movie-source">
                    <a href={props.subscription.link} target="_blank" rel="noopener noreferrer">
                        <h3>{props.subscription.display_name}</h3>
                    </a>
                </div>
            )

    } else if (props.hasOwnProperty('free')){
        return (
            <div className="movie-source">
                <a href={props.free.link} target="_blank" rel="noopener noreferrer">
                    <h3>{props.free.display_name}</h3>
                </a>
            </div>
        )

    } else {
        return (
            <div className="rent-movie-source">
                <a href={props.rentBuy.link} target="_blank" rel="noopener noreferrer">
                    <h3>{props.rentBuy.display_name}</h3>
                    <div className="tables">
                {props.rentBuy.formats.map((source ,i) => {
                    return (
                        <table key={i} className="rent-buy-source">
                            <tr>
                                <th>{source.type.toUpperCase()}</th>
                            </tr>
                            <tr>
                                <td>{source.format}</td>
                                <td>{source.price}</td>
                            </tr>
                        </table>
                    )
                })}
                    </div>
                </a>
            </div>

        )
    }

};


Source.propTypes = {
    subscription: PropTypes.object,
    free: PropTypes.object,
    rentBuy: PropTypes.object
};


export default Source;