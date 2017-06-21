import React, { Component } from 'react';
import './Gallery.css';

import Buttons from './Buttons/Buttons';

import amazon from '../../../images/logos/amazon.png';
import hulu from '../../../images/logos/hulu.png';


const content = {
    1:{
        imageUrl: {amazon},
        text: 'blah blah slide one'
    },
    2: {
        imageUrl: {hulu},
        text: 'oh shit slide two'
    }
}



class Gallery extends Component  {
   constructor(props) {
       super(props);
       this.state = {
           currentSlideNumber: 1,
           totalSlides: 4,
           slideData: content[1]
       };

   }

   handleButtonClick = buttonNumber => {
      this.setState({
          currentslideNumber:buttonNumber,
          slideData: content[buttonNumber]
      })

   };

    render() {
       return(
           <div>
                <Buttons clickedButton={this.handleButtonClick} numberOfButtons={this.state.totalSlides} />
                <img src={this.state.slideData.imageUrl}/>
                <p>{this.state.slideData.text}</p>
            </div>
       )
    }








}
export default Gallery