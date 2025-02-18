'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function CleanCodeBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-purple-600 text-sm font-semibold mb-4">Best Practices</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Clean Code Principles</h1>
          <div className="text-gray-600 mb-8">7 min read</div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Writing clean code is an art that every programmer should master. It&apos;s not just about making 
              the code work; it&apos;s about making it work elegantly and maintainably.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Meaningful Names</h2>
            <p className="mb-6">
              The first principle of clean code is using meaningful, intention-revealing names for variables, 
              functions, and classes.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Bad vs. Good Naming</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// Bad naming
const d = new Date();
const yn = true;
function calc(a, b) { return a + b; }

// Good naming
const currentDate = new Date();
const isUserActive = true;
function calculateSum(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Functions Should Do One Thing</h2>
            <p className="mb-6">
              Functions should be small and focused on a single responsibility. This makes them easier to 
              understand, test, and maintain.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Example: Single Responsibility</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// Bad: Function doing multiple things
function processUser(user) {
    validateUser(user);
    saveToDatabase(user);
    sendWelcomeEmail(user);
}

// Good: Separate functions with single responsibilities
function validateUser(user) {
    // Validation logic
}

function saveUser(user) {
    // Database logic
}

function sendWelcomeEmail(user) {
    // Email logic
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles</h2>
            <ul className="list-disc list-inside space-y-4 mb-8">
              <li>DRY (Don&apos;t Repeat Yourself)</li>
              <li>KISS (Keep It Simple, Stupid)</li>
              <li>SOLID Principles</li>
              <li>Code Comments Should Explain Why, Not What</li>
            </ul>

            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Clean Code Checklist</h3>
              <ul className="list-disc list-inside space-y-2 text-purple-800">
                <li>Is the code self-documenting?</li>
                <li>Are functions and classes small and focused?</li>
                <li>Is there any duplicated code?</li>
                <li>Are variable names descriptive?</li>
                <li>Is the code easy to test?</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Code Organization</h2>
            <p className="mb-6">
              Well-organized code follows a logical structure that makes it easy to navigate and understand. 
              Consider using design patterns and consistent formatting.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Example: Code Structure</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// Project structure example
src/
  ├── components/
  │   ├── Button/
  │   │   ├── Button.js
  │   │   ├── Button.test.js
  │   │   └── Button.css
  │   └── Card/
  │       ├── Card.js
  │       ├── Card.test.js
  │       └── Card.css
  ├── utils/
  │   ├── validation.js
  │   └── formatting.js
  └── services/
      ├── api.js
      └── auth.js`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="#" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Understanding Algorithm Complexity</h4>
                <p className="text-gray-600 text-sm">Optimize your code performance.</p>
              </Link>
              <Link href="#" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Getting Started with Data Structures</h4>
                <p className="text-gray-600 text-sm">Master fundamental programming concepts.</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 