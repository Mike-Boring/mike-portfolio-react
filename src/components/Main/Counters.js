import React from "react";
import "./Counters.css"
import CountUp from 'react-countup';

const Counters = () => (
  <section className="counters">
    <h1>What Makes Me Unique</h1>
    <p>Real World experience.</p>
    <div className="uniqueCounters">
      <div className="counterColumn"><CountUp end={100} /></div>
      <div className="counterColumn"><CountUp end={100} /></div>
      <div className="counterColumn"><CountUp end={100} /></div>
      <div className="counterColumn"><CountUp end={100} /></div>
    </div>
  </section>
);

export default Counters;