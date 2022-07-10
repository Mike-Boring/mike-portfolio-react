import React from 'react'
import './Contact.css'
import { Button } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import image1 from "../../assets/images/linknedin-block.jpg"
import image2 from "../../assets/images/gitlab-block.jpg"
import image3 from "../../assets/images/github.jpg"

const Contact = () => {
    return (
        <section className='contact'>
            <h1>Contact Me!</h1>
            <br/>
            <h5>Shoot me an email or check out my resume below.</h5>
            <br/>
            <div className="uniqueContact">
            <div className="contactColumn">
                
                <a href="mailto:shekinah999@msn.com">
                    <Button color="none" type="button" className="btn btn-outline-light">EMAIL ME</Button>
                </a>  
                
            </div>
            <div className="contactColumn">
                
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1j0Qfw8HqQMLHuwhmhkaS3VHSRKWp8AGr/view?usp=sharing">
                    <Button color="none" type="button" className="btn btn-outline-light">VIEW RESUME</Button>
                </a>
                
            </div>
            </div>
            <div className="gitLinks">
                
                <a rel="noreferrer" href="https://www.linkedin.com/in/mike-boring-46579b195/" target="_blank"><img className="socialLink" src={image1} alt="1" /></a>   <a href="https://gitlab.com/Shekinah999" rel="noreferrer" target="_blank"><img className="socialLink" src={image2} alt="2" /></a>   <a href="https://github.com/Mike-Boring" rel="noreferrer" target="_blank"><img className="socialLink" src={image3} alt=""/></a>
                
            </div>
        </section>
    )
};

export default Contact