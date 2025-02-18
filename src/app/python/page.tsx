'use client'

import React, { Suspense } from 'react'
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
    { title: "Project: Simple Calculator", href: "#project" },
    { title: "Exercises", href: "#exercises" },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-white">
        <NavMenu />
        <main className="p-8 max-w-4xl mx-auto">
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

          {/* Add sections here similar to the C++ tutorial */}
        </main>
      </div>
    </Suspense>
  );
} 