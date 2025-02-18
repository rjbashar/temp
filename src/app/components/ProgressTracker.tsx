'use client'

export default function ProgressTracker() {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="text-sm font-semibold">Progress</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
      </div>
    </div>
  )
} 