import React from 'react'

export default function ProgressStatus({status}) {
    let statusColorClass = '';
    
    switch(status) {
        case 'Not Started':
            statusColorClass = 'border-secondary bg-opacity-10 bg-black';
            break;
        case 'Ongoing':
            statusColorClass = 'border-warning text-warning bg-warning-subtle';
            break;
        case 'Finished':
            statusColorClass = 'border-success text-success bg-success-subtle';
            break;
        default:
            statusColorClass = 'bg-light'; // Default color if status is not recognized
    }

    return (
        <div className={`d-flex flex-row border rounded-5 px-3 align-items-center justify-content-center ${statusColorClass}`} style={{ height: '40px' }}>
                <i className="bi bi-dot"></i>
                <div>
                    {status}
                </div>
            </div>
    );
}
