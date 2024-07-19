import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function FindJobModal(props) {
    const [subject, setSubject] = useState("");
    const [isBudgetAsIsSelected, setIsBudgetAsIsSelected] = useState(true); // State for "I Accept the Budget As Is" button
    const maxLength = 100;

    const handleBudgetAsIsSelect = () => {
        setIsBudgetAsIsSelected(true);
    };

    const handleAdjustBudgetSelect = () => {
        setIsBudgetAsIsSelected(false);
    };

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
                        Send Application
                    </Modal.Title>
                </Container>
            </Modal.Header>
            <Modal.Body>
                <Container className="d-flex flex-column">
                    <Row className="mb-3">
                        <Col md={2}>
                            Project Title
                        </Col>
                        <Col>
                            3D Modeler for Thesis Project
                        </Col>
                    </Row>
                    <Row>
                        <Col md={2}>
                            Budget
                        </Col>
                        <Col>
                            Php 15,000
                        </Col>
                    </Row>
                    <br />

                    <Row className="mb-3">
                        <Col>
                            <button className={`btn ${isBudgetAsIsSelected ? 'btn-outline-primary' : 'btn-outline-secondary'} rounded-5`} onClick={handleBudgetAsIsSelect}>I Accept the Budget As Is</button>
                        </Col>
                        <Col md={7}>
                            <div>
                                <button className={`btn ${!isBudgetAsIsSelected ? 'btn-outline-primary' : 'btn-outline-secondary'} rounded-5`} onClick={handleAdjustBudgetSelect}>I Want to Propose Adjustments to the Budget</button>
                                <div className={`d-flex flex-row align-items-center mt-2 ${isBudgetAsIsSelected ? 'd-none' : ''}`}>
                                    <div>
                                        Proposed Budget
                                    </div>
                                    <div className="d-flex flex-row align-items-center ms-3">
                                        <div>
                                            PHP
                                        </div>
                                        <input
                                            type="number"
                                            className="p-2 ms-2 rounded-2 percentage-input-company-service border border-secondary"
                                            style={{width: '150px'}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Form>
                        <h6>Comment</h6>
                        <Form.Control as="textarea" rows={6} />
                    </Form>
                    <div className="text-center mt-4">
                        <Button className="rounded-5 px-3">Submit Application</Button>
                    </div>

                </Container>
            </Modal.Body>
        </Modal>
    );
}
