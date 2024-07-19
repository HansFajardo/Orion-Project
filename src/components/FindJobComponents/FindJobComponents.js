import React, { useState } from 'react';
import DefaultPic from "../../assets/img/defaultProfPic.png";
import { Button } from 'react-bootstrap';
import FindJobModal from '../FindJobComponents/FindJobModal'; // Import the modal component

export default function FindJobComponents({ name, postDate, postTime, title, description, tags, price, deadline, location }) {
    const [showModal, setShowModal] = useState(false); // State to manage modal visibility

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className='container px-5 py-3 border rounded-3'>
                <div className='d-flex flex-row align-items-center'>
                    <img
                        width={"50px"}
                        height={"50px"}
                        src={DefaultPic}
                        alt="default"
                        className="img-fluid rounded-circle border border-3 border-primary"
                    />
                    <div className='ms-2'>
                        {name}
                    </div>

                    <div className='ms-auto'>
                        <Button className='rounded-5' onClick={handleOpenModal}>Send Application</Button> {/* Add onClick event to open modal */}
                    </div>
                </div>
                <div className='my-3'>
                    <div>
                        Posted {postDate}, {postTime}
                    </div>
                    <div className='fw-bold fs-4'>
                        {title}
                    </div>
                </div>
                <div className='mb-4'>
                    {description}
                </div>
                <div>
                    Tags:
                    <ul style={{ listStyleType: 'none', padding: 0 }} className='my-2'>
                        {tags.map((tag, index) => (
                            <li key={index} className='d-inline-block border border-subtle bg-black bg-opacity-10 rounded-5 px-3 py-1 me-2 text-black-50'>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className='d-flex flex-row gap-4 mt-3'>
                    <div className="d-flex gap-2">
                        <div>
                            <i className="bi bi-tag"></i> {/* Changed class to className */}
                        </div>
                        <div>Php {price}</div>
                    </div>
                    <div className="d-flex gap-2">
                        <div>
                            <i className="bi bi-calendar"></i> {/* Changed class to className */}
                        </div>
                        <div>
                            {deadline}
                        </div>
                    </div>
                    <div>
                        {location}
                    </div>
                </div>
            </div>
            {/* Render the modal */}
            <FindJobModal show={showModal} onHide={handleCloseModal} />
        </div>
    );
}
