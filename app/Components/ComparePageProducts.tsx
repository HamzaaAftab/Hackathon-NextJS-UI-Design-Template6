import Image from "next/image"
import { Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComparePageProducts() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-5 sm:px-8 md:px-12 lg:px-16 mt-16 md:mt-24 lg:mt-32 sm:mt-20 ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr,1fr] gap-6 items-start">
        {/* Left Section */}
        <div className="space-y-2">
          <h2 className="text-lg font-medium leading-none">
            Go to Product page for more Products
          </h2>
         <Link href="/shop">
         <button className="text-sm text-muted-foreground hover:text-primary transition-colors">
            View More
          </button>
         </Link>
        </div>

        {/* Middle Section - Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Asgaard Sofa */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/route1.png"
                alt="Asgaard Sofa"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Asgaard Sofa</h3>
              <p className="font-medium">Rs. 250,000.00</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4.7 ? "fill-primary text-primary" : "text-muted stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">250 Reviews</span>
              </div>
            </div>
          </div>

          {/* Outdoor Sofa Set */}
          <div className="space-y-4">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/route1.png"
                alt="Outdoor Sofa Set"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Outdoor Sofa Set</h3>
              <p className="font-medium">Rs. 224,000.00</p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4.2 ? "fill-primary text-primary" : "text-muted stroke-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">145 Reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-end">
          <Button
            className="bg-[#B88E2F] text-white hover:bg-[#A17929] h-12 px-8"
          >
            Add A Product
          </Button>
        </div>
      </div>
    </div>
  )
}

