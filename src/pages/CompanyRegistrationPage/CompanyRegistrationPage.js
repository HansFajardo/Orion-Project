import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginPage from "../css/LoginPage.module.css";
import login2 from "../css/LoginCompany.module.css";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../../backend/AuthContext.js";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IndustryList } from "../../backend/files/IndustryList.js";

export default function CompanyRegistrationPage() {
  const [phone, setPhone] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const userName = "Hans Angelo";
    login(userName);
  };

  return (
    <div className="vh-100 vw-100">
      <Container fluid className="h-100">
        <Row className="h-100 ">
          <Col lg={6} md={4} sm={3} className={login2.thumbnail}>
            <div className={loginPage.thumbnailTxt}>
              <h1 style={{ fontSize: "50px" }} className={loginPage.animate}>
                Gain visibility.
              </h1>
              <h1 style={{ fontSize: "50px" }} className={loginPage.animate2}>
                Expand your network.
              </h1>
              <p className={loginPage.animate3}>
                Showcase your expertise to clients all over the country and
                unlock opportunities for growth.
              </p>
            </div>
          </Col>
          <Col className="h-100 overflow-auto">
            <Container fluid className="py-5">
              <Row>
                <Col>
                  <div className="h-100 d-flex flex-column align-items-center justify-content-center">
                    <Link to="/">
                      <img
                        src={Logo}
                        alt="logo"
                        className="py-0"
                        style={{ width: "175px", height: "46px" }}
                      />
                    </Link>
                    <h2 className="pt-3">Company Registration Form</h2>
                    <Row>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>
                            Company Name<span className="text-danger">*</span>
                          </label>
                          <input
                            autocomplete="off"
                            name="CompanyName"
                            id="CompanyName"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                            required
                          />
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>
                            Owner<span className="text-danger">*</span>
                          </label>
                          <input
                            autocomplete="off"
                            name="Owner"
                            id="Owner"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                            required
                          />
                        </div>
                      </Col>
                    </Row>
                    <div class={loginPage.inputGroup}>
                      <label className={loginPage.label}>
                        Company mailing address
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        autocomplete="off"
                        name="CompanyMailingAddress"
                        id="CompanyMailingAddress"
                        className={loginPage.input}
                        type="text"
                        required
                      />
                    </div>
                    <Row>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>City</label>
                          <input
                            autocomplete="off"
                            name="City"
                            id="City"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>State</label>
                          <input
                            autocomplete="off"
                            name="State"
                            id="State"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>Zip Code</label>
                          <input
                            autocomplete="off"
                            name="ZipCode"
                            id="ZipCode"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>Country</label>
                          <input
                            autocomplete="off"
                            name="Country"
                            id="Country"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>
                            Email Address<span className="text-danger">*</span>
                          </label>
                          <input
                            autocomplete="off"
                            name="email"
                            id="email"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="email"
                            required
                          />
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div className={loginPage.inputGroup}>
                          <label className={loginPage.label}>Phone</label>
                          <div
                            className="rounded-3 p-2"
                            style={{
                              backgroundColor: "#05060f0a",
                              width: "190px",
                            }}
                          >
                            <PhoneInput
                              country={"ph"}
                              value={phone}
                              onChange={setPhone}
                              inputStyle={{
                                border: "none",
                                backgroundColor: "transparent",
                                width: "100%",
                              }}
                              buttonStyle={{
                                border: "none",
                              }}
                              containerStyle={{
                                outlineStyle: "none",
                                outline: "none",
                              }}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div class={loginPage.inputGroup}>
                      <label className={loginPage.label}>Password</label>
                      <input
                        autocomplete="off"
                        name="Password"
                        id="Password"
                        className={loginPage.input}
                        type="password"
                      />
                    </div>
                    <div class={loginPage.inputGroup}>
                      <label className={loginPage.label}>
                        Confirm Password
                      </label>
                      <input
                        autocomplete="off"
                        name="ConfirmPassword"
                        id="ConfirmPassword"
                        className={loginPage.input}
                        type="password"
                      />
                    </div>
                    <Row>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>
                            Nominal Capital
                          </label>
                          <input
                            autocomplete="off"
                            name="NominalCapital"
                            id="NominalCapital"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div className={loginPage.inputGroup}>
                          <label className={loginPage.label}>
                            Industry<span className="text-danger">*</span>
                          </label>
                          <select
                            autoComplete="off"
                            name="Industry"
                            id="Industry"
                            className={`${loginPage.input} pt-2 ps-2`}
                            style={{ width: "190px" }}
                            required
                          >
                            <option value="">--Select Industry--</option>
                            {IndustryList.map((category) => (
                              <option value={category}>{category}</option>
                            ))}
                          </select>
                        </div>
                      </Col>
                    </Row>
                    <br />
                    <Link to="/company-signup" className="link-style">
                      <Button
                        variant="primary"
                        className=" rounded-5 fw-bold px-3 py-2"
                        onClick={handleLogin}
                      >
                        Register
                      </Button>
                    </Link>
                    <div className="py-3 d-flex justify-content-center">
                      <input
                        type="checkbox"
                        className="me-2"
                        style={{ width: "15px" }}
                      ></input>
                      <div className="w-75">
                        By creating an account, you agree to the&nbsp;
                        <a href="#" className="text-secondary">
                          Terms of Service
                        </a>{" "}
                        and&nbsp;
                        <a href="#" className="text-secondary">
                          Privacy and Policy.
                        </a>
                      </div>
                    </div>

                    <div className="py-1">
                      <span className="fw-bold">Already have an account? </span>
                      <Link to="/sign-in-company">
                        <span className="text-primary text-decoration-underline">
                          Sign In
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
