import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import AboutContain from '../components/AboutContain'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT." text="I am a Front-end Developer." />
      <AboutContain />
      <Footer />
    </div>
  )
}

export default About