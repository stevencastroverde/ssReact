import React from 'react';
import './Button.css';

const styles = {
    selected: {
        color: '#BD3F32',
        background: '#E3E3E3'
    }

}




 const Repeat = props => {
    let buttons = [];
    for (let i = 0; i < props.numberOfTimes; i++){
        buttons.push(props.children(i))
    }
    return <div>{buttons}</div>
};

const Buttons = props => {

    return (
        <Repeat numberOfTimes={props.numberOfButtons}>
            {(index) =>{
                const isSelected = props.selected === index ? styles.selected : undefined;
                return( <span key={'gallery-button-' +index } className="gallery-button"
                              style={isSelected}
                              onClick={(e) => props.clickedButton(e,index)}>
                                {index + 1}</span>
                  )
                }
            }
        </Repeat>
    )
};

export default Buttons