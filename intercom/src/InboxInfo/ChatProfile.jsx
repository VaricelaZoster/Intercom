import React, { useState } from 'react'


const ChatProfile = () => {
    const name = "Rohit Sharma"
    const initial = name.charAt(0).toUpperCase()

  return (
    <div className={`flex w-[97%] px-2 py-0.5`}>
        <div className='flex p-2 pr-5 pl-0 [@media(max-width:731px)]:mx-auto @media(max-width:731px)]:p-0 '>
            <div className="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full ">
                {initial}
            </div>
        </div>
        <div className='pt-2'>
            <div className='font-semibold [@media(max-width:731px)]:hidden'>{name}</div>
            <div className='font-light [@media(max-width:731px)]:hidden'>Hello i am</div>
        </div>
        <div className='relative flex flex-auto hidden [@media(min-width:1084px)]:block'>
            <div className='absolute bottom-2.5 right-2 hidden [@media(min-width:1084px)]:block'>30m</div>
        </div>
    </div>
  )
}

export default ChatProfile