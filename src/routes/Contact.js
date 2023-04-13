import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footercomp/footer'
import Heroimg2 from '../components/heroImg2/heroimg2'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="CONTACT" text="Lets have a chat" />
      <Footer />
    </div>
  )
}

export default Contact