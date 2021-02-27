import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import "./Portfolio.css"


export default class FSPortfolio extends Component {
  state = {
    goToSlide: 0,
    showNavigation: true
  };

  slides = [
    {
        key: 1,
        content: <><img src="https://picsum.photos/800/800/?random" alt="1" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 2,
        content: <><img src="https://picsum.photos/800/800/?random" alt="2" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 3,
        content: <><img src="https://picsum.photos/600/800/?random" alt="3" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 4,
        content: <><img src="https://picsum.photos/800/500/?random" alt="4" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 5,
        content: <><img src="https://picsum.photos/800/800/?random" alt="5" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 6,
        content: <><img src="https://picsum.photos/500/800/?random" alt="6" /><br/><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 7,
        content: <><img src="https://picsum.photos/800/600/?random" alt="7" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
      },
      {
        key: 8,
        content: <><img src="https://picsum.photos/800/800/?random" alt="8" /><div className="carousel-description">React and django back end.<br/><a href="http://google.com">View Repo</a></div></>
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
            <h1>Full Stack Portfolio</h1> 
            <br/><br/>
            <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
                <Carousel
                slides={this.slides}
                goToSlide={this.state.goToSlide}
                showNavigation={this.state.showNavigation}
                />
            </div>
        </section>
    );
  }
}
