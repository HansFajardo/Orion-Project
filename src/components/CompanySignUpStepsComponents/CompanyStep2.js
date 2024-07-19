import React, { useState } from 'react';
import { Alert, Button, Col, Form, Row } from 'react-bootstrap';
import { Cell, Pie, PieChart } from 'recharts';
import IndustriesList from '../IndustriesList/IndustriesList';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF', '#A7A9AB'];

export default function CompanyStep2({ onNext, onBack, selectedServiceLine, onSelectIndustries }) {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const serviceLines = selectedServiceLine.map(item => item.serviceLine);

    console.log(serviceLines);

    const categories = IndustriesList.filter(category => serviceLines.includes(category.serviceLine));

    const toggleCategory = (category) => {
        const index = selectedCategories.findIndex(c => c.serviceLine === category);
        if (index !== -1) {
            const updatedCategories = [...selectedCategories];
            updatedCategories.splice(index, 1);
            setSelectedCategories(updatedCategories);
        } else {
            setSelectedCategories([...selectedCategories, { serviceLine: category, percentage: '' }]);
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

    const removeAllIndustries = () => {
        setSelectedCategories([]);
    };

    const chartData = selectedCategories.map(category => ({
        serviceLine: category.serviceLine,
        value: parseInt(category.percentage) || 0
    }));

    const handleContinue = () => {
        if (selectedCategories.length > 0) {
            onSelectIndustries(selectedCategories);
            console.log(selectedCategories);
            onNext();
        } else {
            setShowNotification(true);
            console.error("Please select at least one service");
        }
    };

    return (
        <div className="container rounded-3 border-3 shadow-lg p-5 w-50">
            <div className='text-primary fw-semibold w-25' onClick={onBack} style={{ cursor: 'pointer' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                </svg>
                Back
            </div>
            <div className="fw-bolder fs-2">
                What industries are you leaning on?
            </div>
            <div className="text-black-50">
                This helps us match you with the right client &#40;select at least 1&#41;.
            </div>
            <Row>
                <Col className='mt-4' md={6}>
                    <div className='overflow-y-auto' style={{ maxHeight: '50vh' }}>
                        {categories.map((category, index) => (
                            <div key={index}>
                                <div className='fw-medium'>{category.serviceLine}</div>
                                <div className='mb-2'>
                                    {category.industry.map((industry, idx) => (
                                        <button
                                            key={idx}
                                            className={`m-2 btn ${selectedCategories.find(s => s.serviceLine === industry) ? 'btn-primary' : 'btn-outline-primary'}`}
                                            onClick={() => toggleCategory(industry)}
                                        >
                                            {industry}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col className='mt-4' md={6}>
                    <div className='overflow-y-auto mt-2 border-bottom border-primary border-2' style={{ maxHeight: '20vh' }}>
                        <div className='overflow-y-auto' style={{ maxHeight: '60vh' }}>
                            <div className='container my-1' style={{ minHeight: '20vh' }}>
                                {selectedCategories.length > 0 && (
                                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                                        {selectedCategories.map((category, index) => (
                                            <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', justifyContent: 'space-between' }}>
                                                <span>{category.serviceLine}</span>
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
                    </div>

                    <div className='container text-end fs-5 mt-2 fw-semibold'>
                        {calculateTotalPercentage() === 100 ? <i className="bi bi-check-circle-fill text-primary me-2"></i> : ''}
                        {calculateTotalPercentage()}%
                    </div>

                    <div className='container text-center mt-2 d-flex flex-row justify-content-center'>
                        <PieChart width={200} height={200}>
                            <Pie
                                data={chartData}
                                cx="50%"
                                cy="50%"
                                outerRadius={50}
                                fill="#8884d8"
                                label
                            >
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                    </div>

                    <div className='d-flex flex-row gap-3 justify-content-center'>
                        <button className='rounded-5 btn btn-outline-primary' onClick={removeAllIndustries}>
                            Remove All Industries
                        </button>
                    </div>
                </Col>
            </Row>
            {showNotification && (
                <Alert variant="danger" className="mt-3">
                    Please select at least one industry.
                </Alert>
            )}
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    <b>STEP 2/3</b>
                </span>
                <Button
                    variant="primary"
                    className="rounded-5 px-3"
                    onClick={handleContinue}
                >
                    Continue <i className="bi bi-chevron-right"></i>
                </Button>
            </div>
        </div>
    );
}
