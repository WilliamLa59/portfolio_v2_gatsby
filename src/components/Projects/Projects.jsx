import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import data from "./projectdata.json"

// import prepr from "../../assets/prepr.png";
// import xenon from "../../assets/xenon.png";
// import blogr from "../../assets/blogr.png";

import '../../shared/Global.scss'
import './Projects.scss'

export const Projects = () => {
const [showMore, setShowMore] = useState(false);
const recentProjects = data.slice(0, 3);
const oldProjects = data.slice(3, data.length);

  return (
    <section id="projects">
        <div className='projects-content'>
        <h2 className='section-title'>03. Things I've Built</h2>

        {recentProjects.map((project, x)=>{
            return(
                <div key={x} className="highlight-projects">
                    <div className='project-img'>
                        <img src={project.pic} alt="" />
                    </div>
                    <div className='project-content-window'>
                        <div className='project-content'>
                            <h3 className='project-title'>{project.title}</h3>
                            <p className='project-desc'>{project.desc}</p>
                            <p className='project-tech'>{project.tech}</p>
                            <a href={project.repo} target="_blank" ><FontAwesomeIcon icon={faGithub} /></a>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className='show-btn'>
            <button style={showMore? {display: "none"}: {display: "inline"}} onClick={()=>{setShowMore(true);}}>Show More</button>
        </div>
        
    
        <section style={showMore? {display: "block"} : {display: "none"}}>
            {oldProjects.map((project, x)=>{
                return(
                    <div key={x}>
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <p>{project.tech}</p>
                        <a href={project.repo} target="_blank" ><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    
                )
            })}
            <div className='show-btn'>
                <button onClick={()=>{setShowMore(false);}}>Show Less</button>
            </div>
           
        </section>

        </div>
        
        
        
    </section>

    
  )
}
