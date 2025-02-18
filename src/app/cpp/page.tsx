'use client'

import React from 'react'
import NavMenu from '../components/NavMenu'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function CppTutorial() {
  return (
    <>
      <NavMenu />
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
            Welcome to this introductory C++ programming tutorial. This guide covers the fundamental concepts
            required for ECT 124, focusing on basic programming concepts and practical examples.
          </p>
        </div>

        <Tabs defaultValue="datatypes" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="datatypes">Data Types</TabsTrigger>
            <TabsTrigger value="reserved">Reserved Words</TabsTrigger>
            <TabsTrigger value="statements">Statements</TabsTrigger>
            <TabsTrigger value="io">Input/Output</TabsTrigger>
            <TabsTrigger value="control">Control Flow</TabsTrigger>
            <TabsTrigger value="loops">Loops</TabsTrigger>
          </TabsList>

          {/* Data Types Tab */}
          <TabsContent value="datatypes" className="space-y-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Data Types in C++</h2>
              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">C++ Data Type Categories:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border p-3 rounded bg-blue-50">
                      <h4 className="font-semibold mb-2">Primitive Types</h4>
                      <ul className="list-disc list-inside">
                        <li><code>int</code> - Integers</li>
                        <li><code>char</code> - Characters</li>
                        <li><code>float</code> - Floating point</li>
                        <li><code>double</code> - Double precision</li>
                      </ul>
                    </div>
                    <div className="border p-3 rounded bg-green-50">
                      <h4 className="font-semibold mb-2">Derived Types</h4>
                      <ul className="list-disc list-inside">
                        <li><code>arrays</code> - Collections</li>
                        <li><code>pointers</code> - Memory addresses</li>
                        <li><code>functions</code> - Code blocks</li>
                      </ul>
                    </div>
                    <div className="border p-3 rounded bg-yellow-50">
                      <h4 className="font-semibold mb-2">User-Defined</h4>
                      <ul className="list-disc list-inside">
                        <li><code>class</code> - Custom types</li>
                        <li><code>structure</code> - Data grouping</li>
                        <li><code>union</code> - Shared memory</li>
                        <li><code>enum</code> - Constants</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Working with ASCII Values</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    // Character variables
    char letter1 = 'd';    // Direct character
    char letter2 = 100;    // ASCII value
    
    // Display both character and ASCII values
    cout << "letter1 (char): " << letter1 << endl;
    cout << "letter1 (ASCII): " << (int)letter1 << endl;
    cout << "letter2 (char): " << letter2 << endl;
    cout << "letter2 (ASCII): " << (int)letter2 << endl;
    
    return 0;
}`}</code>
                  </pre>
                  <p className="mt-2 text-gray-600">Output:</p>
                  <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                    <code>{`letter1 (char): d
letter1 (ASCII): 100
letter2 (char): d
letter2 (ASCII): 100`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Simple Data Type Examples</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    // Integer type
    int age = 20;
    
    // Floating-point type
    float height = 1.75;
    
    // Character type
    char grade = 'A';
    
    // Double type
    double pi = 3.14159;
    
    // Display values and sizes
    cout << "Age: " << age << " (Size: " << sizeof(age) << " bytes)" << endl;
    cout << "Height: " << height << " (Size: " << sizeof(height) << " bytes)" << endl;
    cout << "Grade: " << grade << " (Size: " << sizeof(grade) << " byte)" << endl;
    cout << "Pi: " << pi << " (Size: " << sizeof(pi) << " bytes)" << endl;
    
    return 0;
}`}</code>
                  </pre>
                  <p className="mt-2 text-gray-600">Output:</p>
                  <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                    <code>{`Age: 20 (Size: 4 bytes)
Height: 1.75 (Size: 4 bytes)
Grade: A (Size: 1 byte)
Pi: 3.14159 (Size: 8 bytes)`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Practice Exercise</h4>
                  <p>Write a program that:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Declares variables using different data types</li>
                    <li>Assigns values to these variables</li>
                    <li>Displays both the values and their sizes using sizeof()</li>
                    <li>Converts a character to its ASCII value and back</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold mb-2 text-blue-800">📚 Additional Study Materials</h4>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <a href="/api/pdf?file=Week 1 S1 E1 ECT 124_W01.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 1 (S1, E1) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Introduction to fundamental C++ programming concepts including variable declarations, basic data types, and memory allocation. The module covers the implementation of primitive data structures, understanding of memory management principles, and proper syntax for variable initialization. Additionally, it encompasses the setup and configuration of the development environment, compiler installation, and basic command line operations for program compilation and execution.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Reserved Words Tab */}
          <TabsContent value="reserved" className="space-y-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Reserved Words in C++</h2>
              <p className="mb-4">Learn about important keywords and their functions in C++:</p>
              
              <div className="space-y-6">
                {/* Matching Exercise */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Match Reserved Words with Their Functions:</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="font-semibold">Reserved Words:</p>
                      <ul className="list-disc list-inside">
                        <li><code>if</code></li>
                        <li><code>while</code></li>
                        <li><code>return</code></li>
                        <li><code>void</code></li>
                        <li><code>break</code></li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Functions:</p>
                      <ul className="list-disc list-inside">
                        <li>Used for conditional execution</li>
                        <li>Indicates no return value</li>
                        <li>Exits from a loop or switch</li>
                        <li>Returns value from function</li>
                        <li>Used for loop iteration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Common Reserved Words */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Categories of Reserved Words:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Data Types</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code>int</code> - Integer type</li>
                        <li><code>float</code> - Floating-point type</li>
                        <li><code>char</code> - Character type</li>
                        <li><code>double</code> - Double precision float</li>
                        <li><code>void</code> - No type</li>
                        <li><code>bool</code> - Boolean type</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Control Flow</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li><code>if</code> - Conditional statement</li>
                        <li><code>else</code> - Alternative condition</li>
                        <li><code>switch</code> - Multiple choice decision</li>
                        <li><code>case</code> - Switch case label</li>
                        <li><code>break</code> - Exit loop/switch</li>
                        <li><code>continue</code> - Skip to next iteration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Example with Multiple Reserved Words */}
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Identifying Reserved Words in Code</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`// Example program using multiple reserved words
#include <iostream>
using namespace std;

// Function using void (reserved word)
void displayMessage() {
    cout << "Hello from function!" << endl;
}

// Function using int (reserved word)
int calculateSum(int a, int b) {
    // if and return are reserved words
    if (a < 0 || b < 0) {
        return 0;
    }
    return a + b;
}

int main() {  // int and main are reserved words
    int number = 5;  // int is a reserved word
    
    if (number > 0) {  // if is a reserved word
        cout << "Positive number" << endl;
    } else {  // else is a reserved word
        cout << "Non-positive number" << endl;
    }
    
    return 0;  // return is a reserved word
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Important Notes:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reserved words are case-sensitive</li>
                    <li>Cannot be used as variable names</li>
                    <li>Have special meaning in the language</li>
                    <li>Cannot be redefined</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Practice Exercise</h4>
                  <p>Identify all reserved words in this code:</p>
                  <pre className="bg-black text-white p-3 rounded mt-2">
                    <code>{`void checkNumber(int num) {
    if (num > 0) {
        while (num > 10) {
            num = num - 1;
        }
        return;
    } else {
        return;
    }
}`}</code>
                  </pre>
                  <p className="mt-2">List the reserved words and their purpose in the code above.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold mb-2 text-blue-800">📚 Additional Study Materials</h4>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <a href="/api/pdf?file=Week 2 S2 E1 ECT 124_W02.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 2 (S2, E1) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Comprehensive examination of C++ reserved keywords and their implementation in program structure. The material covers the syntactic and semantic properties of fundamental keywords such as int, double, void, and const, along with their memory implications and usage constraints.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Statements Tab */}
          <TabsContent value="statements" className="space-y-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-4">C++ Statements</h2>
              <p className="mb-4">Learn to identify and use different types of statements in C++:</p>
              
              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Declaration Statements</h3>
                  <p className="mb-4">Used to declare variables before they are used in the program. Always include meaningful comments to explain the purpose.</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`// Declaration statements with descriptive comments
