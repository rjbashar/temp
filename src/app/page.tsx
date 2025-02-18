'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 text-white">
      <div className="max-w-6xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Higher Colleges of Technology</h1>
          <h2 className="text-3xl font-semibold mb-4">Faculty of Engineering</h2>
          <h3 className="text-2xl opacity-90">Programming Lab Tutorials</h3>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Python Card */}
          <Link href="/python" 
                className="group">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Python Programming</h2>
                <p className="text-xl mb-4 opacity-80">EGN 1273</p>
                <p className="mb-6 text-gray-200">
                  Learn Python programming through hands-on examples and practical exercises.
                </p>
                <span className="inline-block border-2 border-white px-6 py-2 rounded-full group-hover:bg-white group-hover:text-blue-900 transition-colors">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>

          {/* C++ Card */}
          <Link href="/cpp"
                className="group">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">C++ Programming</h2>
                <p className="text-xl mb-4 opacity-80">ECT 124</p>
                <p className="mb-6 text-gray-200">
                  Master C++ programming with comprehensive tutorials and exercises.
                </p>
                <span className="inline-block border-2 border-white px-6 py-2 rounded-full group-hover:bg-white group-hover:text-blue-900 transition-colors">
                  Start Learning →
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-sm opacity-70">
          <p>Created by Dr. Bashar Alrjoub</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>
    </main>
  )
}
