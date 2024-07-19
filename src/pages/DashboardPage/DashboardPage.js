import React, { useContext } from 'react'
import { AuthContext } from "../../backend/AuthContext";
import MainLayout from '../../layouts/MainLayout';
// import { Col, Row } from 'react-bootstrap';
// import DashboardContainer from '../../components/DashboardComponents/DashboardContainer';
// import DataLossPrevention from '../../assets/img/data_loss_prevention.svg';
// import DesignServices from '../../assets/img/design_services.svg';
// import EditSquare from '../../assets/img/edit_square.svg';
import DashboardPanel from '../../components/DashboardComponents/DashboardPanel';
import MyProjectLogo from '../../assets/img/myProjectsLogo.svg';
import MyShortlistLogo from '../../assets/img/myShortlistLogo.svg';
import MyMessagesLogo from '../../assets/img/myMessagesLogo.svg';
import BrowseProvidersSection from '../../components/BrowseProvidersSection/BrowseProvidersSection';
import RecommendedCompanyContainer from '../../components/RecommendedCompanyContainer/RecommendedCompanyContainer';

export default function DashboardPage() {
  const { login } = useContext(AuthContext);

  const userName = "Hans Angelo";
  login(userName);

  return (
    <MainLayout>
      <div className='bg-light py-5'>
        <div className='container'>
          <h2 className='mb-4 fw-bold'>
            Welcome back, {userName}!
          </h2>
          {/* get started panel */}
          {/* <div className='bg-primary rounded-4 p-5 mt-5'>
            <Row>
              <Col>
                <div className='text-white'>
                  <h6>
                    GET STARTED
                  </h6>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <div className='text-white'>
                  <h1 className='fs-1 fs-md-2 fs-lg-1'>
                    How can Orion help you find a business service provider today?
                  </h1>
                </div>
              </Col>

              <Col md={8}>
                <Row>
                  <DashboardContainer image={DataLossPrevention} text={"I'll research companies on my own"} />
                </Row>

                <Row>
                  <DashboardContainer image={DesignServices} text={"I need help scoping my project requirements"} />
                </Row>

                <Row>
                  <DashboardContainer image={EditSquare} text={"Generate a list of companies based on my project"} />
                </Row>
              </Col>
            </Row>
          </div> */}
          <BrowseProvidersSection/>

          <RecommendedCompanyContainer/>

          <DashboardPanel
            title={"My Projects"}
            image={MyProjectLogo}
            headText={"Build a project brief in minutes"}
            subText={"Create a personalized project brief and send it to multiple best-fit service providers all at once."}
            buttonText={"View Project/s"}
            page={"client-projects"}
          ></DashboardPanel>

          <DashboardPanel
            title={"My Bookmark"}
            image={MyShortlistLogo}
            headText={"Compare companies with ease!"}
            subText={"Connect with qualified list of providers that match your requirements right away."}
            buttonText={"Create my Bookmark"}
            info={"My Bookmark"}
            number={"(" + 0 + ")"}
            page={"client-bookmark"}
          ></DashboardPanel>

          <DashboardPanel
            title={"My Messages"}
            image={MyMessagesLogo}
            headText={"Track all your messages in one place"}
            subText={"Use in-platform messaging to connect with your Shortlisted  provides  for faster response time, streamlined scheduling and one place for all your communication."}
            buttonText={"Check my Messages"}
            info={"My Messages"}
            page={"client-messages"}
          ></DashboardPanel>
        </div>
      </div>
    </MainLayout>
  )
}
