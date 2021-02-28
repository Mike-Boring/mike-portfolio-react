import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Portfolio.css"
import ScrollAnimation from 'react-animate-on-scroll';

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
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/1.jpg" alt="1" />
          <div className="carousel-description">
            <strong>Protect Your Protectors</strong>
            <br/>T Shirt Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/1.jpg">
              View Design
            </a>
          </div>
        </>
      )},
    {
      key: 2,
      content: (
      <>
        <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/2.jpg" alt="2" />
        <div className="carousel-description">
          <strong>Redline Kennelz</strong>
          <br/>Logo Design<br/>
          <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/2.jpg">
            View Design
          </a>
        </div>
      </>
      )},
    {
      key: 3,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/13.jpg" alt="3" />
          <div className="carousel-description">
          <strong>Teller Strong</strong>
          <br/>T Shirt Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/13.jpg">
              View Design
            </a>
          </div>
        </>
      )},
    {
      key: 4,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/6.jpg" alt="4" />
          <div className="carousel-description">
          <strong>Pineapple Republic</strong>
          <br/>Business Card Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/6.jpg">
              View Design
            </a>
          </div>
        </>
      )
    },
    {
      key: 5,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/7.jpg" alt="5" />
          <div className="carousel-description">
          <strong>Dove Creek</strong>
          <br/>Logo Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/7.jpg">
              View Design
            </a>
          </div>
        </>
      )
    },
    {
      key: 6,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/4-1.jpg" alt="6" />
          <div className="carousel-description">
            <strong>RSC Company</strong><br/>
            Postcard Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/4-1.jpg">
              View Design
            </a>
          </div>
        </>
      )
    },
    {
      key: 7,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/8.jpg" alt="7" />
          <div className="carousel-description">
          <strong>Caite's Fire Juice</strong>
          <br/>Logo Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/8.jpg">
              View Application
            </a>
          </div>
        </>
      )
    },
    {
      key: 8,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/17.jpg" alt="8" />
          <div className="carousel-description">
          <strong>Precision Extracts</strong>
          <br/>Z Fold Brochure Back<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/17.jpg">
              View Design
            </a>
          </div>
        </>
      )
    },
    {
      key: 9,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/12.jpg" alt="9" />
          <div className="carousel-description">
          <strong>Precision Extracts</strong>
          <br/>Z Fold Brochure Front<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/12.jpg">
              View Design
            </a>
          </div>
        </>
      )},
    {
      key: 10,
      content: (
      <>
        <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/15.jpg" alt="10" />
        <div className="carousel-description">
        <strong>Teller County Law Enforcement</strong>
          <br/>T Shirt Design<br/>
          <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/15.jpg">
            View Design
          </a>
        </div>
      </>
      )},
    {
      key: 11,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/5.jpg" alt="11" />
          <div className="carousel-description">
          <strong>RSC Company</strong>
          <br/>Logo Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/5.jpg">
              View Design
            </a>
          </div>
        </>
      )},
    {
      key: 12,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/16.jpg" alt="12" />
          <div className="carousel-description">
          <strong>Precision Extracts</strong>
          <br/>Business Card Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/16.jpg">
              View Design
            </a>
          </div>
        </>
      )
    },
    {
      key: 13,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/3-1.jpg" alt="13" />
          <div className="carousel-description">
          <strong>Sell House Fast</strong>
          <br/>Post Card Design<br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/3-1.jpg">
              View Design
            </a>
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
        <section className='portfolio'>
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
