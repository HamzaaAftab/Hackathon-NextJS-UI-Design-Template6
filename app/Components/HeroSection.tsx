import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="w-full h-[90vh] bg-cover object-fill bg-center flex relative items-center justify-center"
      style={{
        backgroundImage: `url('/hero1.png')`, // Replace with your preferred high-quality furniture background
        objectFit: "cover",
      }}
    >
      <div className="bg-[#FFF3E3] sm:absolute space-y-3 sm:right-24  bg-opacity-80 rounded-lg p-6 md:p-10 sm:max-w-[42%] md:max-w-[50%] lg:max-w-[40%] ">
        <p className="text-sm text-gray-700 font-medium uppercase">New Arrival</p>
        <h1 className="text-2xl md:text-5xl font-bold text-[#B88E2F] mt-2">
          Discover Our New Collection
        </h1>
        <p className="text-sm text-gray-600 mt-4 leading-relaxed">
          Discover stylish, high-quality furniture for every room. Affordable, durable,
          and customizable pieces for your home.
        </p>
        <Link href="/cart">
        <button className="mt-6 px-12 py-6 bg-[#B88E2F] text-white font-medium text-sm uppercase rounded hover:bg-yellow-600 transition duration-300">
          Buy Now
        </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
