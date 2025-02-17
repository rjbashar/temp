import { TutorialSection } from '../types/tutorial';

export const tutorialSections: TutorialSection[] = [
  {
    id: 'introduction',
    title: '1. Introduction',
    content: `Welcome to the introductory Python lab! In this guide, you will:
    - Write your first Python programs
    - Learn basic programming concepts like variables, conditionals, loops, and functions
    - Explore Python's core data structures
    - Work on a small project to reinforce your skills`,
  },
  {
    id: 'setup',
    title: '2. Setting Up Your Environment',
    content: `What You Need:
    - Python (version 3.x) - Download from python.org
    - Text Editor or IDE: You can use VS Code, PyCharm, or even a simple text editor
    - Terminal/Command Prompt: To run your programs`,
    codeExamples: [
      {
        title: "Check Python Version",
        code: "python --version",
        output: "Python 3.9.1"
      }
    ]
  },
  // Add more sections following the same pattern...
]; 