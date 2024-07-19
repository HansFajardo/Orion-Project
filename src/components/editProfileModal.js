import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import mailIcon from "../assets/img/mail.svg";
import Col from "react-bootstrap/Col";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IconButton } from "@mui/material";
import callIcon from "../assets/img/call.svg";
import locationIcon from "../assets/img/location.svg";
import Row from "react-bootstrap/Row";

export default function EditProfileModal(props) {
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editLoc, setEditLoc] = useState(false);
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="bg-light">
        <Container className="text-center">
          <Modal.Title id="contained-modal-title-vcenter" className="fs-5">
            Edit Profile
          </Modal.Title>
        </Container>
      </Modal.Header>
      <Modal.Body>
        <Container className="d-flex flex-column">
          <h6>Bio</h6>
          <Form>
            <Form.Control
              as="textarea"
              placeholder="22 | A Computer Engineering Student"
              rows={3}
            />
          </Form>
          <Row
            className="justify-content-end px-3"
            style={{ fontSize: "12px" }}
          >
            64 characters remaining
          </Row>
          <br />
          <div>
            <Button variant="outline-dark" className="rounded-5 px-3">
              Cancel
            </Button>
            <Button variant="primary" className="fw-bold mx-2 px-3 rounded-5">
              Save
            </Button>
          </div>

          <h6 className="py-3">Contacts & Information</h6>

          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-row align-content-center justify-content-center">
              <Col lg={10}>
                <div className="text-secondary fs-6">Email Address</div>
                <div className="leadingIcon">
                  <img src={mailIcon} alt="mail" />
                  {!editEmail ? (
                    <div>hansangelo.amponin.v@bulsu.edu.ph</div>
                  ) : (
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={"hansangelo.amponin.v@bulsu.edu.ph"}
                      className="flex-fill"
                    />
                  )}
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <IconButton
                  aria-label="Edit"
                  style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                  onClick={() => setEditEmail(!editEmail)}
                >
                  <EditOutlinedIcon />
                </IconButton>
              </Col>
            </div>
            <div className="d-flex flex-row align-content-center justify-content-center">
              <Col lg={10}>
                <div className="text-secondary fs-6">Phone</div>
                <div className="leadingIcon">
                  <img src={callIcon} alt="call" />

                  {!editPhone ? (
                    <div>0912-345-6789</div>
                  ) : (
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={"0912-345-6789"}
                      className="flex-fill"
                    />
                  )}
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <IconButton
                  aria-label="Edit"
                  style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                  onClick={() => setEditPhone(!editPhone)}
                >
                  <EditOutlinedIcon />
                </IconButton>
              </Col>
            </div>
            <div className="d-flex flex-row align-content-center justify-content-center">
              <Col lg={10}>
                <div className="text-secondary fs-6">Location</div>
                <div className="leadingIcon">
                  <img src={locationIcon} alt="location" />

                  {!editLoc ? (
                    <div>Meycauayan, Bulacan</div>
                  ) : (
                    <input
                      type="text"
                      name="location"
                      id="location"
                      value={"Meycauayan, Bulacan"}
                      className="flex-fill"
                    />
                  )}
                </div>
              </Col>
              <Col className="d-flex justify-content-end align-items-center">
                <IconButton
                  aria-label="Edit"
                  style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                  onClick={() => setEditLoc(!editLoc)}
                >
                  <EditOutlinedIcon />
                </IconButton>
              </Col>
            </div>
          </div>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
