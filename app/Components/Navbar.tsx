import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white px-4 py-5 sm:px-8 md:px-12 lg:px-16">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-black flex items-center">
          <Image src="/logo.png" alt="Logo" width={130} height={50} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 text-sm font-medium text-black">
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/shop">Shop</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <div className="hidden md:flex space-x-10 text-lg text-gray-600">
          <FaUser className="cursor-pointer hover:text-black" />
          <FaSearch className="cursor-pointer hover:text-black" />
          <FaHeart className="cursor-pointer hover:text-black" />
          <Link href="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-black" />
            </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-2xl text-gray-600 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <AiOutlineMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50">
          <div className="flex justify-between items-center px-4 py-3 border-b shadow">
            <div className="text-2xl font-bold text-black flex items-center">
              <Image src="/logo.png" alt="Logo" width={100} height={50} />
            </div>
            <button
              className="text-2xl text-gray-600 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <AiOutlineClose />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-8 text-lg font-medium text-black mt-12">
            <li className="cursor-pointer hover:text-yellow-500">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link href="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                Shop
              </Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li className="cursor-pointer hover:text-yellow-500">
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex justify-center space-x-6 text-2xl text-gray-600 mt-12">
            <FaUser className="cursor-pointer hover:text-black" />
            <FaSearch className="cursor-pointer hover:text-black" />
            <FaHeart className="cursor-pointer hover:text-black" />
            <Link href="/cart">
            <FaShoppingCart className="cursor-pointer hover:text-black" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
