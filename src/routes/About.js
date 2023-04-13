import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footercomp/footer'
import Heroimg2 from '../components/heroImg2/heroimg2'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="ABOUT" text="Im a friendly Front End Developer" />
      <Footer />
    </div>
  )
}

export default About