'use client'

import React, { useEffect, useState } from 'react'

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const fetchCount = async () => {
      try {
        const hasVisited = window.localStorage.getItem('hasVisited')
        
        if (!hasVisited) {
          const response = await fetch('/api/visitors', {
            method: 'POST',
          })
          if (!response.ok) throw new Error('Failed to increment count')
          const data = await response.json()
          setCount(data.count)
          window.localStorage.setItem('hasVisited', 'true')
        } else {
          const response = await fetch('/api/visitors')
          if (!response.ok) throw new Error('Failed to fetch count')
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error('Error with visitor count:', error)
      }
    }

    if (isClient) {
      fetchCount()
    }
  }, [isClient])

  // Don't render anything during SSR
  if (!isClient) return null

  // Show loading state while count is being fetched
  if (count === null) {
    return (
      <div className="fixed bottom-4 right-4 text-center p-3 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 text-center p-3 bg-blue-50 rounded-lg shadow-md">
      <p className="text-sm text-gray-600 mb-1">Visitors</p>
      <p className="text-2xl font-bold text-blue-600">{count.toLocaleString()}</p>
    </div>
  )
}

export default VisitorCounter 