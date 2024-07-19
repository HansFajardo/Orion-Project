import React from "react";
import { Card, Col, Row, Stack } from "react-bootstrap";
import DefaultPic from "../assets/img/defaultProfPic.png";
import EmptyStar from "../assets/img/orange star.svg";
import Sell from "../assets/img/sell.svg";
import Alarm from "../assets/img/alarm.svg";
import Person from "../assets/img/person.svg";
import Geo from "../assets/img/location_on.svg";
import StarHalf from "../assets/img/halfStar.svg";
import FullStar from "../assets/img/fullStar.svg";
import StarSystem from "./StarSystem/StarSystem";

export default function ProviderCard({
  companyImg,
  companyName,
  rating,
  reviews,
  tags,
  sales,
  time,
  employees,
  location,
}) {
  return (
    <Card
      className="shadow-lg border border-opacity-25 rounded-4"
      style={{ width: "17rem" }}
    >
      <Card.Header>
        <Row className="pt-2">
          <Col md={4}>
            <img
              width="70px"
              height="70px"
              src={companyImg != null ? companyImg : DefaultPic}
              alt="pic"
              className="border border-opacity-25 rounded-4"
            />
          </Col>
          <Col className="d-flex flex-column justify-content-center">
            <h5 className="fw-bold">
              {companyName != null ? companyName : "Company Name"}
            </h5>
          </Col>
        </Row>
        {/* <div className="d-flex p-2 gap-2 justify-content-center align-items-center">
          <img
            width="70px"
            height="70px"
            src={companyImg != null ? companyImg : DefaultPic}
            alt="pic"
            className="border border-opacity-25 rounded-4"
          />
          <h5 className="fw-bold">
            {companyName != null ? companyName : "Company Name"}
          </h5>
        </div> */}
        <div className="d-flex align-items-center pt-2">
          {rating}
          <StarSystem rating={rating}/>

          <a
            style={{
              color: "#E63E3E",
            }}
          >
            ({reviews})
          </a>
        </div>
        {tags.map((tag) => (
          <div className="d-flex flex-wrap pt-2 gap-2">
            <div
              className="rounded-5 bg-light-subtle py-1 px-3 text-black-50"
              style={{ fontSize: "13px" }}
            >
              {tag}
            </div>
          </div>
        ))}
      </Card.Header>
      <Card.Body>
        <Stack direction="vertical" gap={2} className="px-2 text-black-50">
          <Row>
            <Col md={2} lg={2}>
              <img src={Sell} alt="sell" />
            </Col>
            <Col>{sales != null ? sales : "0"}</Col>
          </Row>
          <Row>
            <Col md={2} lg={2}>
              <img src={Alarm} alt="alarm" />
            </Col>
            <Col>{time != null ? time : "Undisclosed"}</Col>
          </Row>
          <Row>
            <Col md={2} lg={2}>
              <img src={Person} alt="person" />
            </Col>
            <Col>{employees != null ? employees : "Unknown"}</Col>
          </Row>
          <Row>
            <Col md={2} lg={2}>
              <img src={Geo} alt="person" />
            </Col>
            <Col>{location != null ? location : "Unknown"}</Col>
          </Row>
        </Stack>
      </Card.Body>
      <Card.Footer>
        <div className="d-flex justify-content-center align-items-center text-center gap-2 text-primary py-2">
          <i class="bi bi-bookmark"></i>
          <div>Add to Bookmarks</div>
        </div>
      </Card.Footer>
    </Card>
  );
}
