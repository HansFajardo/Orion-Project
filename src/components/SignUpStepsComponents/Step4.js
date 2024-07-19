import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SearchBar from '../SearchBar';
import FilterTags from '../FilterTags';

export default class Step4 extends Component {
    state = {
        filterTags: ["Manila", "Bulacan", "Pangasinan"],
        newFilterTag: ''
    };

    handleFilterTagRemove = (indexToRemove) => {
        this.setState(prevState => ({
            filterTags: prevState.filterTags.filter((_, index) => index !== indexToRemove)
        }));
    }

    handleSearchChange = (event) => {
        this.setState({ newFilterTag: event.target.value });
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        const { newFilterTag, filterTags } = this.state;

        if (newFilterTag.trim() !== '' && !filterTags.includes(newFilterTag)) {
            this.setState(prevState => ({
                filterTags: [...prevState.filterTags, newFilterTag],
                newFilterTag: ''
            }));
        }
    }
    
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
        const { filterTags, newFilterTag } = this.state;

        return (
            <div className="container rounded-3 border-3 shadow-lg p-5 w-50 cursor-pointer">
                <div className='text-primary fw-semibold w-25' onClick={this.handleBack} style={{ cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg>
                    Back
                </div>
                <div className='fw-bolder fs-2'>Do you have a preferred location?</div>
                <div className='text-black-50'>
                Tell us where you would like you vendors located &#40;select up to 5&#41;.
                </div>

                <form onSubmit={this.handleSearchSubmit} className='mt-4'>
                    <p className='mt-3 mb-2 fs-6 fw-bold'>Search for location</p>
                    <SearchBar value={newFilterTag} onChange={this.handleSearchChange} placeholder="Search for locations" />
                </form>

                <div className='mt-2'>
                    {filterTags.map((tag, index) => (
                        <FilterTags
                            key={index}
                            text={tag}
                            onRemove={() => this.handleFilterTagRemove(index)}
                        />
                    ))}
                </div>
                
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <span><b>STEP 4/5</b></span>
                    <Button variant="primary" className="rounded-5 px-3" onClick={this.handleContinue}>
                        Continue <i class="bi bi-chevron-right"></i>
                    </Button>
                </div>
            </div>
        );
    }
}
