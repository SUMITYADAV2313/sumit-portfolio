import React from 'react'
import './Hero.css'
import profile_img from '../assets/profile_img.svg'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'M Sumit Yadav, </span>FullStack developer based in India.</h1>
      <p>I am a FullStack developer from India, I have  experience in multiple companies like TCS. </p>
      <div className="hero-action">
        <div className="hero-connect">Connect with Me</div>
        {/* <div className="hero-resume">My Resume</div> */}
      </div>
    </div>
  )
}

export default Hero
