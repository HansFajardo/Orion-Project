import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default function AddTaskModal({ showModal, handleCloseModal, taskName, setTaskName, handleCreateTask }) {
    return (
        /* Add Task Modal */
        <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="taskName">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Task Name"
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>Cancel</Button>
                <Button variant="primary" onClick={handleCreateTask}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
}
