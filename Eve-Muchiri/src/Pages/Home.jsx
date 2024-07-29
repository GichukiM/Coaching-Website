// File: Pages/Home.jsx

import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutHome from '../Components/AboutHome';
import ServicesHome from '../Components/ServicesHome';
import Testimonials from '../Components/Testimonials';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import SocialLinks from '../Components/SocialLinks';

const Home = () => {
  return (
    <>
        <Topbar />
        <Navbar />
        <Hero />
        <AboutHome />
        <SocialLinks />
        <ServicesHome />
        <Testimonials />
        <Footer />
    </>
  );
}

export default Home;
