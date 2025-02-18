'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Learn. Code. Share.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Master programming through our comprehensive tutorials.
            Start your coding journey today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center gap-4"
          >
            <Link 
              href="/cpp"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Learning
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Tutorial Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Content Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Tutorials</h2>
            <p className="text-xl text-gray-600">Master programming with our comprehensive guides</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Tutorial Cards - Taking 2/3 of the space */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Python Tutorial Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link href="/python" className="block">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full border border-blue-200">
                    <div className="bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                      Featured Course
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-600">Python Tutorial</h2>
                    <p className="text-gray-600 mb-6">Master Python programming through interactive lessons</p>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Basic syntax and data types
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Control structures and functions
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Data structures and modules
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Practical projects
                      </li>
                    </ul>
                  </div>
                </Link>
              </motion.div>

              {/* C++ Tutorial Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link href="/cpp" className="block">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full border border-purple-200">
                    <div className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full w-fit mb-4">
                      Featured Course
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-purple-600">C++ Tutorial</h2>
                    <p className="text-gray-600 mb-6">Deep dive into C++ with hands-on examples</p>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Core C++ concepts
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Object-oriented programming
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Memory management
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">→</span>
                        Advanced topics
                      </li>
                    </ul>
                  </div>
                </Link>
              </motion.div>
            </div>

            {/* Blog Posts Section - Taking 1/3 of the space */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h3>
              
              {/* Blog Post Cards */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-6"
              >
                <Link href="/blog/data-structures" className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">Programming Tips</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Getting Started with Data Structures</h4>
                    <p className="text-gray-600 text-sm mb-4">A beginner&apos;s guide to understanding and implementing basic data structures in your programs.</p>
                    <div className="text-sm text-gray-500">5 min read</div>
                  </div>
                </Link>

                <Link href="/blog/clean-code" className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="text-sm text-purple-600 mb-2">Best Practices</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Clean Code Principles</h4>
                    <p className="text-gray-600 text-sm mb-4">Learn how to write maintainable and efficient code that your future self will thank you for.</p>
                    <div className="text-sm text-gray-500">7 min read</div>
                  </div>
                </Link>

                <Link href="/blog/algorithm-complexity" className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="text-sm text-green-600 mb-2">Tutorials</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Understanding Algorithm Complexity</h4>
                    <p className="text-gray-600 text-sm mb-4">A practical guide to analyzing and optimizing your code&apos;s performance.</p>
                    <div className="text-sm text-gray-500">10 min read</div>
                  </div>
                </Link>

                <Link href="/blog/portfolio-building" className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="text-sm text-red-600 mb-2">Career</div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Building Your Programming Portfolio</h4>
                    <p className="text-gray-600 text-sm mb-4">Essential tips for creating a standout portfolio that showcases your coding skills.</p>
                    <div className="text-sm text-gray-500">6 min read</div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
              <p className="text-gray-600">
                Learn through practical examples and hands-on exercises designed for beginners and advanced programmers.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Comprehensive Guides</h3>
              <p className="text-gray-600">
                Detailed tutorials covering everything from basic concepts to advanced programming techniques.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 bg-white rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Practical Projects</h3>
              <p className="text-gray-600">
                Build real-world applications and strengthen your programming skills through project-based learning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold mb-4">About Tutoriax</h4>
              <p className="text-gray-600 mb-4">
                Your gateway to mastering programming through interactive tutorials, practical guides, and expert insights. 
                Join our community of learners and start your coding journey today.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-blue-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/blog/data-structures" className="text-gray-600 hover:text-gray-900">Data Structures</Link></li>
                <li><Link href="/blog/algorithm-complexity" className="text-gray-600 hover:text-gray-900">Algorithms</Link></li>
                <li><Link href="/blog/clean-code" className="text-gray-600 hover:text-gray-900">Best Practices</Link></li>
                <li><Link href="/blog/portfolio-building" className="text-gray-600 hover:text-gray-900">Career Tips</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Discussion Forum</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Code Reviews</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Project Showcase</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Learning Paths</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>© {new Date().getFullYear()} Tutoriax. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}