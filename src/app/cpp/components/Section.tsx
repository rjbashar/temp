'use client'

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
} 