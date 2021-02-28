import React from "react";
import "./Testimonials.css"
import {FaStar} from 'react-icons/fa';
import ScrollAnimation from "react-animate-on-scroll";

const Testimonials = () => (
  <section className="testimonials">
    <h1>What They Say Behind My Back...</h1>
    <br/>
    <ScrollAnimation animateIn="animate__fadeIn">  
      <div className="uniqueTestimonials">
          <div className="testimonialsColumn">
            <h3>Ashley Hunter PHD</h3>
            <h6>Hunter PHD</h6>
            <p>
              "I think the site looks absolutely wonderful - Mike, you did an outstanding job - we work well together!!!! You've helped me get a new start - having a website gives me freedom. Again, thank you so much Mike."
            </p>
            <FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/>
          </div>
          <div className="testimonialsColumn">
            <h3>Andrew Tullberg</h3>
            <h6>Sworn Shield Cane Corsos</h6>
            <p>
              "This is the best team of Web Builders and Designers that I have worked with to date!!! Mike has built an excellent and fully operational Web Site for my Company. I implore you to seek him out if you want a quality built site that services your independent needs and makes it pleasing to the eye while incorporating everything you asked them to do!!! Sincerely Pleased and then some."
            </p>
            <FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/>
          </div>
          <div className="testimonialsColumn">
            <h3>Val Tordjman</h3>
            <h6>Calypso Designs</h6>
            <p>
              "My experience has been beyond extraordinary. I have called on Mike with urgency and desperation requests.... After starting out with two previous so-called "Web Designers" from Craigs list, and having been literally ripped off, I was very prudent and skeptical to say the least... Mike felt so bad for me, he agreed to take on my project at a discounted fee, and delivered as promised a web site which I am very proud of! His professionalism and care was so comforting and easy to work with. He is very knowledgeable and courteous. I will highly recommend Mike Boring with confidence to anyone! Thank you Mike for a job well done!!"
            </p>
            <FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/><FaStar className="star" style={{height: 40}}/>
          </div>
      </div>
    </ScrollAnimation>
    <div id="contact"></div>
  </section>
);

export default Testimonials;