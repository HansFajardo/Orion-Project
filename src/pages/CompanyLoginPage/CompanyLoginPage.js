import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../css/LoginPage.module.css";
import login2 from "../css/LoginCompany.module.css";
import Logo from "../../assets/img/logo.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../../backend/AuthContext";
import React, { useContext } from "react";

const LoginCompanyPage = () => {
  const { login , handleUserType } = useContext(AuthContext);

  const handleLogin = () => {
    // Perform login process...
    // Assuming the login is successful and you have the user's name
    const userName = "Sterling International Consulting";
    login(userName); // Call the login function with the user's name
    handleUserType('company');
  };
  return (
    <div className="vh-100 vw-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col lg={6} md={4} sm={3} className={login2.thumbnail}>
            <div className={styles.thumbnailTxt}>
              <h1 style={{ fontSize: "50px" }} className={styles.animate}>
                Gain visibility.
              </h1>
              <h1 style={{ fontSize: "50px" }} className={styles.animate2}>
                Expand your network.
              </h1>
              <p className={styles.animate3}>
                Showcase your expertise to clients all over the country and
                unlock opportunities for growth.
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
              <h2 className="pt-3 fs-4 fw-bold">Sign Up as Company</h2>
              <div class={styles.inputGroup}>
                <label className={styles.label}>Company Name</label>
                <input
                  autocomplete="off"
                  name="Username"
                  id="Username"
                  className={styles.input}
                  type="text"
                />
              </div>
              <div class={styles.inputGroup}>
                <label className={styles.label}>Company Email address</label>
                <input
                  autocomplete="off"
                  name="Email"
                  id="Email"
                  className={styles.input}
                  type="email"
                />
              </div>
              <div class={styles.inputGroup}>
                <label className={styles.label}>Password</label>
                <input
                  autocomplete="off"
                  name="Password"
                  id="Password"
                  className={styles.input}
                  type="password"
                />
              </div>
              <br />
              <Link to="/company-dashboard" className="link-style">
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
                <Link to="/company-register">
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
};

export default LoginCompanyPage;
