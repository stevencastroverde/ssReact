import React from 'react';
import './VideoHeader.css';
import { Link } from 'react-router-dom';

import scrollMp4 from '../../../images/homePage/video/Scroll-It/MP4/Scroll-It.mp4';
import scrollOgv from '../../../images/homePage/video/Scroll-It/OGV/Scroll-It.ogv';
import scrollImages from '../../../images/homePage/video/Scroll-It/Snapshots/Scroll-It.jpg';
import scrollWebm from '../../../images/homePage/video/Scroll-It/WEBM/Scroll-It.webm'


const VideoHeader = props => {
    return (
        <div className="homepage-hero">
            <div className="filter"></div>
            <div className="header-video">
                <video autoPlay="true" loop="true" poster={scrollImages}>
                    <source src={scrollWebm} type="video/webm" />Your browser does not support the video tag. I suggest you upgrade your browser.
                    <source src={scrollMp4} type="video/mp4" />Your browser does not support the video tag. I suggest you upgrade your browser.
                </video>
            </div>
            <div className="stream-search-header">
                <h1 id="video-title">Stream Search</h1>
                <p>The best way to search all your video subscriptions</p>
                <Link to="/search" id="search">Start Searching Now</Link>
            </div>
        </div>

    )
};
export default VideoHeader