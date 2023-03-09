import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact