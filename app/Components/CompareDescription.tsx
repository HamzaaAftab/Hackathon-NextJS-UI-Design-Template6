import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function CompareDescription() {
  return (
    <div className="max-w-4xl mx-auto mt-8 mb-6 p-6">
      <div className="grid grid-cols-[1fr,200px,200px] gap-x-8">
        {/* Headers */}
        <div className="font-medium" />
        <div className="font-medium text-sm">1 purchase sale</div>
        <div className="font-medium text-sm">10 pcs Series 1 Single</div>

        {/* General Section */}
        <div className="col-span-3 mt-8">
          <h3 className="font-semibold text-base mb-4">General</h3>
          <div className="grid grid-cols-[1fr,200px,200px] gap-x-8 gap-y-3 text-sm">
            <div>Order Package</div>
            <div>Single Piece</div>
            <div>Single Piece</div>

            <div>Minimum Order</div>
            <div>Single Piece</div>
            <div>10 pcs</div>

            <div>Decorating Method</div>
            <div>Bright shiny in sun</div>
            <div>Bright shiny in sun</div>

            <div>Long-term use</div>
            <div>Bright shiny in sun</div>
            <div>Bright shiny in sun</div>

            <div>Optimization Card</div>
            <div>Bright shiny in sun</div>
            <div>Bright shiny in sun</div>
          </div>
        </div>

        <Separator className="col-span-3 my-6" />

        {/* Product Section */}
        <div className="col-span-3">
          <h3 className="font-semibold text-base mb-4">Product</h3>
          <div className="grid grid-cols-[1fr,200px,200px] gap-x-8 gap-y-3 text-sm">
            <div>Filling Material</div>
            <div>Foam</div>
            <div>Whole</div>

            <div>Inside Type Standard</div>
            <div>Bright shiny in sun</div>
            <div>Bright shiny in sun</div>

            <div>Capacity</div>
            <div>200 ml</div>
            <div>250 ml</div>

            <div>Original Manufacturer</div>
            <div>-</div>
            <div>-</div>
          </div>
        </div>

        <Separator className="col-span-3 my-6" />

        {/* Dimensions Section */}
        <div className="col-span-3">
          <h3 className="font-semibold text-base mb-4">Dimensions</h3>
          <div className="grid grid-cols-[1fr,200px,200px] gap-x-8 gap-y-3 text-sm">
            <div>Length</div>
            <div>45.55 cm</div>
            <div>45.55 cm</div>

            <div>Height</div>
            <div>45.55 cm</div>
            <div>45.55 cm</div>

            <div>Width</div>
            <div>45.55 cm</div>
            <div>45.78 cm</div>

            <div>Weight</div>
            <div>45 KG</div>
            <div>45 KG</div>

            <div>Log Weight</div>
            <div>5.45 cm</div>
            <div>5.45 cm</div>
          </div>
        </div>

        <Separator className="col-span-3 my-6" />

        {/* Warranty Section */}
        <div className="col-span-3">
          <h3 className="font-semibold text-base mb-4">Warranty</h3>
          <div className="grid grid-cols-[1fr,200px,200px] gap-x-8 gap-y-3 text-sm">
            <div>Warranty Service</div>
            <div>1 Year Manufacturing Warranty</div>
            <div>15 Day Manufacturing Warranty</div>

            <div>Warranty Service</div>
            <div className="max-w-[180px]">For electronic matters or manufacturing defects in normal use</div>
            <div className="max-w-[180px]">For electronic matters or manufacturing defects in normal use</div>

            <div>Guarantee Warranty</div>
            <div className="max-w-[180px]">Warranty begins on delivery date and covers manufacturing defects</div>
            <div className="max-w-[180px]">Warranty begins on delivery date and covers manufacturing defects</div>

            <div>Not Covered in Warranty</div>
            <div className="max-w-[180px]">The warranty does not cover damages caused by misuse, accident, abuse or alteration to the product</div>
            <div className="max-w-[180px]">The warranty does not cover damages caused by misuse, accident, abuse or alteration to the product</div>

            <div>Domestic Warranty</div>
            <div>2 years</div>
            <div>2 years</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="col-span-3 grid grid-cols-[1fr,200px,200px] gap-x-8 mt-8">
          <div />
          <Button className="bg-[#B8860B] hover:bg-[#9A7209] text-white">PREORDER</Button>
          <Button className="bg-[#B8860B] hover:bg-[#9A7209] text-white">PREORDER</Button>
        </div>
      </div>
    </div>
  )
}

