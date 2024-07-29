import React from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import ServicesHero from '../Components/ServicesHero'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Servicespage from '../Components/Servicespage'

function Services() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ServicesHero />
      <Servicespage />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Services