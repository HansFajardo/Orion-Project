import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
// import mailIcon from "../assets/img/mail.svg";
import Col from "react-bootstrap/Col";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { IconButton } from "@mui/material";
// import callIcon from "../assets/img/call.svg";
// import locationIcon from "../assets/img/location.svg";
import Row from "react-bootstrap/Row";

export default function WorkplaceModal(props) {
    //   const [editEmail, setEditEmail] = useState(false);
    //   const [editPhone, setEditPhone] = useState(false);
    //   const [editLoc, setEditLoc] = useState(false);
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
                        Add Workplace Link
                    </Modal.Title>
                </Container>
            </Modal.Header>
            <Modal.Body>
                <Container className="d-flex flex-column">
                    <h6>Workplace Link</h6>
                    <Form>
                        <Form.Control
                            type="text"
                        />
                    </Form>
                    <br />

                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Add Link</Button>
            </Modal.Footer>
        </Modal>
    );
}
