import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast"; // Import the Toast component
import gcashLogo from "../assets/img/gcash.svg"; // Import the Gcash logo image
import paymayaLogo from "../assets/img/maya.svg"; // Import the Paymaya logo image

export default function PaymentEWalletModal(props) {
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false); // State to control the visibility of the saved toast

  const handleWalletSelect = (wallet) => {
    setSelectedWallet(wallet === selectedWallet ? null : wallet);
  };

  const handleSave = () => {
    if (!selectedWallet || !accountNumber.trim() || !accountName.trim()) {
      setShowWarning(true);
    } else {
      setSelectedWallet(null);
      setAccountNumber(" ");
      setAccountName(" ");
      setShowWarning(false);
      // Proceed with saving logic
      setShowWarning(false); // Reset warning state if all fields are filled
      props.onSave(selectedWallet, accountNumber, accountName); // Call onSave prop to handle saving
      setShowSavedToast(true); // Show the saved toast
      props.onHide(); // Close the modal
    }
  };

  const handleModalClose = () => {
    setSelectedWallet(null);
    setAccountNumber(" ");
    setAccountName(" ");
    setShowWarning(false);
    props.onHide(); // Close the modal
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
              Add E-Wallet
            </Modal.Title>
          </Container>
        </Modal.Header>
        <Modal.Body>
          <Container className="d-flex flex-column">
            <h6>Select an E-Wallet</h6>
            <div className="input-container">
              <Button
                variant={selectedWallet === "gcash" ? "primary" : "outline-primary"}
                className="m-2"
                onClick={() => handleWalletSelect("gcash")}
              >
                <img src={gcashLogo} alt="Gcash Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
                Gcash
              </Button>
              <Button
                variant={selectedWallet === "paymaya" ? "primary" : "outline-primary"}
                className="m-2"
                onClick={() => handleWalletSelect("paymaya")}
              >
                <img src={paymayaLogo} alt="Paymaya Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
                Paymaya
              </Button>
              {/* Add more buttons for additional wallets */}
            </div>
            <Row
              className="justify-content-end px-3"
              style={{ fontSize: "12px" }}
            >
            </Row>
            <br />

            <h6>Account Number</h6>
            <div className="position-relative mb-3">
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Enter your account number"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                />
              </Form>
            </div>

            <h6>Account Name</h6>
            <Form>
              <Form.Control
                type="text"
                placeholder="Enter your account name"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </Form>
          </Container>
          {showWarning && (
            <div className="text-danger mt-2">Please select a payment method, and fill in all fields.</div>
          )}
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button className="rounded-5 px-5" onClick={handleSave}>Save</Button>
        </Modal.Footer>
      </Modal>

      <Toast
        show={showSavedToast}
        onClose={() => setShowSavedToast(false)}
        delay={3000}
        autohide
        className="bg-success-subtle"
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <Toast.Body className="d-flex flex-row justify-content-between">
          Your e-wallet information has been saved.
          <Button
            className="btn-close me-2 m-auto"
            onClick={() => setShowSavedToast(false)}
          />
        </Toast.Body>
      </Toast>

    </>
  );
}
