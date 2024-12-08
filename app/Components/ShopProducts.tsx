import ProductCard from './ProductCard'
import { Product } from '../types/product'
import Link from 'next/link'

const ShopProducts = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Slytherine',
      category: 'Stylish cafe chair',
      price: 2500000,
      originalPrice: 3500000,
      image: '/f1.png',
      tag: {
        type: 'discount',
        value: '-30%'
      }
    },
    {
      id: '2',
      name: 'Leviosa',
      category: 'Stylish cafe chair',
      price: 2500000,
      image: '/f7.png',
    },
    {
      id: '3',
      name: 'Lolito',
      category: 'Luxury big sofa',
      price: 7000000,
      originalPrice: 14000000,
      image: '/f3.png',
      tag: {
        type: 'discount',
        value: '-50%'
      }
    },
    {
      id: '4',
      name: 'Respira',
      category: 'Outdoor bar table and stool',
      price: 500000,
      image: '/f4.png',
      tag: {
        type: 'new'
      }
    },
    {
      id: '5',
      name: 'Grifo',
      category: 'Night lamp',
      price: 1500000,
      image: '/f5.png',
    },
    {
      id: '6',
      name: 'Muggo',
      category: 'Small mug',
      price: 150000,
      image: '/f6.png',
      tag: {
        type: 'new'
      }
    },
    {
      id: '7',
      name: 'Pingky',
      category: 'Cute bed set',
      price: 7000000,
      originalPrice: 14000000,
      image: '/f7.png',
      tag: {
        type: 'discount',
        value: '-50%'
      }
    },
    {
      id: '8',
      name: 'Potty',
      category: 'Minimalist flower pot',
      price: 500000,
      image: '/f7.png',
      tag: {
        type: 'new'
      }
    },
    {
        id: '9',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f7.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '10',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f3.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '11',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f3.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '12',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f2.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '13',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f6.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '14',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f7.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '15',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f2.png',
        tag: {
          type: 'new'
        }
      },
      {
        id: '16',
        name: 'Potty',
        category: 'Minimalist flower pot',
        price: 500000,
        image: '/f2.png',
        tag: {
          type: 'new'
        }
      },
  ]

  return (
    <div className="mx-auto max-w-7xl px-4 py-5 sm:px-8 md:px-12 lg:px-16 space-y-4">
      <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">Our Products</h2>
      <div className="grid grid-cols-1 gap-7 justify-center items-center sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link href="/shop" >
        <button className="rounded-sm border border-[#B88E2F] px-8 py-4 text-sm font-medium text-[#B88E2F] hover:border-gray-400 hover:text-gray-900 mt-2 ">
          Show More
        </button>
        </Link>
      </div>
    </div>
  )
}

export default ShopProducts;

