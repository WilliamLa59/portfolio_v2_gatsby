import React, { useState } from 'react'
import "./Navbar.scss"
import '../../shared/Global.scss'
import { Hamburger } from '../BurgerIcon/Hamburger'


export const Navbar = ({ children }) => {
  const [ isShowing, setIsShowing] = useState(false);

  return (
    <header id="navbar">
      <nav>

        <div className='logo'>
          <a href="/">William La</a>
        </div>

        <div className='nav-links'>
          <ol style={isShowing ? {right: "0px"} : {right: "-100vh"}}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ol>
          <div className='burger-icon'>
            <label labelFor="checkbox" className='hamburger'>
              <input type="checkbox" id="checkbox" onClick={()=> setIsShowing(!isShowing)}/>
              <span className='line line--top'></span>
              <span className='line line--mid'></span>
              <span className='line line--bot'></span>
            </label>
          </div>
          
        </div>
        

      </nav>
    </header>
  )
}
