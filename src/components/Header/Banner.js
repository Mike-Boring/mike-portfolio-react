import React from 'react';
import bgVideo from '../../assets/images/background-video.mp4'
import './Banner.css';
import { Button } from 'reactstrap';
import BannerAnimText from './BannerAnimText';


const AnimatedBanner = ({element1}) => {
    const videoSource = bgVideo
    return (
        <div className="Container" >
            <video autoPlay="autoplay" loop="loop" muted className="Video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <section className="banner-content" ref={element1}>
                <BannerAnimText />
                <h2>Michael Boring</h2>
                <h3>Full Stack Software Engineer</h3>
                <Button variant="outline-light">View Portfolio</Button>
            </section>
        </div>
    )
}

export default AnimatedBanner