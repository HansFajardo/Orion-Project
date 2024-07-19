import React, { Component } from "react";
import { Col, Row, Stack, Button } from "react-bootstrap";
import ProviderCard from "../ProviderCard";
import { CompanyList } from "../../backend/files/CompanyList";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PlaceholderProviderCard from "../PlaceholderProviderCard/PlaceholderProviderCard";

export default class Step5Part2 extends Component {
  handleBack = () => {
    if (this.props.onBack) {
      this.props.onBack();
    }
  };

  handleContinue = () => {
    if (this.props.onNext) {
      this.props.onNext();
    }
  };

  state = {
    providers: [],
    loading: true,
    error: null,
  };

  // Lifecycle method to fetch data when component mounts
  componentDidMount() {
    this.fetchProviders();
  }

  // Function to fetch providers from the API
  fetchProviders = async () => {
    try {
      const response = await fetch("/api/providers");
      const providers = await response.json();

      if (response.ok) {
        // Update state with fetched providers
        console.log(providers);
        this.setState({ providers, loading: false });
      } else {
        throw new Error(`Failed to fetch providers: ${providers.message}`);
      }
    } catch (error) {
      // Update state if there's an error
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { providers, loading, error } = this.state;
    return (
      <div className="container pt-3 bg-light-subtle">
        <div
          className="text-primary fw-semibold w-25"
          onClick={this.handleBack}
          style={{ cursor: "pointer" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
          Back
        </div>

        <Row className="text-center">
          <h3 className="fw-bold">Add service providers to get started</h3>
          <p className="text-black-50">
            Below are 9 service providers we recommend based on your business
            goals and service needs.
          </p>
        </Row>
        {/* <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">
          {providers.map((provider) => {
            return (
              <div className="col-lg-3" key={provider._id}>
                <ProviderCard
                  companyName={provider.companyName}
                  rating={provider.ratings}
                  reviews={provider.reviews}
                  sales={provider.sales}
                  time={provider.time}
                  employees={provider.employees}
                  location={provider.location}
                  tags={provider.tags}
                />
              </div>
            );
          })}
        </div> */}
        {loading && <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">{[...Array(9)].map((_, index) => (
            <div className="col-lg-3" key={index}>
              <PlaceholderProviderCard />
            </div>
          ))}</div>}
        {error && <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">{[...Array(9)].map((_, index) => (
            <div className="col-lg-3" key={index}>
              <PlaceholderProviderCard />
            </div>
          ))}</div>}
        {providers.length > 0 && (
          <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">
            {providers.map((provider) => (
              <div className="col-lg-3" key={provider._id}>
                <ProviderCard
                  companyName={provider.companyName}
                  rating={provider.ratings}
                  reviews={provider.reviews}
                  sales={provider.sales}
                  time={provider.time}
                  employees={provider.employees}
                  location={provider.location}
                  tags={provider.tags}
                />
              </div>
            ))}
          </div>
        )}
        {providers.length === 0 && !loading && !error && (
          <PlaceholderProviderCard message="No providers found." /> // Customize message
        )}

        <div className="container bg-white border border-1 rounded-1 p-3 mb-4">
          <Row className="d-flex align-items-center">
            <Col md={9}>
              <div className="fw-bold">Continue your search</div>
              <div>
                Browse companies, send them a message , or leave them a review,
                all in your dashboard!
              </div>
            </Col>
            <Col xs={"auto"} className="flex-fill text-center">
              <Link to="/client-dashboard">
                <Button variant="primary" className="rounded-5 px-3 py-2">
                  Go to my Dashboard
                </Button>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
