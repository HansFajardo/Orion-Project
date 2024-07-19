import React from 'react';
import { Col, ProgressBar, Row } from 'react-bootstrap';

export default function CompanyProgressPanel({ title, progress, tasks }) {
    // Function to determine status based on progress
    const getStatus = () => {
        if (progress === 0) {
            return 'Not Started';
        } else if (progress === 100) {
            return 'Finished';
        } else {
            return 'Ongoing';
        }
    };

    const status = getStatus(); // Get status based on progress

    // Define status color class based on status
    let statusColSize1;
    let statusColSize2;
    let statusColorClass;
    let statusContainerWidth;
    switch (status) {
        case 'Not Started':
            statusColSize1 = 8;
            statusColSize2 = 4;
            statusColorClass = 'border-secondary bg-opacity-10 bg-black';
            statusContainerWidth = '140px';
            break;
        case 'Ongoing':
            statusColSize1 = 9;
            statusColSize2 = 3;
            statusColorClass = 'border-warning text-warning bg-warning-subtle';
            statusContainerWidth = '100px';
            break;
        case 'Finished':
            statusColSize1 = 9;
            statusColSize2 = 3;
            statusColorClass = 'border-success text-success bg-success-subtle';
            statusContainerWidth = '100px';
            break;
        default:
            statusColorClass = 'bg-light'; // Default color if status is not recognized
            statusContainerWidth = '100px';
            break;
    }

    return (
        <div className='border px-3 pt-3 border-3 rounded-4'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <Row className='w-100'>
                    <Col md={7} lg={8} xl={statusColSize1}>
                        <div className='fs-5 fw-medium'>
                            {title}
                        </div>
                    </Col>
                    <Col md={5} lg={4} xl={statusColSize2}>
                        <div className={`d-flex flex-row ${statusColorClass} rounded-5 px-3 py-2 align-items-center justify-content-center`} style={{ width: statusContainerWidth }}>
                            <i className="bi bi-dot"></i>
                            <div>
                                {status}
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='fs-4 fw-bold mt-3'>
                {progress}%
            </div>

            <ProgressBar now={progress} variant='primary' style={{ height: '20px', width: '50%' }} />

            <div className='mt-3'>
                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
