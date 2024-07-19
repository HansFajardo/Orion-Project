import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import Step1 from '../components/SignUpStepsComponents/Step1';
import Step2 from '../components/SignUpStepsComponents/Step2';
import Step3 from '../components/SignUpStepsComponents/Step3';
import Step4 from '../components/SignUpStepsComponents/Step4';
import Step5Part1 from '../components/SignUpStepsComponents/Step5Part1';
import Step5Part2 from '../components/SignUpStepsComponents/Step5Part2';

function SignUpSteps() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleContinue = () => {
        setCurrentStep(currentStep + 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 onNext={handleContinue} />;
            case 2:
                return <Step2 onNext={handleContinue} onBack={handleBack} />;
            case 3:
                return <Step3 onNext={handleContinue} onBack={handleBack} />;
            case 4:
                return <Step4 onNext={handleContinue} onBack={handleBack} />;
            case 5:
                return <Step5Part1 onNext={handleContinue} onBack={handleBack} />;
            case 6:
                return <Step5Part2 onNext={handleContinue} onBack={handleBack} />;
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

export default SignUpSteps;
