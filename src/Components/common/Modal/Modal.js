import React from 'react';
import PropTypes from  'prop-types';
import './Modal.css';
import closeIcon from '../../../images/close.svg';
import { Link } from 'react-router-dom';

const Modal = (props) => {
    if(!props.show){
        return null;
    } else {
        return (
            <div className="modal-backdrop">
                <div className="modal-content">
                    <img src={closeIcon} id="close-icon" onClick={props.onClose} alt="Close Icon"/>
                    <h3>{props.message.greeting}</h3>
                    <p>{props.message.message}</p>
                    <div className="modal-links">
                    {props.message.links.map((link,i) => {
                        return <Link to={link.route} key={i}><h4>{link.name}</h4></Link>
                    })}
                    </div>
                </div>
            </div>
        );
    }

};

Modal.propTypes = {
    onClose : PropTypes.func.isRequired,
    message: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired
};
export default Modal;
