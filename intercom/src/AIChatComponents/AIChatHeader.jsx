import React, { useState } from 'react'
import { TbLayoutSidebar } from "react-icons/tb";
import {Drawer , List, ListItem, ListItemButton } from '@mui/material'

const AIChatHeader = () => {
  const [selected, setSelected] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  let settings = [
    "Lorem",
    "ipsum", 
    "dolor sit",
    "amet consectetur adipisicing", 
    "elit."
  ]

  return (
    <div className={`flex justify-between overflow-x-hidden flex-auto gap-3 border-b-1 border-gray-100 pl-3 bg-amber-100 min-w-[100px]`}>
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
      <div className='relative flex flex-auto justify-end items-center pr-5 '>
        <TbLayoutSidebar onClick={() => setIsVisible(!isVisible)} className='h-9 w-9  hover:bg-gray-200 p-1 rounded-md transition duration-150 ease-linear'/>
      </div>
       <Drawer sx={{backgroundColor:'transparent'}} open={isVisible} anchor="right">
        <div className='flex flex-col w-100'>
          <div className='flex flex-row justify-end p-4 pr-5 '>
            <TbLayoutSidebar className='h-9 w-9 p-1 hover:bg-gray-200 rounded-md transition duration-150 ease-linear' onClick={() => setIsVisible(!isVisible)}/>
          </div>
          <div className=''>
            <List>
              {settings.map((setting, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    {setting}
                  </ListItemButton>
                </ListItem>))}
            </List>
          </div>
        </div>
       </Drawer>
    </div>
  )
}

export default AIChatHeader