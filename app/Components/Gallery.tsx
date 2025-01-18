import Image from "next/image"
import { Share } from "lucide-react"
import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"

type GalleryImage = {
  id: string
  title: string
  image: string
}

export default function Gallery() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    const query = `*[_type == 'product'] [2..8]{
      _id,
      title,
      "image": productImage.asset->url,
    }`

    client
      .fetch(query)
      .then((data) => {
        setGalleryImages(data)
      })
      .catch((error) => console.error("Error fetching gallery images:", error))
  }, [])

  return (
    <div className="container mx-auto px-4 py-5 sm:px-8 md:px-12 lg:px-16 ">
      <div className="flex flex-col items-center justify-center mb-8 gap-2">
        <h1 className="text-xl font-medium">Share your setup with</h1>
        <span className="text-2xl md:text-3xl font-bold">#FuniroFurniture</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* First column */}
        <div className="grid gap-4">
          {galleryImages.slice(0, 3).map((image) => (
            <div
              key={image.id}
              className={`relative ${
                image.id === galleryImages[0]?.id ? "aspect-[4/3]" : "aspect-square"
              } rounded-lg overflow-hidden`}
            >
              <Image
                src={image.image}
                alt={image.title || "Gallery Image"}
                className="object-cover"
                fill
              />
            </div>
          ))}
        </div>

        {/* Middle column */}
        <div className="grid gap-4">
          {galleryImages.slice(3, 4).map((image) => (
            <div
              key={image.id}
              className="relative aspect-[3/4] rounded-lg overflow-hidden"
            >
              <Image
                src={image.image}
                alt={image.title || "Gallery Image"}
                className="object-cover"
                fill
              />
            </div>
          ))}
        </div>

        {/* Last column */}
        <div className="grid gap-4">
          {galleryImages.slice(4).map((image) => (
            <div
              key={image.id}
              className={`relative ${
                image.id === galleryImages[4]?.id ? "aspect-[4/3]" : "aspect-square"
              } rounded-lg overflow-hidden`}
            >
              <Image
                src={image.image}
                alt={image.title || "Gallery Image"}
                className="object-cover"
                fill
              />
            </div>
          ))}
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
