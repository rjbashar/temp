'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Developer Community</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Connect with fellow developers, share knowledge, and grow together in our vibrant community.
          </p>

          {/* Discussion Forums */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Discussion Forums</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Web Development</h3>
                    <p className="text-gray-600">Frontend, Backend, and Full-stack discussions</p>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Active
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <Link href="#" className="text-gray-900 hover:text-blue-600">
                      Best practices for React state management
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">32 replies • Updated 2h ago</p>
                  </div>
                  <div className="border-t pt-4">
                    <Link href="#" className="text-gray-900 hover:text-blue-600">
                      How to optimize Next.js performance
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">18 replies • Updated 5h ago</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Science & AI</h3>
                    <p className="text-gray-600">Machine Learning and Data Analysis</p>
                  </div>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    Trending
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="border-t pt-4">
                    <Link href="#" className="text-gray-900 hover:text-blue-600">
                      Getting started with TensorFlow
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">45 replies • Updated 1h ago</p>
                  </div>
                  <div className="border-t pt-4">
                    <Link href="#" className="text-gray-900 hover:text-blue-600">
                      Data visualization best practices
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">27 replies • Updated 3h ago</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Community Projects */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Community Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Open Source Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-blue-600">
                      React Component Library
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-blue-600">
                      Data Visualization Tools
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-blue-600">
                      CLI Utilities
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Hackathon Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-purple-600">
                      AI Chat Application
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-purple-600">
                      Smart Home Dashboard
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-purple-600">
                      Health Tracking App
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Student Projects</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-green-600">
                      Learning Management System
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-green-600">
                      Study Group Finder
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">→</span>
                    <Link href="#" className="hover:text-green-600">
                      Course Review Platform
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Events */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 text-sm font-semibold mb-2">Virtual Meetup</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Development Workshop</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Learn modern web development practices and tools from industry experts.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">March 15, 2024</span>
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    Register →
                  </Link>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-purple-600 text-sm font-semibold mb-2">Hackathon</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Innovation Challenge</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Build innovative AI solutions and compete for exciting prizes.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">April 1-3, 2024</span>
                  <Link href="#" className="text-purple-600 hover:text-purple-800">
                    Register →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Join Community */}
          <section>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
              <p className="text-xl mb-6">Connect with developers, share knowledge, and grow together.</p>
              <div className="flex justify-center gap-4">
                <Link 
                  href="#" 
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Create Account
                </Link>
                <Link 
                  href="#" 
                  className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  )
} 