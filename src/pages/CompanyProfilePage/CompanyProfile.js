import React from "react";
import MainLayout from "../../layouts/MainLayout";
import DefaultPic from "../../assets/img/defaultProfPic.png";
import styles from "./CompanyProfile.module.css";
import { PieChart, Pie, Cell } from "recharts";
import { useState, useRef, useEffect } from "react";
import { Col, Row, Stack, Button } from "react-bootstrap";
// import Sell from "../../assets/img/sell.svg";
// import Alarm from "../../assets/img/alarm.svg";
// import Person from "../../assets/img/person.svg";
// import Flag from "../../assets/img/emoji_flags.svg";
import ReviewsLongContainer from "../../components/ReviewsLongContainer/ReviewsLongContainer";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
// import IconButton from "@mui/material/IconButton";
// import BookmarkAddOutlinedIcon from "@mui/icons-material/BookmarkAddOutlined";
import StarSystem from "../../components/StarSystem/StarSystem";
import { SendRounded } from "@mui/icons-material";
import SendMessageModal from "../../components/sendMessageModal/sendMessageModal";
import RequestServiceModal from "../../components/RequestServiceModal/RequestServiceModal";
import BookmarkComponent from "../../components/Bookmark/Bookmark";
import EditCompanyProfileModal2 from "../../components/editCompanyProfileModal2";
// import BookmarkIcon from "@mui/icons-material/Bookmark";

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

const ServiceLinesLabels = [
  {
    color: "#0088FE",
    label: "Custom Software Development",
  },
  {
    color: "#00C49F",
    label: "Web Design",
  },
  {
    color: "#FFBB28",
    label: "Web Development",
  },
  {
    color: "#FF8042",
    label: "E-Commerce Development",
  },
  {
    color: "#003f5c",
    label: "Mobile App Development",
  },
  {
    color: "#58508d",
    label: "Graphic Design",
  },
  {
    color: "#bc5090",
    label: "Search Engine Optimization",
  },
];

const FocusLabels = [
  {
    color: "#0088FE",
    label: "App Developers",
  },
  {
    color: "#00C49F",
    label: "Microsoft Sharepoint",
  },
  {
    color: "#FFBB28",
    label: "Web Developers",
  },
  {
    color: "#FF8042",
    label: "Software Developers",
  },
  {
    color: "#003f5c",
    label: "React Native",
  },
  {
    color: "#58508d",
    label: "Flutter",
  },
];

const IndustriesLabels = [
  {
    color: "#0088FE",
    label: "Advertising & marketing ",
  },
  {
    color: "#00C49F",
    label: "Business services",
  },
  {
    color: "#FFBB28",
    label: "Consumer products & services",
  },
  {
    color: "#FF8042",
    label: "Government",
  },
  {
    color: "#003f5c",
    label: "Information technology",
  }
];

