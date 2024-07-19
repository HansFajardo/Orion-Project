import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import mailIcon from "../assets/img/mail.svg";
import Col from "react-bootstrap/Col";
// import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
// import { IconButton } from "@mui/material";
// import callIcon from "../assets/img/call.svg";
// import locationIcon from "../assets/img/location.svg";
import Row from "react-bootstrap/Row";
import FilterTags from "./FilterTags";
// import DatePicker from "react-datepicker";

export default function PostAJobModal(props) {
  const [subject, setSubject] = useState("");
  const maxLength = 100;

  const handleChange = (event) => {
    const inputText = event.target.value;
    if (inputText.length <= maxLength) {
      setSubject(inputText);
    }
  };

  // const [selectedStartDate, setSelectedStartDate] = useState(null);
  // const [selectedEndDate, setSelectedEndDate] = useState(null);

  // const handleStartDateChange = (date) => {
  //   setSelectedStartDate(date);
  // };

  // const handleEndDateChange = (date) => {
  //   setSelectedEndDate(date);
  // };

  const remainingCharacters = maxLength - subject.length;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-light">
        <Container className="text-center">
          <Modal.Title id="contained-modal-title-vcenter" className="fs-5">
            Post a Job
          </Modal.Title>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container className="d-flex flex-column">
          <h6>Subject</h6>
          <div className="input-container">
            <Form>
              <Form.Control
                as="textarea"
                rows={1}
                value={subject}
                onChange={handleChange}
              />
            </Form>
          </div>
          <Row
            className="justify-content-end px-3"
            style={{ fontSize: "12px" }}
          >
            {remainingCharacters >= 0
              ? `${remainingCharacters} characters remaining`
              : "Exceeded character limit"}
          </Row>
          <br />

          <h6>Budget</h6>
          <div className="position-relative mb-3">
            <Form>
              <div
                className="position-absolute top-50 fw-bold"
                style={{ left: "10px", transform: "translateY(-50%)" }}
              >
                Php
              </div>
              <Form.Control
                className="ps-5"
                type="text"
                placeholder="Enter your budget"
              />
            </Form>
          </div>

          <h6>Description</h6>
          <Form>
            <Form.Control as="textarea" rows={3} />
          </Form>

          <Row className="pt-4">
            <Col lg={6}>
              <div className="d-flex align-items-center gap-2">
                <div className="fw-light">Start Date </div>
                <div style={{ width: "120px" }}>
                  
                  <input
                    type="date"
                    name="startDate"
                    id="startDate"
                    className="p-1 rounded-2"
                  />
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="d-flex align-items-center gap-2">
                <div className="fw-light">End Date </div>
                <div style={{ width: "120px" }}>
                 
                  <input
                    type="date"
                    name="endDate"
                    id="endDate"
                    className="p-1 rounded-2"
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div className="mt-3">
            <h6>Tags:</h6>
            <FilterTags text={"Testing 1"} />
            <FilterTags text={"Testing 2"} />
            <FilterTags text={"Testing 3"} />
            <FilterTags text={"Testing 4"} />
            <FilterTags text={"Testing 5"} />
            <Button
              variant="transparent"
              className="btn btn-outline-primary rounded-5 mt-2 mx-1"
            >
              +
            </Button>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button className="rounded-5 px-5">Post</Button>
      </Modal.Footer>
    </Modal>
  );
}
