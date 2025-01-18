import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { Heart, Share2, LayoutGrid } from 'lucide-react';
import { Product } from '../types/product';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString()}`;
  };

  return (
    <Link href={`/product/${product.id}`}> {/* Add link wrapper */}
      <div className="group relative flex flex-col">
        <div className="relative aspect-square w-[95%] overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          />
          {product.tag && (
            <div
              className={`absolute right-3 top-3 rounded-full px-3 py-1 text-sm font-medium text-white
              ${product.tag.type === 'discount' ? 'bg-rose-500' : 'bg-emerald-500'}`}
            >
              {product.tag.type === 'discount' ? product.tag.value : 'New'}
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-white/75 p-4 opacity-0 transition-opacity-50 group-hover:opacity-100">
            <button className="w-full rounded bg-black py-2 text-sm font-medium text-white hover:bg-black/90">
              Add to cart
            </button>
            <div className="mt-2 flex items-center justify-center gap-4 text-sm text-gray-700">
              <button className="flex items-center gap-1 hover:text-black">
                <Share2 className="h-4 w-4" />
                Share
              </button>
              <button className="flex items-center gap-1 hover:text-black">
                <LayoutGrid className="h-4 w-4" />
                Compare
              </button>
              <button className="flex items-center gap-1 hover:text-black">
                <Heart className="h-4 w-4" />
                Like
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="font-medium">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
