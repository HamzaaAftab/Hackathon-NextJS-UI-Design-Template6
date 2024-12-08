'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, Minus, Plus, Star, StarHalf } from 'lucide-react'

export default function ProductRoute() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    '/route1.png',
    '/route1.png',
    '/route1.png',
    '/route1.png',
  ]

  return (
    <div className="min-h-screen bg-[#FFF9F3] px-4 py-5 sm:px-8 md:px-12 lg:px-16  ">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-[#B88E2F]">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/shop" className="hover:text-[#B88E2F]">Shop</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-500">Asgaard sofa</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="flex gap-4">
            <div className="space-y-4">
              {images.map((src, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`block w-24 h-24 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-[#B88E2F]' : 'border-transparent'
                  }`}
                >
                  <Image
                    src="/route1.png"
                    alt={`Product image ${index + 1}`}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1">
              <Image
                src={images[selectedImage]}
                alt="Main product image"
                width={600}
                height={600}
                className="w-full rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <h1 className="text-4xl font-medium">Asgaard sofa</h1>
            <div className="text-2xl text-gray-500">Rs. 250,000.00</div>

            <div className="flex items-center gap-4">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
                ))}
                <StarHalf className="w-5 h-5 fill-[#FFC700] text-[#FFC700]" />
              </div>
              <span className="text-sm text-gray-500">5 Customer Review</span>
            </div>

            <p className="text-gray-600">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a sound.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm mb-2">Size</h3>
                <div className="flex gap-4">
                  {['L', 'XL', 'XS'].map((size) => (
                    <button
                      key={size}
                      className="w-10 h-10 rounded border border-gray-300 hover:border-[#B88E2F] flex items-center justify-center"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm mb-2">Color</h3>
                <div className="flex gap-4">
                  <button className="w-8 h-8 rounded-full bg-[#816DFA] border-2 border-white shadow-md" />
                  <button className="w-8 h-8 rounded-full bg-black border-2 border-white shadow-md" />
                  <button className="w-8 h-8 rounded-full bg-[#B88E2F] border-2 border-white shadow-md" />
                </div>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border-x py-2"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <Link href="/cart">
              <button className="px-10 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors">
                Add To Cart
              </button>
              </Link>
              <Link href="/compare">
              <button className="px-12 py-2 border border-black rounded hover:bg-black hover:text-white transition-colors">
                + Compare
              </button>
              </Link>
            </div>

            <hr className="my-8" />

            <div className="space-y-2 text-sm">
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">SKU</span>
                <span>:</span>
                <span>SS001</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">Category</span>
                <span>:</span>
                <span>Sofas</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">Tags</span>
                <span>:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex gap-4">
                <span className="text-gray-500 w-20">Share</span>
                <span>:</span>
                <div className="flex gap-4">
                  <Link href="#" className="hover:text-[#B88E2F]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Link>
                  <Link href="#" className="hover:text-[#B88E2F]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link href="#" className="hover:text-[#B88E2F]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