int age;              // Stores student&apos;s age
double grade;         // Holds student&apos;s grade
char section = &apos;A&apos;;    // Student&apos;s class section
string name;          // Student&apos;s full name

// Constants declaration
const double PI = 3.14159;  // Mathematical constant
const int MAX_STUDENTS = 30;  // Maximum class size

// Array declarations
int scores[5];        // Array to store test scores
double weights[3];    // Assignment weights`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Executable Statements</h3>
                  <p className="mb-4">Perform actions like calculations, assignments, and input/output operations. Include comments to explain complex operations.</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`// Input statements
cout << "Enter age: ";    // Prompt for age
cin >> age;              // Read age from keyboard

// Assignment statements
grade = 85.5;            // Assign grade directly
name = "John Smith";     // Assign string value

// Calculation statements
double average;          // Declare variable for average
average = (grade1 + grade2) / 2;  // Calculate average

// Output statements
cout << "Average: " << average << endl;  // Display result`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Student Grade Calculator Example</h4>
                  <p className="mb-2">This example shows both declaration and executable statements working together:</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Declaration statements
    string studentName;    // Student&apos;s full name
    int quiz1, quiz2;     // Quiz scores
    double average;       // Average score
    char grade;          // Final letter grade
    
    // Executable statements - Input
    cout << "Enter student name: ";
    getline(cin, studentName);    // Read full name
    
    cout << "Enter quiz 1 score: ";
    cin >> quiz1;               // Read first quiz score
    
    cout << "Enter quiz 2 score: ";
    cin >> quiz2;               // Read second quiz score
    
    // Executable statements - Calculations
    average = (quiz1 + quiz2) / 2.0;  // Calculate average
    
    // Executable statements - Grade determination
    if (average >= 90) {
        grade = &apos;A&apos;;
    } else if (average >= 80) {
        grade = &apos;B&apos;;
    } else if (average >= 70) {
        grade = &apos;C&apos;;
    } else {
        grade = &apos;F&apos;;
    }
    
    // Executable statements - Output
    cout << "\nStudent Grade Report" << endl;
    cout << "Name: " << studentName << endl;
    cout << "Average Score: " << average << endl;
    cout << "Grade: " << grade << endl;
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Practice Exercise</h4>
                  <p>Identify the type of each statement in this program:</p>
                  <pre className="bg-black text-white p-3 rounded mt-2">
                    <code>{`int main() {
    // Identify each statement type
    double price;         // Statement type: ?
    int quantity = 10;    // Statement type: ?
    double total;         // Statement type: ?
    
    cout << "Enter price: ";     // Statement type: ?
    cin >> price;               // Statement type: ?
    
    total = price * quantity;   // Statement type: ?
    
    cout << "Total: $" << total;  // Statement type: ?
    return 0;                     // Statement type: ?
}`}</code>
                  </pre>
                  <p className="mt-2">For each line, determine if it is a declaration statement or an executable statement.</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold mb-2 text-blue-800">📚 Additional Study Materials</h4>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <a href="/api/pdf?file=Week 3 S3 E2 ECT 124_W03.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 3 (S3, E2) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Detailed examination of input/output operations in C++, including stream manipulation, formatting, and error handling. The module covers console I/O, file I/O, and string stream operations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Input/Output Tab */}
          <TabsContent value="io" className="space-y-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Input and Output in C++</h2>
              <p className="mb-4">Master the use of input and output streams in C++:</p>
              
              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Input/Output Stream Objects</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li><code>cout</code> - Standard output stream (Console OUTput)</li>
                    <li><code>cin</code> - Standard input stream (Console INput)</li>
                    <li><code>endl</code> - Ends the current line and flushes the stream</li>
                    <li><code>&lt;&lt;</code> - Output stream operator (insertion)</li>
                    <li><code>&gt;&gt;</code> - Input stream operator (extraction)</li>
                  </ul>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Basic Output with cout</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    // Basic text output
    cout << "Welcome to C++ Programming!" << endl;
    
    // Output with variables
    int studentId = 12345;
    string name = "John";
    
    cout << "Student ID: " << studentId << endl;
    cout << "Name: " << name << endl;
    
    // Formatting output
    cout << "-------------------------" << endl;
    cout << "ID: " << studentId << "\tName: " << name << endl;
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Input with cin</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    int age;
    double height;
    
    // Input with prompts
    cout << "Enter your age: ";     // Prompt for age
    cin >> age;                     // Read age
    
    cout << "Enter height (m): ";   // Prompt for height
    cin >> height;                  // Read height
    
    // Display entered values
    cout << "\nYou entered:" << endl;
    cout << "Age: " << age << " years" << endl;
    cout << "Height: " << height << " meters" << endl;
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Student Information System</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
#include <string>
using namespace std;

