import React from 'react'
import { HiArrowNarrowUp } from "react-icons/hi";

const AIChatMain = () => {
  return (
    <div className='flex flex-col h-[calc(100vh-5rem)] justify-between'>
        <div className='flex'>
            AIChatLog
        </div>
        <div className='flex flex-row p-3'>
            <div className='flex flex-auto items-center justify-between shadow-md/30 rounded-2xl'>
                <textarea placeholder='Ask a question...' rows={1} className='flex flex-col text-left rounded-2xl w-[90%] resize-none focus:outline-none py-3 px-3'></textarea>
                <div className='flex flex-auto items-center justify-center h-full rounded-2xl'>
                    <HiArrowNarrowUp className='h-[80%] w-[80%] p-1.5 text-gray-400 hover:bg-black rounded-2xl hover:text-white transition duration:150 ease-linear'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AIChatMain