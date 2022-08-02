import React from 'react'
import './Contact.scss'
import '../../shared/Global.scss'
export const Contact = () => {
  return (
    <section id="contact">
        <div className='contact-content'>
          <h2 className='section-title'><span className='title-num'>04. </span>What's Next?</h2>
          <h1>Get In Touch</h1>
          <p>As of right now Im currently looking for a place to apply and develop my skills, and am intrested in any new opportunites. Drop an email and I'll get back to you as soon as possible!</p>
          <a href="mailto: william.la59@gmail.com"><button className='fontsans'>Say Hello!</button></a>
        </div>
    </section>
  )
}
