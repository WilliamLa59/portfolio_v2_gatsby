import React from 'react'
import './About.scss'
import '../../shared/Global.scss'
export const About = () => {
  return (
    <section id="about">
      <div className='about-content'>
        <h2 className='section-title'><span className='title-num'>01. </span>About Me</h2>

        <p>
          I'm an aspiring web developer with a current focus on front-end development. 
          I graduated from Seneca College with a diploma in Computer Programming. 
          I'm passionate about coding and using it to solve problems. 
          I'm eager to get my foot in the door and work alongside other passionate programmers and level up my abilities along the way.
        </p>

        <br/>
        <p>
          These are the technologies I'm mainly using:
        </p>
        <br/>
        <ul className='skills-list fontmono'>
          <li>React</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS(SASS)</li>
          <li>JavaScript</li>
        </ul>
      </div>
       
    </section>
  )
}