int main() {
    // Variable declarations
    string fullName;
    int studentId;
    double quiz1, quiz2;
    
    // Clear input buffer
    cin.ignore();
    
    // Get student information
    cout << "Enter full name: ";
    getline(cin, fullName);         // Read full name with spaces
    
    cout << "Enter student ID: ";
    cin >> studentId;               // Read student ID
    
    // Get quiz scores
    cout << "Enter Quiz 1 score: ";
    cin >> quiz1;                   // Read first quiz score
    
    cout << "Enter Quiz 2 score: ";
    cin >> quiz2;                   // Read second quiz score
    
    // Calculate average
    double average = (quiz1 + quiz2) / 2.0;
    
    // Display formatted output
    cout << "\n=== Student Report ===" << endl;
    cout << "Name: " << fullName << endl;
    cout << "ID: " << studentId << endl;
    cout << "Quiz 1: " << quiz1 << endl;
    cout << "Quiz 2: " << quiz2 << endl;
    cout << "Average: " << average << endl;
    cout << "===================" << endl;
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Important Input/Output Tips:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Always provide clear prompts for user input</li>
                    <li>Use <code>cin.ignore()</code> before <code>getline()</code> when mixing <code>cin</code> and <code>getline</code></li>
                    <li>Format output to make it readable</li>
                    <li>Include units in prompts and output where applicable</li>
                    <li>Validate input when necessary</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Practice Exercise</h4>
                  <p>Create a program that:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Asks for the user&apos;s full name using getline</li>
                    <li>Prompts for their age and height</li>
                    <li>Displays the information in a formatted table</li>
                    <li>Includes appropriate units in the output</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold mb-2 text-blue-800">📚 Additional Study Materials</h4>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <a href="/api/pdf?file=Week 3 S3 E2 ECT 124_W03.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 3 (S3, E2) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Detailed examination of input/output operations in C++, including stream manipulation, formatting, and error handling. The module covers console I/O, file I/O, and string stream operations.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Control Flow Tab */}
          <TabsContent value="control" className="space-y-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Control Flow in C++</h2>
              <p className="mb-4">Learn how to control program flow using conditional statements:</p>
              
              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">If Statements</h3>
                  <p className="mb-2">Used for making decisions in your program:</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    // Simple if statement
    int age;
    cout << "Enter your age: ";  // Prompt for age
    cin >> age;                  // Read age from user
    
    // Check age and display appropriate message
    if (age >= 18) {
        cout << "You are an adult" << endl;
    } else {
        cout << "You are a minor" << endl;
    }
    
    // Multiple conditions using else if
    int score;
    cout << "Enter test score (0-100): ";  // Prompt for score
    cin >> score;                          // Read score
    
    if (score >= 90) {                     // Check for A grade
        cout << "Grade: A" << endl;
    } else if (score >= 80) {             // Check for B grade
        cout << "Grade: B" << endl;
    } else if (score >= 70) {             // Check for C grade
        cout << "Grade: C" << endl;
    } else {                              // All other scores
        cout << "Grade: F" << endl;
    }
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Switch Statement</h3>
                  <p className="mb-2">Used for multiple choice decisions:</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    int choice;
    
    // Display menu
    cout << "Simple Calculator" << endl;
    cout << "1. Add" << endl;
    cout << "2. Subtract" << endl;
    cout << "3. Multiply" << endl;
    cout << "4. Divide" << endl;
    cout << "Enter choice (1-4): ";
    
    cin >> choice;  // Read user&apos;s choice
    
    // Declare variables for numbers
    double num1, num2, result;
    
    // Get input numbers
    cout << "Enter first number: ";
    cin >> num1;
    cout << "Enter second number: ";
    cin >> num2;
    
    // Process choice using switch
    switch (choice) {
        case 1:  // Addition
            result = num1 + num2;
            cout << num1 << " + " << num2 << " = " << result << endl;
            break;
            
        case 2:  // Subtraction
            result = num1 - num2;
            cout << num1 << " - " << num2 << " = " << result << endl;
            break;
            
        case 3:  // Multiplication
            result = num1 * num2;
            cout << num1 << " * " << num2 << " = " << result << endl;
            break;
            
        case 4:  // Division
            if (num2 != 0) {  // Check for division by zero
                result = num1 / num2;
                cout << num1 << " / " << num2 << " = " << result << endl;
            } else {
                cout << "Error: Cannot divide by zero" << endl;
            }
            break;
            
        default:  // Invalid choice
            cout << "Invalid choice" << endl;
    }
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Grade Calculator Example</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "Enter score (0-100): ";
    cin >> score;
    
    if (score >= 0 && score <= 100) {
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
    } else {
        cout << "Invalid score" << endl;
    }
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Menu Selection Example</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    cout << "Calculator Menu:" << endl;
    cout << "1. Add" << endl;
    cout << "2. Subtract" << endl;
    cout << "3. Multiply" << endl;
    cout << "4. Divide" << endl;
    
    int choice;
    cout << "Enter choice (1-4): ";
    cin >> choice;
    
    int num1, num2;
    cout << "Enter two numbers: ";
    cin >> num1 >> num2;
    
    switch (choice) {
        case 1:
            cout << "Sum: " << num1 + num2 << endl;
            break;
        case 2:
            cout << "Difference: " << num1 - num2 << endl;
            break;
        case 3:
            cout << "Product: " << num1 * num2 << endl;
            break;
        case 4:
            if (num2 != 0) {
                cout << "Quotient: " << num1 / num2 << endl;
            } else {
                cout << "Cannot divide by zero" << endl;
            }
            break;
        default:
            cout << "Invalid choice" << endl;
    }
    
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Practice Exercise</h4>
                  <p>Create a program that:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Asks for a number between 1 and 100</li>
                    <li>Uses if statements to check if it&apos;s:</li>
                    <ul className="list-disc list-inside ml-8">
                      <li>Even or odd</li>
                      <li>Positive, negative, or zero</li>
                      <li>Divisible by both 3 and 5</li>
                    </ul>
                    <li>Displays appropriate messages for each condition</li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold mb-2 text-blue-800">📚 Additional Study Materials</h4>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <a href="/api/pdf?file=Week 4 S4 E3 ECT 124_W04.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 4 (S4, E3) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Comprehensive analysis of control flow structures in C++, with emphasis on if statements, if-else constructs, and decision-making structures. The module examines implementation of control structures, optimization techniques, and best practices.
                      </p>
                    </li>
                    <li>
                      <a href="/api/pdf?file=Week 5 S5 E3 ECT 124_W05.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 5 (S5, E3) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Detailed coverage of control structures using switch statements in C++. The module focuses on implementing multiple-choice decision structures, case handling, and best practices for switch statement usage.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Loops Tab */}
          <TabsContent value="loops" className="space-y-4">
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-4">Loops in C++</h2>
              <p className="mb-4">Learn how to use loops for repetitive tasks and calculations:</p>
              
              <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">For Loop</h3>
                  <p className="mb-2">Used when you know the exact number of iterations:</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    // Calculate sum of first 5 numbers
    int sum = 0;  // Initialize sum to 0
    
    // Loop from 1 to 5
    for (int i = 1; i <= 5; i++) {
        sum += i;  // Add current number to sum
        // Display current number and running sum
        cout << "Number: " << i << ", Sum so far: " << sum << endl;
    }
    
    // Display final sum
    cout << "Final sum: " << sum << endl;
    
    return 0;
}`}</code>
                  </pre>
                  <p className="mt-2 text-gray-600">Output:</p>
                  <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                    <code>{`Number: 1, Sum so far: 1
