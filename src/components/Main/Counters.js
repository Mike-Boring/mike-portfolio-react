import React from "react";
import "./Counters.css"
import CountUp from 'react-countup';
import ScrollAnimation from 'react-animate-on-scroll';

const Counters = () => (
  <section className="counters">
    <h1>What Makes Me Unique</h1>
    <p>Real World experience.</p>
    <ScrollAnimation animateIn="animate__fadeInUp">           
      <div className="uniqueCounters">
        <div className="counterColumn"><CountUp delay={5} end={100} /></div>
        <div className="counterColumn"><CountUp delay={5} end={100} /></div>
        <div className="counterColumn"><CountUp delay={5} end={100} /></div>
        <div className="counterColumn"><CountUp delay={5} end={100} /></div>
      </div>
    </ScrollAnimation>
  </section>
);

export default Counters;