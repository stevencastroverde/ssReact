import React from 'react';
import PropTypes from 'prop-types'
import './RelatedContent.css';

const RelatedContent = props => {
        if(props.isTv) {
           return( <div className="related-content" onClick={e => props.selectRelated(e, props.id)}>
                <img src={props.thumbnail} alt={props.title + ' poster'}/>
            </div>
            )
        } else {
            return (<div className="related-content related-movie" onClick={e => props.selectRelated(e, props.id)}>
                    <img src={props.thumbnail} alt={props.title + ' poster'}/>
                </div>
            )
        }
};


RelatedContent.propTypes = {
    isTV: PropTypes.bool.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string,
    selectRelated: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default RelatedContent
