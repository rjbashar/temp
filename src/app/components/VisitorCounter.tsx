'use client'

import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const hasVisited = localStorage.getItem('visitor-counted')
    
    const updateCount = async () => {
      try {
        if (!hasVisited) {
          const response = await fetch('/api/visitors', { method: 'POST' })
          if (!response.ok) throw new Error('Failed to update count')
          const data = await response.json()
          setCount(data.count)
          localStorage.setItem('visitor-counted', 'true')
        } else {
          const response = await fetch('/api/visitors')
          if (!response.ok) throw new Error('Failed to fetch count')
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error('Visitor counter error:', error)
      }
    }

    updateCount()
  }, [])

  if (count === null) return null

  return (
    <div className="fixed bottom-4 right-4 text-center p-3 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-colors">
      <p className="text-sm text-gray-600 mb-1">Visitors</p>
      <p className="text-2xl font-bold text-blue-600">{count.toLocaleString()}</p>
    </div>
  )
}

export default VisitorCounter 