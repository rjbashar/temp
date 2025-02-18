import os
from PyPDF2 import PdfReader

def extract_text_from_pdf(pdf_path):
    """Extract raw text from PDF."""
    try:
        reader = PdfReader(pdf_path)
        text = []
        
        # Extract text from each page
        for page in reader.pages:
            page_text = page.extract_text()
            if page_text.strip():
                text.append(page_text)
        
        return '\n\n'.join(text)
    except Exception as e:
        print(f"Error reading PDF {pdf_path}: {str(e)}")
        return ""

def main():
    """Process PDF files and extract raw text."""
    # Set up directories
    docs_dir = "docs"
    output_dir = "extracted_content"
    os.makedirs(output_dir, exist_ok=True)
    
    # Process each PDF file
    pdf_files = [f for f in os.listdir(docs_dir) if f.endswith('.pdf')]
    for pdf_file in sorted(pdf_files):
        print(f"Processing {pdf_file}...")
        
        # Extract text
        pdf_path = os.path.join(docs_dir, pdf_file)
        text = extract_text_from_pdf(pdf_path)
        if not text:
            print(f"No text extracted from {pdf_file}")
            continue
        
        # Save raw text
        output_file = os.path.join(output_dir, os.path.splitext(pdf_file)[0] + '.txt')
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(text)
        
        print(f"Saved content to {output_file}")

if __name__ == "__main__":
    main() 