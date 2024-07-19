import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

export default function PaymentCardModal(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCVC] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const [showValidCardError, setShowValidCardError] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleCardNumberChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    input = input.slice(0, 16);
    let formattedInput = input.replace(/(.{4})/g, "$1 ");
    setCardNumber(formattedInput.trim());
    setShowValidCardError(input.length !== 16); // Check for valid card number
  };

  const handleExpiryChange = (event) => {
    let input = event.target.value.replace(/\D/g, "");
    if (input.length <= 4) {
      if (input.length > 2) {
        input = input.slice(0, 2) + "/" + input.slice(2);
      }
      setExpiry(input);
    }
  };

  const handleCVCChange = (event) => {
    const input = event.target.value.replace(/\D/g, "").slice(0, 4);
    if (input.length <= 4) {
      setCVC(input);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSave = () => {
    if (cardNumber && expiry && cvc && email && name) {
      if (!showValidCardError) {
        // Only save if all fields are filled and card number is valid
        setCardNumber("");
        setExpiry("");
        setCVC("");
        setEmail("");
        setName("");
        setShowError(false);
        setShowValidCardError(false);
        setShowSavedToast(true);
        props.onSave({ cardNumber, expiry, cvc, email, name });
        props.onHide();
      } else {
        setShowError(false); // Hide the general error if the card number is invalid
      }
    } else {
      setShowError(true); // Show the general error if any field is empty
    }
  };

  const handleModalClose = () => {
    setCardNumber("");
    setExpiry("");
    setCVC("");
    setEmail("");
    setName("");
    setShowError(false);
    setShowValidCardError(false);
    props.onHide();
  };

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleModalClose}
      >
        <Modal.Header closeButton className="bg-light">
          <Container className="text-center">
            <Modal.Title id="contained-modal-title-vcenter" className="fs-5">
              Add a Card
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Container className="d-flex flex-column">
              <h6>
                Billing Email<span className="text-danger"> *</span>
              </h6>
              <div className="input-container">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <Row className="justify-content-end px-3" style={{ fontSize: "12px" }}>
              </Row>
              <br />
              <h6>
                Name on Card<span className="text-danger"> *</span>
              </h6>
              <div className="position-relative">
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
              <br />
              <h6>
                Card Information<span className="text-danger"> *</span>
              </h6>
              <Row>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Control
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={handleExpiryChange}
                  />
                </Col>
                <Col sm={2}>
                  <Form.Control
                    type="text"
                    placeholder="CVC"
                    value={cvc}
                    onChange={handleCVCChange}
                  />
                </Col>
              </Row>
              {showError && (
                <div className="text-danger mt-2">
                  Please fill in all fields.
                </div>
              )}
              {showValidCardError && (
                <div className="text-danger mt-2">
                  Please enter a valid card number with 16 digits.
                </div>
              )}
            </Container>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="rounded-5 px-5" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Toast
        show={showSavedToast}
        onClose={() => setShowSavedToast(false)}
        delay={3000}
        autohide
        className="bg-success-subtle"
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Toast.Body className="d-flex flex-row justify-content-between">
          Your bank information has been saved.
          <Button
            className="btn-close me-2 m-auto"
            onClick={() => setShowSavedToast(false)}
          />
        </Toast.Body>
      </Toast>
    </>
  );
}
