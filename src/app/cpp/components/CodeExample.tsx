'use client'

interface CodeExampleProps {
  title: string;
  code: string;
  output?: string;
  explanation?: string[];
}

export default function CodeExample({ title, code, output, explanation }: CodeExampleProps) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h4 className="font-semibold mb-2">{title}</h4>
      <pre className="bg-black text-white p-3 rounded">
        <code>{code}</code>
      </pre>
      {output && (
        <>
          <p className="mt-2 text-gray-600">Output:</p>
          <pre className="bg-gray-700 text-white p-2 rounded mt-1">
            <code>{output}</code>
          </pre>
        </>
      )}
      {explanation && (
        <div className="mt-3 text-gray-600">
          <ul className="list-disc list-inside mt-2">
            {explanation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
} 