import React, { useState } from 'react';
import { Col, Row, Button, Form } from 'react-bootstrap';
import FocustList from '../../../components/FocusList/FocusList';

export default function CompanyFocusPage() {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const categories = FocustList;

    const toggleCategory = (category) => {
        const index = selectedCategories.findIndex(c => c.industry === category);
        if (index !== -1) {
            const updatedCategories = [...selectedCategories];
            updatedCategories.splice(index, 1);
            setSelectedCategories(updatedCategories);
        } else {
            setSelectedCategories([...selectedCategories, { industry: category, percentage: '' }]);
        }
    };

    const handlePercentageChange = (index, value) => {
        if (value.length <= 3 || value === '') {
            const updatedCategories = [...selectedCategories];
            updatedCategories[index].percentage = value;
            setSelectedCategories(updatedCategories);
        }
    };

    const calculateTotalPercentage = () => {
        let totalPercentage = 0;
        selectedCategories.forEach(category => {
            if (category.percentage) {
                totalPercentage += parseInt(category.percentage);
            }
        });
        return totalPercentage;
    };

    const removeAllServices = () => {
        setSelectedCategories([]);
    };

    return (
        <div>
            <Row>
                <Col className='mx-5 mt-2'>
                    <div className='fs-5 fw-semibold'>
                        Focus
                    </div>
                    <div className='my-3'>
                        Select the focus of your company's industry.
                    </div>
                    <div className='overflow-y-auto mt-3' style={{ maxHeight: '70vh' }}>
                        {categories.map((category, index) => (
                            <div key={index} className='mb-3'>
                                <div className='fw-medium'>{category.industry}</div>
                                <div>
                                    {category.focus.map((focus, idx) => (
                                        <button
                                            key={idx}
                                            className={`m-2 btn ${selectedCategories.find(s => s.industry === focus) ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => toggleCategory(focus)}
                                        >

                                            {focus}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col className='mx-5 mt-4'>
                    <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                        <div className='container border-bottom border-primary border-2 my-1' style={{ width: '400px', minHeight: '50vh' }}>
                            {selectedCategories.length > 0 && (
                                <ul style={{ listStyleType: 'none', padding: 0 }}>
                                    {selectedCategories.map((category, index) => (
                                        <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
                                            <span>{category.industry}</span>
                                            <div className='d-flex flex-row align-items-center'>
                                                <Form.Control
                                                    type="number"
                                                    className='border border-primary m-0 text-center percentage-input-company-service'
                                                    value={category.percentage}
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
                            Remove All Focus
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
