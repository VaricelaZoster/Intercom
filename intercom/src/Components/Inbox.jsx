import React from 'react'
import InboxHeader from '../assets/InboxHeader'
import InboxInfo from '../assets/InboxInfo'
import InboxChatInfo from '../assets/InboxChatInfo'

const Inbox = () => {
  return (
    <div className='flex-auto w-[20%] min-w-[73px]'>
        <InboxHeader/>
        <InboxInfo/>
        <InboxChatInfo/>
    </div>
  )
}

export default Inbox