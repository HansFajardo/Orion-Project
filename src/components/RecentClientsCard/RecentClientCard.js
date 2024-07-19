import React from "react";
import { Link } from "react-router-dom";

export default function RecentClientCard({ clients }) {
    return (
        <div className="container rounded-3 bg-light">
            <div className="row h-100 px-3 py-3">
                <div className="py-1 fw-semibold fs-5">
                    <div className="d-flex flex-column flex-fill text-primary">Recent Clients</div>
                </div>
                <div className="py-1 fw-normal">
                    {clients.map((client, index) => (
                        <div key={index} className="d-flex align-items-center gap-2">
                            <i className="bi bi-person fs-5 fw-bolder"></i>
                            <div>{client}</div>
                        </div>
                    ))}
                </div>
                <Link to='/company-transactions'>
                    <button className="btn btn-outline-primary rounded-5 mt-2" style={{ width: '120px' }}>View More</button>
                </Link>
            </div>
        </div>
    );
}
