import React from 'react'
import './Hamburger.scss'
export const Hamburger = () => {
  return (
    <label labelFor="checkbox" className='hamburger'>
        <input type="checkbox" id="checkbox"/>
        <span className='line line--top'></span>
        <span className='line line--mid'></span>
        <span className='line line--bot'></span>
    </label>
  )
}
