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
import DefaultPic from "../assets/img/defaultProfPic.png";

export default function EditCompanyProfileModal2(props) {
    const [editCompanyName, setEditCompanyName] = useState(false);
    const [editBudget, setEditBudget] = useState(false);
    const [editDescription, setEditDescription] = useState(false);
    const [editDeadline, setEditDeadline] = useState(false);
    const [editEmployees, setEditEmployees] = useState(false);
    const [editFounded, setEditFounded] = useState(false);
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
                    <h5>Company Profile</h5>
                    <Row>
                        <Col lg={10}>
                            <div className="text-secondary fs-6">Service Title</div>
                            <div className="leadingIcon">
                                <i class="bi bi-buildings"></i>
                                {!editCompanyName ? (
                                    <div>Professional Web Design Services</div>
                                ) : (
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={"Professional Web Design Services"}
                                        className="flex-fill"
                                    />
                                )}
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <IconButton
                                aria-label="Edit"
                                style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                onClick={() => setEditCompanyName(!editCompanyName)}
                            >
                                <EditOutlinedIcon />
                            </IconButton>
                        </Col>
                    </Row>


                    <Row className="mt-3">
                        <Col lg={10}>
                            <div className="text-secondary fs-6">Description</div>
                            <div className="leadingIcon">
                                {!editDescription ? (
                                    <div style={{ height: '100px', overflow: 'scroll' }}>
                                        Sterling International Consulting is a business process management consulting company in the Philippines. We offer business excellence, governance, risk and compliance consulting services. We offer business excellence, governance, risk and compliance consulting services. We offer business excellence, governance, risk and compliance consulting services. We offer business excellence, governance, risk and compliance consulting services. We offer business excellence, governance, risk and compliance consulting services. We offer business excellence, governance, risk and compliance consulting services.
                                    </div>
                                ) : (
                                    <Form.Control
                                        as="textarea"
                                        name="Description"
                                        id="Description"
                                        value={"Sterling International Consulting is a business process management consulting company in the Philippines. We offer business excellence, governance, risk and compliance consulting serviclippines. We offer business excellence, governance, risk and compliance consulting serviclippines. We offer business excellence, governance, risk and compliance consulting serviclippines. We offer business excellence, governance, risk and compliance consulting serviclippines. We offer business excellence, governance, risk and compliance consulting serviclippines. We offer business excellence, governance, risk and compliance consulting servic"}
                                        rows={4}
                                        className="flex-fill"
                                    />
                                )}
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <IconButton
                                aria-label="Edit"
                                style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                onClick={() => setEditDescription(!editDescription)}
                            >
                                <EditOutlinedIcon />
                            </IconButton>
                        </Col>
                    </Row>

                    <br />

                    <h6 className="mt-3">Additional Information</h6>

                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex flex-row align-content-center justify-content-center">
                            <Col lg={10}>
                                <div className="text-secondary fs-6">Budget</div>
                                <div className="leadingIcon">
                                    <i class="bi bi-tag fs-5 fw-bolder"></i>
                                    {!editBudget ? (
                                        <div>0</div>
                                    ) : (
                                        <input
                                            type="text"
                                            name="Budget"
                                            id="Budget"
                                            value={"0"}
                                            className="flex-fill"
                                        />
                                    )}
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-end align-items-center">
                                <IconButton
                                    aria-label="Edit"
                                    style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                    onClick={() => setEditBudget(!editBudget)}
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Col>
                        </div>

                        <div className="d-flex flex-row align-content-center justify-content-center">
                            <Col lg={10}>
                                <div className="text-secondary fs-6">Deadline</div>
                                <div className="leadingIcon">
                                    <i class="bi bi-alarm fs-5 fw-bolder"></i>

                                    {!editDeadline ? (
                                        <div>Undisclosed</div>
                                    ) : (
                                        <input
                                            type="text"
                                            name="Deadline"
                                            id="Deadline"
                                            value={"Undisclosed"}
                                            className="flex-fill"
                                        />
                                    )}
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-end align-items-center">
                                <IconButton
                                    aria-label="Edit"
                                    style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                    onClick={() => setEditDeadline(!editDeadline)}
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Col>
                        </div>
                        <div className="d-flex flex-row align-content-center justify-content-center">
                            <Col lg={10}>
                                <div className="text-secondary fs-6">Employees</div>
                                <div className="leadingIcon">
                                    <i class="bi bi-person fs-5 fw-bolder"></i>

                                    {!editEmployees ? (
                                        <div>10-49</div>
                                    ) : (
                                        <input
                                            type="text"
                                            name="Employees"
                                            id="Employees"
                                            value={"10-49"}
                                            className="flex-fill"
                                        />
                                    )}
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-end align-items-center">
                                <IconButton
                                    aria-label="Edit"
                                    style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                    onClick={() => setEditEmployees(!editEmployees)}
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Col>
                        </div>
                        <div className="d-flex flex-row align-content-center justify-content-center">
                            <Col lg={10}>
                                <div className="text-secondary fs-6">Founded In</div>
                                <div className="leadingIcon">
                                    <i class="bi bi-flag fs-5 fw-bolder"></i>

                                    {!editFounded ? (
                                        <div>Founded 2006</div>
                                    ) : (
                                        <input
                                            type="text"
                                            name="Founded"
                                            id="Founded"
                                            value={"Founded 2006"}
                                            className="flex-fill"
                                        />
                                    )}
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-end align-items-center">
                                <IconButton
                                    aria-label="Edit"
                                    style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                    onClick={() => setEditFounded(!editFounded)}
                                >
                                    <EditOutlinedIcon />
                                </IconButton>
                            </Col>
                        </div>
                    </div>
                </Container>
            </Modal.Body>
            <div className="text-center mb-3">
                <Button variant="primary" className="fw-bold mx-2 px-3 rounded-5">
                    Save
                </Button>
            </div>
        </Modal>
    );
}
