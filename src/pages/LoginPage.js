import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import loginPage from "./css/LoginPage.module.css";
import Logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../backend/AuthContext";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";

function LoginPage() {
  const { login , handleUserType } = useContext(AuthContext);

  const handleLogin = () => {
    // Perform login process...
    // Assuming the login is successful and you have the user's name
    const userName = "Hans Angelo";
    login(userName); // Call the login function with the user's name
    handleUserType('client');
  };

  return (
    <div className="vh-100 vw-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col lg={6} md={4} sm={3} className={loginPage.thumbnail}>
            <div className={loginPage.thumbnailTxt}>
              <h1 style={{ fontSize: '50px' }} className={loginPage.animate}>Offer services.</h1>
              <h1 style={{ fontSize: '50px' }} className={loginPage.animate2}>Connect with experts.</h1>
              <p className={loginPage.animate3}>
                Browse for skilled professionals, or let them come to you with
                tailored solutions.
              </p>
            </div>
          </Col>
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
              <h2 className="pt-3 fs-4 fw-bold">Sign Up as Client</h2>
              <div class={loginPage.inputGroup}>
                <label className={loginPage.label}>Username</label>
                <input
                  autocomplete="off"
                  name="Username"
                  id="Username"
                  className={loginPage.input}
                  type="text"
                />
                <div></div>
              </div>
              <div class={loginPage.inputGroup}>
                <label className={loginPage.label}>Email address</label>
                <input
                  autocomplete="off"
                  name="Email"
                  id="Email"
                  className={loginPage.input}
                  type="email"
                />
                <div></div>
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
                <div></div>
              </div>
              <br />
              <Link to="/client-signup" className="link-style">
                <Button
                  variant="primary"
                  className=" rounded-5 fw-bold px-3 py-2"
                  onClick={handleLogin}
                >
                  Continue
                </Button>
              </Link>
              <div className="py-1 mt-3">
                <span className="fw-bold">Don't have an account? </span>
                <Link to="/register">
                  <span className="text-primary text-decoration-underline">
                    Sign Up
                  </span>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPage;
