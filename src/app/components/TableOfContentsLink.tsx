'use client'

interface TableOfContentsLinkProps {
  href: string
  title: string
}

export default function TableOfContentsLink({ href, title }: TableOfContentsLinkProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a 
      href={href}
      className="text-blue-600 hover:text-blue-800 hover:underline"
      onClick={(e) => scrollToSection(e, href.substring(1))}
    >
      {title}
    </a>
  );
} 