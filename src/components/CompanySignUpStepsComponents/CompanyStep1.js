import React, { useState } from 'react';
import { Button, Alert } from 'react-bootstrap';
import ServiceLinesList from '../ServiceLinesList/ServiceLinesList';

export default function CompanyStep1({ onNext, onSelectServiceLine }) {
    const serviceLines = ServiceLinesList;
    const [selectedServices, setSelectedServices] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    const toggleService = (service) => {
        const index = selectedServices.findIndex(s => s.serviceLine === service);
        if (index !== -1) {
            const updatedServices = [...selectedServices];
            updatedServices.splice(index, 1);
            setSelectedServices(updatedServices);
        } else {
            setSelectedServices([...selectedServices, { serviceLine: service }]);
        }

        const selectedServiceLine = serviceLines.find(line => line && line.industry && line.industry.includes(service))?.serviceLine;
        if (selectedServiceLine) {
            onSelectServiceLine(selectedServiceLine);
            console.log(selectedServiceLine);
        }
    };

    const handleContinue = () => {
        if (selectedServices.length > 0) {
            onSelectServiceLine(selectedServices);
            console.log(selectedServices);
            onNext();
        } else {
            setShowNotification(true);
            console.error("Please select at least one service");
        }
    };

    return (
        <div className="container rounded-3 border-3 shadow-lg p-5 w-50">
            <div className="fw-bolder fs-2">
                What services have you provided?
            </div>
            <div className="text-black-50">
                This helps us match you with the right client (select at least 1).
            </div>
            <div className="mt-2">
                {serviceLines.map((service, index) => (
                    <button
                        key={index}
                        className={`m-1 btn ${selectedServices.find(s => s.serviceLine === service) ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => toggleService(service)}
                    >
                        {service}
                    </button>
                ))}
            </div>
            {showNotification && (
                <Alert variant="danger" className="mt-3">
                    Please select at least one service.
                </Alert>
            )}
            <div className="d-flex justify-content-between align-items-center mt-2">
                <span>
                    <b>STEP 1/3</b>
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
