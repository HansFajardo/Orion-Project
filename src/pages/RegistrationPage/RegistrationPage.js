import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginPage from "../css/LoginPage.module.css";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AuthContext } from "../../backend/AuthContext.js";

export default function RegistrationPage() {
  const [phone, setPhone] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const userName = "Hans Angelo";
    login(userName);
  };

  return (
    <div className="vh-100 vw-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col lg={6} md={4} sm={3} className={loginPage.thumbnail}>
            <div className={loginPage.thumbnailTxt}>
              <h1 className={loginPage.animate}>Offer services.</h1>
              <h1 className={loginPage.animate2}>Connect with experts.</h1>
              <p className={loginPage.animate3}>
                Browse for skilled professionals, or let them come to you with
                tailored solutions.
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
                    <h2 className="pt-3">Register as Client</h2>
                    <div class={loginPage.inputGroup}>
                      <label className={loginPage.label}>Email address</label>
                      <input
                        autocomplete="off"
                        name="Email"
                        id="Email"
                        className={loginPage.input}
                        type="email"
                      />
                    </div>
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
                      <label className={loginPage.label}>Username</label>
                      <input
                        autocomplete="off"
                        name="Username"
                        id="Username"
                        className={loginPage.input}
                        type="text"
                      />
                    </div>

                    <Row>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>First Name</label>
                          <input
                            autocomplete="off"
                            name="Firstname"
                            id="Firstname"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>Last Name</label>
                          <input
                            autocomplete="off"
                            name="Lastname"
                            id="Lastname"
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
                      <Col md={6} xs={12}>
                        <div class={loginPage.inputGroup}>
                          <label className={loginPage.label}>Currency</label>
                          <input
                            autocomplete="off"
                            name="Currency"
                            id="Currency"
                            className={loginPage.input}
                            style={{ width: "190px" }}
                            type="text"
                          />
                        </div>
                      </Col>
                    </Row>

                    <div className={loginPage.inputGroup}>
                      <label className={loginPage.label}>Phone</label>
                      <div
                        className="rounded-3 p-2"
                        style={{ backgroundColor: "#05060f0a", width: "400px" }}
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

                    <br />
                    <Link to="/sign-in-client" className="link-style">
                      <Button
                        variant="primary"
                        className=" rounded-5 fw-bold px-3 py-2"
                        onClick={handleLogin}
                      >
                        Register
                      </Button>
                    </Link>
                    <div className="py-5 d-flex justify-content-center">
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
                      <Link to="/sign-in-client">
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
