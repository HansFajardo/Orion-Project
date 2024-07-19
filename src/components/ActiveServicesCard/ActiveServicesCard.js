import React from "react";
import { Link } from "react-router-dom";

export default function ActiveServicesCard({ active, applications, bills, completed }) {
    return (
        <div className="container rounded-3 bg-light">
            <div className="row h-100 px-3 py-3">
                <div className="py-1 text-primary fw-semibold fs-5">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Active Services</div>
                        <div className="d-flex flex-column">{active}</div>
                    </div>
                </div>
                <div className="py-1 fw-normal">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Pending Applications</div>
                        <div className="d-flex flex-column">{applications}</div>
                    </div>
                </div>
                <div className="py-1 fw-normal">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Pending Bills</div>
                        <div className="d-flex flex-column">{bills}</div>
                    </div>
                </div>
                <div className="py-1 fw-normal">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Completed Services</div>
                        <div className="d-flex flex-column">{completed}</div>
                    </div>
                </div>
                <Link to='/company-projects'>
                    <button className="btn btn-outline-primary rounded-5 mt-2" style={{ width: '120px' }}>
                        View More
                    </button>
                </Link>
            </div>
        </div>
    );
}
