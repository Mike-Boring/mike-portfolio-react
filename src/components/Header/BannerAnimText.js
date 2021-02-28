import React from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import "./BannerAnimText.css"

const TEXTS = [
  "Javascript",
  "Express.js",
  "React.js",
  "Node.js",
  "Python",
  "Django",
  "Vue.js"
];

const BannerAnimText = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  
  return (
    <h1 className="large">
        {`${TEXTS[index % TEXTS.length]}`.split("").map((n, i) => (
              <ReactTextTransition
              text={n}
        springConfig={ presets.gentle }
        direction="down"
        className="anim-text"
        inline
                key={i}
                delay={i * 200}
                noOverflow
              />
            ))}
    </h1>
  );
};

export default BannerAnimText;