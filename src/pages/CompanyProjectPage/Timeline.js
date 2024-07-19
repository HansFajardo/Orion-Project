import React, { useState } from 'react';
import { Button, ProgressBar, Col } from 'react-bootstrap';
import { Checkbox } from '@mui/material';
import AddTaskModal from '../../components/ProjectComponents/AddTaskModal';

export default function Timeline({ departmentName }) {
    const [taskCount, setTaskCount] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [checkedCount, setCheckedCount] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setTaskName('');
    };

    const handleCreateTask = () => {
        if (taskName.trim() !== '') {
            setTasks([...tasks, { name: taskName, isChecked: false }]);
            setTaskCount(taskCount + 1);
        }
        handleCloseModal();
    };

    const handleCheckboxChange = (index, isChecked) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = { ...updatedTasks[index], isChecked: isChecked };
        setTasks(updatedTasks);

        if (isChecked) {
            setCheckedCount(checkedCount + 1);
        } else {
            setCheckedCount(checkedCount - 1);
        }
    };

    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
        setTaskCount(taskCount - 1);
    };

    const calculateProgress = () => {
        if (taskCount === 0) return 0;
        return (checkedCount / taskCount) * 100;
    };

    return (
        <div className='border px-3 pt-3 border-3 rounded-4'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <div className='fs-5 fw-medium w-25'>
                    {departmentName}
                </div>
                <ProgressBar now={calculateProgress()} variant='primary' style={{ height: '20px', width: '500px' }} />

                <Button className='bg-white border border-primary text-primary rounded-5 px-3 align-items-center justify-content-center' onClick={handleAddTask}>
                    <i className="bi bi-plus-circle-fill me-1"></i>
                    Add Task
                </Button>
            </div>

            <div className='mt-1'>
                <ol>
                    {tasks.length === 0 ? (
                        <div>No tasks yet.</div>
                    ) : (
                        tasks.map((task, index) => (
                            <div key={index} className="d-flex align-items-center justify-content-between">
                                <div>
                                    <Checkbox className='text-primary' checked={task.isChecked} onChange={(e) => handleCheckboxChange(index, e.target.checked)} />
                                    <span className="ms-2 text-black">{task.name}</span>
                                </div>
                                <div>
                                    <Button variant="danger" className="me-2 rounded-5" onClick={() => handleRemoveTask(index)}><i className="bi bi-dash-circle-fill"></i></Button>
                                </div>
                            </div>
                        ))
                    )}
                </ol>
            </div>

            <AddTaskModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                taskName={taskName}
                setTaskName={setTaskName}
                handleCreateTask={handleCreateTask}
            />
        </div>
    );
}
