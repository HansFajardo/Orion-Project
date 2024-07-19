import React from "react";
import DefaultPic from "../../../assets/img/defaultProfPic.png";
import styles from "../../CompanyProfilePage/CompanyProfile.module.css";
import { PieChart, Pie, Cell } from "recharts";
import { useState, useRef, useEffect } from "react";
import { Col, Row, Stack, Button, Modal } from "react-bootstrap";
import StarSystem from "../../../components/StarSystem/StarSystem";
import PerformanceScoreCard from "../../../components/PerformanceScoreCard/PerformanceScoreCard";
import ActiveServicesCard from "../../../components/ActiveServicesCard/ActiveServicesCard";
import RecentClientCard from "../../../components/RecentClientsCard/RecentClientCard";
import EditCompanyProfileModal from "../../../components/editCompanyProfileModal";
import SeeReviewModal from "../../../components/SeeReviewModal.js/SeeReviewModal";

const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#003f5c",
    "#58508d",
    "#bc5090",
    "#ff6361",
    "#ffa600",
];

const labels = [
    {
        color: "#0088FE",
        label: "Midmarket",
    },
    {
        color: "#00C49F",
        label: "Small Business",
    },
    {
        color: "#FFBB28",
        label: "Enterprise",
    },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export default function CompanyDashboardPage() {

    const dataServicesProvided = [
        { name: "Group A", value: 50 },
        { name: "Group B", value: 30 },
        { name: "Group C", value: 20 },
    ];

    const [isEditModalVisible, setEditModalVisible] = React.useState(false);
    const [isSeeReviewModalShowVisible, setSeeReviewModalShow] = React.useState(false);
    const [isCollapsed, setCollapsed] = useState(true);
    const [showViewMore, setShowViewMore] = useState(false);
    const contentRef = useRef(null);

    const [data, setData] = useState(dataServicesProvided);

    const handleCollapse = () => {
        setCollapsed(!isCollapsed);
    };

    useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            const isContentOverflowing =
                contentElement.scrollHeight > contentElement.clientHeight;
            setShowViewMore(isContentOverflowing);
        }
    }, []);

    return (
        <div>
            <div className="d-flex flex-Row mx-3 justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img
                        width={"50px"}
                        height={"50px"}
                        src={DefaultPic}
                        alt="default"
                        className="img-fluid rounded-circle border border-3 border-primary"
                    />
                    <div className="fs-5 fw-medium ms-3">
                        Sterling International Computing
                    </div>
                </div>
                <Button className="rounded-5 px-4" style={{ height: '40px' }} onClick={() => setEditModalVisible(true)}>
                    Edit Profile
                </Button>
            </div>
            <hr />
            <EditCompanyProfileModal
                show={isEditModalVisible}
                onHide={() => setEditModalVisible(false)}
            />
            <div className="mx-3 d-flex flex-row gap-5">
                <div className="d-flex gap-2 fw-light">
                    <i class="bi bi-envelope"></i>
                    <div>info@iso-certification.ph</div>
                </div>
                <div className="d-flex gap-2 fw-light">
                    <i className="bi bi-globe"></i>
                    <a href="#">https://iso-certification.ph/</a>
                </div>
                <div className="d-flex gap-2 fw-light">
                    <i class="bi bi-telephone"></i>
                    <div>0977-815-1204</div>
                </div>
                <div className="d-flex gap-2 fw-light">
                    <i class="bi bi-geo-alt"></i>
                    <div>Makati, Philippines</div>
                </div>
            </div>
            <div className="my-3">
                <Row>
                    <Col md={3}>
                        <div className="fs-5 fw-medium">
                            Rating
                        </div>
                        <div className="fw-light d-flex gap-2 align-items-center mt-2 mb-1">
                            <StarSystem rating="4.5" />
                            <div className="d-flex align-items-center">4.5 out of 5</div>
                        </div>
                        <div className="fw-normal d-flex align-items-center mt-2 mb-1">
                            10 Reviews
                            <div
                                className="ms-2 text-info pointer"
                                style={{ textDecoration: 'underline' }}
                                onClick={() => setSeeReviewModalShow(true)}
                            >
                                See Reviews
                            </div>
                        </div>
                        <SeeReviewModal
                                show={isSeeReviewModalShowVisible}
                                onHide={() => setSeeReviewModalShow(false)}
                            />
                        <div className="mt-2">
                            <PerformanceScoreCard
                                reviews={15}
                                experience={5}
                                market={5}
                            />
                        </div>
                        <div className="mt-2">
                            <ActiveServicesCard
                                active={1}
                                applications={0}
                                bills={1}
                                completed={10}
                            />
                        </div>
                        <div className="mt-2">
                            <RecentClientCard
                                clients={["Hans Fajardo", "John Paul", "Hans Amponin", "Robin Datiles"]}
                            />
                        </div>
                    </Col>
                    <Col md={9}>
                        <div className="d-flex gap-2 fw-light align-items-center">
                            <i class="bi bi-person-lines-fill fs-4"></i>
                            <div className="fs-5 fw-medium">
                                Bio
                            </div>
                        </div>

                        <div className="px-3">
                            <div className="container-fluid">
                                <div
                                    ref={contentRef}
                                    style={{
                                        maxHeight: isCollapsed ? '100px' : '300px',
                                        overflow: isCollapsed ? 'hidden' : 'visible',
                                        transition: 'max-height ease'
                                    }}
                                >
                                    Sterling International Consulting is a business
                                    process management consulting company in the
                                    Philippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting service
                                    Sterling International Consulting is a business
                                    process management consulting company in the
                                    Philippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting
                                    serviclippines. We offer business excellence,
                                    governance, risk and compliance consulting service
                                </div>

                                {showViewMore && (
                                    <div
                                        className={`text-primary py-2 pointer`}
                                        onClick={handleCollapse}
                                    >
                                        {isCollapsed ? "View More >>" : "<< View Less"}
                                    </div>
                                )}
                            </div>
                        </div>
                        <hr />

                        <div className="bg-primary rounded-3 text-white align-items-center d-flex flex-row justify-content-between p-3">
                            <div className="d-flex align-items-center flex-row gap-3 ms-3">
                                <i class="bi bi-cash-stack fs-4"></i>
                                <div>
                                    Total Earnings
                                </div>
                            </div>
                            <div className="fw-semibold me-3">
                                PHP 1,000,000.00
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="fs-5 fw-medium">
                                Clients
                            </div>
                            <div className="container d-flex">
                                <PieChart width={300} height={400}>
                                    <Pie
                                        data={data}
                                        cx={150}
                                        cy={200}
                                        labelLine={false}
                                        label={renderCustomizedLabel}
                                        outerRadius={120}
                                        fill="#8884d8"
                                        dataKey="value"
                                    >
                                        {data.map((entry, index) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={COLORS[index % COLORS.length]}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                                <div className="d-flex flex-column flex-fill justify-content-center">
                                    {labels.map((val, key) => {
                                        return (
                                            <div className="d-flex align-items-center gap-2 my-1">
                                                <div
                                                    style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        backgroundColor: val.color,
                                                    }}
                                                ></div>
                                                {val.label}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
