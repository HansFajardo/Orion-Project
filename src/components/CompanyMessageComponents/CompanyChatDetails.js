import React from 'react';
import defaultPic from "../../assets/img/defaultProfPic.png";
import Image from "react-bootstrap/Image";

const CompanyChatDetails = ({ sender, message, time, selected, onClick }) => {
    const chatClass = selected ? 'selected-chat' : '';
    return (
        <div className={`d-flex w-100 border border-1 rounded-4 align-items-center py-2 px-4 mb-2 ${chatClass} ${selected ? 'bg-primary text-white' : ''}`} onClick={onClick} style={{cursor: "pointer"}}>
            <div className='d-flex align-items-center flex-grow-1'>
                <div>
                    <Image
                        src={defaultPic}
                        roundedCircle
                        fluid
                        style={{
                            width: "40px",
                            height: "40px",
                            border: selected ? "2px solid white" : "2px solid #7A1CA7",
                        }}
                    />
                </div>
                <div className='d-flex flex-column flex-grow-1 mx-3'>
                    <div className='fs-6 fw-bold'>{sender}</div>
                    <div className='fs-6'>{message}</div>
                </div>
            </div>
            <div className='fs-6'>{time}</div>
        </div>
    );
}

export default CompanyChatDetails;