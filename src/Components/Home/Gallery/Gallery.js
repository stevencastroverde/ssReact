import React, { Component } from 'react';
import './Gallery.css';

import Button from './Button/Button';

import bobsBurgers from '../../../images/homePage/Gallery/slideOne.png';
import freeContent from '../../../images/homePage/Gallery/freeContent.png';
import videoDirect from '../../../images/homePage/Gallery/videoDirect.png';
import rentBuy from '../../../images/homePage/Gallery/rentBuy.png';

const content = {
    0:{
        imageUrl: bobsBurgers,
        text: 'Stream Search puts all your favorite subscriptions all in once place. There is no need to get frustrated while trying to find your favorite content. If your streaming services have the content, Stream Search will find it.',
        header: 'All the Content You Could Want'
    },
    1: {
        imageUrl:  videoDirect,
        text: 'All you need to do is hit play, and you will be taken to the video. No more scouring every service for a video. Let Stream Search do all the heavy lifting.',
        header:'Go Directly to the Source'
    },
    2: {
        imageUrl: freeContent,
        text: `Don't subscribe to any streaming video services? No problem, you can still watch that latest episode by searching free resources like studio websites using Stream Search`,
        header: 'Search Free Resources'
    },
    3: {
        imageUrl: rentBuy,
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
      this.setState({
          currentSlideNumber:indexOfSelectedButton,
          slideData: content[indexOfSelectedButton]
      })

   };



    render() {
       return(
           <div className="gallery-container">
               <img src={this.state.slideData.imageUrl} alt="demo of app"/>
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