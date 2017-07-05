import React, { Component } from 'react';
import './HomePage.css';

import VideoHeader from './VideoHeader/VideoHeader';
import Gallery from './Gallery/Gallery';
import Modal from '../common/Modal/Modal';
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

const modalContent = {
    greeting: 'Hello Everyone,',
    message: 'I have just found out that the 3rd party API I was using to gather data is phasing out their free developer keys by August 1st 2017. So if you come to this web application, and the search functionality is not working there is a reason. Because I do not have $1,000 a month to keep this app going after my key is deactivated, this application will stop working. If you are wanting to see what functionality I included in this app, I will leave demo links below and you are more than welcome to check them out.',
    links: [
        {route: '/search/demo/tv', name:'Tv Search'},
        {route:'/search/demo/movies', name:'Movie Search'},
        {route: '/show/69/demo', name:'Bobs Burgers'},
        {route: '/show/969/demo', name:'Survivor'},
        {route: '/show/2072/demo', name:'Star Trek'},
        {route: '/movie/39014/demo', name:'The Mask'},
        {route: '/movie/71445/demo', name:'Lord of The Rings'}
    ]
};

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }

    }
    toggleModal = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log(e, this.state)
    };

    render() {
        return (
            <div>
                <section id="home-header">
                    <button id="please-read" onClick={this.toggleModal}>Click Me!</button>
                    <div className="home-video">
                        <VideoHeader />
                    </div>

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
                <Modal  onClose={this.toggleModal} message={modalContent} show={this.state.isOpen} />
            </div>
        )
    }
}

export default HomePage;
