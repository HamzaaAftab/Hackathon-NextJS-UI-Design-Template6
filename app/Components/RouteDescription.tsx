'use client'

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RouteDescription() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-5 sm:px-8 md:px-12 lg:px-16">
      <Tabs defaultValue="description" className="w-full text-center mx-auto ">
        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
          <TabsTrigger 
            value="description"
            className="text-xl data-[state=active]:text-black data-[state=active]:font-normal data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:bg-transparent px-6 py-4"
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="additional"
            className="text-xl text-[#666] data-[state=active]:text-black data-[state=active]:font-normal data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:bg-transparent px-6 py-4"
          >
            Additional Information
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="text-xl text-[#666] data-[state=active]:text-black data-[state=active]:font-normal data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:rounded-none data-[state=active]:bg-transparent px-6 py-4"
          >
            Reviews [5]
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-8">
          <div className="space-y-6">
            <p className="text-[#666] leading-relaxed">
              Embodying the raw, wayward spirit of rock &apos;n&apos; roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p className="text-[#666] leading-relaxed">
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#FAF7F2] p-4 rounded-lg">
                <Image
                  src="/p1.png"
                  alt="Straight sofa configuration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-[#FAF7F2] p-4 rounded-lg">
                <Image
                  src="/p2.png"
                  alt="L-shaped sofa configuration"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="additional">
          <div className="py-8">
            <p className="text-[#666]">Additional information content goes here.</p>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="py-8">
            <p className="text-[#666]">Reviews content goes here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

