import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import PendingCompanyTransaction from "./PendingCompanyTransaction/PendingCompanyTransaction";
import CompletedCompanyTransaction from "./CompletedCompanyTransaction/CompletedCompanyTransaction";

export default function TransactionPage() {
  const sidebarCategories = ["Pending Transactions", "Completed Transactions"];
  const [activeCategory, setActiveCategory] = useState("Pending Transactions");
  

  const handleActiveCategory = (index) => {
    setActiveCategory(sidebarCategories[index]);
  };
  return (
    <MainLayout>
      <Container fluid className="h-100">
        <div className="row h-100">
          {/* column 1 */}
          <div className="col-lg-2 border-end p-0">
            {/* sidebar categories */}
            {sidebarCategories.map((category, index) => (
              <div
                className={`container-fluid px-3 py-3 ${
                  category === activeCategory ? "bg-light" : null
                } ${
                  index === sidebarCategories.length - 1
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
          {/* column 2 */}
          <Col className="p-0">
            {/* pending transactions */}
            {activeCategory === "Pending Transactions" && (
              <Container fluid>
                <Row>
                  {/* header */}
                  <Container fluid className="border-bottom p-3">
                    <Row>
                      {/* service provider */}
                      <Col lg={3}>
                        <div
                          className="fw-light fs-5"
                          style={{ letterSpacing: "4px" }}
                        >
                          SERVICE PROVIDER
                        </div>
                      </Col>
                      {/* amount */}
                      <Col lg={3}>
                        <div
                          className="fw-light fs-5"
                          style={{ letterSpacing: "4px" }}
                        >
                          AMOUNT
                        </div>
                      </Col>
                      {/* due date */}
                      <Col lg={3}>
                        <div
                          className="fw-light fs-5"
                          style={{ letterSpacing: "4px" }}
                        >
                          DUE DATE
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  {Array(5).fill(null).map((element) => (
                    <PendingCompanyTransaction companyName={'Sterling International Consulting'} amount={'25,000'} dueDate={'October 23,2023'} />
                  ))}
                </Row>
              </Container>
            )}
            {/* completed transactions */}
            {activeCategory === "Completed Transactions" && (
              <Container fluid>
                <Row>
                  {/* header */}
                  <Container fluid className="border-bottom p-3">
                    <Row>
                      {/* service provider */}
                      <Col lg={3}>
                        <div
                          className="fw-light fs-5"
                          style={{ letterSpacing: "4px" }}
                        >
                          SERVICE PROVIDER
                        </div>
                      </Col>
                      {/* amount */}
                      <Col lg={3}>
                        <div
                          className="fw-light fs-5"
                          style={{ letterSpacing: "4px" }}
                        >
                          AMOUNT
                        </div>
                      </Col>
                      {/* due date */}
                      <Col lg={3}>
                        <div
                          className="fw-light fs-5"
                          style={{ letterSpacing: "4px" }}
                        >
                          DUE DATE
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  {Array(5).fill(null).map((element) => (
                    <CompletedCompanyTransaction companyName={'Sterling International Consulting'} amount={'25,000'} dueDate={'October 23,2023'} />
                  ))}
                </Row>
              </Container>
            )}
          </Col>
        </div>
      </Container>
    </MainLayout>
  );
}
