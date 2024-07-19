import React, { useState, useEffect } from 'react';
import CompanyChatDetails from './CompanyChatDetails';

const CompanyChatListWrapper = ({ onSelect }) => {
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        onSelect('Company A')
        setSelectedChat('Company A');
    }, []);

    const handleChatClick = (sender) => {
        setSelectedChat(sender);
        onSelect(sender);
    };

    const chatDetails = [
        { sender: 'Client A', message: ' Message..', time: '3h' },
        { sender: 'Client B', message: ' Message..', time: '3h' },
        { sender: 'Client C', message: ' Message..', time: '3h' },
        { sender: 'Client D', message: ' Message..', time: '3h' },
        { sender: 'Client E', message: ' Message..', time: '3h' },
        { sender: 'Client F', message: ' Message..', time: '3h' },
        { sender: 'Client G', message: ' Message..', time: '3h' },
        { sender: 'Client H', message: ' Message..', time: '3h' },
        { sender: 'Client I', message: ' Message..', time: '3h' },
        { sender: 'Client J', message: ' Message..', time: '3h' },
        { sender: 'Client K', message: ' Message..', time: '3h' },
        { sender: 'Client L', message: ' Message..', time: '3h' },
        { sender: 'Client M', message: ' Message..', time: '3h' },
        { sender: 'Client N', message: ' Message..', time: '3h' },
        { sender: 'Client O', message: ' Message..', time: '3h' },
        { sender: 'Client P', message: ' Message..', time: '3h' }
    ];

    return (
        <div className='w-25 border border-right d-flex flex-column overflow-y-auto' style={{ height: 'calc(100vh - 88px)'}}> 
            <div className='py-2 px-4 fs-4 shadow-sm'>
                <b>Messages</b>
            </div>
            <div className='w-100 h-100 overflow-auto px-4 pt-2'>
                {chatDetails.length === 0 ? (
                    <div className="text-center mt-3">Conversations will appear here</div>
                ) : (
                    chatDetails.map((chat, index) => (
                        <CompanyChatDetails 
                            key={index} 
                            sender={chat.sender} 
                            message={chat.message} 
                            time={chat.time} 
                            selected={selectedChat === chat.sender} 
                            onClick={() => handleChatClick(chat.sender)} 
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default CompanyChatListWrapper;
