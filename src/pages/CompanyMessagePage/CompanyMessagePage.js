import React, { useState } from 'react';
import CompanyChatListWrapper from "../../components/CompanyMessageComponents/CompanyChatListWrapper";
import CompanyMessagesWrapper from "../../components/CompanyMessageComponents/CompanyMessagesWrapper";
import MainLayout from "../../layouts/MainLayout";


const CompanyMessagePage = () => {

  const [selectedSender, setSelectedSender] = useState(null);

  const handleChatSelect = (sender) => {
    setSelectedSender(sender);
  };

  return (
    <MainLayout>
      <div className='d-flex flex-row w-100 h-100'>
        <CompanyChatListWrapper onSelect={handleChatSelect} />
        <CompanyMessagesWrapper selectedSender={selectedSender} />
      </div>
    </MainLayout>
  );
};

export default CompanyMessagePage;
