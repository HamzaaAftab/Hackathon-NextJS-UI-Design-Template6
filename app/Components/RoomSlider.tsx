'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

type Room = {
  id: number
  title: string
  category: string
  image: string
}

const rooms: Room[] = [
  {
    id: 1,
    title: "Inner Peace",
    category: "Bed Room",
    image: "/r1.png", // Ensure this file exists in the /public directory
  },
  {
    id: 2,
    title: "Minimal Dining",
    category: "Dining Room",
    image: "/r1.png", // Ensure this file exists in the /public directory
  },
  {
    id: 3,
    title: "Reading Corner",
    category: "Living Room",
    image: "/r1.png", // Ensure this file exists in the /public directory
  },
]

const RoomSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % rooms.length)
  }

  return (
    <div className="bg-[#FCF8F3] px-4 py-5 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="mt-4 text-gray-600">
            Our designers have created a variety of beautiful room prototypes to inspire you.
          </p>
          <button className="mt-8 w-fit rounded-sm border border-[#B88E2F] bg-[#B88E2F] px-8 py-4 text-sm font-medium text-white transition-colors hover:bg-[#B88E2F]/90">
            Explore More
          </button>
        </div>

        {/* Slider Section */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3] w-full"
            >
              <div className="absolute inset-0">
                <Image
                  src={rooms[currentIndex].image}
                  alt={rooms[currentIndex].title}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="absolute bottom-8 left-8 rounded-sm bg-white p-6">
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium text-gray-500">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium text-gray-500">
                    — {rooms[currentIndex].category}
                  </span>
                </div>
                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {rooms[currentIndex].title}
                </h3>
                <button
                  onClick={nextSlide}
                  className="mt-4 rounded-full bg-[#B88E2F] p-3 text-white transition-transform hover:scale-110"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {rooms.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#B88E2F]' : 'bg-gray-300'
                }`}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomSlider
