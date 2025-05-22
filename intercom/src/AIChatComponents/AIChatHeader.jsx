import React, { useState } from 'react'
import { TbLayoutSidebar } from "react-icons/tb";
import AIChatSidebar from './AIChatSidebar';

const AIChatHeader = () => {
  const [selected, setSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className={`flex justify-between overflow-x-hidden flex-auto gap-3 border-b-1 border-gray-100 pl-3 `}>
      <div className='flex flex-auto gap-3 pl-2 items-center'>
        <div
        className={`relative flex items-center bg-amber-300 font-semibold cursor-pointer h-16 px-1 bg-gradient-to-r from-blue-900 to-violet-500 to-80% bg-clip-text text-transparent border-b-2 border-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:rounded after:pointer-events-none ${selected ? 'after:bg-gradient-to-r after:from-blue-800 after:to-violet-500 after:h-0.5' : 'after:bg-transparent'}`}
        onClick={() => setSelected(true)}
      >
        AI Copilot
      </div>
      <div
        className={`relative flex cursor-pointer items-center font-semibold cursor-pointerS h-16 px-1 border-b-2 border-transparent after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:rounded after:pointer-events-none ${!selected ? 'after:bg-black after:h-0.5' : 'after:bg-transparent'}`}
        onClick={() => setSelected(false)}
      >
        Details
      </div>
      </div>
      <div onClick={() => setIsVisible(!isVisible)} className='flex flex-auto justify-end items-center pr-5 '>
        <TbLayoutSidebar className='h-9 w-9 hover:bg-gray-200 p-1 rounded-md transition duration-150 ease-linear'/>
      </div>
      {
        isVisible && (
          <AIChatSidebar/>
        )
      }
    </div>
  )
}

export default AIChatHeader