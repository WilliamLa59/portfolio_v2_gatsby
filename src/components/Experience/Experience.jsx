import React, { useState } from 'react'

import '../../shared/Global.scss'
import './Experience.scss'
import data from './experiencedata.json'

export const Experience = () => {
  const[current, setCurrent]=useState(data[0]);
  return (
    <section id="experience">
      <div className='experience-content'>
        <h2 className='section-title exp-title'><span className='title-num'>02. </span>Where I've Worked</h2>
        <div className='exp-window'>
          
          <div className='exp-nav'>
            {data.map((job,x)=>{
              return(
                <ol key={x}>
                  <li className="fontmono" onClick={()=> setCurrent(job)} style={current === job ? {borderLeft: "4px solid #4D7EA8", paddingLeft: "4px", color:"#5c80bc"} : {paddingLeft: "8px"}}>{job.company}</li>
                </ol>
              )
            })}
          </div>

          <div className='exp-content'>
            <h3 className='exp-role'>{current.role} <span className='exp-company'>@ {current.company}</span></h3>
            <p className='exp-date'>{current.date}</p>
            {current.desc.map((desc, y)=>{
              return(
                <ol key={y}>
                  <li className='exp-desc'>{desc}</li>
                </ol>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
