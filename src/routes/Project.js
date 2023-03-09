import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECTS." text="Some of my most recent work" />
      <Work />
      <Footer />
    </div>
  )
}

export default Project