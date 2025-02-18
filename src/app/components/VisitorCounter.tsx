'use client'

import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visitors')
        if (!response.ok) throw new Error('Failed to fetch count')
        const data = await response.json()
        
        if (!isMounted) return

        if (typeof window !== 'undefined') {
          const hasVisited = localStorage.getItem('hasVisited')
          if (!hasVisited) {
            const incrementResponse = await fetch('/api/visitors', {
              method: 'POST',
            })
            if (!incrementResponse.ok) throw new Error('Failed to increment count')
            const incrementData = await incrementResponse.json()
            if (isMounted) {
              setCount(incrementData.count)
              localStorage.setItem('hasVisited', 'true')
            }
          } else {
            if (isMounted) {
              setCount(data.count)
            }
          }
        }
      } catch (error) {
        console.error('Error with visitor count:', error)
        if (isMounted) {
          setError(error instanceof Error ? error.message : 'Failed to load visitor count')
        }
      }
    }

    fetchCount()

    return () => {
      isMounted = false
    }
  }, [])

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 text-center p-3 bg-red-50 rounded-lg shadow-md">
        <p className="text-sm text-red-600">Error loading count</p>
      </div>
    )
  }

  if (count === null) {
    return (
      <div className="fixed bottom-4 right-4 text-center p-3 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-600">Loading count...</p>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 text-center p-3 bg-blue-50 rounded-lg shadow-md hover:bg-blue-100 transition-colors">
      <p className="text-sm text-gray-600 mb-1">Visitors</p>
      <p className="text-2xl font-bold text-blue-600">{count.toLocaleString()}</p>
    </div>
  )
}

export default VisitorCounter 