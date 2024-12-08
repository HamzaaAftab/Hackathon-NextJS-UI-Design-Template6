'use client'
import React from 'react'
import Navbar from '../Components/Navbar'
import FeaturesSection from '../Components/FeaturesSection'
import Footer from '../Components/Footer'
import BlogSection from '../Components/BlogSection'
import BlogHeader from '../Components/BlogHeader'

const page = () => {
  return (
    <div>
      <Navbar/>
      <BlogHeader/>
      <BlogSection/>
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}

export default page
