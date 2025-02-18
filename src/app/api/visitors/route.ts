import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const counterFile = path.join(process.cwd(), 'data', 'visitors.json')

async function getCount(): Promise<number> {
  try {
    const data = await fs.readFile(counterFile, 'utf8')
    return JSON.parse(data).count
  } catch (error) {
    // If file doesn&apos;t exist, create it with initial count
    await fs.mkdir(path.dirname(counterFile), { recursive: true })
    await fs.writeFile(counterFile, JSON.stringify({ count: 0 }))
    return 0
  }
}

async function incrementCount(): Promise<number> {
  const currentCount = await getCount()
  const newCount = currentCount + 1
  await fs.writeFile(counterFile, JSON.stringify({ count: newCount }))
  return newCount
}

export async function POST() {
  try {
    const count = await incrementCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error updating visitor count:', error)
    return NextResponse.json(
      { error: 'Failed to update visitor count' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const count = await getCount()
    return NextResponse.json({ count })
  } catch (error) {
    console.error('Error getting visitor count:', error)
    return NextResponse.json(
      { error: 'Failed to get visitor count' },
      { status: 500 }
    )
  }
} 