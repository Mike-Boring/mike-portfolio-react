import React from "react";
import "./Skills.css"
import SkillBar from 'react-skillbars';



const Skills = () => {
  const colors = {
    "bar": "lightgrey",
    "title": {
      "text": "#fff",
      "background": "#000"
    }
  }
    
  const skills = [
    {type: "Photoshop", level: 95},
    {type: "Illustrator", level: 85},
    {type: "Figma", level: 50},
  ];
  const skills2 = [
    {type: "Html", level: 95},
    {type: "Wordpress", level: 90},
    {type: "Javascript", level: 85},
    {type: "React.js", level: 85},
    {type: "Django", level: 85},
    {type: "Css", level: 85},
    {type: "Redux", level: 75},
    {type: "View.js", level: 75},
    {type: "TypeScript", level: 65},
  ];
  const skills3 = [
    {type: "Django", level: 90},
    {type: "Python", level: 85},
    {type: "Node.js", level: 80},
    {type: "Express.js", level: 75},
    {type: "MongoDB", level: 67},
    {type: "MySQL", level: 65},
    {type: "PostgreSQL", level: 60},
  ];
  return (
  <section className="skills">
    <h1>Development Skills</h1>
    <br/>
    <div className="uniqueCounters">
        <div className="counterColumn">
          <h3>Design</h3>
          <SkillBar skills={skills} height={'10vh'} colors={colors} />
        </div>
        <div className="counterColumn">
          <h3>Frontend</h3>
          <SkillBar skills={skills2} height={'10vh'} colors={colors} />
        </div>
        <div className="counterColumn">
          <h3>Backend</h3>
          <SkillBar skills={skills3} height={'10vh'} colors={colors} />
        </div>
    </div>
  </section>
)};

export default Skills;