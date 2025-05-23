import React from 'react'
import Inbox from './Components/Inbox'
import Chat from './Components/Chat'
import AIChat from './Components/AIChat'

const App = () => {
  return (
    <div className = "flex flex-row h-screen min-w-[325px]">
      <Inbox/>
      <Chat/>
        <AIChat/>
    </div>
  )
}

export default App
