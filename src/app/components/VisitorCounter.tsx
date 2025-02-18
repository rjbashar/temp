'use client'

import React, { useEffect, useState, useCallback } from 'react'

const MAX_RETRIES = 3
const RETRY_DELAY = 1000 // 1 second

const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchCount = useCallback(async () => {
    try {
      const response = await fetch('/api/visitors')
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to fetch count')
      }
      const data = await response.json()
      
      // Check if we need to increment
      const hasVisited = localStorage.getItem('hasVisited')
      if (!hasVisited) {
        const incrementResponse = await fetch('/api/visitors', {
          method: 'POST',
        })
        if (!incrementResponse.ok) {
          const errorData = await incrementResponse.json()
          throw new Error(errorData.error || 'Failed to increment count')
        }
        const incrementData = await incrementResponse.json()
        setCount(incrementData.count)
        localStorage.setItem('hasVisited', 'true')
      } else {
        setCount(data.count)
      }
      
      // Clear any previous errors on success
      setError(null)
    } catch (error) {
      console.error('Error with visitor count:', error)
      setError(error instanceof Error ? error.message : 'Failed to load visitor count')
      
      // Retry logic
      if (retryCount < MAX_RETRIES) {
        setTimeout(() => {
          setRetryCount(prev => prev + 1)
        }, RETRY_DELAY)
      }
    }
  }, [retryCount]) // Add retryCount as a dependency since it's used in the function

  useEffect(() => {
    fetchCount()
  }, [fetchCount]) // Use fetchCount as a dependency

  const handleRetry = () => {
    setRetryCount(0) // Reset retry count
    setError(null)   // Clear error
    fetchCount()     // Try again
  }

  if (error) {
    return (
      <div className="fixed bottom-4 right-4 text-center p-3 bg-red-50 rounded-lg shadow-md">
        <p className="text-sm text-red-600 mb-2">{error}</p>
        {retryCount >= MAX_RETRIES && (
          <button
            onClick={handleRetry}
            className="text-sm bg-red-100 hover:bg-red-200 text-red-800 px-3 py-1 rounded-md transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    )
  }

  if (count === null) {
    return (
      <div className="fixed bottom-4 right-4 text-center p-3 bg-gray-100 rounded-lg shadow-md">
        <p className="text-gray-600">
          {retryCount > 0 ? `Retrying (${retryCount}/${MAX_RETRIES})...` : 'Loading count...'}
        </p>
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