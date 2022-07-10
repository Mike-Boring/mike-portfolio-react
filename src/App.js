import React from 'react'
import useSticky1 from './hooks/useSticky.js'
import Navbar from './components/Header/Navbar'
import About from './components/Main/About.js'
import Footer from './components/Footer/Footer'
import FSPortfolio from './components/Main/FSPortfolio.js'
import Skills from './components/Main/Skills.js'
import Education from './components/Main/Education.js'
import DPortfolio from './components/Main/DPortfolio.js'
import Testimonials from './components/Main/Testimonials.js'
import AnimatedBanner from './components/Header/Banner.js'
import Contact from './components/Main/Contact.js'


function detec() { 
    if (navigator.userAgent.match(/Android/i) 
        || navigator.userAgent.match(/webOS/i) 
        || navigator.userAgent.match(/iPhone/i)  
        || navigator.userAgent.match(/iPad/i)  
        || navigator.userAgent.match(/iPod/i) 
        || navigator.userAgent.match(/BlackBerry/i) 
        || navigator.userAgent.match(/Windows Phone/i)) { 
        window.location = "https://mike-boring.github.io/mike-portfolio-react/" 
    } else { 
        return
    } 
}

function App() {
    detec()
    const { isSticky1, element1 } = useSticky1()
    return (
        <>
            <Navbar sticky1={isSticky1} />
            <main className="main-wrapper">
              <AnimatedBanner element1={element1} />
              <About />
              <FSPortfolio />
              <Skills />
              <Education />
              <DPortfolio />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
