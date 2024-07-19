import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import ServiceLinesList from '../../../components/ServiceLinesList/ServiceLinesList';

export default function CompanyServiceLinesPage() {
    const serviceLines = ServiceLinesList;

    const [selectedServices, setSelectedServices] = useState([]);

    const toggleService = (service) => {
        const index = selectedServices.findIndex(s => s.name === service);
        if (index !== -1) {
            const updatedServices = [...selectedServices];
            updatedServices.splice(index, 1);
            setSelectedServices(updatedServices);
        } else {
            setSelectedServices([...selectedServices, { name: service, percentage: '' }]);
        }
    };

    const handlePercentageChange = (index, value) => {
        if (value.length <= 3 || value === '') {
            const updatedServices = [...selectedServices];
            updatedServices[index].percentage = value;
            setSelectedServices(updatedServices);
        }
    };

    const calculateTotalPercentage = () => {
        let totalPercentage = 0;
        selectedServices.forEach(service => {
            if (service.percentage) {
                totalPercentage += parseInt(service.percentage);
            }
        });
        return totalPercentage;
    };

    const removeAllServices = () => {
        setSelectedServices([]);
    };

    return (
        <div>
            <Row>
                <Col className='mx-5 my-2'>
                    <div className='fs-5 fw-semibold'>
                        Service Lines
                    </div>
                    <div className='my-3'>
                        Give buyers a sense of how you spend your time. You must add at least one &#40;1&#41; Service Line to your Company Profile.
                    </div>
                    <div>
                        {serviceLines.map((service, index) => (
                            <button
                                key={index}
                                className={`m-2 btn ${selectedServices.find(s => s.name === service) ? 'btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => toggleService(service)}
                            >
                                {service}
                            </button>
                        ))}
                    </div>
                </Col>
                <Col className='mx-5 mt-4'>
                    <div className='overflow-y-auto'>
                        <div className='container border-bottom border-primary border-2 my-1' style={{ width: '400px', minHeight: '30vh' }}>
                            {selectedServices.length > 0 && (
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {selectedServices.map((service, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
                                            <span>{service.name}</span>
                                            <div className='d-flex flex-row align-items-center'>
                                                <Form.Control
                                                    type="number"
                                                    className='border border-primary m-0 text-center percentage-input-company-service'
                                                    value={service.percentage}
                                                    onChange={(e) => handlePercentageChange(index, e.target.value)}
                                                    style={{ marginLeft: '10px', width: '60px' }}
                                                    maxLength={3}
                                                />
                                                <h4 className='fw-normal ms-2'>
                                                    %
                                                </h4>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className='container text-end fs-5 mt-2 fw-semibold' style={{ width: '400px' }}>
                        {calculateTotalPercentage() === 100 ? <i className="bi bi-check-circle-fill text-primary me-2"></i> : ''}
                        {calculateTotalPercentage()}%
                    </div>
                    <div className='d-flex flex-row gap-3 justify-content-center'>
                        <button className='rounded-5 mt-3 btn btn-outline-primary' onClick={removeAllServices}>
                            Remove All Services
                        </button>
                        <Button className='rounded-5 mt-3'>
                            Save Changes
                        </Button>
                    </div>

                </Col>
            </Row>
        </div>
    )
}
