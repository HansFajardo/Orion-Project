import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


export default function SignInModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign-in as</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
            <Link to='/sign-in-client'>
            <Button className="my-2 fw-bold">Sign Up as Client</Button>
            </Link>
            <Link to='/sign-in-company'>
            <Button className="my-2 fw-bold">Sign Up as Company</Button>
            </Link>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
