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
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/10/12a.jpg" alt="1" />
          <div className="carousel-description">
            <strong>Django Python Front End and Back End Application</strong>
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
        <img src="http://www.mikeboring.com/wp-content/uploads/2021/01/VueSample.jpg" alt="2" />
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
          <img src="http://www.mikeboring.com/wp-content/uploads/2021/01/shoppies.jpg" alt="3" />
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
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/10/13a.jpg" alt="4" />
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
      )
    },
    {
      key: 5,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/jeopardy.jpg" alt="5" />
          <div className="carousel-description">
            <strong>Javascript Application, REST API</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/jeopardy-lab/">
              View Application
            </a>
          </div>
        </>
      )
    },
    {
      key: 6,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/5a.jpg" alt="6" />
          <div className="carousel-description">
            <strong>LAMP Stack - CMS - MLS Search</strong>
            <br/>
            <a target="_blank" href="http://raynorrealty719.com/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 7,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/qwitters.jpg" alt="7" />
          <div className="carousel-description">
            <strong>REACT, REDUX Application</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/assessment---kwitter-frontend/">
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
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/1a.jpg" alt="8" />
          <div className="carousel-description">
            <strong>LAMP Stack - CMS - Event Calendar</strong>
            <br/>
            <a target="_blank" href="https://bendiscompany.com/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 9,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/TodosList.jpg" alt="9" />
          <div className="carousel-description">
            <strong>REACT, REDUX Application</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/assessment-todo-app-part-3/Todos">
              View Application
            </a>
          </div>
        </>
      )},
    {
      key: 10,
      content: (
      <>
        <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/2a.jpg" alt="10" />
        <div className="carousel-description">
          <strong>LAMP Stack - CMS - Event Calendar - Prayer Wall - Ecommerce</strong>
          <br/>
          <a target="_blank" href="http://remnantseedgospelministries.org/">
            View Website
          </a>
        </div>
      </>
      )},
    {
      key: 11,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/ConnectFour.jpg" alt="11" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/connect-four/">
              View Application
            </a>
          </div>
        </>
      )},
    {
      key: 12,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/RockPaperScissors.jpg" alt="12" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/game-of-chance/">
              View Application
            </a>
          </div>
        </>
      )
    },
    {
      key: 13,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/4a.jpg" alt="13" />
          <div className="carousel-description">
            <strong>LAMP Stack - CMS - Ecommerce - Reservations</strong>
            <br/>
            <a target="_blank" href="https://greywolfresort.com/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 14,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/Maze.jpg" alt="14" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/maze/">
              View Application
            </a>
          </div>
        </>
      )
    },
    {
      key: 15,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2020/08/TowerOfHanoi.jpg" alt="15" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" href="https://shekinah999.gitlab.io/tower-of-hanoi/">
              View Application
            </a>
          </div>
        </>
      )
    },
    {
      key: 16,
      content: (
        <>
          <img src="http://www.mikeboring.com/wp-content/uploads/2021/02/mbp-react.jpg" alt="16" />
          <div className="carousel-description">
            <strong>REACT Application</strong>
            <br/>
            <a target="_blank" href="https://github.com/Mike-Boring/mike-portfolio-react">
              View Repo
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
        <section className='portfolio' id="portfolioFS">
              <h1>Full Stack Portfolio</h1>
              <h5>Django, React.js, Node.js, Javascript and Vue.js Applications and Small Business Websites.</h5> 
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
            <br/><br/>
            <div id="skills"></div>
        </section>
    );
  }
}
