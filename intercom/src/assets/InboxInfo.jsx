import React from 'react'

const InboxInfo = () => {
  return (
    <div className='flex justify-between m-2 font-bold '>
        <div className='relative inline-block text-left transition duration-150 ease-in hover:bg-gray-300 rounded-full'>
            <button className='px-2 py-1'>5 open</button>
        </div>
        <div> Waiting longest</div>
    </div>
  )
}

export default InboxInfo