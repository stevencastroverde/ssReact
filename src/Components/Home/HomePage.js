import React, { Component } from 'react';
import './HomePage.css';

import VideoHeader from './VideoHeader/VideoHeader';

class HomePage extends Component {
    render() {
        return (
            <div>
                <section id="home-header">
                    <VideoHeader />
                </section>
                <section className="home-movies">

                </section>
                <section className="home-tv">

                </section>
            </div>
        )
    }
}

export default HomePage;