Number: 2, Sum so far: 3
Number: 3, Sum so far: 6
Number: 4, Sum so far: 10
Number: 5, Sum so far: 15
Final sum: 15`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">While Loop</h3>
                  <p className="mb-2">Used when the number of iterations depends on a condition:</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    // Calculate factorial of a number
    int number;
    
    // Get input from user
    cout << "Enter a positive number: ";
    cin >> number;
    
    // Initialize variables
    int factorial = 1;
    int counter = number;
    
    // Calculate factorial using while loop
    while (counter > 0) {
        factorial *= counter;  // Multiply factorial by counter
        cout << counter;      // Display current number
        
        if (counter > 1) {
            cout << " x ";    // Display multiplication symbol
        }
        
        counter--;           // Decrement counter
    }
    
    // Display result
    cout << " = " << factorial << endl;
    
    return 0;
}`}</code>
                  </pre>
                  <p className="mt-2 text-gray-600">Example Output (for input 5):</p>
                  <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                    <code>{`Enter a positive number: 5
5 x 4 x 3 x 2 x 1 = 120`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Do-While Loop</h3>
                  <p className="mb-2">Used when you want to execute the loop body at least once:</p>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
#include <cmath>  // For pow() function
using namespace std;

int main() {
    int number;
    char choice;
    
    do {
        // Get input from user
        cout << "Enter a number between 5 and 80: ";
        cin >> number;
        
        // Validate input
        if (number >= 5 && number <= 80) {
            // Calculate and display cube using pow()
            double cube = pow(number, 3);
            cout << "Cube of " << number << " is: " << cube << endl;
        } else {
            cout << "Number must be between 5 and 80" << endl;
        }
        
        // Ask if user wants to continue
        cout << "Calculate another cube? (y/n): ";
        cin >> choice;
        
    } while (choice == 'y' || choice == 'Y');
    
    cout << "Program ended" << endl;
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Finding Numbers Divisible by 5</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    
    cout << "Numbers from 1 to 50 divisible by 5:" << endl;
    
    for (int i = 1; i <= 50; i++) {
        if (i % 5 == 0) {
            cout << i << " ";
            sum += i;
        }
    }
    
    cout << "\nSum of these numbers: " << sum << endl;
    return 0;
}`}</code>
                  </pre>
                  <p className="mt-2 text-gray-600">Output:</p>
                  <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                    <code>{`Numbers from 1 to 50 divisible by 5:
5 10 15 20 25 30 35 40 45 50
Sum of these numbers: 275`}</code>
                  </pre>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cube Calculator</h4>
                  <pre className="bg-black text-white p-3 rounded">
                    <code>{`#include <iostream>
using namespace std;

int main() {
    int number;
    
    while (true) {
        cout << "Enter a number between 5 and 80 (0 to exit): ";
        cin >> number;
        
        if (number == 0) {
            break;
        }
        
        if (number >= 5 && number <= 80) {
            cout << "Cube of " << number << " is: " 
                 << (number * number * number) << endl;
        } else {
            cout << "Number must be between 5 and 80" << endl;
        }
    }
    
    cout << "Program ended" << endl;
    return 0;
}`}</code>
                  </pre>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 text-yellow-800">Practice Exercises</h4>
                  <p>Create programs that:</p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>Use a for loop to calculate the sum of even numbers from 2 to 20</li>
                    <li>Use a while loop to find the first 5 numbers divisible by both 3 and 4</li>
                    <li>Use a do-while loop to create an interactive menu that:
                      <ul className="list-disc list-inside ml-8">
                        <li>Displays options for different calculations</li>
                        <li>Performs the selected calculation</li>
                        <li>Asks if the user wants to continue</li>
                      </ul>
                    </li>
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg mt-8">
                  <h4 className="font-semibold mb-2 text-blue-800">📚 Additional Study Materials</h4>
                  <ul className="list-disc list-inside space-y-4">
                    <li>
                      <a href="/api/pdf?file=Week 6 S6 E4 ECT 124_W06.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 6 (S6, E4) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        In-depth examination of iterative structures in C++, focusing on FOR and DO WHILE loops. The module covers loop initialization, condition testing, and iteration mechanisms, including performance considerations and optimization techniques.
                      </p>
                    </li>
                    <li>
                      <a href="/api/pdf?file=Week 7 S7 E4 ECT 124_W07.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 underline">
                        Week 7 (S7, E4) ECT 124
                      </a>
                      <p className="text-sm text-gray-600 ml-5 mt-1">
                        Advanced study of loop structures with emphasis on nested loops and complex iteration patterns in C++. The module provides detailed analysis of loop implementation, optimization strategies, and practical applications.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}