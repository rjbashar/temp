'use client'

import React from 'react'
import NavMenu from '../components/NavMenu'

export default function PythonTutorial() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tableOfContents = [
    { title: "Review", href: "#review" },
    { title: "Setting Up Your Environment", href: "#setup" },
    { title: "Your First Python Program", href: "#first-program" },
    { title: "Variables and Data Types", href: "#variables" },
    { title: "Basic Operations and Expressions", href: "#operations" },
    { title: "Control Structures: Conditionals", href: "#conditionals" },
    { title: "Control Structures: Loops", href: "#loops" },
    { title: "Functions", href: "#functions" },
    { title: "Data Structures", href: "#data-structures" },
    { title: "Modules and Importing", href: "#modules" },
    { title: "File I/O Basics", href: "#file-io" },
    { title: "Project: Text-Based Calculator", href: "#project" },
    { title: "Exercises", href: "#exercises" },
  ];

  return (
    <>
      <NavMenu />
      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Higher Colleges of Technology</h1>
          <h2 className="text-3xl font-semibold mb-4">Faculty of Engineering</h2>
          <h3 className="text-2xl mb-6">Introduction to Python: A Hands-On Lab Tutorial</h3>
          <div className="text-gray-600">
            <p className="mb-2">EGN 1273 | Created by Dr. Bashar Alrjoub</p>
            <p>February 17, 2024</p>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            Welcome to this comprehensive, hands-on introductory Python lab tutorial. 
            This guide is designed to help you learn Python programming through practical examples and exercises.
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            {tableOfContents.map((item) => (
              <div key={item.href}>
                <a 
                  href={item.href}
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                  onClick={(e) => scrollToSection(e, item.href.substring(1))}
                >
                  {item.title}
                </a>
              </div>
            ))}
          </nav>
        </section>

        <section id="review" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Review</h2>
          <p className="mb-4">
            In this Python programming tutorial, you will learn:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Basic program structure and syntax</li>
            <li>How to work with variables and data types</li>
            <li>Using operators for calculations</li>
            <li>Making decisions with conditional statements</li>
            <li>Creating loops for repetitive tasks</li>
          </ul>
        </section>

        <section id="setup" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Setting Up Your Environment</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-3">Required Tools:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Python 3.x (latest version recommended)</li>
                <li>Visual Studio Code or PyCharm (recommended IDEs)</li>
                <li>Python extension for VS Code (if using VS Code)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Installation Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download Python from <a href="https://python.org/downloads" className="text-blue-600 hover:underline">python.org</a></li>
                <li>Install Python (make sure to check &quot;Add to PATH&quot;)</li>
                <li>Install VS Code or PyCharm</li>
                <li>Install Python extension in VS Code</li>
                <li>Verify installation by running Python in terminal</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="first-program" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Your First Python Program</h2>
          <p className="mb-4">Let&apos;s explore different ways to write basic Python programs:</p>
          
          <div className="space-y-6">
            {/* Example 1: Hello World */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic Output Program</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# Your first Python program
print("Hello, World!")
`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>Hello, World!</code>
              </pre>
            </div>

            {/* Example 2: Multiple Lines */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Multiple Line Output</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# Printing multiple lines
print("Line 1")
print("Line 2")
print("Line 3")
`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Line 1
Line 2
Line 3`}</code>
              </pre>
            </div>

            {/* Example 3: User Input */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Getting User Input</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# Getting input from user
name = input("Enter your name: ")
print(f"Hello, {name}!")
`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Interaction:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter your name: John
Hello, John!`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="variables" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Variables and Data Types</h2>
          <p className="mb-4">
            Let&apos;s explore different ways to use variables and understand data types:
          </p>

          <div className="space-y-6">
            {/* Example 1: Basic Variables */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Simple Variables</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# String variables
first_name = "John"
last_name = "Doe"

# Number variables
age = 25
height = 5.9

# Boolean variable
is_student = True

# Printing all variables
print("Full name:", first_name, last_name)
print("Age:", age)
print("Height:", height, "feet")
print("Is student?", is_student)`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Full name: John Doe
Age: 25
Height: 5.9 feet
Is student? True`}</code>
              </pre>
            </div>

            {/* Continue with all other examples... */}
          </div>
        </section>

        {/* Would you like me to continue with the rest of the sections? */}
      </main>
    </>
  );
} 