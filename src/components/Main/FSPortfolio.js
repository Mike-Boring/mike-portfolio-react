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
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/10/12a.jpg" alt="2" />
          <div className="carousel-description">
            Django Python Front End and Back End Application
            <br/>
            <a target="_blank" href="https://github.com/Mike-Boring/micro-brew-for-you-capstone">
              View Github Repo
            </a>
          </div>
        </>
      )},
    {
      key: 2,
      content: (
      <>
        <img src="http://www.mikeboring.com/wp-content/uploads/2021/01/VueSample.jpg" alt="1" />
        <div className="carousel-description">
          <strong>Vue.js Sample Survey Component</strong>
          <br/>
          <a target="_blank" href="https://mike-boring.github.io/vue-developer-sample/">
            View Application
          </a>
        </div>
      </>
      )},
    {
      key: 3,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2021/01/shoppies.jpg" alt="1" />
          <div className="carousel-description">
            <strong>REACT.js Application, REST API</strong>
            <br/>
            <a target="_blank" href="https://mike-boring.github.io/shoppies/">
              View Application
            </a>
          </div>
        </>
      )},
    {
      key: 4,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/10/13a.jpg" alt="1" />
          <div className="carousel-description">
            <strong>React Front End and Django Rest Framework Back End Application</strong>
            <br/>
            <a target="_blank" href="https://github.com/Mike-Boring/ghostpost_frontend">
              View Frontend Repo
            </a> - 
            <a target="_blank" href="https://github.com/Mike-Boring/ghostpost_backend">
              View Backend Repo
            </a>
          </div>
        </>
      )},
    {
      key: 5,
      content: <><img src="http://www.mikeboring.com/wp-content/uploads/2020/08/TowerOfHanoi.jpg" alt="1" /><div className="carousel-description"><strong>Javascript Application</strong><br/><a target="_blank" href="https://shekinah999.gitlab.io/tower-of-hanoi/">View Application</a></div></>
    },
    {
      key: 6,
      content: <><img src="http://www.mikeboring.com/wp-content/uploads/2020/08/TowerOfHanoi.jpg" alt="1" /><div className="carousel-description"><strong>Javascript Application</strong><br/><a target="_blank" href="https://shekinah999.gitlab.io/tower-of-hanoi/">View Application</a></div></>
    },
    {
      key: 7,
      content: <><img src="http://www.mikeboring.com/wp-content/uploads/2020/08/TowerOfHanoi.jpg" alt="1" /><div className="carousel-description"><strong>Javascript Application</strong><br/><a target="_blank" href="https://shekinah999.gitlab.io/tower-of-hanoi/">View Application</a></div></>
    },
    {
      key: 8,
      content: <><img src="http://www.mikeboring.com/wp-content/uploads/2020/08/TowerOfHanoi.jpg" alt="1" /><div className="carousel-description"><strong>Javascript Application</strong><br/><a target="_blank" href="https://shekinah999.gitlab.io/tower-of-hanoi/">View Application</a></div></>
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
        <section className='portfolio' id="portfolioFS">
              <h1>Full Stack Portfolio</h1> 
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
            <div id="skills"></div>
            <br/><br/>
        </section>
    );
  }
}
