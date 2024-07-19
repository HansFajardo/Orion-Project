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

export default function EditCompanyProfileModal(props) {
    const [editCompanyName, setEditCompanyName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editWebsite, setEditWebsite] = useState(false);
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
                    <h5>Company Profile</h5>
                    <Row>
                        <Col lg={10}>
                            <div className="text-secondary fs-6">Company Name</div>
                            <div className="leadingIcon">
                                <i class="bi bi-buildings"></i>
                                {!editCompanyName ? (
                                    <div>Sterling International Computing</div>
                                ) : (
                                    <input
                                        type="text"
                                        name="companyName"
                                        id="companyName"
                                        value={"Sterling International Computing"}
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
                            <div className="text-secondary fs-6">Website</div>
                            <div className="leadingIcon">
                                <i className="bi bi-globe"></i>
                                {!editWebsite ? (
                                    <div>https://iso-certification.ph/</div>
                                ) : (
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        value={"https://iso-certification.ph/"}
                                        className="flex-fill"
                                    />
                                )}
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end align-items-center">
                            <IconButton
                                aria-label="Edit"
                                style={{ color: "#000000", backgroundColor: "#E9E9E9" }}
                                onClick={() => setEditWebsite(!editWebsite)}
                            >
                                <EditOutlinedIcon />
                            </IconButton>
                        </Col>
                    </Row>

                    <Row className="mt-3">
                        <div className="text-secondary fs-6">Profile Picture</div>
                        <div className="text-center">
                            <img
                                width={"70px"}
                                height={"70px"}
                                src={DefaultPic}
                                alt="default"
                                className="img-fluid rounded-circle border border-3 border-primary"
                            />
                        </div>

                    </Row>

                    <br />

                    <h6 className="mt-3">Contacts & Information</h6>

                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex flex-row align-content-center justify-content-center">
                            <Col lg={10}>
                                <div className="text-secondary fs-6">Email Address</div>
                                <div className="leadingIcon">
                                    <img src={mailIcon} alt="mail" />
                                    {!editEmail ? (
                                        <div>info@iso-certification.ph</div>
                                    ) : (
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            value={"info@iso-certification.ph"}
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
            <div className="text-center mb-3">
                <Button variant="primary" className="fw-bold mx-2 px-3 rounded-5">
                    Save
                </Button>
            </div>
        </Modal>
    );
}
