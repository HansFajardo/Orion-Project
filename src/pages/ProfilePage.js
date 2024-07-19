import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import defaultPic from "../assets/img/defaultProfPic.png";
// import Button from "@mui/material/Button";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import verifiedIcon from "../assets/img/verified.svg";
// import filledStar from "../assets/img/filledStar.svg";
// import halfStar from "../assets/img/halfStar.svg";
import mailIcon from "../assets/img/mail.svg";
import callIcon from "../assets/img/call.svg";
import locationIcon from "../assets/img/location.svg";
import PostsCard from "../components/PostsCard";
import MainLayout from "../layouts/MainLayout";
import EditProfileModal from "../components/editProfileModal";
import React from "react";
// import StarSystem from "../components/StarSystem/StarSystem";
import { Button, Stack } from "react-bootstrap";

const ProfilePage = () => {
  const tags = ["3D Modeling", "Thesis"];
  const [editModalShow, setEditModalShow] = React.useState(false);

  return (
    <MainLayout>
      <div className="h-100 d-flex flex-column">
        <Container fluid className="pt-4 px-5 py-4">
          <Row>
            <Col xl={4} className="mx-2">
              <Container
                className="py-3 rounded-4"
                style={{ backgroundColor: "#F9F9F9" }}
              >
                <Row>
                  <Col xl={4} className="text-center">
                    <Image
                      src={defaultPic}
                      roundedCircle
                      fluid
                      style={{
                        width: "70px",
                        height: "70px",
                        border: "2px solid #7A1CA7",
                      }}
                    />
                    <h5 className="pt-2 fw-bold">Hans Angelo</h5>
                  </Col>
                  <Col className="d-flex flex-column">
                    <div className=" flex-grow-1">
                      22 | A Computer Engineering Student
                    </div>
                    <div className="d-flex flex-row justify-content-end">
                      <Button
                        variant="primary"
                        onClick={() => setEditModalShow(true)}
                        className="px-3"
                      >
                        <div className="d-flex gap-2">
                          <EditOutlinedIcon />
                          <div className="fw-medium">Edit Profile</div>
                        </div>
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xl={3} className=" mx-2 d-flex flex-column justify-content-center">
              
              <div className="d-flex flex-row gap-2">
                <img src={verifiedIcon} alt="verified" />
                <div>Phone number verified</div>
              </div>
              <div className="d-flex flex-row gap-2">
                <img src={verifiedIcon} alt="verified" />
                <div>Payment verified</div>
              </div>
              {/* <div className="d-flex flex-row align-items-center py-1 mt-2">
                <StarSystem rating="4.5" />
                <div className="px-2">4.5 out of 5</div>
              </div>
              <div>
                <span>10 reviews </span>
                <span className="text-decoration-underline pointer text-primary">
                  see reviews
                </span>
              </div> */}
            </Col>
            <Col className="mx-2">
              <Stack direction="vertical" gap={2}>
                <h5 className="fw-bold">Contact Information</h5>
                <div className="d-flex flex-row gap-2">
                  <img src={mailIcon} alt="mail" />
                  <div>hansangelo.amponin.v@bulsu.edu.ph</div>
                </div>
                <div className="d-flex flex-row gap-2">
                  <img src={callIcon} alt="call" />
                  <div>0912-345-6789</div>
                </div>
                <div className="d-flex flex-row gap-2">
                  <img src={locationIcon} alt="location" />
                  <div>Meycauayan, Bulacan</div>
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
        <div className="flex-grow-1">
          <PostsCard
            date="12 March 2024"
            time="08:03 AM"
            title="3D Modeler for a Thesis Project-  RUSH!"
            likes="10"
            price="P 15,000"
            tag={tags}
            applicants="20"
            location={'Meycauayan, Bulacan'}
            timeline={'Mar - June 2024'}
          />
          <PostsCard
            date="12 March 2024"
            time="08:03 AM"
            title="3D Modeler for a Thesis Project-  RUSH!"
            likes="10"
            price="P 15,000"
            tag={tags}
            applicants="20"
            location={'Meycauayan, Bulacan'}
            timeline={'Mar - June 2024'}
          />
        </div>
      </div>
      <EditProfileModal
        show={editModalShow}
        onHide={() => setEditModalShow(false)}
      />
    </MainLayout>
  );
};

export default ProfilePage;
