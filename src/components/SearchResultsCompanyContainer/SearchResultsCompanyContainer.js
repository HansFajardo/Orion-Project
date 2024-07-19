import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image, Stack } from "react-bootstrap";
import DefaultPic from "../../assets/img/defaultProfPic.png";
import StarSystem from "../StarSystem/StarSystem";
import BookmarkComponent from "../Bookmark/Bookmark";
import {
  Alarm,
  LanguageOutlined,
  LocationOnOutlined,
  Message,
  PersonOutline,
  SellOutlined,
  Verified,
  VisibilityOutlined,
} from "@mui/icons-material";

export default function SearchResultsCompanyContainer() {
  return (
    <Container className="border bg-light ">
      <Row className="h-100">
        {/* column 1 - company info  */}
        <Col lg={10} className="border-end p-0">
          {/* company header */}
          <Container fluid className="border-bottom">
            <Row className="h-100 p-4">
              {/* logo */}
              <Col lg={1}>
                <Image fluid src={DefaultPic} alt="default" rounded />
              </Col>
              {/* name */}
              <Col lg={10}>
                <div className="fw-medium fs-5">
                  Sterling International Computing
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>4.5</div>
                  <StarSystem rating="4.5" />
                  <div className="text-primary text-decoration-underline pointer">
                    30 reviews
                  </div>
                </div>
              </Col>
              {/* bookmark icon */}
              <Col lg={1}>
                <div className>
                  <BookmarkComponent />
                </div>
              </Col>
            </Row>
          </Container>
          {/* company description */}
          {/* note this container overflows the parent container */}
          <Container fluid className="">
            <Row>
              {/* 1st col basic info */}
              <Col lg={4} className=" border-end py-3">
                <Stack direction="vertical" gap={2}>
                  {/* verified */}
                  <div className="d-flex text-primary gap-2">
                    <Verified />
                    <div className="text-black">Verified</div>
                  </div>
                  {/* price */}
                  <div className="d-flex text-primary gap-2">
                    <SellOutlined />
                    <div className="text-black">25,000+</div>
                  </div>
                  {/* time  */}
                  <div className="d-flex text-primary gap-2">
                    <Alarm />
                    <div className="text-black">150 - $199 / hr</div>
                  </div>
                  {/* person  */}
                  <div className="d-flex text-primary gap-2">
                    <PersonOutline />
                    <div className="text-black">10 - 49</div>
                  </div>
                  {/* location  */}
                  <div className="d-flex text-primary gap-2">
                    <LocationOnOutlined />
                    <div className="text-black">Makati Philippines</div>
                  </div>
                </Stack>
              </Col>
              {/* 2nd col service focus */}
              <Col lg={4} className="border-end py-3">
                <div className="fw-medium">Service Focused</div>
                <div>60% Web Development</div>
                <div>30% Mobile App Development</div>
                <div>10% Game Development</div>
              </Col>
              {/* 3rd col recent reviews */}
              <Col lg={4} className="py-3">
                <div className="fw-medium">Brief Description</div>
                <div className="py-2">
                  We offer business excellence, governance, risk and compliance
                  consulting services in the field of ISO 9001 QMS, ISO 14001
                  EMS, ISO 45001 OHSMS, ISO 27001 ISMS, ISO 22000 FSMS etc
                </div>
              </Col>
            </Row>
          </Container>
        </Col>

        {/* column 2 - interactions */}
        <Col lg={2} className="h-100 p-0 d-flex flex-column px-2">
          {/* visit website  */}
          <Container fluid className="border-bottom flex-fill pointer">
            <Row className="h-100">
              <Col lg={9} className="d-flex align-items-center text-primary">
                <div>Visit Website</div>
              </Col>
              <Col className="d-flex align-items-center text-primary">
                <LanguageOutlined />
              </Col>
            </Row>
          </Container>
          {/* view profile */}
          <Container fluid className="border-bottom flex-fill pointer">
            <Row className="h-100">
              <Col lg={9} className="d-flex align-items-center text-primary">
                <div>View Profile</div>
              </Col>
              <Col className="d-flex align-items-center text-primary">
                <VisibilityOutlined />
              </Col>
            </Row>
          </Container>
          {/* send message  */}
          <Container fluid className="flex-fill pointer">
            <Row className="h-100">
              <Col lg={9} className="d-flex align-items-center text-primary">
                <div>Send Message</div>
              </Col>
              <Col className="d-flex align-items-center text-primary">
                <Message />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}
