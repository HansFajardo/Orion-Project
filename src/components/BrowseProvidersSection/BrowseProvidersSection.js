import { LocationOnOutlined, Search } from "@mui/icons-material";
import { height } from "@mui/system";
import React from "react";
import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function BrowseProvidersSection() {
  const [focusSearch, setFocusSearch] = useState(false);
  const [focusLoc, setFocusLoc] = useState(false);
  //   const [filteredData, setFilteredData] = useState([]);
  //   const handleFilter = (event) => {
  //     const input = event.target.value;
  //     const newFilter = CompanyList.filter((value) => {
  //       return value.companyName.toLowerCase().includes(input.toLowerCase());
  //     });
  //     if (input === "") {
  //       setFilteredData([]);
  //     } else {
  //       setFilteredData(newFilter);
  //     }
  //   };
  return (
    <Container
      fluid
      className="rounded-2 bg-primary text-white p-5"
      style={{ height: "300px" }}
    >
      <Row className="h-100 overflow-visible">
        {/* 1st column titles */}
        <Col lg={6}>
          <Stack
            direction="vertical"
            gap={2}
            className="h-100 justify-content-center"
          >
            <div className="fw-light">BROWSE SERVICE PROVIDERS</div>
            <div className="fw-bold fs-2">
              Find the perfect partner for your project
            </div>
          </Stack>
        </Col>
        {/* 2nd column inputs */}
        <Col lg={6} className="h-100">
          <Stack direction="vertical" className="pt-4">
            {/* search category */}
            <div
              className="d-flex flex-column bg-white border border-3 p-3 gap-2 flex-fill rounded-5"
              style={focusSearch ? { height: "300px" } : null}
            >
              <div className="d-flex align-items-center text-black">
                <Search />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search web developers, consultants, etc."
                  className="flex-fill border-0 input-border"
                  onFocus={() => setFocusSearch(true)}
                  onBlur={() => setFocusSearch(false)}
                />
              </div>
            </div>
            {/* search place */}
            {!focusSearch && (
              <Container fluid className="pt-4">
                <Row className="h-100">
                  <Col
                    lg={3}
                    className="h-100 d-flex flex-column flex-fill p-0"
                  >
                    {/* location search */}
                    <div
                      className="d-flex flex-column bg-white border border-3 p-3 gap-2 flex-fill rounded-5 pt-3"
                      style={focusLoc ? { height: "200px" } : null}
                    >
                      <div className="d-flex align-items-center text-black">
                        <LocationOnOutlined />
                        <input
                          type="text"
                          name="search"
                          id="search"
                          value={"Any Location"}
                          className="flex-fill border-0 input-border"
                          onFocus={() => setFocusLoc(true)}
                          onBlur={() => setFocusLoc(false)}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col>
                    {/* get started btn */}
                    <div className="d-flex">
                      <Link to="/client-search-results">
                        <Button
                          variant="dark"
                          className="px-5 py-3 fs-5 fw-bold"
                        >
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
