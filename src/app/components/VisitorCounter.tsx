'use client'

import React, { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(0)
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateCount = async () => {
      try {
        // Only check localStorage after component is mounted on client
        const hasVisited = mounted ? localStorage.getItem('hasVisited') : null
        
        if (!hasVisited) {
          const response = await fetch('/api/visitors', {
            method: 'POST',
          })
          const data = await response.json()
          setCount(data.count)
          // Only set localStorage after successful API call
          if (mounted) {
            localStorage.setItem('hasVisited', 'true')
          }
        } else {
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

    if (mounted) {
      updateCount()
    }
  }, [mounted])

  // Don't render anything until after client-side hydration
  if (!mounted) {
    return null
  }

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