import React from "react";
import StarSystem from "../StarSystem/StarSystem";

export default function RatingCard() {
  const criterias = [
    {
      criteria: "Quality",
      rating: "5.0",
    },
    {
      criteria: "Schedule",
      rating: "5.0",
    },
    {
      criteria: "Cost",
      rating: "5.0",
    },
    {
      criteria: "Willing to Refer",
      rating: "5.0",
    },
  ];

  return (
    <div className="container border rounded-4">
      <div className="row h-100 px-3 py-3">
        <div className="d-flex justify-content-center fs-4 fw-medium">5.0</div>
        <div className="d-flex justify-content-center pb-2">
          <StarSystem rating="4.5" />
        </div>
        {criterias.map((val, key) => (
          <div className="border-top py-2 fw-light">
            <div className="d-flex">
              <div className="d-flex flex-column flex-fill">{val.criteria}</div>
              <div className="d-flex flex-column">{val.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
