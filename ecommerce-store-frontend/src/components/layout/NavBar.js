import { useState } from "react";
import Link from "next/link"; // Changed to Next.js Link
import Image from "next/image"; // Using Next.js optimized image component

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <a>
                <Image
                  src="/assets/images/logo.png"
                  alt="Logo"
                  width={150}
                  height={50}
                />
              </a>
            </Link>
          </div>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">
              <a className="text-gray-700 hover:text-black">Home</a>
            </Link>
            <Link href="/productListings">
              <a className="text-gray-700 hover:text-black">Products</a>
            </Link>
            <Link href="/cart">
              <a className="text-gray-700 hover:text-black">Cart</a>
            </Link>
            <Link href="/auth">
              <a className="text-gray-700 hover:text-black">Login</a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isOpen && (
          <div className="md:hidden space-y-2">
            <Link href="/">
              <a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                Home
              </a>
            </Link>
            <Link href="/productListings">
              <a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                Products
              </a>
            </Link>
            <Link href="/cart">
              <a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                Cart
              </a>
            </Link>
            <Link href="/auth">
              <a className="block py-2 px-4 text-gray-700 hover:bg-gray-100">
                Login
              </a>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
