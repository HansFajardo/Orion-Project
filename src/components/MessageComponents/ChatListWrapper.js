import React, { useState, useEffect } from 'react';
import ChatDetails from './ChatDetails';

const ChatListWrapper = ({ onSelect }) => {
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
        { sender: 'Company A', message: ' Message..', time: '3h' },
        { sender: 'Company B', message: ' Message..', time: '3h' },
        { sender: 'Company C', message: ' Message..', time: '3h' },
        { sender: 'Company D', message: ' Message..', time: '3h' },
        { sender: 'Company E', message: ' Message..', time: '3h' },
        { sender: 'Company F', message: ' Message..', time: '3h' },
        { sender: 'Company G', message: ' Message..', time: '3h' },
        { sender: 'Company H', message: ' Message..', time: '3h' },
        { sender: 'Company I', message: ' Message..', time: '3h' },
        { sender: 'Company J', message: ' Message..', time: '3h' },
        { sender: 'Company K', message: ' Message..', time: '3h' },
        { sender: 'Company L', message: ' Message..', time: '3h' },
        { sender: 'Company M', message: ' Message..', time: '3h' },
        { sender: 'Company N', message: ' Message..', time: '3h' },
        { sender: 'Company O', message: ' Message..', time: '3h' },
        { sender: 'Company P', message: ' Message..', time: '3h' }
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
                        <ChatDetails 
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

export default ChatListWrapper;
