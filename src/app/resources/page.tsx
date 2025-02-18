'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function Resources() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Developer Resources</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            A curated collection of tools, guides, and resources to help you become a better programmer.
          </p>

          {/* Development Tools */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Essential Development Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-blue-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Code Editors</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• VS Code</li>
                  <li>• Sublime Text</li>
                  <li>• JetBrains IDEs</li>
                  <li>• Atom</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-purple-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Version Control</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Git</li>
                  <li>• GitHub</li>
                  <li>• GitLab</li>
                  <li>• Bitbucket</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-green-600 mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Databases</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• PostgreSQL</li>
                  <li>• MongoDB</li>
                  <li>• MySQL</li>
                  <li>• Redis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Documentation */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Documentation & References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Official Documentation</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link href="#" className="flex items-center hover:text-blue-600">
                      <span className="mr-2">→</span>
                      MDN Web Docs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:text-blue-600">
                      <span className="mr-2">→</span>
                      React Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:text-blue-600">
                      <span className="mr-2">→</span>
                      Python Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:text-blue-600">
                      <span className="mr-2">→</span>
                      TypeScript Handbook
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-900 mb-4">Cheat Sheets</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    <Link href="#" className="flex items-center hover:text-purple-600">
                      <span className="mr-2">→</span>
                      Git Commands
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:text-purple-600">
                      <span className="mr-2">→</span>
                      Regular Expressions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:text-purple-600">
                      <span className="mr-2">→</span>
                      SQL Queries
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center hover:text-purple-600">
                      <span className="mr-2">→</span>
                      Linux Commands
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Practice Resources */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Practice & Challenges</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Coding Challenges</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• LeetCode</li>
                  <li>• HackerRank</li>
                  <li>• CodeWars</li>
                  <li>• Project Euler</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Project Ideas</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Todo Application</li>
                  <li>• Weather App</li>
                  <li>• Blog Platform</li>
                  <li>• E-commerce Site</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Open Source</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• First Contributions</li>
                  <li>• Good First Issues</li>
                  <li>• Hacktoberfest</li>
                  <li>• Contributing Guides</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Newsletter */}
          <section>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl mb-6">Get weekly updates on new resources, tools, and best practices.</p>
              <div className="max-w-md mx-auto">
                <div className="flex gap-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  )
} 