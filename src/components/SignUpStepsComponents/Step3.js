import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Options } from '../../backend/files/OptionsList';

export default class Step3 extends Component {
    options = Options;

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

    render() {
        return (
            <div className="container rounded-3 border-3 shadow-lg p-5 w-50 cursor-pointer">
                <div className='text-primary fw-semibold w-25' onClick={this.handleBack} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                    Back
                </div>
                <div className='fw-bolder fs-2'>What&rsquo;s your budget?</div>
                <div className='text-black-50'>
                    Tell us where you would like you vendors located &#40;select up to 5&#41;.
                </div>
                <div className='mt-4 d-flex flex-wrap'>
                    {this.options.map(option => (
                        <div key={option.id} className="form-check-inline me-2 mb-2">
                            <input
                                type="radio"
                                className="btn-check"
                                name="options-outlined"
                                id={option.id}
                                autoComplete="off"
                                defaultChecked={option.id === 'any-price'}
                            />
                            <label className="btn btn-outline-primary m-0 px-3" htmlFor={option.id}>{option.label}</label>
                        </div>
                    ))}
                </div>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <span><b>STEP 3/5</b></span>
                    <Button variant="primary" className="rounded-5 px-3" onClick={this.handleContinue}>
                        Continue <i class="bi bi-chevron-right"></i>
                    </Button>
                </div>
            </div>
        );
    }
}
