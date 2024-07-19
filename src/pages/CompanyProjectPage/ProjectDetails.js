import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import CompanyProjectPanel from '../../components/CompanyProjectComponents/CompanyProjectPanel';
import { Row, Col, Tab, Nav, Button, Stack } from 'react-bootstrap'; // Removed unused imports
import CompanyMembersPanel from '../../components/CompanyProjectComponents/CompanyMembersPanel';
import CompanyProgressPanel from '../../components/CompanyProjectComponents/CompanyProgressPanel';
import Timeline from './Timeline';
import ProgressStatus from '../../components/ProjectComponents/ProgressStatus';
import AddDepartmentModal from '../../components/ProjectComponents/AddDepartmentModal';
import slackIcon from '../../assets/img/Slack.svg';
import googleWorkspaceIcon from '../../assets/img/GoogleWorkspace.svg';
import notionIcon from '../../assets/img/Notion.svg';
import mondayIcon from '../../assets/img/Monday.svg';
import WorkspaceModal from '../../components/WorkspaceModal/WorkspaceModal';

export default function ProjectDetails() {
    const [showWorkplaceModal, setShowWorkplaceModal] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [activeTab, setActiveTab] = useState('overview');
    const [timelineData, setTimelineData] = useState({});

    const goBack = () => {
        window.history.back();
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleCreateDepartment = (departmentName) => {
        setDepartments([...departments, departmentName]);
        setShowModal(false);
    };

    const updateTimelineData = (departmentName, tasks) => {
        setTimelineData({ ...timelineData, [departmentName]: tasks });
    };

    const calculateProgress = (tasks) => {
        if (!tasks || tasks.length === 0) {
            return 0;
        }
        const completedTasks = tasks.filter(task => task.isChecked);
        const progress = (completedTasks.length / tasks.length) * 100;
        return progress;
    };

    return (

        <MainLayout>
            <div className='m-4'>
                <div>
                    <div className='text-primary fw-semibold d-flex flex-row' onClick={goBack}>
                        <i className='bi bi-chevron-left pointer'></i>
                        <div className='pointer ms-1'>
                            Back
                        </div>
                    </div>
                    <div className='fs-2 mx-3 my-2 fw-bold'>
                        Project Detail
                    </div>
                    <Tab.Container id="project-tabs" activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                        <Row className='mb-2'>
                            <Col md={12}>
                                <Nav className="flex-row justify-content-start">
                                    <Nav.Item className={activeTab === 'overview' ? 'border-bottom border-primary border-2' : ''}>
                                        <Nav.Link eventKey="overview" className="text-decoration-none text-black fw-medium">Overview</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className={activeTab === 'timeline' ? 'border-bottom border-primary border-2' : ''}>
                                        <Nav.Link eventKey="timeline" className="text-decoration-none text-black fw-medium">Timeline</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="overview">
                                        <Row>
                                            <Col md={8}>
                                                <CompanyProjectPanel />
                                                <div className='fs-2 m-3 fw-semibold'>
                                                    Collaborators
                                                </div>
                                                <CompanyMembersPanel />
                                                <div className='my-3'>
                                                    <div className='d-flex flex-row align-items-center'>
                                                        <div className='fs-5 fw-semibold ms-3'>
                                                            Workspace Links
                                                        </div>
                                                        <div className='ms-3'>
                                                            <button className='btn btn-outline-primary rounded-5' onClick={() => setShowWorkplaceModal(true)}>+</button>
                                                            {/* Render WorkplaceModal component conditionally based on showModal state */}
                                                            <WorkspaceModal show={showWorkplaceModal} onHide={() => setShowWorkplaceModal(false)} />
                                                        </div>
                                                    </div>

                                                    <div className='m-2'>
                                                        <img src={slackIcon} alt="Slack" className="mx-2 border border-1 pointer" style={{ width: '48px', height: '48px' }} />
                                                        <img src={googleWorkspaceIcon} alt="Google Workspace" className="mx-2 border border-1 pointer" style={{ width: '48px', height: '48px' }} />
                                                        <img src={notionIcon} alt="Notion" className="mx-2 border border-1 pointer" style={{ width: '48px', height: '48px' }} />
                                                        <img src={mondayIcon} alt="Monday.com" className="mx-2 border border-1 pointer" style={{ width: '48px', height: '48px' }} />
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                                    <div className='fs-2 fw-semibold mb-2'>
                                                        Overall Progress
                                                    </div>
                                                    <ProgressStatus status={"Ongoing"} />
                                                </div>
                                                <Row className='mx-2 gap-3'>
                                                    {departments.map((department, index) => (
                                                        <CompanyProgressPanel
                                                            key={index}
                                                            title={department}
                                                            progress={calculateProgress(timelineData[department])}
                                                            tasks={timelineData[department] || []}
                                                        />
                                                    ))}
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="timeline">
                                        <div>
                                            <Button onClick={() => setShowModal(true)}><i className="bi bi-plus-circle-fill me-2"></i>Add Department</Button>
                                            <Stack className='gap-3 mt-3'>
                                                {departments.map((department, index) => (
                                                    <Timeline
                                                        key={index}
                                                        departmentName={department}
                                                        updateTimelineData={updateTimelineData}
                                                    />
                                                ))}
                                            </Stack>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </div>
            </div>
            <AddDepartmentModal
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                handleCreateDepartment={handleCreateDepartment}
            />
        </MainLayout>
    );
}
