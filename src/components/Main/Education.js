import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Education.css"
import ScrollAnimation from 'react-animate-on-scroll';
import image1 from "../../assets/images/certs/certs5.png";
import image2 from "../../assets/images/certs/certs4.jpg";
import image3 from "../../assets/images/certs/certs1.jpg";
import image4 from "../../assets/images/certs/certs3.jpg";
import image5 from "../../assets/images/certs/certs2.jpg";

export default class Education extends Component {
  state = {
    goToSlide: 0,
    showNavigation: true
  };

  slides = [
    {
      key: 1,
      content: (
        <>
          <img src={image1} alt="1" />
          <div className="carousel-description">
            <strong>Kenzie Academy<br />
            Full-Stack Web Development (12 Month Program)</strong><br />
            Indianapolis, Indiana
          </div>
        </>
      )
    },
    {
      key: 2,
      content: (
        <>
          <img src={image2} alt="2" />
          <div className="carousel-description">
            <strong>Kenzie Academy<br />
            Frontend Web Development (6 Month Program)</strong><br />
            Indianapolis, Indiana
          </div>
        </>
      )
    },
    {
      key: 3,
      content: (
        <>
          <img src={image3} alt="3" />
          <div className="carousel-description">
            <strong>Coursera Academy<br />
            Html, Css and Javascript (3 Month Program)</strong>
          </div>
        </>
      )
    },
    {
      key: 4,
      content: (
        <>
          <img src={image4} alt="4" />
          <div className="carousel-description">
            <strong>Coursera Academy (3 Month Program)<br/>
            Frontend Bootstrap 4
            </strong>
          </div>
        </>
      )
    },
    {
      key: 5,
      content: (
        <>
          <img src={image5} alt="5" />
          <div className="carousel-description">
            <strong>Coursera Academy (3 Month Program)<br/>
            Frontend Web Frameworks
            </strong>
          </div>
        </>
      )
    }
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
        <section className='education'>
            <h1>Education</h1> 
            <br/><br/>
            <ScrollAnimation animateIn="animate__zoomIn">           
              <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
                  <Carousel
                  slides={this.slides}
                  goToSlide={this.state.goToSlide}
                  showNavigation={this.state.showNavigation}
                  />
              </div>
            </ScrollAnimation>
        </section>
    );
  }
}