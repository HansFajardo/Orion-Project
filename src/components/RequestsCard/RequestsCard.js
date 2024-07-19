import React, { useState } from "react";
import DefaultImage from "../../assets/img/defaultProfPic.png";
import { Button } from "react-bootstrap";
import SendMessageModal from "../sendMessageModal/sendMessageModal";

export default function RequestsCard({ status }) {
  const [modalMessageShow, setModalMessageShow] = useState(false);
  return (
    <div
      className="container border rounded-2 shadow-sm"
      style={{ height: "300px", overflow: "hidden" }}
    >
      <div className="row border-bottom p-3 fw-semibold align-items-center">
        <div className="col-lg-8 ">Sterling International Computing</div>
        <div className="col-lg-4 d-flex justify-content-end gap-4">
          <div
            className={`rounded-5 px-4 d-flex align-items-center text-white ${
              status === "Accepted" ? "bg-success" : "bg-warning"
            }`}
          >
            {status}
          </div>
          <Button
            variant="outline-primary"
            onClick={() => setModalMessageShow(true)}
          >
            Message
          </Button>
          <SendMessageModal
            show={modalMessageShow}
            onHide={() => setModalMessageShow(false)}
          />
        </div>
      </div>
      {/* this div does overlap the main container */}
      <div className="row" style={{ height: "300px" }}>
        {/* first column */}
        <div className="col-lg-4 p-3 border-end">
          <div className="fw-medium" style={{ letterSpacing: "4px" }}>
            REQUEST
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
        {/* 2nd column */}
        <div className="col-lg-4 py-3">
          <div className="container" style={{ height: "60%" }}>
            <div className="d-flex fw-medium" style={{ letterSpacing: "4px" }}>
              DESCRIPTION
            </div>
            <div className="d-flex text-break">
              Despite setbacks because of the coronavirus pandemic, a school bag
              retailer wanted to still make sales. Sterling International
              Computing developed a WooCommerce platform for the business.
            </div>
          </div>
        </div>
        {/* 3rd column */}
        <div className="col-lg-4 border-start py-3">
          <div className="container-fluid">
            <div className="d-flex fw-medium" style={{ letterSpacing: "4px" }}>
              SERVICE PROVIDER
            </div>
            <div className="d-flex align-items-center py-2 gap-3">
              <img
                width={40}
                height={40}
                src={DefaultImage}
                alt="profilepic"
                className="border p-0 img-fluid rounded-circle"
              />
              <div className="fw-light">Sterling International Computing</div>
            </div>
            <div className="d-flex py-1 gap-3">
              <div>
                <i class="bi bi-envelope"></i>
              </div>
              <div>info@iso-certification.ph</div>
            </div>
            <div className="d-flex py-1 gap-3">
              <div>
                <i class="bi bi-geo-alt"></i>
              </div>
              <div>Makati, Philippines</div>
            </div>
            <div className="d-flex py-1 gap-3">
              <div>
                <i class="bi bi-telephone"></i>
              </div>
              <div>0977-815-1204</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
