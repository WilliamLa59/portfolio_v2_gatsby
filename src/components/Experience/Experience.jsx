import React, { useState } from 'react'

import '../../shared/Global.scss'
import './Experience.scss'
import data from './experiencedata.json'

export const Experience = () => {
  const[current, setCurrent]=useState(data[0]);
  return (
    <section id="experience">
      <div className='experience-content'>
        <h2 className='section-title exp-title'>02. Where I've Worked</h2>
        <div className='exp-window'>
          
          <div className='exp-nav'>
            {data.map((job,x)=>{
              return(
                <ol key={x}>
                  <li onClick={()=> setCurrent(job)} style={current === job ? {borderLeft: "4px solid black"} : {paddingLeft: "4px"}}>{job.company}</li>
                </ol>
              )
            })}
          </div>

          <div className='exp-content'>
            <h3>{current.role} @ {current.company}</h3>
            <p>{current.date}</p>
            {current.desc.map((desc, y)=>{
              return(
                <ol key={y}>
                  <li>{desc}</li>
                </ol>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
