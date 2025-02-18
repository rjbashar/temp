'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function LearningPaths() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Learning Paths</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Choose your learning path and start your programming journey. Each path is carefully crafted 
            to take you from beginner to advanced level.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Web Development Path */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Web Development</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• HTML, CSS, JavaScript</li>
                <li>• React & Next.js</li>
                <li>• Backend Development</li>
                <li>• Database Design</li>
              </ul>
              <Link 
                href="#" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Start Path
              </Link>
            </div>

            {/* Data Science Path */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
              <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                High Demand
              </div>
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Data Science</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• Data Analysis</li>
                <li>• Machine Learning</li>
                <li>• Data Visualization</li>
                <li>• Statistical Methods</li>
              </ul>
              <Link 
                href="#" 
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Start Path
              </Link>
            </div>

            {/* Mobile Development Path */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
              <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                Trending
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">Mobile Development</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>• iOS Development</li>
                <li>• Android Development</li>
                <li>• Cross-platform Apps</li>
                <li>• App Publishing</li>
              </ul>
              <Link 
                href="#" 
                className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Start Path
              </Link>
            </div>
          </div>

          {/* Path Progress Section */}
          <section className="bg-white p-8 rounded-xl shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Learning Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Web Development</span>
                  <span>45%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full w-[45%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Data Science</span>
                  <span>20%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-purple-600 rounded-full w-[20%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Mobile Development</span>
                  <span>10%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-2 bg-green-600 rounded-full w-[10%]"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Upcoming Courses */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-blue-600 mb-2">Starting Next Week</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Advanced React Patterns</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn advanced React patterns and best practices for building scalable applications.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 6 weeks</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    Get Notified →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-sm text-purple-600 mb-2">Starting in 2 Weeks</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Machine Learning Fundamentals</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Master the basics of machine learning with hands-on projects and real-world datasets.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Duration: 8 weeks</span>
                  <Link href="#" className="text-purple-600 hover:text-purple-800">
                    Get Notified →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  )
} 