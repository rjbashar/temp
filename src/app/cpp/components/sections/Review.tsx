'use client'

import Section from '../Section'

export default function Review() {
  return (
    <Section id="review" title="Review">
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
    </Section>
  );
} 