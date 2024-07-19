import React from "react";

export default function PerformanceScoreCard({ reviews, experience, market }) {
    const totalRating = reviews + experience + market;

    return (
        <div className="container rounded-3 bg-primary">
            <div className="row h-100 px-3 py-3">
                <div className="py-1 text-white fw-semibold fs-5">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Performance Score</div>
                        <div className="d-flex flex-column">{totalRating}/40</div>
                    </div>
                </div>
                <div className="py-1 fw-normal text-white">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Reviews</div>
                        <div className="d-flex flex-column">{reviews}/20</div>
                    </div>
                </div>
                <div className="py-1 fw-normal text-white">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Experience</div>
                        <div className="d-flex flex-column">{experience}/10</div>
                    </div>
                </div>
                <div className="py-1 fw-normal text-white">
                    <div className="d-flex">
                        <div className="d-flex flex-column flex-fill">Market Presence</div>
                        <div className="d-flex flex-column">{market}/10</div>
                    </div>
                </div>

            </div>
        </div>
    );
}
