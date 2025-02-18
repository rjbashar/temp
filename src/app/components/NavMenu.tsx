'use client'

import Link from 'next/link'

export default function NavMenu() {
  return (
    <nav className="bg-blue-800 text-white p-4 mb-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">HCT Programming Labs</div>
          <div className="space-x-6">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/python" className="hover:text-blue-200">Python</Link>
            <Link href="/cpp" className="hover:text-blue-200">C++</Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 