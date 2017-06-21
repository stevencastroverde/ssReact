import React, { Component } from 'react';
import './HomePage.css';

import VideoHeader from './VideoHeader/VideoHeader';
import Gallery from './Gallery/Gallery';

//logos
import amazon from '../../images/logos/amazon.png';
import crunchyroll from '../../images/logos/crunchyroll.png';
import dramafever from '../../images/logos/dramafever.png';
import hbo from '../../images/logos/hbo.png';
import hulu from '../../images/logos/hulu.png';
import netflix from '../../images/logos/netflix.png';
import starz from '../../images/logos/starz.png';






class HomePage extends Component {
    render() {
        return (
            <div>
                <section id="home-header">

                    <VideoHeader />
                </section>
                <section className="home-movies">
                    <div className="home-sources">
                        <img src={amazon} alt="amazon logo"/>
                        <img src={crunchyroll} alt="crunchy roll logo"/>
                        <img src={dramafever} alt="dramafever logo"/>
                        <img src={hbo} alt="hbo logo"/>
                        <img src={hulu} alt="hulu logo"/>
                        <img src={netflix} alt="netflix logo"/>
                        <img src={starz} alt="starz logo"/>
                    </div>
                    <div className="movie-paragraph">
                        <h2>Find the movie you want when you want it</h2>

                    </div>
                </section>
                <section className="home-tv">
                   <Gallery />
                </section>
            </div>
        )
    }
}

export default HomePage;
