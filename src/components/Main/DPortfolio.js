import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Portfolio.css"
import ScrollAnimation from 'react-animate-on-scroll';
import image1 from "../../assets/images/portfolio-fe/1.jpg";
import image2 from "../../assets/images/portfolio-fe/2.jpg";
import image3 from "../../assets/images/portfolio-fe/13.jpg";
import image4 from "../../assets/images/portfolio-fe/6.jpg";
import image5 from "../../assets/images/portfolio-fe/7.jpg";
import image6 from "../../assets/images/portfolio-fe/4-1.jpg";
import image7 from "../../assets/images/portfolio-fe/8.jpg";
import image8 from "../../assets/images/portfolio-fe/17.jpg";
import image9 from "../../assets/images/portfolio-fe/12.jpg";
import image10 from "../../assets/images/portfolio-fe/15.jpg";
import image11 from "../../assets/images/portfolio-fe/5.jpg";
import image12 from "../../assets/images/portfolio-fe/16.jpg";
import image13 from "../../assets/images/portfolio-fe/3-1.jpg";

export default class FSPortfolio extends Component {
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
            <strong>Protect Your Protectors</strong>
            <br/>T Shirt Design<br/>
          </div>
        </>
      )},
    {
      key: 2,
      content: (
      <>
        <img src={image2} alt="2" />
        <div className="carousel-description">
          <strong>Redline Kennelz</strong>
          <br/>Logo Design<br/>
        </div>
      </>
      )},
    {
      key: 3,
      content: (
        <>
          <img src={image3} alt="3" />
          <div className="carousel-description">
          <strong>Teller Strong</strong>
          <br/>T Shirt Design<br/>
          </div>
        </>
      )},
    {
      key: 4,
      content: (
        <>
          <img src={image4} alt="4" />
          <div className="carousel-description">
          <strong>Pineapple Republic</strong>
          <br/>Business Card Design<br/>
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
          <strong>Dove Creek</strong>
          <br/>Logo Design<br/>
          </div>
        </>
      )
    },
    {
      key: 6,
      content: (
        <>
          <img src={image6} alt="6" />
          <div className="carousel-description">
            <strong>RSC Company</strong><br/>
            Postcard Design<br/>
          </div>
        </>
      )
    },
    {
      key: 7,
      content: (
        <>
          <img src={image7} alt="7" />
          <div className="carousel-description">
          <strong>Caite's Fire Juice</strong>
          <br/>Logo Design<br/>
          </div>
        </>
      )
    },
    {
      key: 8,
      content: (
        <>
          <img src={image8} alt="8" />
          <div className="carousel-description">
          <strong>Precision Extracts</strong>
          <br/>Z Fold Brochure Back<br/>
          </div>
        </>
      )
    },
    {
      key: 9,
      content: (
        <>
          <img src={image9} alt="9" />
          <div className="carousel-description">
          <strong>Precision Extracts</strong>
          <br/>Z Fold Brochure Front<br/>
          </div>
        </>
      )},
    {
      key: 10,
      content: (
      <>
        <img src={image10} alt="10" />
        <div className="carousel-description">
        <strong>Teller County Law Enforcement</strong>
          <br/>T Shirt Design<br/>
        </div>
      </>
      )},
    {
      key: 11,
      content: (
        <>
          <img src={image11} alt="11" />
          <div className="carousel-description">
          <strong>RSC Company</strong>
          <br/>Logo Design<br/>
          </div>
        </>
      )},
    {
      key: 12,
      content: (
        <>
          <img src={image12} alt="12" />
          <div className="carousel-description">
          <strong>Precision Extracts</strong>
          <br/>Business Card Design<br/>
          </div>
        </>
      )
    },
    {
      key: 13,
      content: (
        <>
          <img src={image13} alt="13" />
          <div className="carousel-description">
          <strong>Sell House Fast</strong>
          <br/>Post Card Design<br/>
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
        <section className='portfolioD'>
            <h1>Graphic Design Portfolio</h1>
            <h5>Graphic Design, Logos, Brochures, Flyers etc...</h5>
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
