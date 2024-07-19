import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Checkbox from "@mui/material/Checkbox";

export default class Step2 extends Component {
    state = {
        checkboxStates: {
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
            checkbox4: false,
            checkbox5: false
        }
    };

    handleBack = () => {
        if (this.props.onBack) {
            this.props.onBack();
        }
    };

    handleContinue = () => {
        if (this.props.onNext) {
            this.props.onNext();
        }
    };

    handleCheck = (checkboxName) => {
        this.setState(prevState => ({
            checkboxStates: {
                ...prevState.checkboxStates,
                [checkboxName]: !prevState.checkboxStates[checkboxName]
            }
        }));
    };

    handleSpecify = (value) => {
        this.setState({ specifiedValue: value });
    }

    render() {
        const { checkboxStates } = this.state;

        return (
            <div className="container rounded-3 border-3 shadow-lg p-5 w-50 cursor-pointer">
                <div className='text-primary fw-semibold w-25' onClick={this.handleBack} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                    Back
                </div>
                <div className='fw-bolder fs-2'>Which goals can we help you achieve?</div>
                <div className='text-black-50'>
                    Select goals relevant to your business needs. You can also tell us more
                    about them in “Others.”
                </div>

                {Object.keys(checkboxStates).map((checkboxName, index) => (
                    <label key={index} className={`d-flex align-items-center p-2 border ${checkboxStates[checkboxName] ? 'border-primary' : 'text-black-50'} rounded-3 my-3 mx-5`}>
                        {/* <input type='checkbox' className='ms-4 me-3' onChange={() => this.handleCheck(checkboxName)} checked={checkboxStates[checkboxName]} /> */}
                        <Checkbox className={`ms-4 me-3 text-primary ${checkboxStates[checkboxName] ? 'text-primary' : 'text-black-50'}`}
                            onChange={() => this.handleCheck(checkboxName)} checked={checkboxStates[checkboxName]} />
                        <div style={{textWrap: 'nowrap'}} className='me-4'>
                            {checkboxName === 'checkbox1' ? 'Launch a new system, product, or event' :
                                checkboxName === 'checkbox2' ? 'Grow and scale my business' :
                                    checkboxName === 'checkbox3' ? 'Meet company policy or legal requirements' :
                                        checkboxName === 'checkbox4' ? 'Replace an existing service provider' :
                                            'Others, please specify'}
                        </div>
                        {checkboxStates[checkboxName] && checkboxName === 'checkbox5' && (
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Please specify"
                                onChange={(e) => this.handleSpecify(e.target.value)}
                            />
                        )}
                    </label>
                ))}

                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <span><b>STEP 2/5</b></span>
                    <Button variant="primary" className="rounded-5 px-3" onClick={this.handleContinue}>
                        Continue <i class="bi bi-chevron-right"></i>
                    </Button>
                </div>
            </div>
        );
    }
}
