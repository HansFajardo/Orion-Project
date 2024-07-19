import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import { Container, Row, Col, Stack, Form } from "react-bootstrap";
import { Search } from "@mui/icons-material";
import { Options } from "../../backend/files/OptionsList";
import SearchResultsCompanyContainer from "../../components/SearchResultsCompanyContainer/SearchResultsCompanyContainer";

export default function SearchResultsPage() {
  const ratings = [
    {
      rating: "5 stars",
      value: "5",
    },
    {
      rating: "≥ 4 stars",
      value: ">=4",
    },
    {
      rating: "≥ 3 stars",
      value: ">=3",
    },
    {
      rating: "≥ 2 stars",
      value: ">=2",
    },
    {
      rating: "≥ 1 stars",
      value: ">=1",
    },
  ];
  const [focusSearch, setFocusSearch] = useState(false);
  const [focusSearchService, setFocusSearchService] = useState(false);
  const [focusSearchIndustry, setFocusSearchIndustry] = useState(false);
  
  return (
    <MainLayout>
      {/* sticky */}
      <Container fluid className="position-sticky top-0">
        <Row className="h-100">
          <Col className="h-100 p-0">
            {/* header */}
            <Container fluid className="p-4 bg-primary text-light ">
              <Row>
                <div className="d-flex fs-4">
                  <span className="fw-light">1234 Firms found for </span>
                  <span className="fw-bold ps-2">"Web Development"</span>
                </div>
              </Row>
            </Container>
            {/* filters */}
            <Container
              fluid
              className="border-bottom bg-white"
              style={{ height: "70px" }}
            >
              <Row className="h-100 p-3">
                <Col>
                  <Container className="h-100">
                    <Row className="h-100">
                      {/* location */}
                      <Col className="d-flex flex-column align-items-center h-100 p-0">
                        {/* searchbar */}
                        <div className="d-flex border ps-2 py-1 bg-white w-100">
                          <Search />
                          <input
                            type="search"
                            name="search-location"
                            id="search-location"
                            placeholder="Location"
                            className=" px-2 border-0 flex-fill input-border"
                            onFocus={() => setFocusSearch(true)}
                            onBlur={() => setFocusSearch(false)}
                          />
                        </div>
                        {/* search results */}
                        {focusSearch && (
                          <div
                            className="d-flex flex-column bg-white border w-100 overflow-auto"
                            style={{ maxHeight: "200px" }}
                          >
                            {Array(5)
                              .fill(null)
                              .map((_, index) => {
                                return (
                                  <div className="py-1 px-1 d-flex alt-style-results">
                                    test
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </Col>
                      {/* services  */}
                      <Col className="d-flex flex-column align-items-center h-100 p-0 ps-4">
                        {/* searchbar */}
                        <div className="d-flex border ps-2 py-1 bg-white w-100">
                          <Search />
                          <input
                            type="search"
                            name="search-service"
                            id="search-service"
                            placeholder="Services"
                            className=" px-2 border-0 flex-fill input-border"
                            onFocus={() => setFocusSearchService(true)}
                            onBlur={() => setFocusSearchService(false)}
                          />
                        </div>
                        {/* search results */}
                        {focusSearchService && (
                          <div
                            className="d-flex flex-column bg-white border w-100 overflow-auto"
                            style={{ maxHeight: "200px" }}
                          >
                            {Array(5)
                              .fill(null)
                              .map((_, index) => {
                                return (
                                  <div className="py-1 px-1 d-flex alt-style-results">
                                    test
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </Col>
                      {/*  industry  */}
                      <Col className="d-flex flex-column align-items-center h-100 p-0 ps-4">
                        {/* searchbar */}
                        <div className="d-flex border ps-2 py-1 bg-white w-100">
                          <Search />
                          <input
                            type="search"
                            name="search-industry"
                            id="search-industry"
                            placeholder="Industry"
                            className=" px-2 border-0 flex-fill input-border"
                            onFocus={() => setFocusSearchIndustry(true)}
                            onBlur={() => setFocusSearchIndustry(false)}
                          />
                        </div>
                        {/* search results */}
                        {focusSearchIndustry && (
                          <div
                            className="d-flex flex-column bg-white border w-100 overflow-auto"
                            style={{ maxHeight: "200px" }}
                          >
                            {Array(5)
                              .fill(null)
                              .map((_, index) => {
                                return (
                                  <div className="py-1 px-1 d-flex alt-style-results">
                                    test
                                  </div>
                                );
                              })}
                          </div>
                        )}
                      </Col>
                      {/* client budget */}
                      <Col className="d-flex flex-column align-items-center p-0">
                        <Form>
                          <Form.Select>
                            <option disabled>Client Budget</option>
                            {Options.map((val, key) => (
                              <option value={val.id}>{val.label}</option>
                            ))}
                          </Form.Select>
                        </Form>
                      </Col>
                      {/* rating */}
                      <Col className="d-flex flex-column align-items-center p-0">
                        <div className="d-flex w-100">
                          <Form className="flex-fill">
                            <Form.Select>
                              <option disabled>Rating</option>
                              {ratings.map((val, key) => (
                                <option value={val.value}>{val.rating}</option>
                              ))}
                            </Form.Select>
                          </Form>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* search results */}
      <Container fluid>
        <Row>
          {/* search results container */}
          <Stack direction="vertical" gap={4} className="py-4">
          <SearchResultsCompanyContainer/>
          <SearchResultsCompanyContainer/>
          </Stack>
        </Row>
      </Container>
    </MainLayout>
  );
}
