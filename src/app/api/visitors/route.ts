import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const counterFile = path.join(process.cwd(), 'data', 'visitors.json')

async function getCount(): Promise<number> {
  try {
    await fs.access(counterFile)
    const data = await fs.readFile(counterFile, 'utf8')
    const parsed = JSON.parse(data)
    return typeof parsed.count === 'number' ? parsed.count : 0
  } catch {
    // If file doesn't exist or is invalid, create it with initial count
    console.log('Initializing visitor count file')
    await fs.mkdir(path.dirname(counterFile), { recursive: true })
    await fs.writeFile(counterFile, JSON.stringify({ count: 0 }))
    return 0
  }
}

async function incrementCount(): Promise<number> {
  try {
    const currentCount = await getCount()
    const newCount = currentCount + 1
    await fs.writeFile(counterFile, JSON.stringify({ count: newCount }, null, 2))
    return newCount
  } catch (error) {
    console.error('Error incrementing count:', error)
    throw error
  }
}

export async function GET() {
  try {
    const count = await getCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error in GET /api/visitors:', error)
    return NextResponse.json(
      { error: 'Failed to get visitor count' },
      { status: 500 }
    )
  }
}

export async function POST() {
  try {
    const count = await incrementCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error in POST /api/visitors:', error)
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    )
  }
} 