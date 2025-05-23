import React from 'react'
import AIChatMain from '../AIChatComponents/AIChatMain'
import AIChatHeader from '../AIChatComponents/AIChatHeader'

const AIChat = () => {
  return (
      <div className='flex-auto w-[30%] hidden sm:block'>
        <div className=''>
          <AIChatHeader/>
        </div>
        <div>
          <AIChatMain/>
        </div>
      </div>
  )
}

export default AIChat