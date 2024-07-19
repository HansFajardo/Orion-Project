import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Stack, Form, Image } from "react-bootstrap";
import Visa from "../../assets/img/visa-logo.png";
import Mastercard from "../../assets/img/mastercard.svg";
import Maya from "../../assets/img/maya.svg";
import GCash from "../../assets/img/gcash.svg";

export default function PayNowModal(props) {
  const [selectedOption, setSelectedOption] = useState(""); // Default selected option

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
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
            className="fs-5 fw-medium"
          >
            Pay Now
          </Modal.Title>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Stack direction="vertical" gap={1}>
                <div className="fw-medium fs-5">Payment Method</div>
                <div className="fw-light fs-6">
                  Choose how you would like to pay.
                </div>
                <Form>
                  <Stack direction="vertical" gap={2} className="py-2">
                    <Container fluid className="border p-3 fw-light">
                      <Row>
                        <Col lg={8}>
                          <Form.Check
                            type="radio"
                            label="Credit or Debit Card"
                            name="radioGroup"
                            value="card"
                            checked={selectedOption === "card"}
                            onChange={handleOptionChange}
                          />
                        </Col>
                        <Col>
                          <Stack
                            direction="horizontal"
                            className="d-flex align-items-center justify-content-center"
                          >
                            <Image src={Mastercard} alt="visa-logo" />
                            <Image src={Visa} alt="visa-logo" height={18} />
                          </Stack>
                        </Col>
                      </Row>
                    </Container>
                    <Container fluid className="border p-3 fw-light">
                      <Row>
                        <Col lg={8}>
                          <Form.Check
                            type="radio"
                            label="PayMaya"
                            name="radioGroup"
                            value="maya"
                            checked={selectedOption === "maya"}
                            onChange={handleOptionChange}
                          />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Image src={Maya} alt="visa-logo" />
                        </Col>
                      </Row>
                    </Container>
                    <Container fluid className="border p-3 fw-light">
                      <Row>
                        <Col lg={8}>
                          <Form.Check
                            type="radio"
                            label="GCash"
                            name="radioGroup"
                            value="gcash"
                            checked={selectedOption === "gcash"}
                            onChange={handleOptionChange}
                          />
                        </Col>
                        <Col className="d-flex align-items-center justify-content-center">
                          <Image src={GCash} alt="visa-logo" />
                        </Col>
                      </Row>
                    </Container>
                  </Stack>
                </Form>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <div className="w-100 d-flex justify-content-center">
          <Button onClick={props.onHide} className="rounded-5 px-4 fw-medium">
            Submit Payment
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
