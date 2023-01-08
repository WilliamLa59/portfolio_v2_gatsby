import * as React from "react"
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Experience } from '../components/Experience/Experience';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { Navbar } from '../components/Navbar/Navbar';
import { Projects } from '../components/Projects/Projects';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


// markup
const IndexPage = () => {
  return (
    <main>
     <title>William La - Web Developer</title>
     <Navbar/>
     {/* <Hamburger/> */}
     <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
     <Footer/>
    </main>
  )
}

export default IndexPage
