import ProductCard from './ProductCard';
import { Product } from '../types/product';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const query = `*[_type == "product"] | order(_createdAt asc) [9..16] {
      id,
      name,
      category,
      price,
      originalPrice,
      "image": productImage.asset->url,
      tag
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log('Fetched products:', data); // Debugging
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Our Products</h2>
      <div className="grid grid-cols-1 gap-7 justify-center items-center sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/shop">
          <button className="rounded-sm border border-[#B88E2F] px-8 py-4 text-sm font-medium text-[#B88E2F] hover:border-gray-400 hover:text-gray-900">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
