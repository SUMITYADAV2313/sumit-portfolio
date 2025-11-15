import React from 'react'
import './Navbar.css'
// import theme_pattern from '../assets/theme_pattern.svg'
// import logo from '../assets/logo.svg'
// import menu_open from '../assets/menu_open.svg'
// import menu_close from '../assets/menu_close.svg'

const Navbar = () => {


  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <i><h1 className='portfolio'>PORTFOLIO</h1></i>
      {/* <img className='nav-theme' src={theme_pattern} alt="" /> */}
      {/* <img src={menu_open} alt=""  className='nav-mob-open'/> */}
      <ul className="nav-menu">
        {/* <img src={menu_close} alt="" className="nav-mob-close" /> */}
    <li><a href="/">Home</a></li>
  <li><a href="#about">About Me</a></li>
  <li><a href="#services">Services</a></li>
  <li><a href="#work">Portfolio</a></li>
  <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar
