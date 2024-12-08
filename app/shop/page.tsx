'use client';
import React from 'react'
import Navbar from '../Components/Navbar'
import ShopHeader from '../Components/ShopHeader';
import ShopProducts from '../Components/ShopProducts';
import FeaturesSection from '../Components/FeaturesSection';
import Footer from '../Components/Footer';

const page = () => {
  return (
    <div >
        <Navbar/>
        <ShopHeader/>
        <ShopProducts/>
        <FeaturesSection/>
        <Footer/>
    </div>
  )
}

export default page     