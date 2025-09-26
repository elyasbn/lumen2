import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#949f7d] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-white">Lumen</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering dancers of all levels to express themselves through movement, fitness, and artistic excellence.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/lumenstudio" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#949f7d] cursor-pointer transition-colors" />
              </a>
              <a href="https://www.instagram.com/lumenstudio" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#949f7d] cursor-pointer transition-colors" />
              </a>
              <a href="https://www.twitter.com/lumenstudio" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-[#949f7d] cursor-pointer transition-colors" />
              </a>
              <a href="https://www.youtube.com/lumenstudio" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-gray-400 hover:text-[#949f7d] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Classes</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/classes/belly-dance/book" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Belly Dance
                </Link>
              </li>
              <li>
                <Link
                  href="/classes/khaleej-dance/book"
                  className="text-gray-400 hover:text-[#949f7d] transition-colors"
                >
                  Khaleej Dance
                </Link>
              </li>
              <li>
                <Link
                  href="/classes/latina-dance/book"
                  className="text-gray-400 hover:text-[#949f7d] transition-colors"
                >
                  Latina Dance
                </Link>
              </li>
              <li>
                <Link href="/classes" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  View All Classes
                </Link>
              </li>
              <li>
                <Link href="/coaches" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Meet Our Coaches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=Dancewear" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Dancewear
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Shoes" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Dance Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/shop?category=Accessories"
                  className="text-gray-400 hover:text-[#949f7d] transition-colors"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Equipment" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Policies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#949f7d] transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Lumen Dance Studio. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-[#949f7d] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#949f7d] text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#949f7d] text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
