"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"

export default function WhatsAppButton() {
  const pathname = usePathname()

  const isHidden = pathname.startsWith("/admin") || pathname.startsWith("/dashboard")
  if (isHidden) return null

  const phone = "+97433228254"
  const text = encodeURIComponent("Hello! I’d like to know more about Lumen Studio.")
  const href = phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-white/90 backdrop-blur p-2"
    >
      <Image src="/whatsapp.png" alt="WhatsApp" width={48} height={48} priority />
    </a>
  )
}


