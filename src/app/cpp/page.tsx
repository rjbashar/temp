'use client'

import React from 'react'
import CodeExample from './components/CodeExample'
// Import other section components

export default function CppTutorial() {
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
    { title: "Your First C++ Program", href: "#first-program" },
    { title: "Variables and Data Types", href: "#variables" },
    { title: "Basic Operations and Expressions", href: "#operations" },
    { title: "Control Structures: Conditionals", href: "#conditionals" },
    { title: "Control Structures: Loops", href: "#loops" },
    { title: "Project: Text-Based Calculator", href: "#project" },
    { title: "Exercises", href: "#exercises" },
  ];

  return (
    <>
      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Higher Colleges of Technology</h1>
          <h2 className="text-3xl font-semibold mb-4">Faculty of Engineering</h2>
          <h3 className="text-2xl mb-6">Programming with C++: A Hands-On Lab Tutorial</h3>
          <div className="text-gray-600">
            <p className="mb-2">ECT 124 | Created by Dr. Bashar Alrjoub</p>
            <p>February 17, 2024</p>
          </div>
        </div>
        
        <div className="mb-8">
          <p className="text-lg mb-4">
            Welcome to this comprehensive, hands-on introductory C++ lab tutorial. 
            This guide is designed to help you learn C++ programming through practical examples and exercises.
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
            In this C++ programming tutorial, you will learn:
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
                <li>Code::Blocks IDE (recommended for beginners)</li>
                <li>OR Visual Studio Code with C++ extensions</li>
                <li>C++ Compiler (included with Code::Blocks)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Installation Steps:</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>Download Code::Blocks from <a href="http://www.codeblocks.org/downloads" className="text-blue-600 hover:underline">codeblocks.org</a></li>
                <li>Choose the version with MinGW compiler included</li>
                <li>Run the installer and follow the prompts</li>
                <li>Verify installation by creating a new project</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="first-program" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Your First C++ Program</h2>
          <p className="mb-4">Let&apos;s explore different ways to write basic C++ programs:</p>
          
          <div className="space-y-6">
            {/* Example 1: Hello World */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic Output Program</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}</code>
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
                <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Line 1" << endl;
    cout << "Line 2" << endl;
    cout << "Line 3" << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Line 1
Line 2
Line 3`}</code>
              </pre>
            </div>

            {/* Example 3: Basic Input */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Getting User Input</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    string name;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Interaction:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter your name: John
Hello, John!`}</code>
              </pre>
            </div>

            {/* Example 4: Comments */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">4. Using Comments</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    // This is a single-line comment
    
    /* This is a multi-line comment
       It can span multiple lines */
    
    cout << "Program with comments" << endl;
    return 0;
}`}</code>
              </pre>
            </div>

            {/* Example 5: Basic Calculations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5. Simple Calculator</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int num1, num2;
    
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    
    cout << "Sum: " << num1 + num2 << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Interaction:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter first number: 5
Enter second number: 3
Sum: 8`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="variables" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Variables and Data Types</h2>
          <p className="mb-4">Let&apos;s explore different variable types and how to use them:</p>
          
          <div className="space-y-6">
            {/* Example 1: Basic Data Types */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic Data Types</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int age = 20;
    float height = 1.75;
    char grade = 'A';
    bool isStudent = true;
    
    cout << "Age: " << age << endl;
    cout << "Height: " << height << " meters" << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is Student: " << isStudent << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Age: 20
Height: 1.75 meters
Grade: A
Is Student: 1`}</code>
              </pre>
            </div>

            {/* Example 2: Working with Numbers */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Number Variables</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int whole = 42;
    double decimal = 3.14159;
    long long bigNumber = 1234567890;
    
    cout << "Whole number: " << whole << endl;
    cout << "Decimal number: " << decimal << endl;
    cout << "Big number: " << bigNumber << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Whole number: 42
Decimal number: 3.14159
Big number: 1234567890`}</code>
              </pre>
            </div>

            {/* Example 3: String Variables */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Working with Text</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "John";
    string lastName = "Doe";
    string fullName = firstName + " " + lastName;
    
    cout << "First name: " << firstName << endl;
    cout << "Last name: " << lastName << endl;
    cout << "Full name: " << fullName << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`First name: John
Last name: Doe
Full name: John Doe`}</code>
              </pre>
            </div>

            {/* Example 4: Constants */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">4. Using Constants</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    const int DAYS_IN_WEEK = 7;
    const string SCHOOL_NAME = "HCT";
    
    cout << "PI: " << PI << endl;
    cout << "Days in a week: " << DAYS_IN_WEEK << endl;
    cout << "School: " << SCHOOL_NAME << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`PI: 3.14159
Days in a week: 7
School: HCT`}</code>
              </pre>
            </div>

            {/* Example 5: Type Conversion */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5. Type Conversion</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int intNumber = 42;
    double doubleNumber = 42.87;
    
    // Converting double to int
    int convertedToInt = (int)doubleNumber;
    
    // Converting int to double
    double convertedToDouble = (double)intNumber;
    
    cout << "Original double: " << doubleNumber << endl;
    cout << "Converted to int: " << convertedToInt << endl;
    cout << "Original int: " << intNumber << endl;
    cout << "Converted to double: " << convertedToDouble << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Original double: 42.87
Converted to int: 42
Original int: 42
Converted to double: 42.0`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="operations" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Basic Operations and Expressions</h2>
          <p className="mb-4">Let&apos;s explore different types of operations in C++:</p>
          
          <div className="space-y-6">
            {/* Example 1: Arithmetic Operations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic Arithmetic</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;
    
    cout << "Addition: " << a + b << endl;        // 13
    cout << "Subtraction: " << a - b << endl;     // 7
    cout << "Multiplication: " << a * b << endl;  // 30
    cout << "Division: " << a / b << endl;        // 3
    cout << "Modulus: " << a % b << endl;         // 1
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3
Modulus: 1`}</code>
              </pre>
            </div>

            {/* Example 2: Assignment Operations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Assignment Operators</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int number = 10;
    
    cout << "Original: " << number << endl;
    
    number += 5;  // Add and assign
    cout << "After += 5: " << number << endl;
    
    number -= 3;  // Subtract and assign
    cout << "After -= 3: " << number << endl;
    
    number *= 2;  // Multiply and assign
    cout << "After *= 2: " << number << endl;
    
    number /= 4;  // Divide and assign
    cout << "After /= 4: " << number << endl;
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Original: 10
After += 5: 15
After -= 3: 12
After *= 2: 24
After /= 4: 6`}</code>
              </pre>
            </div>

            {/* Example 3: Increment/Decrement */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Increment and Decrement</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int count = 5;
    
    cout << "Original: " << count << endl;
    
    count++;  // Increment
    cout << "After increment: " << count << endl;
    
    count--;  // Decrement
    cout << "After decrement: " << count << endl;
    
    cout << "Pre-increment: " << ++count << endl;
    cout << "Pre-decrement: " << --count << endl;
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Original: 5
After increment: 6
After decrement: 5
Pre-increment: 6
Pre-decrement: 5`}</code>
              </pre>
            </div>

            {/* Example 4: Comparison Operations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">4. Comparison Operators</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int x = 5, y = 10;
    
    cout << "x = " << x << ", y = " << y << endl;
    cout << "x < y: " << (x < y) << endl;    // 1 (true)
    cout << "x > y: " << (x > y) << endl;    // 0 (false)
    cout << "x == y: " << (x == y) << endl;  // 0 (false)
    cout << "x != y: " << (x != y) << endl;  // 1 (true)
    cout << "x <= y: " << (x <= y) << endl;  // 1 (true)
    cout << "x >= y: " << (x >= y) << endl;  // 0 (false)
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`x = 5, y = 10
x < y: 1
x > y: 0
x == y: 0
x != y: 1
x <= y: 1
x >= y: 0`}</code>
              </pre>
            </div>

            {/* Example 5: Logical Operations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5. Logical Operators</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    bool isStudent = true;
    bool hasID = true;
    bool isLate = false;
    
    // AND operator
    cout << "Can enter class (Student AND has ID): " 
         << (isStudent && hasID) << endl;
    
    // OR operator
    cout << "Needs warning (Late OR no ID): " 
         << (isLate || !hasID) << endl;
    
    // NOT operator
    cout << "Not a student: " 
         << !isStudent << endl;
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Can enter class (Student AND has ID): 1
Needs warning (Late OR no ID): 0
Not a student: 0`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="conditionals" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Control Structures: Conditionals</h2>
          <p className="mb-4">Let&apos;s explore how to make decisions in C++ programs:</p>
          
          <div className="space-y-6">
            {/* Example 1: Simple If Statement */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic If Statement</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;
    
    if (age >= 18) {
        cout << "You are an adult" << endl;
    }
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter your age: 20
You are an adult`}</code>
              </pre>
            </div>

            {/* Example 2: If-Else Statement */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. If-Else Statement</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Enter a number: ";
    cin >> number;
    
    if (number % 2 == 0) {
        cout << number << " is even" << endl;
    } else {
        cout << number << " is odd" << endl;
    }
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter a number: 7
7 is odd`}</code>
              </pre>
            </div>

            {/* Example 3: Multiple Conditions */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Multiple Conditions (if-else if-else)</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "Enter your score (0-100): ";
    cin >> score;
    
    if (score >= 90) {
        cout << "Grade: A" << endl;
    } else if (score >= 80) {
        cout << "Grade: B" << endl;
    } else if (score >= 70) {
        cout << "Grade: C" << endl;
    } else if (score >= 60) {
        cout << "Grade: D" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter your score (0-100): 85
Grade: B`}</code>
              </pre>
            </div>

            {/* Example 4: Nested If Statements */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">4. Nested If Statements</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    bool hasID = true;
    bool isStudent = true;
    
    if (hasID) {
        if (isStudent) {
            cout << "Welcome to the student section!" << endl;
        } else {
            cout << "Please go to the visitors section." << endl;
        }
    } else {
        cout << "Please get an ID first." << endl;
    }
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>Welcome to the student section!</code>
              </pre>
            </div>

            {/* Example 5: Using Switch Statement */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5. Switch Statement</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int day;
    cout << "Enter day number (1-7): ";
    cin >> day;
    
    switch (day) {
        case 1:
            cout << "Sunday" << endl;
            break;
        case 2:
            cout << "Monday" << endl;
            break;
        case 3:
            cout << "Tuesday" << endl;
            break;
        case 4:
            cout << "Wednesday" << endl;
            break;
        case 5:
            cout << "Thursday" << endl;
            break;
        case 6:
            cout << "Friday" << endl;
            break;
        case 7:
            cout << "Saturday" << endl;
            break;
        default:
            cout << "Invalid day number" << endl;
    }
    
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter day number (1-7): 3
Tuesday`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="loops" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Control Structures: Loops</h2>
          <p className="mb-4">Let&apos;s explore different types of loops in C++:</p>
          
          <div className="space-y-6">
            {/* Example 1: For Loop Basic */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic For Loop</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    // Print numbers from 1 to 5
    for(int i = 1; i <= 5; i++) {
        cout << "Number: " << i << endl;
    }
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Number: 1
Number: 2
Number: 3
Number: 4
Number: 5`}</code>
              </pre>
            </div>

            {/* Example 2: While Loop */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. While Loop</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int count = 1;
    
    while(count <= 3) {
        cout << "Loop iteration " << count << endl;
        count++;
    }
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Loop iteration 1
Loop iteration 2
Loop iteration 3`}</code>
              </pre>
            </div>

            {/* Example 3: Do-While Loop */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Do-While Loop</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    int number;
    
    do {
        cout << "Enter a number (0 to exit): ";
        cin >> number;
        
        if(number != 0) {
            cout << "You entered: " << number << endl;
        }
    } while(number != 0);
    
    cout << "Program ended" << endl;
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Example Interaction:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Enter a number (0 to exit): 5
You entered: 5
Enter a number (0 to exit): 3
You entered: 3
Enter a number (0 to exit): 0
Program ended`}</code>
              </pre>
            </div>

            {/* Example 4: Nested Loops */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">4. Nested Loops</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    // Print a simple pattern
    for(int i = 1; i <= 3; i++) {
        for(int j = 1; j <= i; j++) {
            cout << "* ";
        }
        cout << endl;
    }
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`* 
* * 
* * *`}</code>
              </pre>
            </div>

            {/* Example 5: Loop with Break and Continue */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5. Using Break and Continue</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`#include <iostream>
using namespace std;

int main() {
    for(int i = 1; i <= 5; i++) {
        if(i == 2) {
            cout << "Skipping 2..." << endl;
            continue;  // Skip rest of this iteration
        }
        
        if(i == 4) {
            cout << "Found 4, stopping loop" << endl;
            break;     // Exit loop completely
        }
        
        cout << "Number: " << i << endl;
    }
    return 0;
}`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Number: 1
Skipping 2...
Number: 3
Found 4, stopping loop`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="project" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Project: Text-Based Calculator</h2>
          <p className="mb-4">Let&apos;s build a simple calculator that can perform basic operations:</p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Complete Calculator Program</h4>
            <pre className="bg-black text-white p-3 rounded">
              <code>{`#include <iostream>
using namespace std;

int main() {
    double num1, num2;
    char operation;
    bool continueCalculating = true;
    
    while(continueCalculating) {
        // Display menu
        cout << "\\nSimple Calculator" << endl;
        cout << "1. Addition (+)" << endl;
        cout << "2. Subtraction (-)" << endl;
        cout << "3. Multiplication (*)" << endl;
        cout << "4. Division (/)" << endl;
        cout << "5. Exit" << endl;
        
        // Get user choice
        cout << "\\nChoose operation (1-5): ";
        cin >> operation;
        
        // Exit if user chooses 5
        if(operation == '5') {
            cout << "Thank you for using the calculator!" << endl;
            break;
        }
        
        // Get numbers from user
        cout << "Enter first number: ";
        cin >> num1;
        cout << "Enter second number: ";
        cin >> num2;
        
        // Perform calculation based on choice
        switch(operation) {
            case '1':
                cout << num1 << " + " << num2 << " = " 
                     << num1 + num2 << endl;
                break;
            case '2':
                cout << num1 << " - " << num2 << " = " 
                     << num1 - num2 << endl;
                break;
            case '3':
                cout << num1 << " * " << num2 << " = " 
                     << num1 * num2 << endl;
                break;
            case '4':
                if(num2 != 0) {
                    cout << num1 << " / " << num2 << " = " 
                         << num1 / num2 << endl;
                } else {
                    cout << "Error: Cannot divide by zero!" << endl;
                }
                break;
            default:
                cout << "Invalid operation selected!" << endl;
        }
    }
    
    return 0;
}`}</code>
            </pre>
            <p className="mt-2 text-gray-600">Example Interaction:</p>
            <pre className="bg-gray-700 text-white p-2 rounded mt-1">
              <code>{`Simple Calculator
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Exit

Choose operation (1-5): 1
Enter first number: 10
Enter second number: 5
10 + 5 = 15

Simple Calculator
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Exit

Choose operation (1-5): 5
Thank you for using the calculator!`}</code>
            </pre>
          </div>
        </section>

        <section id="exercises" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Exercises</h2>
          <p className="mb-4">Practice these exercises to reinforce your learning:</p>

          <div className="space-y-6">
            {/* Exercise 1 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Exercise 1: Temperature Converter</h3>
              <p className="mb-2">Create a program that converts temperature between Celsius and Fahrenheit.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Ask user to input temperature value</li>
                <li>Ask user to choose conversion direction (C to F or F to C)</li>
                <li>Display the converted temperature</li>
              </ul>
            </div>

            {/* Exercise 2 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Exercise 2: Number Guessing Game</h3>
              <p className="mb-2">Create a simple number guessing game:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Generate a random number between 1 and 100</li>
                <li>Let user guess the number</li>
                <li>Tell user if guess is too high or too low</li>
                <li>Count number of attempts</li>
              </ul>
            </div>

            {/* Exercise 3 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Exercise 3: Simple ATM Machine</h3>
              <p className="mb-2">Create a program that simulates an ATM machine:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Start with a balance of 1000</li>
                <li>Allow deposits and withdrawals</li>
                <li>Show current balance</li>
                <li>Prevent withdrawals larger than balance</li>
              </ul>
            </div>

            {/* Exercise 4 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Exercise 4: Grade Calculator</h3>
              <p className="mb-2">Create a program that calculates final grades:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Input scores for assignments, midterm, and final</li>
                <li>Calculate weighted average</li>
                <li>Convert numerical grade to letter grade</li>
                <li>Display both numerical and letter grade</li>
              </ul>
            </div>

            {/* Exercise 5 */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Exercise 5: Pattern Printer</h3>
              <p className="mb-2">Create a program that prints patterns:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Ask user for pattern size</li>
                <li>Print different patterns (square, triangle, etc.)</li>
                <li>Use nested loops</li>
                <li>Allow user to choose pattern type</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 