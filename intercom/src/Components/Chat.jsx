import React from 'react'
import ChatHeader from '../ChatComponents/ChatHeader'
import ChatHistory from '../ChatComponents/ChatHistory'
import ChatEntry from '../ChatComponents/ChatEntry'

const Chat = () => {
  return (
    <div className='flex-auto w-[50%]'>
      <ChatHeader/>
      <div className='flex flex-col h-[calc(100vh-5rem)]'>
        <div className='flex-1 overflow-y-auto'>
          <ChatHistory/>
        </div>
        <div className='flex justify-center items-center h-30  p-4'>
          <ChatEntry/>
        </div>
      </div>
    </div>
  )
}

export default Chat