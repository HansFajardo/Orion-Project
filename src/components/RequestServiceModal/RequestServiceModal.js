import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Stack, Form, InputGroup } from "react-bootstrap";
import { ServicesList } from "../../backend/files/ServicesList";
// import DatePicker from "react-datepicker";

export default function RequestServiceModal(props) {
  const sortedServices = [...ServicesList].sort();
  // const [selectedStartDate, setSelectedStartDate] = useState(null);
  // const [selectedEndDate, setSelectedEndDate] = useState(null);
  // const handleStartDateChange = (date) => {
  //   setSelectedStartDate(date);
  // };

  // const handleEndDateChange = (date) => {
  //   setSelectedEndDate(date);
  // };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Container className="text-center">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="fs-5 fw-bold"
          >
            Request Service
          </Modal.Title>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Stack direction="vertical" gap={4}>
                {/* type of service  */}
                <div className="d-flex align-items-center gap-2">
                  <Col lg={3}>
                    <span className="fw-light">Type of service</span>
                  </Col>
                  <Col>
                    <Form.Select aria-label="Default select example">
                      <option>Choose service</option>
                      {sortedServices.map((service) => (
                        <option value={service}>{service}</option>
                      ))}

                      {/* <option value="2">Two</option>
                      <option value="3">Three</option> */}
                    </Form.Select>
                  </Col>
                </div>
                {/* budget */}
                <div className="d-flex align-items-center gap-2">
                  <Col lg={3}>
                    <span className="fw-light">Budget</span>
                  </Col>
                  <Col>
                    <div className="d-flex align-items-center gap-2">
                      <Form>
                        <Form.Group controlId="Budget">
                          <InputGroup>
                            <InputGroup.Text id="basic-addon1">
                              Php
                            </InputGroup.Text>
                            <Form.Control
                              aria-label="Budget"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </Form.Group>
                      </Form>
                    </div>
                  </Col>
                </div>
                {/* date picker  */}
                <Row>
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
                {/* description */}
                <Form>
                  <Form.Group className="fw-medium" controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your description here"
                    />
                  </Form.Group>
                </Form>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 d-flex justify-content-center">
          <Button onClick={props.onHide} className="rounded-5 px-4">
            Submit Request
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
