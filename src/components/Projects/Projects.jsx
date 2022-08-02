import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
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
const oldProjects = data.slice(3, 9);
const oldProjects2 = data.slice(9, data.length)

  return (
    <section id="projects">
        <div className='projects-content'>
        <h2 className='section-title'><span className='title-num'>03. </span>Things I've Built</h2>
        <p className='sub-txt'>All my projects are hosted on Heroku, which may take some time to fully load.</p>
        
        
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
                            <p className='project-tech fontmono'>{project.tech}</p>
                            <a href={project.repo} className="github-link" target="_blank" ><FontAwesomeIcon size="xl" icon={faGithub} /></a>
                            <a href={project.live} className="live-link" target="_blank"><FontAwesomeIcon size="xl" icon={faArrowUpRightFromSquare}/></a>
                        </div>
                    </div>
                </div>
            )
        })}


        <p className='sub-txt2'>My Other Projects</p>
        <div className='old-projects'>
            {oldProjects.map((project, x)=>{
                return(
                    <div key={x} className='project-card'>
                        
                        <div className='project-card-title'>
                            <FontAwesomeIcon size="2xl" icon={faFolder}/>
                            <a href={project.repo} className="github-link" target="_blank" ><FontAwesomeIcon size="xl" icon={faGithub} /></a>
                        </div>
                        <h3 className='project-title'>{project.title}</h3>
                        <p>{project.desc}</p>
                        <p className='fontmono project-tech'>{project.tech}</p>
                        
                    </div>
                )
            })}
        </div>

        <div className='show-btn'>
            <button className="fontsans" style={showMore? {display: "none"}: {display: "inline"}} onClick={()=>{setShowMore(true);}}>Show More</button>
        </div>
        
    
        <section style={showMore? {display: "block"} : {display: "none"}}>
            <div className='old-projects'>
                {oldProjects2.map((project, x)=>{
                    return(
                        <div key={x} className='project-card'>
                            
                            <div className='project-card-title'>
                                <FontAwesomeIcon size="2xl" icon={faFolder}/>
                                <a href={project.repo} className="github-link" target="_blank" ><FontAwesomeIcon size="xl" icon={faGithub} /></a>
                            </div>
                            <h3 className='project-title'>{project.title}</h3>
                            <p>{project.desc}</p>
                            <p className='fontmono project-tech'>{project.tech}</p>
                            
                        </div>
                    )
                })}
            </div>
            <div className='show-btn'>
                <button className="fontsans" onClick={()=>{setShowMore(false);}}>Show Less</button>
            </div>
           
        </section>

        </div>
        
        
        
    </section>

    
  )
}
