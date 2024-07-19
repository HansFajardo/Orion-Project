import React, { useState } from 'react';
import ChatListWrapper from "../components/MessageComponents/ChatListWrapper";
import MessagesWrapper from "../components/MessageComponents/MessagesWrapper";
import MainLayout from "../layouts/MainLayout";


const MessagesPage = () => {

  const [selectedSender, setSelectedSender] = useState(null);

  const handleChatSelect = (sender) => {
    setSelectedSender(sender);
  };

  return (
    <MainLayout>
      <div className='d-flex flex-row w-100 h-100'>
        <ChatListWrapper onSelect={handleChatSelect} />
        <MessagesWrapper selectedSender={selectedSender} />
      </div>
    </MainLayout>
  );
};

export default MessagesPage;
