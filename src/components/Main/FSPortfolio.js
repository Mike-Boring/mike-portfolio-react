import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Portfolio.css"
import ScrollAnimation from 'react-animate-on-scroll';
import image1 from "../../assets/images/portfolio-fs/12a.jpg";
import image2 from "../../assets/images/portfolio-fs/VueSample.jpg";
import image3 from "../../assets/images/portfolio-fs/shoppies.jpg";
import image4 from "../../assets/images/portfolio-fs/13a.jpg";
import image5 from "../../assets/images/portfolio-fs/jeopardy.jpg";
import image6 from "../../assets/images/portfolio-fs/heartland.jpg";
import image7 from "../../assets/images/portfolio-fs/qwitters.jpg";
import image8 from "../../assets/images/portfolio-fs/1a.jpg";
import image9 from "../../assets/images/portfolio-fs/TodosList.jpg";
import image10 from "../../assets/images/portfolio-fs/2a.jpg";
import image11 from "../../assets/images/portfolio-fs/ConnectFour.jpg";
import image12 from "../../assets/images/portfolio-fs/RockPaperScissors.jpg";
import image13 from "../../assets/images/portfolio-fs/4a.jpg";
import image14 from "../../assets/images/portfolio-fs/Maze.jpg";
import image15 from "../../assets/images/portfolio-fs/TowerOfHanoi.jpg";
import image16 from "../../assets/images/portfolio-fs/mbp-react.jpg";
import image17 from "../../assets/images/portfolio-fs/11a.jpg";
import image18 from "../../assets/images/portfolio-fs/lpc.jpg";
import image19 from "../../assets/images/portfolio-fs/gcs.jpg";
import image20 from "../../assets/images/portfolio-fs/personal-prop.jpg";
import image21 from "../../assets/images/portfolio-fs/kearley.jpg";

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
            <strong>Django Python Front End and Back End Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mike-Boring/micro-brew-for-you-capstone">
              View Github Repo
            </a> - <a target="_blank" rel="noreferrer" href="http://shekinah99913.pythonanywhere.com/">
              View Deployed App
            </a>
          </div>
        </>
      )},
    {
      key: 2,
      content: (
      <>
        <img src={image2} alt="2" />
        <div className="carousel-description">
          <strong>Vue.js Sample Survey Component</strong>
          <br/>
          <a target="_blank" rel="noreferrer" href="https://github.com/Mike-Boring/vue-developer-sample">
            View Github Repo
          </a> - <a target="_blank" rel="noreferrer" href="https://mike-boring.github.io/vue-developer-sample/">
            View Deployed Application
          </a>
        </div>
      </>
      )},
    {
      key: 3,
      content: (
        <>
          <img src={image3} alt="3" />
          <div className="carousel-description">
            <strong>REACT.js Application, REST API</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mike-Boring/shoppies">
              View Github Repo
            </a> - <a target="_blank" rel="noreferrer" href="https://mike-boring.github.io/shoppies/">
              View Deployed Application
            </a>
          </div>
        </>
      )},
    {
      key: 4,
      content: (
        <>
          <img src={image4} alt="4" />
          <div className="carousel-description">
            <strong>React Front End and Django Rest Framework Back End Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mike-Boring/ghostpost_frontend">
              View Frontend Repo
            </a> - 
            <a target="_blank" rel="noreferrer" href="https://github.com/Mike-Boring/ghostpost_backend">
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
          <img src={image5} alt="5" />
          <div className="carousel-description">
            <strong>React/Redux Application, REST API</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://gitlab.com/Shekinah999/jeopardy-lab">
              View Gitlab Repo
            </a> - 
            <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/jeopardy-lab/">
              View Deployed Application
            </a>
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
            <strong>Wordpress CMS</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://heartlandcannabisproducts.com/">
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
          <img src={image7} alt="7" />
          <div className="carousel-description">
            <strong>React/Redux Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://gitlab.com/Shekinah999/assessment---kwitter-frontend">
              View Gitlab Repo
            </a> - <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/assessment---kwitter-frontend/">
              View Deployed Application
            </a>
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
            <strong>Wordpress CMS - Event Calendar</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://bendiscompany.com/">
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
          <img src={image9} alt="9" />
          <div className="carousel-description">
            <strong>REACT, REDUX Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://gitlab.com/Shekinah999/assessment-todo-app-part-3">
              View Gitlab Repo
            </a> - <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/assessment-todo-app-part-3/Todos">
              View Deployed Application
            </a>
          </div>
        </>
      )},
    {
      key: 10,
      content: (
      <>
        <img src={image10} alt="10" />
        <div className="carousel-description">
          <strong>Wordpress CMS - Event Calendar - Prayer Wall - Ecommerce</strong>
          <br/>
          <a target="_blank" rel="noreferrer" href="http://remnantseedgospelministries.org/">
            View Website
          </a>
        </div>
      </>
      )},
    {
      key: 11,
      content: (
        <>
          <img src={image11} alt="11" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/connect-four/">
              View Application
            </a>
          </div>
        </>
      )},
    {
      key: 12,
      content: (
        <>
          <img src={image12} alt="12" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/game-of-chance/">
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
          <img src={image13} alt="13" />
          <div className="carousel-description">
            <strong>LAMP Stack - CMS - Ecommerce - Reservations</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://greywolfresort.com/">
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
          <img src={image14} alt="14" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/maze/">
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
          <img src={image15} alt="15" />
          <div className="carousel-description">
            <strong>Javascript Application</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://shekinah999.gitlab.io/tower-of-hanoi/">
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
          <img src={image16} alt="16" />
          <div className="carousel-description">
            <strong>REACT Application - The one you are on currently.</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mike-Boring/mike-portfolio-react">
              View Repo
            </a>
          </div>
        </>
      )
    },
    {
      key: 17,
      content: (
        <>
          <img src={image17} alt="17" />
          <div className="carousel-description">
            <strong>Wordpress CMS - Ecommerce</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://precisionextracts.com/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 18,
      content: (
        <>
          <img src={image18} alt="18" />
          <div className="carousel-description">
            <strong>Wordpress CMS - MLS Search Integration</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://legacypropertiesofcolorado.com/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 19,
      content: (
        <>
          <img src={image19} alt="19" />
          <div className="carousel-description">
            <strong>Wordpress CMS</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://gcscontractingservices.com/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 20,
      content: (
        <>
          <img src={image20} alt="20" />
          <div className="carousel-description">
            <strong>Wordpress CMS</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://personalpropertyappraisers.us/">
              View Website
            </a>
          </div>
        </>
      )
    },
    {
      key: 21,
      content: (
        <>
          <img src={image21} alt="21" />
          <div className="carousel-description">
            <strong>Wordpress CMS - Featured Properties</strong>
            <br/>
            <a target="_blank" rel="noreferrer" href="https://johnkearley.realtor/">
              View Website
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
        <section className='portfolioFS' id="portfolioFS">
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
