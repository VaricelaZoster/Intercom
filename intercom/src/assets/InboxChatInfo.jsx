import React, { useState } from 'react'
import ChatProfile from '../ChatAssets/ChatProfile'

const InboxChatInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);

return (
  <div className="flex h-[86%] overflow-y-auto flex-col items-center">
    {[0, 1, 2, 3, 4,5,6,7,8,9,10].map((index) => (
      <div
        key={index}
        onClick={() => setActiveIndex(index)}
        className={`w-[95%] ${
          activeIndex === index ? 'bg-blue-200 transition duration-100 ease-out rounded-md hover:bg-blue-300' : 'bg-white rounded-md hover:bg-gray-200'
        }`}
      >
        <ChatProfile />
      </div>
    ))}
  </div>
);
}

export default InboxChatInfo