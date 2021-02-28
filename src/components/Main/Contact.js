import React from 'react'
import './Contact.css'
import { Button } from 'reactstrap';


const Contact = () => {
    return (
    
            <section className='contact'>
                <h1>Contact Me!</h1>
                <br/>
                <h5>Shoot me an email or check out my resume below.</h5>
                <br/>
                <div className="uniqueContact">
                    <div className="contactColumn">
                        <a href="">
                            <Button color="none" type="button" className="btn btn-outline-light">EMAIL ME</Button>
                        </a>  
                    </div>
                    <div className="contactColumn">
                        <a href="">
                            <Button color="none" type="button" className="btn btn-outline-light">VIEW RESUME</Button>
                        </a>
                    </div>
                </div>
                <div className="gitLinks">
                <a href="https://gitlab.com/Shekinah999" target="_blank"><img className="socialLink" src="http://www.mikeboring.com/wp-content/uploads/2020/08/gitlab-block.jpg" alt="" width="100" height="100" /></a>  <a href="https://github.com/Mike-Boring" target="_blank"><img className="socialLink" src="http://www.mikeboring.com/wp-content/uploads/2020/08/github.jpg" alt="" width="100" height="100" /></a>
                </div>
            </section>
        
    )
};

export default Contact