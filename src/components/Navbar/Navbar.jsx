import React, { useState } from 'react'
import "./Navbar.scss"
import '../../shared/Global.scss'
import { useEffect } from 'react'


export const Navbar = ({ children }) => {
  const [ show, setShow] = useState(true);
  const [ lastScrollY, setLastScrollY] = useState(0);
  const [ isMobile, setIsMobile] = useState(false);

  const controlNav = () => {
    if (window.scrollY > lastScrollY){
      setShow(false);
    }else{
      setShow(true);
    }
    setLastScrollY(window.scrollY); 
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNav)
    return() => {
      window.removeEventListener('scroll', controlNav)
    }
  },[lastScrollY])

  return (
    <header id='navbar' style={show? {top: "0"}: {top: "-80px"}}>
      <nav>

        <div className='logo'>
          <a href="/" className='fontmono'>William La</a>
        </div>

        <div className='nav-links fontmono'>
          
          <ol style={isMobile ? {right: "0px"} : {right: "-100vh"}}>
            <li className='top-link'><a href="#about" onClick={() => setIsMobile(!isMobile)}><span>01. </span>About</a></li>
            <li><a href="#experience" onClick={() => setIsMobile(!isMobile)}><span className='title-num'>02. </span>Experience</a></li>
            <li><a href="#projects" onClick={() => setIsMobile(!isMobile)}><span className='title-num'>03. </span>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMobile(!isMobile)}><span className='title-num'>04. </span>Contact</a></li>
          </ol>

          <div className='burger-icon'>
            <label labelFor="checkbox" className='hamburger'>
              <input type="checkbox" id="checkbox" onClick={()=> setIsMobile(!isMobile)}/>
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
