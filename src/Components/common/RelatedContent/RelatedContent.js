import React from 'react';
import './RelatedContent.css';

const RelatedContent = props => {
        if(props.isTv) {
           return( <div className="related-content" onClick={e => props.selectRelated(e, props.id)}>
                <img src={props.thumbnail} alt={props.title + ' poster'}/>
            </div>
            )
        } else {
            return (<div className="related-content" onClick={e => props.selectRelated(e, props.id)}>
                    <img src={props.poster_240x342} alt={props.title + ' poster'}/>
                    <h5><span>{props.title}</span></h5>
                </div>
            )
        }
};

export default RelatedContent
