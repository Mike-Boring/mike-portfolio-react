import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Education.css"
import ScrollAnimation from 'react-animate-on-scroll';


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
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/10/Boring-Michael-full-stack.png" alt="1" />
          <div className="carousel-description">
            <strong>Kenzie Academy<br />
            Full-Stack Web Development (12 Month Program)</strong><br />
            Indianapolis, Indiana
            <br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/10/Boring-Michael-full-stack.png">
              View Certificate
            </a>
          </div>
        </>
      )
    },
    {
      key: 2,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/certs4.jpg" alt="2" />
          <div className="carousel-description">
            <strong>Kenzie Academy<br />
            Frontend Web Development (6 Month Program)</strong><br />
            Indianapolis, Indiana
            <br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/certs4.jpg">
              View Certificate
            </a>
          </div>
        </>
      )
    },
    {
      key: 3,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/certs1.jpg" alt="3" />
          <div className="carousel-description">
            <strong>Coursera Academy<br />
            Html, Css and Javascript (3 Month Program)</strong>
            <br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/certs1.jpg">
              View Certificate
            </a>
          </div>
        </>
      )
    },
    {
      key: 4,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/certs3.jpg" alt="4" />
          <div className="carousel-description">
            <strong>Coursera Academy (3 Month Program)<br/>
            Frontend Bootstrap 4
            </strong>
            <br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/certs3.jpg">
              View Certificate
            </a>
          </div>
        </>
      )
    },
    {
      key: 5,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/certs2.jpg" alt="5" />
          <div className="carousel-description">
            <strong>Coursera Academy (3 Month Program)<br/>
            Frontend Web Frameworks
            </strong>
            <br/>
            <a target="_blank" href="http://www.mikeboring.com/wp-content/uploads/2020/08/certs2.jpg">
              View Certificate
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