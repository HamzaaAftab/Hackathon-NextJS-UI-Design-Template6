import { Award, CheckCircle, Truck, Headphones } from 'lucide-react'

export default function FeaturesSection() {
  return (
    <div className="w-full bg-[#F9F4F0] px-4 py-5 sm:px-8 md:px-12 lg:px-16 ">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* High Quality */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="flex-shrink-0">
              <Award className="w-8 h-8 text-gray-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">High Quality</h3>
              <p className="text-sm text-gray-600">Crafted from top materials</p>
            </div>
          </div>

          {/* Warranty Protection */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-8 h-8 text-gray-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Warranty Protection</h3>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
          </div>

          {/* Free Shipping */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="flex-shrink-0">
              <Truck className="w-8 h-8 text-gray-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-600">Order over 150 $</p>
            </div>
          </div>

          {/* 24/7 Support */}
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <div className="flex-shrink-0">
              <Headphones className="w-8 h-8 text-gray-800" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">24 / 7 Support</h3>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

