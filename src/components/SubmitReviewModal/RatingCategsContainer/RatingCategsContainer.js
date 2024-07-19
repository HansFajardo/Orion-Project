import React from "react";
import { Row, Col, Container, Form } from "react-bootstrap";

export default function RatingCategsContainer({
  label,
  value,
  handleInputChange,
  id,
}) {
  return (
    <Container fluid className="border-top px-4 py-2">
      <Row>
        <Col lg={9} className="d-flex align-items-center">
          <div>{label}</div>
        </Col>
        <Col lg={3} className="d-flex align-items-center text-center">
          <div className="flex-fill">
            <Form.Control
              type="number"
              value={value}
              onChange={handleInputChange}
              min={0}
              max={5}
              step={1}
              id={id}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
