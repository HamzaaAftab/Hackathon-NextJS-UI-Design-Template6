'use client';
import React from 'react'
import Navbar from '../Components/Navbar'
import CheckOutHeader from '../Components/CheckOutHeader'
import CheckOutDescription from '../Components/CheckOutDescription';
import FeaturesSection from '../Components/FeaturesSection';
import Footer from '../Components/Footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <CheckOutHeader/>
      <CheckOutDescription/>
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}

export default page
