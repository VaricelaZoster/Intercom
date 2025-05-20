import React, { useState } from 'react'


const ChatProfile = () => {
    const name = "Rohit Sharma"
    const initial = name.charAt(0).toUpperCase()

    const [isOpen,setIsOpen] = useState(false)

  return (
    <div onClick={() => setIsOpen(!isOpen)}
        className={`flex w-[97%] px-2 py-1 ${isOpen ? 'bg-blue-200 hover:bg-blue-300':'hover:bg-gray-300'} transition duration-100 ease-out  rounded-md`}>
        <div className='flex p-2 pr-5 pl-0'>
            <div class="inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full">
                {initial}
            </div>
        </div>
        <div className='pt-2'>
            <div className='font-semibold'>{name}</div>
            <div className='font-light'>Hello i am</div>
        </div>
        <div className='relative flex flex-auto  '>
            <div className='absolute bottom-2.5 right-2'>30m</div>
        </div>
    </div>
  )
}

export default ChatProfile