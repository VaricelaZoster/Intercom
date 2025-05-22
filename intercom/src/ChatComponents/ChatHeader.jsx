import React from 'react'
import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid"
import { GiNightSleep } from "react-icons/gi";
import { MdInbox } from "react-icons/md";


const ChatHeader = () => {
  return (
    <div className='flex flex-auto justify-between border-b-1 border-gray-100 p-4 pb-[13px]'>
        <div className='font-bold text-2xl'>Rohit Sharma</div>
        <div className='flex items-center gap-3 pr-2 [@media(max-width:480px)]:flex-col'>
            <EllipsisHorizontalIcon className="h-8 w-8 transition duration-200 linear bg-gray-200 text-black rounded-md hover:bg-gray-300"/>
            <GiNightSleep className='h-8 w-8 p-1 transition duration-200 linear rounded-md bg-gray-200 hover:bg-gray-300 '/>
            <div className='flex items-center bg-black text-white p-[2px] pr-[6px] rounded-lg text-lg'><MdInbox className='h-6 w-7'/>Close</div>
        </div>
    </div>
  )
}

export default ChatHeader                                                                                     