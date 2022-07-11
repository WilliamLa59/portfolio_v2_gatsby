import * as React from "react"
import { About } from '../components/About/About';
import { Contact } from '../components/Contact/Contact';
import { Experience } from '../components/Experience/Experience';
import { Footer } from '../components/Footer/Footer';
import { Hero } from '../components/Hero/Hero';
import { Navbar } from '../components/Navbar/Navbar';
import { Projects } from '../components/Projects/Projects';

// markup
const IndexPage = () => {
  return (
    <main>
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
