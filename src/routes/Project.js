import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footercomp/footer'
import Heroimg2 from '../components/heroImg2/heroimg2'
import PricingCard from '../components/pricingCard/pricingcard'
import Cardstyle from '../components/cardStyle/cardstyle'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading="PROJECT" text="Some of my most Recent works" />
      <Cardstyle />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project