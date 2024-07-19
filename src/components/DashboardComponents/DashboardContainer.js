import React from 'react';

export default function DashboardContainer({ image, text }) {
    return (
        <div className='bg-white rounded-4 d-flex align-items-center justify-content-between p-2 my-2' style={{ cursor: "pointer" }}>
            <div className="d-flex align-items-center">
                <img src={image} alt="description" className="me-2" />
                <h5 className="m-0 align-self-center">
                    {text}
                </h5>
            </div>
            <i className="bi bi-chevron-right me-3 align-self-center"></i>
        </div>
    );
}
