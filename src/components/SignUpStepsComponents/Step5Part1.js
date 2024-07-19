import React, { Component } from "react";
import { Col, Row, Stack, Button } from "react-bootstrap";

export default class Step5Part1 extends Component {
  timeline = [
    "Any time frame",
    "Less than 1 month",
    "In 1-3 months",
    "In 4-6 months",
    "In 7-12 months",
    "Greater than 12 months",
  ];

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

  render() {
    return (
      <div className="container rounded-3 border-3 shadow-lg p-5 w-50">
        <Col>
          <Stack direction="vertical">
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
            <h2>When do you need this by?</h2>
            <p>Please share with us your preferred timeline for delivery.</p>
            <div className="d-flex flex-wrap gap-3">
              {/* <Button
                variant="light"
                className="rounded-5 px-3 border-dark-subtle text-black-50"
              >
                Any time frame
              </Button>

              <Button
                variant="light"
                className="rounded-5 px-3 border-dark-subtle text-black-50"
              >
                Less than 1 month
              </Button>

              <Button
                variant="light"
                className="rounded-5 px-3 border-dark-subtle text-black-50"
              >
                In 1-3 months
              </Button>

              <Button
                variant="light"
                className="rounded-5 px-3 border-dark-subtle text-black-50"
              >
                In 4-6 months
              </Button>

              <Button
                variant="light"
                className="rounded-5 px-3 border-dark-subtle text-black-50"
              >
                In 7-12 months
              </Button>

              <Button
                variant="light"
                className="rounded-5 px-3 border-dark-subtle text-black-50"
              >
                Greater than 12 months
              </Button> */}
              {this.timeline.map(timeline => (
                        <div key={timeline}>
                            <input
                                type="radio"
                                className="btn-check "
                                name="timeline-outlined"
                                id={timeline}
                                autoComplete="off"
                                defaultChecked={timeline === 'Any time frame'}
                            />
                            <label className=" rounded-5 btn btn-outline-primary m-0 px-3" htmlFor={timeline}>{timeline}</label>
                        </div>
                    ))}
            </div>
            <Stack direction="horizontal" className="pt-5">
              <span className="flex-fill">
                <b>STEP 5/5</b>
              </span>
              <Button
                variant="primary"
                className="rounded-5 px-3"
                onClick={this.handleContinue}
              >
                View recommendations
              </Button>
            </Stack>
          </Stack>
        </Col>
      </div>
    );
  }
}
