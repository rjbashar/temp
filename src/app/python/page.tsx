'use client'

import React from 'react'

export default function Home() {
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
      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Python Programming</h1>
          <h2 className="text-3xl font-semibold mb-4">A Hands-On Lab Tutorial</h2>
          <div className="text-gray-600">
            <p className="mb-2">EGN 1273 | Created by Dr. Bashar Alrjoub</p>
            <p>February 17, 2025</p>
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
            In this guide, you will:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Write your first Python programs</li>
            <li>Learn basic programming concepts</li>
            <li>Explore Python&apos;s core data structures</li>
            <li>Work on practical exercises</li>
          </ul>
        </section>

        <section id="setup" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Setting Up Your Environment</h2>
          <h3 className="text-xl font-semibold mb-3">What You Need:</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Python (version 3.x) - Download from <a href="https://python.org" className="text-blue-600 hover:underline">python.org</a></li>
            <li>A text editor or IDE (VS Code recommended)</li>
            <li>Terminal/Command Prompt access</li>
              </ul>
          
          <div className="bg-gray-100 p-4s rounded-lg mt-4">
            <h4 className="font-semibold mb-2">Check Your Installation:</h4>
            <pre className="bg-black text-white p-3 rounded">
              <code>python --version</code>
            </pre>
          </div>
        </section>

        <section id="first-program" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Your First Python Program</h2>
          <p className="mb-4">Let&apos;s start with some simple print statements:</p>
          
          <div className="space-y-6">
            {/* Example 1: Basic Print */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Simple Print Statement</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`print("Hello, World!")
print("Welcome to Python!")
print("Programming is fun!")`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Hello, World!
Welcome to Python!
Programming is fun!`}</code>
              </pre>
            </div>

            {/* Example 2: Print with Numbers */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Printing Numbers</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`print(42)
print(3.14)
print("The number is:", 42)
print("Pi is approximately:", 3.14)`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`42
3.14
The number is: 42
Pi is approximately: 3.14`}</code>
              </pre>
            </div>

            {/* Example 3: Print with Multiple Items */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Printing Multiple Items</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`name = "Alice"
age = 20
print("Name:", name, "Age:", age)
print(f"My name is {name} and I am {age} years old")  # f-string
print("My name is {} and I am {} years old".format(name, age))  # format method`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Name: Alice Age: 20
My name is Alice and I am 20 years old
My name is Alice and I am 20 years old`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="variables" className="mb-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200 border-b pb-2">Variables and Data Types</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
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

            {/* Practice Questions */}
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-100">Practice Questions</h4>
              <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <p>Declare a variable named <code>city</code> and assign it the value <code>&quot;New York&quot;</code>. Print the variable.</p>
                </li>
                <li>
                  <p>Create two variables, <code>x</code> and <code>y</code>, and assign them the values <code>10</code> and <code>5</code> respectively. Print the sum of <code>x</code> and <code>y</code>.</p>
                </li>
                <li>
                  <p>Declare a boolean variable called <code>is_raining</code> and set it to <code>False</code>. Print a message based on the value of <code>is_raining</code>, such as <code>&quot;Remember your umbrella!&quot;</code> if it&apos;s <code>True</code>, or <code>&quot;Enjoy the sunny day!&quot;</code> if it&apos;s <code>False</code>.</p>
                </li>
              </ol>
            </div>

            {/* Example 2: Variable Operations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Working with Variables</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# String concatenation
full_name = first_name + " " + last_name
print("Full name:", full_name)

# Number operations
birth_year =  - age
print("Birth year:", birth_year)

# Converting between types
age_str = str(age)
print("Age as string:", age_str)
print("Type of age_str:", type(age_str))

# Multiple assignments
x, y, z = 1, 2, 3
print("x:", x, "y:", y, "z:", z)`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Full name: John Doe
Birth year: 1999
Age as string: 25
Type of age_str: <class 'str'>
x: 1 y: 2 z: 3`}</code>
              </pre>
            </div>

            {/* Practice Questions */}
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-yellow-800 dark:text-yellow-100">Practice Questions</h4>
              <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300">
                <li>
                  <p>Using the variables <code>first_name</code> and <code>last_name</code> from the previous example, create a new variable called <code>initials</code> that holds the first letter of the first name and the first letter of the last name, separated by a dot. For example, if <code>first_name</code> is <code>&quot;John&quot;</code> and <code>last_name</code> is <code>&quot;Doe&quot;</code>, <code>initials</code> should be <code>&quot;J.D&quot;</code>. Print the <code>initials</code> variable.</p>
                </li>
                <li>
                  <p>Declare two variables, <code>num1</code> and <code>num2</code>, and assign them the values <code>15</code> and <code>4</code> respectively. Calculate the integer division and modulo of <code>num1</code> and <code>num2</code>, and print the results in the format: <code>&quot;15 // 4 = 3 and 15 % 4 = 3&quot;</code>.</p>
                </li>
                <li>
                  <p>Create a variable named <code>temperature</code> and assign it a float value representing a temperature in Fahrenheit. Convert the temperature to Celsius using the formula: <code>celsius = (fahrenheit - 32) * 5/9</code>. Print the original Fahrenheit temperature and the converted Celsius temperature, rounded to 2 decimal places.</p>
                </li>
              </ol>
            </div>

            {/* Example 3: Type Conversion */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Type Conversion Examples</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# String to number
text_number = "42"
number = int(text_number)
print("Converted number:", number)

# Float to integer
price = 19.99
whole_dollars = int(price)
print("Price:", price)
print("Whole dollars:", whole_dollars)

# Number to string
count = 100
count_str = str(count)
print("Count as string:", count_str)
print("Is it a string?", isinstance(count_str, str))`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Converted number: 42
Price: 19.99
Whole dollars: 19
Count as string: 100
Is it a string? True`}</code>
              </pre>
            </div>

            {/* Example 4: String Operations */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">4. Advanced String Operations</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# String methods and operations
text = "Python Programming"
print("Uppercase:", text.upper())
print("Lowercase:", text.lower())
print("Length:", len(text))
print("Contains 'gram'?", "gram" in text)
print("Replace:", text.replace("Python", "Basic"))
print("Split words:", text.split())
print("First 6 chars:", text[:6])
print("Last 6 chars:", text[-6:])`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Uppercase: PYTHON PROGRAMMING
Lowercase: python programming
Length: 18
Contains 'gram'? True
Replace: Basic Programming
Split words: ['Python', 'Programming']
First 6 chars: Python
Last 6 chars: mming`}</code>
              </pre>
            </div>

            {/* Example 5: Complex Variable Usage */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">5. Working with Multiple Types</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`# Combining different types
items = 3
price = 19.99
product = "Widget"
in_stock = True

# Format string with multiple types
summary = f"""
Product Details:
---------------
Name: {product}
Price: ${'{price:.2f}'}
Quantity: {items}
Available: {'Yes' if in_stock else 'No'}
Total Value: ${'{items * price:.2f}'}
"""

print(summary)

# Type checking
print("\\nType Information:")
print(f"items is {'{type(items)}'}")
print(f"price is {'{type(price)}'}")
print(f"product is {'{type(product)}'}")
print(f"in_stock is {'{type(in_stock)}'}")`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Product Details:
---------------
Name: Widget
Price: $19.99
Quantity: 3
Available: Yes
Total Value: $59.97

Type Information:
items is <class 'int'>
price is <class 'float'>
product is <class 'str'>
in_stock is <class 'bool'>`}</code>
              </pre>
              <div className="mt-3 text-gray-600">
                <p>This advanced example demonstrates:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Working with multiple variable types together</li>
                  <li>Using f-strings for complex formatting</li>
                  <li>Conditional expressions in string formatting</li>
                  <li>Type checking and type information</li>
                  <li>Multi-line string formatting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="operations" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Basic Operations and Expressions</h2>
          <p className="mb-4">
            Python supports various arithmetic operations for calculations.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">operations.py</h4>
            <pre className="bg-black text-white p-3 rounded">
              <code>{`a = 10
b = 3

print("Addition:", a + b)       # 13
print("Subtraction:", a - b)    # 7
print("Multiplication:", a * b) # 30
print("Division:", a / b)       # 3.333...
print("Modulus:", a % b)        # 1
print("Exponent:", a ** b)      # 1000`}</code>
            </pre>
          </div>
        </section>

        <section id="conditionals" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Control Structures: Conditionals</h2>
          <p className="mb-4">
            Conditional statements let your program make decisions.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">conditionals.py</h4>
            <pre className="bg-black text-white p-3 rounded">
              <code>{`number = 15

if number > 10:
    print("Number is greater than 10")
elif number == 10:
    print("Number is exactly 10")
else:
    print("Number is less than 10")`}</code>
            </pre>
          </div>
        </section>

        <section id="loops" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Control Structures: Loops</h2>
          <p className="mb-4">Python provides two main types of loops:</p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h4 className="font-semibold mb-2">for_loop.py</h4>
            <pre className="bg-black text-white p-3 rounded">
              <code>{`# For Loop
for i in range(5):
    print(f"Count: {i}")

# While Loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1`}</code>
            </pre>
          </div>
        </section>

        <section id="functions" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Functions</h2>
          
          <div className="space-y-6">
            <div className="prose max-w-none">
              <p className="mb-4">
                Functions are one of the fundamental building blocks in Python programming. They allow you to encapsulate a set of instructions into a reusable unit, making your code more organized, maintainable, and efficient. Think of functions as small, specialized machines in a factory - each one performs a specific task and can be used whenever that task needs to be done.
              </p>
              
              <p className="mb-4">
                In Python, functions are defined using the <code>def</code> keyword, followed by the function name and parentheses containing any parameters the function needs. Functions can accept inputs (parameters), process them, and return results. They can also include documentation strings (docstrings) that explain what the function does, making it easier for others to understand and use your code.
              </p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Basic Function Structure</h3>
              <p className="mb-4">
                Let&apos;s look at how to create and use functions, starting with simple examples and building up to more complex ones:
              </p>
            </div>

            {/* Example 1: Simple Function */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">1. Basic Function Definition</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`def greet(name):
    """Return a personalized greeting message.
    
    Args:
        name (str): The name of the person to greet
    Returns:
        str: A greeting message
    """
    return f"Hello, {name}!"

# Using the function
print(greet("Alice"))
print(greet("Bob"))`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Hello, Alice!
Hello, Bob!`}</code>
              </pre>
              <div className="mt-3 text-gray-600">
                <p>In this example:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>The function is named <code>greet</code> and takes one parameter (<code>name</code>)</li>
                  <li>It includes a docstring explaining its purpose and parameters</li>
                  <li>It uses an f-string to create a personalized message</li>
                  <li>The function is called twice with different arguments</li>
                </ul>
              </div>
            </div>

            {/* Example 2: Function with Multiple Parameters */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">2. Functions with Multiple Parameters</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`def calculate_rectangle_area(length, width):
    """Calculate the area of a rectangle.
    
    Args:
        length (float): The length of the rectangle
        width (float): The width of the rectangle
    Returns:
        float: The area of the rectangle
    """
    area = length * width
    return area

# Using the function with different values
print("Area 1:", calculate_rectangle_area(5, 3))
print("Area 2:", calculate_rectangle_area(2.5, 4))
print("Area 3:", calculate_rectangle_area(10, 10))`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Area 1: 15
Area 2: 10.0
Area 3: 100`}</code>
              </pre>
              <div className="mt-3 text-gray-600">
                <p>This example demonstrates:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>A function that takes multiple parameters</li>
                  <li>Performing calculations with the parameters</li>
                  <li>Returning numerical results</li>
                  <li>Using the function with different types of numbers</li>
                </ul>
              </div>
            </div>

            {/* Example 3: Function with Default Parameters */}
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">3. Functions with Default Parameters</h4>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`def create_profile(name, age, city="Unknown", occupation=None):
    """Create a user profile with optional parameters.
    
    Args:
        name (str): User's name
        age (int): User's age
        city (str, optional): User's city. Defaults to "Unknown"
        occupation (str, optional): User's occupation. Defaults to None
    Returns:
        dict: A dictionary containing the user's profile
    """
    profile = {
        "name": name,
        "age": age,
        "city": city,
        "occupation": occupation
    }
    return profile

# Using the function with different combinations
print("Profile 1:", create_profile("Alice", 25))
print("Profile 2:", create_profile("Bob", 30, "New York"))
print("Profile 3:", create_profile("Charlie", 35, "London", "Engineer"))`}</code>
              </pre>
              <p className="mt-2 text-gray-600">Output:</p>
              <pre className="bg-gray-700 text-white p-2 rounded mt-1">
                <code>{`Profile 1: {'name': 'Alice', 'age': 25, 'city': 'Unknown', 'occupation': None}
Profile 2: {'name': 'Bob', 'age': 30, 'city': 'New York', 'occupation': None}
Profile 3: {'name': 'Charlie', 'age': 35, 'city': 'London', 'occupation': 'Engineer'}`}</code>
              </pre>
              <div className="mt-3 text-gray-600">
                <p>This advanced example shows:</p>
                <ul className="list-disc list-inside mt-2">
                  <li>Using default parameter values</li>
                  <li>Optional parameters in functions</li>
                  <li>Creating and returning complex data structures</li>
                  <li>Different ways to call the same function</li>
                </ul>
              </div>
            </div>

            <div className="prose max-w-none mt-6">
              <h3 className="text-xl font-semibold mb-3">Best Practices</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Give your functions clear, descriptive names that indicate what they do</li>
                <li>Include docstrings to document your functions</li>
                <li>Keep functions focused on a single task (Single Responsibility Principle)</li>
                <li>Use meaningful parameter names</li>
                <li>Consider using type hints for better code clarity</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="data-structures" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Data Structures</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Lists</h3>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`fruits = ["apple", "banana", "orange"]
fruits.append("grape")
print(fruits[0])  # First item
print(fruits[-1]) # Last item`}</code>
              </pre>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Dictionaries</h3>
              <pre className="bg-black text-white p-3 rounded">
                <code>{`person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}
print(person["name"])`}</code>
              </pre>
            </div>
          </div>
        </section>

        <section id="modules" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Modules and Importing</h2>
          <p className="mb-4">Python modules allow you to organize and reuse code:</p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">math_operations.py</h4>
            <pre className="bg-black text-white p-3 rounded">
              <code>{`import math

print(math.sqrt(16))  # Square root
print(math.pi)        # Pi constant`}</code>
            </pre>
          </div>
        </section>

        <section id="file-io" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">File I/O Basics</h2>
          <p className="mb-4">Reading and writing files in Python:</p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="bg-black text-white p-3 rounded">
              <code>{`# Writing to a file
with open("example.txt", "w") as file:
    file.write("Hello, File!")

# Reading from a file
with open("example.txt", "r") as file:
    content = file.read()
    print(content)`}</code>
            </pre>
          </div>
        </section>

        <section id="project" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Project: Text-Based Calculator</h2>
          <p className="mb-4">Let&apos;s build a simple calculator:</p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="bg-black text-white p-3 rounded">
              <code>{`def calculator():
    print("Simple Calculator")
    print("1: Add")
    print("2: Subtract")
    
    choice = input("Choose operation (1/2): ")
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    
    if choice == "1":
        print(f"Result: {num1 + num2}")
    elif choice == "2":
        print(f"Result: {num1 - num2}")

calculator()`}</code>
            </pre>
          </div>
        </section>

        

        <section id="exercises" className="mb-16">
          <h2 className="text-3xl font-bold mb-4">Exercises and Lab Challenges</h2>
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Challenge 1:</h3>
              <p>Write a program that asks the user for their name and age, then prints a message telling them the year they will turn 100.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Challenge 2:</h3>
              <p>Modify the calculator project to include an option for exponentiation.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 
