'use client'
import Navbar from '@/app/Components/Navbar'
import ProductRoute from '@/app/Components/ProductRoute'
import RouteDescription from '../Components/RouteDescription'
import React from 'react'
import RouteProducts from '../Components/RouteProducts'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <ProductRoute/>
      <RouteDescription/>
      <RouteProducts/>
      <Footer/>
    </div>

  )
}

export default page
