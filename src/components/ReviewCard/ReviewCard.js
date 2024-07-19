import React from "react";
import RatingCard from "../RatingCard/RatingCard";
import DefaultImage from "../../assets/img/defaultProfPic.png";

export default function ReviewCard() {
  return (
    <div
      className="container-fluid border rounded-2 shadow-sm"
      style={{ height: "450px", overflow: "hidden" }}
    >
      <div className="row border-bottom p-3 fw-semibold">
        E-Commerce Platform Development for Retail Company
      </div>
      {/* this div does overlap the main container */}
      <div className="row" style={{ height: "400px" }}>
        {/* first column */}
        <div className="col-lg-3 p-3 border-end">
          <div className="fw-medium" style={{ letterSpacing: "4px" }}>
            THE PROJECT
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
          <div className="pt-4 fw-medium" style={{ letterSpacing: "4px" }}>
            PROJECT SUMMARY
          </div>
          <div className="pt-2">
            Despite setbacks because of the coronavirus pandemic, a school bag
            retailer wanted to still make sales. Sterling International
            Computing developed a WooCommerce platform for the business. 
          </div>
        </div>
        {/* 2nd column */}
        <div className="col-lg-3 p-3">
          <RatingCard />
        </div>
        {/* 3rd column */}
        <div className="col-lg-3 py-3">
          <div className="container" style={{ height: "40%" }}>
            <div className="d-flex fw-medium" style={{ letterSpacing: "4px" }}>
              THE REVIEW
            </div>
            <div className="d-flex fw-light pt-1">
              “Everything met our expectations.”
            </div>
            <div className="d-flex pt-1">Jan 12, 2021</div>
          </div>
          <div className="container" style={{ height: "60%" }}>
            <div className="d-flex fw-medium" style={{ letterSpacing: "4px" }}>
              FEEDBACK SUMMARY
            </div>
            <div className="d-flex text-break">
              The user-friendly site has given the client an opportunity to sell
              their products online. Despite the ongoing pandemic, the results
              have been successful. Their responsiveness makes them stand out.
              They're friendly, timely, and helpful.
            </div>
          </div>
        </div>
        {/* 4th column */}
        <div className="col-lg-3 border-start py-3">
          <div className="container-fluid">
            <div className="d-flex fw-medium" style={{ letterSpacing: "4px" }}>
              THE REVIEWER
            </div>
            <div className="d-flex pt-1 fw-light">
              Sales coordinator, Astrokids
            </div>
            <div className="d-flex align-items-center py-2 gap-3">
              <img
                width={40}
                height={40}
                src={DefaultImage}
                alt="profilepic"
                className="border p-0 img-fluid rounded-circle"
              />
              <div className="fw-light">Hans Amponin</div>
            </div>
            <div className="d-flex py-1 gap-3">
              <div>
                <i class="bi bi-buildings"></i>
              </div>
              <div>Consumer Products</div>
            </div>
            <div className="d-flex py-1 gap-3">
              <div>
                <i class="bi bi-geo-alt"></i>
              </div>
              <div>Meycauayan, Bulacan</div>
            </div>
            <div className="d-flex py-1 gap-3">
              <div>
                <i class="bi bi-person"></i>
              </div>
              <div>1-10 employees</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
