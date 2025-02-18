'use client'

import React, { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const updateCount = async () => {
      try {
        // Check if this is the first visit in this session
        const hasVisited = localStorage.getItem('hasVisited')
        
        if (!hasVisited) {
          // First visit - increment count
          const response = await fetch('/api/visitors', {
            method: 'POST',
          })
          const data = await response.json()
          setCount(data.count)
          // Mark as visited
          localStorage.setItem('hasVisited', 'true')
        } else {
          // Not first visit - just get current count
          const response = await fetch('/api/visitors')
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error('Error with visitor count:', error)
      } finally {
        setLoading(false)
      }
    }

    updateCount()
  }, [])

  if (loading) {
    return (
      <div className="text-center p-2 bg-gray-100 rounded-md">
        <p className="text-gray-600">Loading visitor count...</p>
      </div>
    )
  }

  return (
    <div className="text-center p-2 bg-blue-50 rounded-md">
      <p className="text-sm text-gray-600">Visitors</p>
      <p className="text-2xl font-bold text-blue-600">{count.toLocaleString()}</p>
    </div>
  )
} 