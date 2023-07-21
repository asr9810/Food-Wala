import React from 'react'
import logo from '../image/logo.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about-section'>
      <div className="about-container">
        <img src={logo} alt="" />
        <h2>Food Wala</h2>
        <p>Co-founder: Amit Singh Rawat</p>
        <span>Establish in 21-07-2023</span>
        
        <Link to={'/'}><button >SEE RESTAURANTS NEAR YOU</button></Link>
      </div>
      
    </div>
  )
}

export default About
