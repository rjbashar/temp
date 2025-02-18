'use client'

import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-5xl mx-auto bg-white dark:bg-gray-900">
      <div className="text-center mb-12 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-blue-900 dark:text-blue-100">Higher Colleges of Technology</h1>
        <h2 className="text-3xl font-semibold mb-4 text-blue-800 dark:text-blue-200">Faculty of Engineering</h2>
        <h3 className="text-2xl mb-6 text-blue-700 dark:text-blue-300">Programming Lab Tutorials</h3>
        <div className="text-gray-600 dark:text-gray-300">
          <p className="mb-2">Created by Dr. Bashar Alrjoub</p>
          <p>February 17, 2025</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Python Tutorial Card */}
        <Link href="/python" className="group">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                Python Tutorial
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Introduction to Python Programming</p>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p className="mb-4">Learn the fundamentals of Python programming through hands-on examples and exercises.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Basic syntax and data types</li>
                <li>Control structures and functions</li>
                <li>Data structures and modules</li>
                <li>Practical projects and exercises</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* C++ Tutorial Card */}
        <Link href="/cpp" className="group">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 h-full">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                C++ Tutorial
              </h2>
              <p className="text-gray-600 dark:text-gray-300">Introduction to C++ Programming</p>
            </div>
            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p className="mb-4">Master C++ programming with comprehensive lessons and practical examples.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Core C++ concepts</li>
                <li>Object-oriented programming</li>
                <li>Memory management</li>
                <li>Advanced topics and projects</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>

      <footer className="mt-16 text-center text-gray-600 dark:text-gray-400">
        <p>Higher Colleges of Technology - Faculty of Engineering</p>
        <p className="mt-2">©  All Rights Reserved</p>
      </footer>
    </main>
  )
}