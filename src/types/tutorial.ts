export interface TutorialSection {
  id: string;
  title: string;
  content: string;
  codeBlocks?: CodeBlock[];
  codeExamples?: CodeExample[];
  exercises?: Exercise[];
}

export interface CodeBlock {
  language: string;
  code: string;
  filename?: string;
  output?: string;
}

export interface CodeExample {
  title: string;
  code: string;
  output?: string;
  explanation?: string;
}

export interface Exercise {
  title: string;
  description: string;
  hints?: string[];
  solution?: string;
} 