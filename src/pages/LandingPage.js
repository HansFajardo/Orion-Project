import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import landingPage from "./css/LandingPage.module.css";
import targetIcon from "../assets/img/streamline_target-solid.svg";
import shieldIcon from "../assets/img/shield.svg";
import messageIcon from "../assets/img/messages.svg";
import MainLayout from "../layouts/MainLayout";
import { CompanyList } from "../backend/files/CompanyList";
import { Link } from "react-router-dom";
import  { useState } from 'react';


const LandingPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const input = event.target.value;
    const newFilter = CompanyList.filter((value) => {
      return value.companyName.toLowerCase().includes(input.toLowerCase());
    });
    if (input === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <MainLayout>
      <div className="h-100 d-flex flex-column">
        <div className={landingPage.landingPageUpper}>
          <div className={landingPage.pseudoContainer}>
            <div className="container col-xl-10 col-xxl-7 px-0 py-5 d-flex flex-column flex-grow-1 h-100">
              <div className="row align-items-end justify-content-end g-lg-5 py-5 px-0 h-100">
                <div className="col-lg-7 text-center text-lg-end py-5">
                  <span className="text-primary fw-bold fs-1">
                    Find Companies
                  </span>
                  <span className="fw-bold fs-1"> That Suit Your Needs</span>
                  <div>
                    <input
                      type="text"
                      name="text"
                      placeholder="Search"
                      class={landingPage.input}
                      onChange={handleFilter}
                    ></input>
                    {filteredData.length !== 0 && (
              <div
                className='shadow-sm position-absolute overflow-hidden overflow-y-auto rounded-3 bg-light w-25 h-25 search-result'
              >
                {filteredData.map((val, key) => {
                  return (
                    <Link to="/companyProfile" className="remove-blue-link">
                      <div className='p-4 searchContainer d-flex'>
                        {val.companyName}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-grow-1 bg-white d-flex flex-column">
          <Container className="flex-fill d-flex justify-content-center align-items-center py-5">
            <Row>
              <Col className="text-center">
                <div
                  className={`${landingPage.iconCircle} d-inline-block position-relative`}
                >
                  <div
                    className={`${landingPage.iconContainer} position-absolute top-50 start-50 translate-middle`}
                  >
                    <img src={targetIcon} alt="target" />
                  </div>
                </div>
                {/* <Image src={targetIcon} roundedCircle style={{ backgroundColor: '#7A1CA7', boxSizing: 'border-box', padding: '20px' }} /> */}
                <div className="py-2">
                  <span className="fw-bold">Providing you the </span>
                  <span className="text-primary fw-bold">best company </span>
                  <span className="fw-bold">for your needs</span>
                </div>
              </Col>
              <Col className="text-center">
                <div
                  className={`${landingPage.iconCircle} d-inline-block position-relative`}
                >
                  <div
                    className={`${landingPage.iconContainer} position-absolute top-50 start-50 translate-middle`}
                  >
                    <img src={shieldIcon} alt="target" />
                  </div>
                </div>
                <div className="py-2">
                  <span className="text-primary fw-bold">Secure </span>
                  <span className="fw-bold">Transactions</span>
                </div>
              </Col>
              <Col className="text-center">
                <div
                  className={`${landingPage.iconCircle} d-inline-block position-relative`}
                >
                  <div
                    className={`${landingPage.iconContainer} position-absolute top-50 start-50 translate-middle`}
                  >
                    <img src={messageIcon} alt="target" />
                  </div>
                </div>
                <div className="py-2">
                  <span className="text-primary fw-bold">Keep in touch </span>
                  <span className="fw-bold">
                    with the company you signed with our Chat Feature
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </MainLayout>
  );
};

export default LandingPage;
