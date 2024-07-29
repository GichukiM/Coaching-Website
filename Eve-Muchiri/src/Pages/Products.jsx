import React from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import ProductsHero from '../Components/ProductsHero'
import ProductShop from '../Components/ProductShop'

function Products() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ProductsHero />
      <ProductShop />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Products