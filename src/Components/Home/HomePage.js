import React, { Component } from 'react';
import './HomePage.css';

import VideoHeader from './VideoHeader/VideoHeader';
import Gallery from './Gallery/Gallery';
//TODO: create images for gallery
//TODO: add media queries and movie video on header
//logos
import amazon from '../../images/homePage/logos/amazon.png';
import crunchyroll from '../../images/homePage/logos/crunchyroll.png';
import dramafever from '../../images/homePage/logos/dramafever.png';
import hbo from '../../images/homePage/logos/hbo.png';
import hulu from '../../images/homePage/logos/hulu.png';
import netflix from '../../images/homePage/logos/netflix.png';
import starz from '../../images/homePage/logos/starz.png';
import showtime from '../../images/homePage/logos/showtime.png';






class HomePage extends Component {
    render() {
        return (
            <div>
                <section id="home-header">

                    <VideoHeader />
                </section>
                <section className="source-description">
                    <div className="home-sources">
                        <img src={amazon} alt="amazon logo"/>
                        <img src={crunchyroll} alt="crunchy roll logo"/>
                        <img src={dramafever} alt="dramafever logo"/>
                        <img src={hbo} alt="hbo logo"/>
                        <img src={hulu} alt="hulu logo"/>
                        <img src={netflix} alt="netflix logo"/>
                        <img src={starz} alt="starz logo"/>
                        <img src={showtime} alt="showtime logo"/>
                    </div>
                    <div className="sources-paragraph">
                        <h2>What You Want When You Want</h2>
                        <p>Stream Search lets you search nine of the top subscription video services all at once!</p>

                    </div>
                </section>
                <section className="home-tv">
                    <h2>Stream Search makes everything more convienent</h2>
                   <Gallery />
                </section>
            </div>
        )
    }
}

export default HomePage;
