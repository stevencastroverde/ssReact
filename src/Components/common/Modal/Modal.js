import React from 'react';
import './Modal.css';
import closeIcon from '../../../images/close.svg';
import playIcon from '../../../images/play.svg';

const Modal = (props) => {
    if(!props.show){
        return null;
    } else {
        return (
            <div className="modal-backdrop">
                <div className="modal-content">
                    <img src={closeIcon} id="close-icon" onClick={props.onClose} alt="Close Icon"/>
                    <h1>{props.title}</h1>
                    <img src={props.thumbnail_608x342} alt={props.title + ' episode image'}/>
                    <h4>{(props.duration / 60) + ' minutes'}</h4>
                    <p>{props.overview}</p>
                    <a target="_blank" rel="noopener noreferrer" href={props.subscription_web_sources[0].link}>
                        <img alt="play icon" id="play-icon" src={playIcon}/>
                    </a>
                </div>
            </div>
        );
    }

};
export default Modal;
