import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

// Define a type for the product
type Product = {
  title: string;
  imageUrl: string;
};

const Range = () => {
  // Initialize state with a specific type for the products array
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch products from Sanity
  useEffect(() => {
    // Sanity query to fetch the first 3 products in descending order
    const query = `*[_type == "product" && title in ["Wood Chair", "Cloud Haven Chair", "Timber Craft"]] {
      title, 
      "imageUrl": productImage.asset->url,
      price,
      description
    }`;

    client
      .fetch(query)
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <Link href="/product">
      <div className="px-4 py-8 sm:px-8 md:px-12 lg:px-16">
        {/* Header Section */}
        <div className="text-center space-y-2 mt-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Browse The Range
          </h1>
          <p className="text-sm text-gray-500">
            Our best collections of Ranges are on Display
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid mt-8 gap-6 px-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={product.imageUrl}
                  width={330}
                  height={250}
                  alt={product.title}
                  className="object-cover"
                />
              </div>
              <p className="text-lg font-medium text-gray-700">{product.title}</p>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Range;
