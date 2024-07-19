import React, { useState } from 'react';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';
import StarSystem from '../StarSystem/StarSystem';
import IndividualReview from './IndividualReview';

export default function SeeReviewModal(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleCloseModal = () => {
        setModalOpen(false);
    };
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
                        className="fs-5 fw-medium"
                    >
                        See Reviews
                    </Modal.Title>
                </Container>
            </Modal.Header>
            <Modal.Body>
                <IndividualReview 
                name="Hans" 
                email="hans@email.com" 
                comment={"Testing sample comment"} 
                rating={4.5}
                />
                <IndividualReview 
                name="Jampol" 
                email="Jampol@email.com" 
                comment={"Testing sample comment"} 
                rating={2.5}
                />
            </Modal.Body>
            <Modal.Footer>
                <div className="w-100 d-flex justify-content-center">
                    <Button onClick={props.onHide} className="rounded-5 px-4 fw-medium">
                        Close
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
