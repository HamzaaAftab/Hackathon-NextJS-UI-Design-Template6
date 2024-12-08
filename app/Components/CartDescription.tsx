import Image from "next/image"
import { Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function CartDescription() {
  return (
    <div className="container mx-auto px-4 py-5 sm:px-8 md:px-12 lg:px-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items Section - Takes up 2 columns */}
        <div className="lg:col-span-2">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#FFF9F3]">
                  <th className="text-left py-4 px-4 font-normal">Product</th>
                  <th className="text-left py-4 px-4 font-normal">Price</th>
                  <th className="text-left py-4 px-4 font-normal">Quantity</th>
                  <th className="text-left py-4 px-4 font-normal">Subtotal</th>
                  <th className="py-4 px-4"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-[105px] h-[105px] bg-[#FFF9F3] rounded-lg overflow-hidden">
                        <Image
                          src="/route1.png"
                          alt="Asgaard sofa"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-gray-500">Asgaard sofa</span>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-gray-500">Rs. 250,000.00</span>
                  </td>
                  <td className="py-6 px-4">
                    <Input
                      type="number"
                      defaultValue="1"
                      min="1"
                      className="w-16 h-10 text-center"
                    />
                  </td>
                  <td className="py-6 px-4">
                    <span className="text-gray-500">Rs. 250,000.00</span>
                  </td>
                  <td className="py-6 px-4">
                    <button className="text-gray-500 hover:text-gray-700 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cart Totals Section */}
        <div className="lg:col-span-1">
          <div className="bg-[#FFF9F3] p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Cart Totals</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-gray-500">Rs. 250,000.00</span>
              </div>
              <div className="flex justify-between items-center font-medium">
                <span className="text-gray-600">Total</span>
                <span className="text-[#B88E2F]">Rs. 250,000.00</span>
              </div>
            </div>
            <Link href="/checkout">
            <Button 
              className="w-full bg-white hover:bg-gray-50 text-black border border-gray-200"
              variant="outline"
            >
              Check Out
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

