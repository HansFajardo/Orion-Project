import React from 'react'

export default function CompanyProjectPanel() {
    return (
        <div className='rounded-3 border border-3 p-3'>
            <div className='d-flex flex-row justify-content-between'>
                <div className='fs-6 d-flex flex-row'>
                    <div className='fw-medium' style={{ letterSpacing: "4px" }}>Service Provider:</div> Sterling International Computing
                </div>
                <div className="d-flex gap-3 me-2">
                    <div>
                        <i class="bi bi-calendar"></i>
                    </div>
                    <div>Feb - June 2020</div>
                    <div>
                        <i class="bi bi-pencil-square fs-4 pointer"></i>
                    </div>
                </div>
            </div>
            <div className='fs-4 my-5 fw-bold'>
                E-Commerce Platform Development for Retail Company
            </div>
            <div className='fs-6 fw-medium' style={{ letterSpacing: "4px" }}>
                Project Description:
            </div>
            <div className='w-75'>
                Despite setbacks because of the coronavirus pandemic,
                a school bag retailer wanted to still make sales.
                Sterling International Computing developed a WooCommerce platform for the business.
            </div>
            <div className="mt-4">
                <div className="fw-medium" style={{ letterSpacing: "4px" }}>
                    Project Details
                </div>
                <div className="d-flex flex-column py-2 gap-1">
                    <div className="d-flex gap-3">
                        <div>
                            <i class="bi bi-display"></i>
                        </div>
                        <div>E-Commerce Development</div>
                    </div>
                    <div className="d-flex gap-3">
                        <div>
                            <i class="bi bi-tag"></i>
                        </div>
                        <div>Php 50,000- Php 100,000</div>
                    </div>
                    <div className="d-flex gap-3">
                        <div>
                            <i class="bi bi-calendar"></i>
                        </div>
                        <div>Feb - June 2020</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
