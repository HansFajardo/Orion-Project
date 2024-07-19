import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Stack, Form, InputGroup } from "react-bootstrap";
import RatingCategsContainer from "./RatingCategsContainer/RatingCategsContainer";
import StarSystem from "../StarSystem/StarSystem";

export default function SubmitReviewModal(props) {
  const [valueQuality, setValueQuality] = useState(0);
  const [valueSched, setValueSched] = useState(0);
  const [valueCost, setValueCost] = useState(0);
  const [valueWill, setValueWill] = useState(0); 

  const overallRating = (valueQuality + valueSched + valueCost + valueWill)/4;

  const ratingCategs = [
    {
      category: "Quality",
      value: valueQuality,
    },
    {
      category: "Schedule",
      value: valueSched,
    },
    {
      category: "Cost",
      value: valueCost,
    },
    {
      category: "Willing to Refer",
      value: valueWill,
    },
  ];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    let id = e.target.id;
    // Update the value in the state, ensuring it's a valid number
    switch (id) {
      case "Quality":
        setValueQuality(parseInt(inputValue) || 0);
        break;
      case "Schedule":
        setValueSched(parseInt(inputValue) || 0);
        break;
      case "Cost":
        setValueCost(parseInt(inputValue) || 0);
        break;
      case "Willing to Refer":
        setValueWill(parseInt(inputValue) || 0);
        break;
    }
  };
  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Container className="text-center">
            <Modal.Title
              id="contained-modal-title-vcenter"
              className="fs-5 fw-bold"
            >
              Submit A Review
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              {/* column 1 for inputs */}
              <Col lg={6}>
                <Stack direction="vertical" gap={2}>
                  <div className="d-flex gap-2">
                    <span className="fw-medium">To: </span>
                    <span className="fw-light">
                      Sterling International Computing
                    </span>
                  </div>
                  <Form>
                    <Form.Group className="mb-2" controlId="Project Summary">
                      <Form.Label className="fw-medium">
                        Project Summary
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Type your Project Summary here"
                      />
                    </Form.Group>
                    <Form.Group
                      className="fw-medium"
                      controlId="Feedback Summary"
                    >
                      <Form.Label>Feedback Summary</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Type your Feedback Summary here"
                      />
                    </Form.Group>
                    <Form.Group className="fw-medium" controlId="Review">
                      <Form.Label>Review</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Type your Review here"
                      />
                    </Form.Group>
                  </Form>
                </Stack>
              </Col>
              {/* column 2 for ratings */}
              <Col lg={6}>
                <Stack direction="vertical" gap={2}>
                  <div className="fw-medium">Ratings</div>
                  <div className="fw-light">
                    Select from 1-5 each category, with 1 being the lowest and 5
                    being the highest rating.
                  </div>
                  {/* quality rating container */}
                  {/* <Container fluid className="border px-4 py-3">
                    <Row>
                      <Col lg={9} className="d-flex align-items-center">
                        <div>Quality</div>
                      </Col>
                      <Col
                        lg={3}
                        className="d-flex align-items-center text-center"
                      >
                        <div className="flex-fill">
                          <Form.Control
                            type="number"
                            value={value}
                            onChange={handleInputChange}
                            min={0} // Minimum value allowed (optional)
                            max={5} // Maximum value allowed (optional)
                            step={1} // Increment/decrement step (optional)
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container> */}
                  <div className="d-flex flex-column border-end border-start border-bottom">
                    {ratingCategs.map((val, key) => {
                      return (
                        <RatingCategsContainer
                          label={val.category}
                          handleInputChange={handleInputChange}
                          value={val.value}
                          id={val.category}
                        />
                      );
                    })}
                  </div>
                  {/* Overall ratings */}
                  <Container fluid className="pt-2">
                    <Row>
                      <Col lg={4} className="d-flex align-items-center">
                        <div className="text-primary">OVERALL RATING</div>
                      </Col>
                      <Col lg={4} className="d-flex align-items-center">
                        <StarSystem rating={overallRating}/>
                      </Col>
                      <Col lg={4} className="d-flex align-items-center">
                        <div>{overallRating}</div>
                      </Col>
                    </Row>
                  </Container>
                </Stack>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100 d-flex justify-content-center">
            <Button onClick={props.onHide} className="rounded-5 px-4">
              Submit
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
