'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function AlgorithmComplexityBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-green-600 text-sm font-semibold mb-4">Tutorials</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Understanding Algorithm Complexity</h1>
          <div className="text-gray-600 mb-8">10 min read</div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Algorithm complexity is a fundamental concept in computer science that helps us understand 
              how our code performs as input size grows. Let&apos;s explore this concept with practical examples.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Big O Notation</h2>
            <p className="mb-6">
              Big O notation is used to classify algorithms according to how their running time or space 
              requirements grow as the input size grows.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Common Time Complexities</h3>
              <ul className="space-y-4">
                <li><strong>O(1)</strong> - Constant time</li>
                <li><strong>O(log n)</strong> - Logarithmic time</li>
                <li><strong>O(n)</strong> - Linear time</li>
                <li><strong>O(n log n)</strong> - Log-linear time</li>
                <li><strong>O(n²)</strong> - Quadratic time</li>
                <li><strong>O(2ⁿ)</strong> - Exponential time</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Examples in Code</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">O(1) - Constant Time</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// Array access - O(1)
const array = [1, 2, 3, 4, 5];
const firstElement = array[0];  // Always takes the same time

// Object property access - O(1)
const user = { name: "John", age: 30 };
const userName = user.name;  // Always takes the same time`}</code>
              </pre>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">O(n) - Linear Time</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// Linear search - O(n)
function findElement(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

// Sum of array elements - O(n)
function sumArray(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}`}</code>
              </pre>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">O(n²) - Quadratic Time</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// Bubble sort - O(n²)
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array;
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Optimization Tips</h2>
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Best Practices</h3>
              <ul className="list-disc list-inside space-y-2 text-green-800">
                <li>Use appropriate data structures for your use case</li>
                <li>Consider space-time tradeoffs</li>
                <li>Look for opportunities to reduce nested loops</li>
                <li>Use built-in methods when available (they&apos;re usually optimized)</li>
                <li>Profile your code to identify bottlenecks</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Pitfalls</h2>
            <p className="mb-6">
              Understanding algorithm complexity helps you avoid common performance pitfalls in your code:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>Unnecessary nested loops</li>
              <li>Inefficient data structure choices</li>
              <li>Redundant calculations</li>
              <li>Memory leaks</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/data-structures" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Getting Started with Data Structures</h4>
                <p className="text-gray-600 text-sm">Learn about fundamental data structures.</p>
              </Link>
              <Link href="/blog/clean-code" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Clean Code Principles</h4>
                <p className="text-gray-600 text-sm">Write efficient and maintainable code.</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 