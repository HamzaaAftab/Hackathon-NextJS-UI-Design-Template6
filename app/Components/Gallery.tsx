import Image from "next/image"
import { Share } from 'lucide-react'

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-5 sm:px-8 md:px-12 lg:px-16 ">
      <div className="flex flex-col items-center justify-center mb-8 gap-2">
        <h1 className="text-xl font-medium">Share your setup with</h1>
        <span className="text-2xl md:text-3xl  font-bold">#FuniroFurniture</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First column */}
        <div className="grid gap-4">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/f3.png"
              alt="Minimalist desk setup"
              className="object-cover"
              fill
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/f1.png"
                alt="Vintage armchair"
                className="object-cover"
                fill
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/f3.png"
                alt="Wooden side tables"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>

        {/* Middle column */}
        <div className="grid gap-4">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
            <Image
              src="/f6.png"
              alt="Modern dining room"
              className="object-cover"
              fill
            />
          </div>
        </div>

        {/* Last column */}
        <div className="grid gap-4">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/f4.png"
              alt="Bedroom setup"
              className="object-cover"
              fill
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/f7.png"
                alt="Framed artwork"
                className="object-cover"
                fill
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="/f3.png"
                alt="Kitchen storage"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="fixed bottom-6 right-6 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Share"
      >
        <Share className="w-6 h-6" />
      </button>
    </div>
  )
}

