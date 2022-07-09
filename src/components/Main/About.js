import React from "react";
import './About.css'
import ScrollAnimation from 'react-animate-on-scroll';


const About = () => (
 
  <section className="about">
    <ScrollAnimation animateIn="animate__zoomIn">           
      <h1>Fullstack software and web developer.</h1>
    </ScrollAnimation>
    <ScrollAnimation animateIn="animate__fadeInUp">           
      <h5>Html, Css, Javascript, NodeJS, ExpressJS, ReactJS, VueJS, MongoDB, Redux, Python, Django, Sql, Git, LAMP, MERN, Agile Workflow<br/>SEO Specialist, GA, GMB, GSC.</h5>
    </ScrollAnimation>
  </section>
  
);

export default About;
