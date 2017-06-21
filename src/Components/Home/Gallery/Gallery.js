import React, { Component } from 'react';
import './Gallery.css';

import Button from './Button/Button';

import amazon from '../../../images/logos/amazon.png';
import hulu from '../../../images/logos/hulu.png';


const content = {
    0:{
        imageUrl: "https://placeholdit.co//i/555x150",
        text: 'Stream Search puts all your favorite subscriptions all in once place. There is no need to get frustrated while trying to find your favorite content. If your streaming services have the content, Stream Search will find it.',
        header: 'All the Content You Could Want'
    },
    1: {
        imageUrl:  "https://placeholdit.co//i/555x150",
        text: 'oh shit slide two',
        header:''
    },
    2: {
        imageUrl: 'https://placeholdit.co//i/555x150',
        text: `Don't subscribe to any streaming video services? No problem, you can still watch that latest episode by searching free resources like studio websites using Stream Search`,
        header: 'Search Free Resources'
    },
    3: {
        imageUrl: 'https://placeholdit.co//i/555x150',
        text: 'If the streaming service you have does not have the movie you want, Stream Search also shows you where you can rent or buy the movie!',
        header:'Buy and Rent Movies'

    }
};



class Gallery extends Component  {
   constructor(props) {
       super(props);
       this.state = {
           currentSlideNumber: 0,
           totalSlides: 4,
           slideData: content[0],

           }
   };


   handleButtonClick = (e, indexOfSelectedButton) => {
       console.log(e, indexOfSelectedButton)
      this.setState({
          currentSlideNumber:indexOfSelectedButton,
          slideData: content[indexOfSelectedButton]
      })

   };



    render() {
       return(
           <div className="gallery-container">
               <img src={this.state.slideData.imageUrl}/>
               <div className="buttons-and-text">
                   <div className="buttons">
                       <Button numberOfButtons={this.state.totalSlides} selected={this.state.currentSlideNumber} clickedButton={this.handleButtonClick}/>
                   </div>
                   <h3>{this.state.slideData.header}</h3>
                   <p>{this.state.slideData.text}</p>
               </div>

            </div>
       )
    }

}
export default Gallery