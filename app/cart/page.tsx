'use client';
import React from 'react'
import Navbar from '../Components/Navbar'
import CartHeader from '../Components/CartHeader'
import CartDescription from '../Components/CartDescription';
import Footer from '../Components/Footer';

const page = () => {
  return (
    <div>
      <Navbar/>
      <CartHeader/>
      <CartDescription/>
      <Footer/>
    </div>
  )
}

export default page
