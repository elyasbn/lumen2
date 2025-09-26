"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e5d5bc]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#949f7d] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-2xl font-bold text-[#949f7d]">{"Lumen"}</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-[#949f7d] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-[#949f7d] transition-colors">
              About
            </Link>
            <div className="relative group">
              <Link href="/classes" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Classes
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/classes/belly-dance/book"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Belly Dance
                  </Link>
                  <Link
                    href="/classes/khaleej-dance/book"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Khaleej Dance
                  </Link>
                  <Link
                    href="/classes/latina-dance/book"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Latina Dance
                  </Link>
                  <Link
                    href="/classes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white border-t"
                  >
                    View All Classes
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/coaches" className="text-gray-700 hover:text-[#949f7d] transition-colors">
              Coaches
            </Link>
            <div className="relative group">
              <Link href="/shop" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Shop
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/shop?category=Dancewear"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Dancewear
                  </Link>
                  <Link
                    href="/shop?category=Shoes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Shoes
                  </Link>
                  <Link
                    href="/shop?category=Accessories"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Accessories
                  </Link>
                  <Link
                    href="/shop?category=Equipment"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white"
                  >
                    Equipment
                  </Link>
                  <Link
                    href="/shop"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#949f7d] hover:text-white border-t"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/#events" className="text-gray-700 hover:text-[#949f7d] transition-colors">
              Events
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-[#949f7d] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#949f7d] transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="hidden md:block bg-[#949f7d] hover:bg-[#949f7d]/90 text-white">Book Now</Button>

          {/* Shopping Cart Icon */}
          <Link href="/shop" className="hidden md:block relative">
            <Button variant="ghost" size="sm" className="p-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#949f7d] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
              <div className="w-full h-0.5 bg-gray-700"></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#e5d5bc]/20">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link href="/" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                About
              </Link>
              <Link href="/classes" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Classes
              </Link>
              <Link href="/coaches" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Coaches
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Shop
              </Link>
              <Link href="/#events" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Events
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#949f7d] transition-colors">
                Contact
              </Link>
              <Button className="bg-[#949f7d] hover:bg-[#949f7d]/90 text-white w-full">Book Now</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
