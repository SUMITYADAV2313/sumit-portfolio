import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import MyWork from './Components/MyWork'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Resume from './Components/Resume'



const App = () => {
  return (
    <div>
     <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Resume/>
      <Footer/>
     
    </div>
  )
}

export default App
