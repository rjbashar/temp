'use client'

import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Tutoriax
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link href="/learn" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Learning Paths
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Resources
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md">
              Community
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 