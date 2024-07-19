import React, { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import IndustriesList from '../../../components/IndustriesList/IndustriesList';

export default function CompanyIndustryRecognitionsPage() {
    const [selectedIndustries, setSelectedIndustries] = useState([]);

    const toggleIndustries = (industry) => {
        const index = selectedIndustries.findIndex(s => s.name === industry);
        if (index !== -1) {
            const updatedIndustries = [...selectedIndustries];
            updatedIndustries.splice(index, 1);
            setSelectedIndustries(updatedIndustries);
        } else {
            setSelectedIndustries([...selectedIndustries, { name: industry, percentage: '' }]);
        }
    };

    const handlePercentageChange = (index, value) => {
        if (value.length <= 3 || value === '') {
            const updatedIndustries = [...selectedIndustries];
            updatedIndustries[index].percentage = value;
            setSelectedIndustries(updatedIndustries);
        }
    };

    const calculateTotalPercentage = () => {
        let totalPercentage = 0;
        selectedIndustries.forEach(industry => {
            if (industry.percentage) {
                totalPercentage += parseInt(industry.percentage);
            }
        });
        return totalPercentage;
    };

    const removeAllIndustries = () => {
        setSelectedIndustries([]);
    };

    return (
        <div>
            <Row>
                <Col className='mx-5 my-2'>
                    <div className='fs-5 fw-semibold'>
                        Industries
                    </div>
                    <div className='my-3'>
                        Select the relevant industries for your company's services.
                    </div>
                    {IndustriesList.map(({ serviceLine, industry }, index) => (
                        <div key={index} className='mb-3'>
                            <div className="fw-medium">{serviceLine}</div>
                            {industry.map((ind, indIndex) => (
                                <button
                                    key={indIndex}
                                    className={`m-2 btn ${selectedIndustries.find(s => s.name === ind) ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => toggleIndustries(ind)}
                                >
                                    {ind}
                                </button>
                            ))}
                        </div>
                    ))}
                </Col>
                <Col className='mx-5 mt-4'>
                    <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                        <div className='container border-bottom border-primary border-2 my-1' style={{ width: '400px', minHeight: '50vh' }}>
                            {selectedIndustries.length > 0 && (
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {selectedIndustries.map((industry, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
                                            <span>{industry.name}</span>
                                            <div className='d-flex flex-row align-items-center'>
                                                <Form.Control
                                                    type="number"
                                                    className='border border-primary m-0 text-center percentage-input-company-service'
                                                    value={industry.percentage}
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
                        <button className='rounded-5 mt-3 btn btn-outline-primary' onClick={removeAllIndustries}>
                            Remove All Industries
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