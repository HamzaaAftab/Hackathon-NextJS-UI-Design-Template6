'use client'
import ContactForm from "../Components/ContactForm"
import ContactHeader from "../Components/ContactHeader"
import FeaturesSection from "../Components/FeaturesSection"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const page = () => {
  return (
    <div>
        <Navbar/>
        <ContactHeader/>
        <ContactForm/>
        <FeaturesSection/>
        <Footer/>
    </div>
  )
}

export default page
