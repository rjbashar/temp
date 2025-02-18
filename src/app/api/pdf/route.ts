import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import path from 'path'

export async function GET(request: Request) {
  try {
    // Get the file parameter from the URL
    const { searchParams } = new URL(request.url)
    const file = searchParams.get('file')

    if (!file) {
      return new NextResponse('File parameter is required', { status: 400 })
    }

    // Construct the file path (relative to project root)
    const filePath = path.join(process.cwd(), 'docs', file)

    // Read the file
    const fileBuffer = await readFile(filePath)

    // Return the PDF with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${file}"`,
      },
    })
  } catch (error) {
    console.error('Error serving PDF:', error)
    return new NextResponse('Error serving PDF file', { status: 500 })
  }
} 