'use client';
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Range from "./Components/Range";
import RoomSlider from "./Components/RoomSlider";

export default function Home() {
  return (
   <div className=" " >
    <Navbar/>
    <HeroSection/>
    <Range/>
    <Products/>
    <RoomSlider/>
    <Gallery/>
    <Footer/>
   </div>
  );
}
