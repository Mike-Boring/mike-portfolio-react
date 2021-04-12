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
    {type: "Photoshop", level: 75},
    {type: "Illustrator", level: 65},
    {type: "Figma", level: 50},
  ];
  const skills2 = [
    {type: "Html", level: 90},
    {type: "Wordpress", level: 80},
    {type: "Javascript", level: 65},
    {type: "React.js", level: 60},
    {type: "Django", level: 60},
    {type: "Css", level: 75},
    {type: "Redux", level: 60},
    {type: "View.js", level: 50},
    {type: "TypeScript", level: 50},
  ];
  const skills3 = [
    {type: "Django", level: 60},
    {type: "Python", level: 60},
    {type: "Node.js", level: 55},
    {type: "Express.js", level: 50},
    {type: "MongoDB", level: 50},
    {type: "MySQL", level: 50},
    {type: "PostgreSQL", level: 50},
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