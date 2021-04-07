import React from "react";
import "./Skills.css"
import SkillBar from 'react-skillbars';

const Skills = () => {
  const colors = {
    "bar": "#abb0b5",
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
    {type: "Html", level: 90},
    {type: "Wordpress", level: 80},
    {type: "Javascript", level: 75},
    {type: "React.js", level: 75},
    {type: "Django", level: 75},
    {type: "Css", level: 75},
    {type: "Redux", level: 75},
    {type: "View.js", level: 50},
    {type: "TypeScript", level: 50},
  ];
  const skills3 = [
    {type: "Django", level: 75},
    {type: "Python", level: 70},
    {type: "Node.js", level: 70},
    {type: "Express.js", level: 70},
    {type: "MongoDB", level: 65},
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