import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import "./Hero.scss" 
import '../../shared/Global.scss'
import resume from '../../assets/WilliamLaResume.pdf'


export const Hero = () => {
  return (
    <section id="hero">
      
      <div className='hero-content'>
        
        <h3>Hi There!</h3>
        <h1>I'm William La.</h1>
        <p>An aspiring Web Developer with a passion for learning and creating new things.</p>
        <div className='hero-links'>
          <a href={resume} target="_blank" without rel="noopener noreferrer">
            <button>Resume</button>
          </a>
          <a className="mid-link linkedin" href="https://www.linkedin.com/in/williamla59/"><FontAwesomeIcon size="xl" classname="linkedin" icon={faLinkedin}/></a>
          <a className="github"href="https://github.com/WilliamLa59"><FontAwesomeIcon size="xl" icon={faGithub}/></a>
        </div>
      </div>
      
    </section>
    
  )
}

