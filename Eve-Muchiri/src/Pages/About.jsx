import React from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import AboutHero from '../Components/AboutHero'
import KnowEve from '../Components/KnowEve'
import Funfacts from '../Components/Funfacts'

function About() {
  return (
    <>
        <Topbar />
        <Navbar />
        <AboutHero />
        <KnowEve />
        <Funfacts />
        <Footer />
    </>
  )
}

export default About