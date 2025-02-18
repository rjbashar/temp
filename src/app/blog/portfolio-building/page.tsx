'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function PortfolioBuildingBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-red-600 text-sm font-semibold mb-4">Career</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Building Your Programming Portfolio</h1>
          <div className="text-gray-600 mb-8">6 min read</div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              A strong programming portfolio is essential for showcasing your skills to potential employers. 
              Let&apos;s explore how to build a portfolio that stands out.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Portfolio Components</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Must-Have Elements</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Personal Projects</strong>
                  <p className="text-gray-600 mt-1">Showcase projects that demonstrate your technical skills and creativity.</p>
                </li>
                <li>
                  <strong>Code Samples</strong>
                  <p className="text-gray-600 mt-1">Clean, well-documented code that highlights your coding style.</p>
                </li>
                <li>
                  <strong>Technical Skills</strong>
                  <p className="text-gray-600 mt-1">List of programming languages, frameworks, and tools you&apos;re proficient in.</p>
                </li>
                <li>
                  <strong>Project Documentation</strong>
                  <p className="text-gray-600 mt-1">Clear explanations of your project goals, challenges, and solutions.</p>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Selection</h2>
            <p className="mb-6">
              Choose projects that demonstrate different skills and complexity levels. Here are some ideas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-red-900 mb-3">Web Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Personal blog platform</li>
                  <li>E-commerce website</li>
                  <li>Social media dashboard</li>
                  <li>Portfolio website</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Mobile Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Weather application</li>
                  <li>Task management app</li>
                  <li>Fitness tracker</li>
                  <li>Recipe finder</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Documentation Best Practices</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Project README Example</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`# Project Name
## Overview
Brief description of what the project does and its main features.

## Technologies Used
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Node.js, Express
- Database: PostgreSQL
- Testing: Jest, React Testing Library

## Features
- User authentication
- Real-time data updates
- Responsive design
- API integration

## Installation
\`\`\`bash
git clone https://github.com/username/project
cd project
npm install
npm run dev
\`\`\`

## Screenshots
[Add screenshots or GIFs demonstrating the project]

## Challenges & Solutions
Describe technical challenges faced and how you solved them.`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Online Presence</h2>
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Platforms</h3>
              <ul className="space-y-4">
                <li>
                  <strong>GitHub</strong>
                  <p className="text-gray-600 mt-1">Maintain an active GitHub profile with well-documented repositories.</p>
                </li>
                <li>
                  <strong>Personal Website</strong>
                  <p className="text-gray-600 mt-1">Create a professional website showcasing your work and skills.</p>
                </li>
                <li>
                  <strong>LinkedIn</strong>
                  <p className="text-gray-600 mt-1">Keep your professional profile updated with your latest projects and skills.</p>
                </li>
                <li>
                  <strong>Tech Blog</strong>
                  <p className="text-gray-600 mt-1">Share your knowledge and experiences through technical blog posts.</p>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Maintenance</h2>
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Regular Updates</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Keep projects up to date with latest technologies</li>
                <li>Fix bugs and improve documentation</li>
                <li>Add new features to existing projects</li>
                <li>Remove outdated or non-functional projects</li>
                <li>Update skills and technologies list</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/clean-code" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Clean Code Principles</h4>
                <p className="text-gray-600 text-sm">Write code that impresses potential employers.</p>
              </Link>
              <Link href="/blog/algorithm-complexity" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Understanding Algorithm Complexity</h4>
                <p className="text-gray-600 text-sm">Demonstrate your technical knowledge.</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 