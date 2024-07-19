import React from "react";
import YellowStar from "../../assets/img/yellowstar.svg";
import { Button } from "react-bootstrap";
import SubmitReviewModal from "../SubmitReviewModal/SubmitReviewModal";

export default function ReviewsLongContainer() {
  const [modalSubmitReview, setModalSubmitReview] = React.useState(false);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="border rounded-4 shadow-sm px-4 py-4">
          <div className="fw-medium fs-5">Reviews</div>
          <div className="d-flex align-items-center pt-3 gap-4 pb-2">
            <img height="60px" width="60px" src={YellowStar} alt="" />
            <div className="d-flex flex-column flex-fill">
              <div className="fw-medium fs-4">
                Have you worked with Sterling International Computing?
              </div>
              <div className="d-flex">
                <div className="d-flex flex-column flex-fill">
                  <div>
                    Share your experience working with Sterling International
                    Computing on
                  </div>
                  <div>
                    a a past project by leaving a review for buyers around the
                    country.
                  </div>
                </div>
                <Button variant="primary" className="rounded-5 px-4" onClick={()=>{
                  setModalSubmitReview(true);
                }}>
                  Submit a Review <i class="bi bi-chevron-right"></i>
                </Button>
                <SubmitReviewModal show={modalSubmitReview}
                        onHide={() => setModalSubmitReview(false)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