const ClientsLabels = [
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
  }
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
export default function CompanyProfile() {
  const [tabName, setTabName] = useState("Service Lines");

  const tabData = {
    "Services Provided": {
      label: "Service Lines",
      data: ServiceLinesLabels,
    },
    Focus: {
      label: "Focus",
      data: FocusLabels,
    },
    Industries: {
      label: "Industries",
      data: IndustriesLabels,
    },
    Clients: {
      label: "Clients",
      data: ClientsLabels,
    },
  };

  const dataServicesProvided = [
    { name: "Custom Software Development", value: 20 },
    { name: "Web Design", value: 20 },
    { name: "Web Development", value: 20 },
    { name: "E-Commerce Development", value: 15 },
    { name: "Mobile App Development", value: 15 },
    { name: "Graphic Design", value: 5 },
    { name: "Search Engine Optimization", value: 5 },
  ];

  const dataFocus = [
    { name: "App Developers", value: 200 },
    { name: "Microsoft Sharepoint", value: 400 },
    { name: "Web Developers", value: 200 },
    { name: "Software Developers", value: 100 },
    { name: "React Native", value: 100 },
    { name: "Flutter", value: 100 },
  ];

  const dataIndustries = [
    { name: "Advertising & marketing ", value: 20 },
    { name: "Business services", value: 20 },
    { name: "Consumer products & services", value: 20 },
    { name: "Government", value: 20 },
    { name: "Information technology", value: 20 },
  ];

  const dataClients = [
    { name: "Midmarket", value: 40 },
    { name: "Small Business", value: 35 },
    { name: "Enterprise", value: 25 }
  ];

  const sidebarCategories = ["Highlights", "Reviews"];
  const [activeCategory, setActiveCategory] = useState("Highlights");
  const [activeChartCategory, setActiveChartCategory] =
    useState("Services Provided");
  const [isCollapsed, setCollapsed] = useState(true);
  const [showViewMore, setShowViewMore] = useState(false); // State to track button visibility
  const contentRef = useRef(null);
  const [modalMessageShow, setModalMessageShow] = React.useState(false);
  const [modalRequestShow, setModalRequestShow] = React.useState(false);
  const [openEditModalShow, setOpenEditModalShow] = React.useState(false);

  // const [bookmark, setBookmark] = useState(false);

  //change pie data based on chart category
  const [data, setData] = useState(dataServicesProvided);

  const chartCategories = [
    "Services Provided",
    "Focus",
    "Industries",
    "Clients",
  ];

  //change active category
  const handleActiveCategory = (index) => {
    setActiveCategory(sidebarCategories[index]);
  };

  //change active chart category
  const handleActiveChartCategory = (index) => {
    setActiveChartCategory(chartCategories[index]);
    setTabName(chartCategories[index]);
    setData(tabData[chartCategories[index]].data);
    //update chart to services provided
    if (chartCategories[index] === "Services Provided") {
      setData(dataServicesProvided);
    }
    //update chart to services provided
    else if (chartCategories[index] === "Focus") {
      setData(dataFocus);
    }
    //update chart to services provided
    else if (chartCategories[index] === "Industries") {
      setData(dataIndustries);
    }
    //update chart to services provided
    else if (chartCategories[index] === "Clients") {
      setData(dataClients);
    }
  };

  useEffect(() => {
    // Check if content overflows on initial render and when isCollapsed changes
    const contentElement = contentRef.current;
    if (contentElement) {
      // Determine if content overflows
      const isContentOverflowing =
        contentElement.scrollHeight > contentElement.clientHeight;
      setShowViewMore(isContentOverflowing);
    }
  }, []);

  // for view more button
  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
    // !isCollapsed
    //   ? setCollapseText("View More >>")
    //   : setCollapseText("Close <<");
    // console.log(isCollapsed);
  };

  //handle bookmark
  // const handleBookmark = () => {
  //   setBookmark(!bookmark);
  // };

  const activeTabData = tabData[activeChartCategory];

  return (
    <MainLayout>
      <div className="h-100 d-flex flex-column">
        <div className="container-fluid border border-bottom">
          <div className="container py-3">
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex align-items-center gap-4">
                  <img
                    width={"50px"}
                    height={"50px"}
                    src={DefaultPic}
                    alt="default"
                    className="img-fluid rounded-circle border border-3 border-primary"
                  />
                  {/* company name column */}
                  <div className="col d-flex flex-column">
                    <div className="d-flex align-items-center">
                      <div className="fs-5 fw-medium">
                        Sterling International Computing
                      </div>
                      <BookmarkComponent />
                    </div>
                    <div className="d-flex gap-2">
                      <Button
                        variant="outline-primary"
                        className="rounded-3 px-3 fw-medium"
                        onClick={() => setModalRequestShow(true)}
                      >
                        Request Service
                      </Button>
                      <RequestServiceModal
                        show={modalRequestShow}
                        onHide={() => setModalRequestShow(false)}
                      />
                      <Button
                        variant="primary"
                        className="rounded-5 px-3 fw-medium d-flex align-items-center gap-1"
                        onClick={() => setModalMessageShow(true)}
                      >
                        Message <SendRounded className="fs-6" />
                      </Button>
                      <SendMessageModal
                        show={modalMessageShow}
                        onHide={() => setModalMessageShow(false)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* ratings column */}
              <div className="col-lg-4">
                <div className="d-flex flex-column px-5 gap-1">
                  <div className="fw-medium">Ratings</div>
                  <div className="fw-light d-flex gap-2 align-items-center">
                    <StarSystem rating="4.5" />
                    <div>4.5 out of 5</div>
                  </div>
                  <div>10 reviews</div>
                  <div className="d-flex flex-column">
                    <a href="" style={{ textDecoration: "none" }}>
                      Visit Website <i className="bi bi-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-flex flex-column gap-1">
                <div className="fw-medium">Contacts & Information</div>
                <div className="d-flex gap-2 fw-light">
                  <i class="bi bi-envelope"></i>
                  <div>info@iso-certification.ph</div>
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
            </div>
          </div>
        </div>
        <div className="container-fluid h-100">
          <div className="row h-100">
            {/* column 1 */}
            <div className="col-lg-2 border-end p-0">
              {/* sidebar categories */}
              {sidebarCategories.map((category, index) => (
                <div
                  className={`container-fluid px-3 py-3 ${category === activeCategory ? "bg-light" : null
                    } ${index === sidebarCategories.length - 1
                      ? "border-bottom"
                      : null
                    } pointer`}
                  onClick={() => {
                    handleActiveCategory(index);
                  }}
                >
                  {category}
                </div>
              ))}
            </div>
            {/* for highlights */}
            {activeCategory === "Highlights" && (
              <div className="col">
                <div className="row h-100">
                  {/* column 2 */}
                  <div className="col-lg-6 border-end p-0">
                    {/* for highlights */}
                    <div className="fs-5 py-3 px-3 fw-medium d-flex flex-row justify-content-between">
                      <div>
                        Professional Web Design Services
                      </div>
                      <div>
                        <i class="bi bi-pencil-square pointer" onClick={() => setOpenEditModalShow(true)}></i>
                      </div>
                    </div>
                    <EditCompanyProfileModal2
                      show={openEditModalShow}
                      onHide={() => setOpenEditModalShow(false)}
                    />
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-7 px-3">
                          <div className="container-fluid">
                            <div
                              ref={contentRef}
                              className={`${isCollapsed ? styles.collapsed : styles.expand
                                }`}
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
                              governance, risk and compliance consulting servic
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
                        <div className="col px-3">
                          <Stack
                            direction="vertical"
                            gap={2}
                            className="px-2 text-black-50"
                          >
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md={2} lg={2}>
                                <i class="bi bi-tag fs-5 fw-bolder"></i>
                              </Col>
                              <Col>0</Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md={2} lg={2}>
                                <i class="bi bi-alarm fs-5 fw-bolder"></i>
                              </Col>
                              <Col>Undisclosed</Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md={2} lg={2}>
                                <i class="bi bi-person fs-5 fw-bolder"></i>
                              </Col>
                              <Col>10-49</Col>
                            </Row>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md={2} lg={2}>
                                <i class="bi bi-flag fs-5 fw-bolder"></i>
                              </Col>
                              <Col>Founded 2006</Col>
                            </Row>
                          </Stack>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* column 3 */}
                  <div className="col p-0">
                    <div className="d-flex justify-content-center align-items-center border-bottom">
                      {chartCategories.map((category, index) => (
                        <div
                          className={`container-fluid py-3 fs-6 text-center border-end ${category === activeChartCategory ? "bg-light" : null
                            } pointer`}
                          onClick={() => {
                            handleActiveChartCategory(index);
                          }}
                        >
                          {category}
                        </div>
                      ))}
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
                        <div className="border-bottom">{tabName}</div>
                        {activeTabData.data.map((val, key) => (
                          <div className="d-flex align-items-center gap-2 mt-1" key={key}>
                            <div
                              style={{
                                width: "20px",
                                height: "20px",
                                backgroundColor: val.color,
                              }}
                            ></div>
                            {val.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* for reviews */}
            {activeCategory === "Reviews" && (
              <div className="col px-5 py-4 overflow-auto">
                <Stack direction="vertical" gap={4}>
                  <ReviewsLongContainer />
                  <ReviewCard />
                  <ReviewCard />
                </Stack>
              </div>
            )}
            {/* for portfolio */}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
