import React from 'react'
import useSticky1 from './hooks/useSticky.js'
import Navbar from './components/Header/Navbar'
import About from './components/Main/About.js'
import Footer from './components/Footer/Footer'
import FSPortfolio from './components/Main/FSPortfolio.js'
import Counters from './components/Main/Counters.js'
import Skills from './components/Main/Skills.js'
import Education from './components/Main/Education.js'
import DPortfolio from './components/Main/DPortfolio.js'
import Testimonials from './components/Main/Testimonials.js'
import AnimatedBanner from './components/Header/Banner.js'

function App() {
    const { isSticky1, element1 } = useSticky1()
    return (
        <>
            <Navbar sticky1={isSticky1} />
            <main>
              <AnimatedBanner element1={element1} />
              <About />
              <FSPortfolio />
              <Counters />
              <Skills />
              <Education />
              <DPortfolio />
              <Testimonials />
            </main>
            <Footer />
        </>
    )
}

export default App
