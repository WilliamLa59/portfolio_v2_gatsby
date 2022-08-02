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
        
        <h3>Hi There! I'm </h3>
        <h1><span className='txt-highlight'>William</span> La</h1>
        <p>An aspiring Web Developer with a passion for learning and creating new things.</p>
        <div className='hero-links'>
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <button className='fontsans'>Resume</button>
          </a>
          <a className="mid-link linkedin-link" href="https://www.linkedin.com/in/williamla59/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn-link"><FontAwesomeIcon size="xl" className="linkedin" icon={faLinkedin}/></a>
          <a className="github-link"href="https://github.com/WilliamLa59" target="_blank" rel="noopener noreferrer" aria-label="Github-link"><FontAwesomeIcon size="xl" icon={faGithub}/></a>
        </div>
      </div>
      
    </section>
    
  )
}

