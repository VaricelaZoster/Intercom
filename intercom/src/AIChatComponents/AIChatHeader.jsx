import React from 'react'

const AIChatHeader = () => {
  return (
    <div className='flex flex-auto gap-3 border-b-1 border-gray-100 pl-3'>
        <div className='flex items-center font-semibold cursor-pointer h-16 px-1 bg-gradient-to-r from-indigo-900 to-violet-300 bg-clip-text text-transparent'>
            AI Copilot
        </div>
        <div className='flex items-center font-semibold cursor-pointer bg-amber-100 h-16 px-1'>
            Details
        </div>
    </div>
  )
}

export default AIChatHeader