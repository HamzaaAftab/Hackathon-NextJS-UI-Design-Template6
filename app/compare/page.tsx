'use client';
import React from 'react'
import Navbar from '../Components/Navbar'
import CompareHeader from '../Components/CompareHeader';
import ComparePageProducts from '../Components/ComparePageProducts';
import CompareDescription from '../Components/CompareDescription';
import Footer from '../Components/Footer';
import FeaturesSection from '../Components/FeaturesSection';

const page = () => {
  return (
    <div >
      <Navbar/>
      <CompareHeader/>
      <ComparePageProducts/>
      <CompareDescription/>
      <FeaturesSection/>
      <Footer/>
    </div>
  )
}

export default page
