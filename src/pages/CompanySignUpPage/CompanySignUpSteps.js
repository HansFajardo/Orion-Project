import React, { useState } from 'react';
import CompanyStep1 from '../../components/CompanySignUpStepsComponents/CompanyStep1';
import CompanyStep2 from '../../components/CompanySignUpStepsComponents/CompanyStep2';
import CompanyStep3 from '../../components/CompanySignUpStepsComponents/CompanyStep3';
import MainLayout from '../../layouts/MainLayout';
import { useNavigate } from 'react-router-dom';

export default function CompanySignUpSteps() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedServiceLine, setSelectedServiceLine] = useState([]);
    const [selectedIndustries, setSelectedIndustries] = useState([]);
    const navigate = useNavigate();

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleContinue = () => {
        setCurrentStep(currentStep + 1);
    };

    const handleLastPage = () => {
        navigate('/company-dashboard');
    };

    const handleServiceLineSelect = (serviceLine) => {
        setSelectedServiceLine(serviceLine);
    };

    const handleIndustriesSelect = (industry) => {
        setSelectedIndustries(industry);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <CompanyStep1 onNext={handleContinue} onSelectServiceLine={handleServiceLineSelect} />;
            case 2:
                return <CompanyStep2 onNext={handleContinue} onBack={handleBack} selectedServiceLine={selectedServiceLine} onSelectIndustries={handleIndustriesSelect} />;
            case 3:
                return <CompanyStep3 onNext={handleLastPage} onBack={handleBack} selectedIndustries={selectedIndustries} />;
            default:
                return null;
        }
    };

    return (
        <MainLayout>
            <div className='justify-content-center d-flex flex-column' style={{ minHeight: 'calc(100vh - 88px)' }}>
                {renderStep()}
            </div>
        </MainLayout>
    );
}
