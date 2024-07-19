import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";

export default function SendMessageModal(props) {
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
            Send a Message
          </Modal.Title>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Stack direction="vertical" gap={4}>
                <div className="d-flex gap-2">
                  <span className="fw-medium">To: </span>
                  <span className="fw-light">
                    Sterling International Computing
                  </span>
                </div>
                <Form>
                  <Form.Group className="mb-4" controlId="Subject">
                    <Form.Label className="fw-medium">Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Type your subject here"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group className="fw-medium" controlId="Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Type your message here"
                    />
                  </Form.Group>
                </Form>
              </Stack>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer >
        <div className="w-100 d-flex justify-content-center">
          <Button onClick={props.onHide} className="rounded-5 px-4">
            Send Message
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
