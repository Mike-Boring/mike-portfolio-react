import React from 'react';
import bgVideo from '../../assets/images/background-video.mp4'
import './Banner.css';
import { Button } from 'reactstrap';
import BannerAnimText from './BannerAnimText';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const AnimatedBanner = ({element1}) => {
    const videoSource = bgVideo
    return (
        <>
            <div className="Container" >
                <video autoPlay="autoplay" loop="loop" muted className="Video" >
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <section className="banner-content" ref={element1}>
                    <BannerAnimText />
                    <h1>Michael Boring</h1>
                    <h4>Full Stack Software Engineer</h4>
                    <br/>
                    <AnchorLink href='#about'><Button color="none" type="button" className="btn btn-outline-light">VIEW DETAILS</Button></AnchorLink>
                </section>
            </div>
            <div id="about"></div>
        </>
    )
}

export default AnimatedBanner