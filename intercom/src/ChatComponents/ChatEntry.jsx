import React from 'react'
import { RiMessage2Fill } from "react-icons/ri";
import { BsLightningChargeFill } from "react-icons/bs";
import { PiLineVerticalThin } from "react-icons/pi";
import { IoBookmark } from "react-icons/io5";
import { MdEmojiEmotions } from "react-icons/md";

const ChatEntry = () => {
  return (
    <div className='flex flex-auto flex-col h-30 rounded-xl shadow-2xl shadow-gray-500'>
      <div className='flex flex-row items-center mt-1 pl-3 gap-1 '>
        <RiMessage2Fill />Chat
      </div>
      <textarea rows={2} placeholder='Use Ctrl+K for shortcuts' className='flex-2 px-2 pt-1 h-auto resize-none focus:outline-none'>
      </textarea>
      <div className='flex justify-between items-center  px-2'>
        <div className='flex p-1 pb-2 gap-1'>
          <div className=' p-[2px] rounded-full transition duration-150 linear hover:bg-gray-200 '>
            <BsLightningChargeFill className=' '/>
          </div>
          <div className='flex items-center '>
            <PiLineVerticalThin/>
          </div>
          <div title='Bookmark' className='flex items-center p-[2px] rounded-full transition duration-150 linear hover:bg-gray-200'>
            <IoBookmark/>
          </div>
          <div title='Emoji' className='flex items-center p-[2px] rounded-full transition duration-150 linear hover:bg-gray-200'>
            <MdEmojiEmotions/>
          </div>
        </div>
        <div className='flex items-center p-1 pb-2 font-extralight cursor-pointer'>
          Send
        </div>
      </div>
    </div>
  )
}

export default ChatEntry


