import React from 'react';
import './Modal.css';

const Modal = (props) => {
    if(!props.show){
        return null;
    } else {
        return (
            <div className="modal-backdrop">
                <div className="modal-content">
                    <h1>{props.title}</h1>

                    <div className="footer">
                        <button onClick={props.onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        );
    }

};
export default Modal;
