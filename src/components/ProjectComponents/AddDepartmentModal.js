import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function AddDepartmentModal({ showModal, handleCloseModal, handleCreateDepartment }) {
    const [departmentName, setDepartmentName] = useState('');

    const handleCreateClick = () => {
        handleCreateDepartment(departmentName);
        setDepartmentName(''); // Reset departmentName state after creating the department
    };

    return (
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                    placeholder="Enter Department Name"
                    className="form-control"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                <Button variant="primary" onClick={handleCreateClick}>Create Department</Button>
            </Modal.Footer>
        </Modal>
    );
}
