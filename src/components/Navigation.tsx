import Link from 'next/link';
import { tutorialSections } from '@/data/tutorialData';

export default function Navigation() {
  return (
    <nav className="w-64 h-screen overflow-y-auto fixed left-0 top-0 bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <ul className="space-y-2">
        {tutorialSections.map((section) => (
          <li key={section.id}>
            <Link 
              href={`#${section.id}`}
              className="text-blue-600 hover:text-blue-800 block py-1"
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
} 