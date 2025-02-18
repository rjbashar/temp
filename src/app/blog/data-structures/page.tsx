'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NavMenu from '@/app/components/NavMenu'

export default function DataStructuresBlog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavMenu />
      
      <main className="max-w-4xl mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-blue-600 text-sm font-semibold mb-4">Programming Tips</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with Data Structures</h1>
          <div className="text-gray-600 mb-8">5 min read</div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              Understanding data structures is fundamental to becoming a proficient programmer. 
              In this guide, we&apos;ll explore the most common data structures and their practical applications.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Arrays: The Foundation</h2>
            <p className="mb-6">
              Arrays are the simplest and most widely used data structures. They store elements in contiguous memory 
              locations, providing fast access to elements using indices.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Example: Array Implementation</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`// JavaScript Array Example
const numbers = [1, 2, 3, 4, 5];

// Accessing elements
console.log(numbers[0]);  // Output: 1

// Adding elements
numbers.push(6);  // Adds to end
numbers.unshift(0);  // Adds to beginning

// Removing elements
numbers.pop();  // Removes from end
numbers.shift();  // Removes from beginning`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Linked Lists: Dynamic Data Storage</h2>
            <p className="mb-6">
              Linked lists provide dynamic storage capabilities, where elements can be easily inserted or removed 
              without reorganizing the entire data structure.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4">Example: Linked List Node</h3>
              <pre className="bg-black text-white p-4 rounded overflow-x-auto">
                <code>{`class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // Add code to append node
    }
}`}</code>
              </pre>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Applications</h2>
            <ul className="list-disc list-inside space-y-4 mb-8">
              <li>Arrays for storing game scores or user data</li>
              <li>Linked Lists for implementing undo/redo functionality</li>
              <li>Stacks for managing function calls</li>
              <li>Queues for handling asynchronous tasks</li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Pro Tips</h3>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>Always consider time complexity when choosing a data structure</li>
                <li>Use built-in implementations when available</li>
                <li>Consider memory usage for large datasets</li>
                <li>Test edge cases in your implementations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <p className="mb-6">
              Practice implementing these data structures in your preferred programming language. 
              Start with simple arrays and work your way up to more complex structures like trees and graphs.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="#" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Understanding Algorithm Complexity</h4>
                <p className="text-gray-600 text-sm">A practical guide to analyzing and optimizing your code.</p>
              </Link>
              <Link href="#" className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">Clean Code Principles</h4>
                <p className="text-gray-600 text-sm">Write maintainable and efficient code.</p>
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
} 