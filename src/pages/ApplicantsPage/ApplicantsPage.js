import React from "react";
import { Container, Col, Row, Stack } from "react-bootstrap";
import MainLayout from "../../layouts/MainLayout";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import PostsCard from "../../components/PostsCard";
import PostView from "./PostView/PostView";
import ApplicantsContainer from "../../components/ApplicantsContainer/ApplicantsContainer";

export default function ApplicantsPage() {
  const tags = ["3D Modeling", "Thesis"];
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <MainLayout>
      <Container fluid className="h-100">
        <Row>
          {/* applicants label with back arrow */}
          <Container fluid className="border-bottom py-3 px-5">
            <Row>
              <Stack
                direction="horizontal"
                gap={2}
                onClick={goBack}
                className="pointer"
              >
                <ArrowBack />
                <div className="fs-5 fw-medium">Applicants</div>
              </Stack>
            </Row>
          </Container>
          {/* view the post */}
          <Container fluid className="border-bottom py-3">
            <Row>
              <PostView
                date="12 March 2024"
                time="08:03 AM"
                title="3D Modeler for a Thesis Project-  RUSH!"
                likes="10"
                price="P 15,000"
                tag={tags}
                applicants="20"
                location={"Meycauayan, Bulacan"}
                timeline={"Mar - June 2024"}
              />
            </Row>
          </Container>
          {/* applicants list */}
          <Container fluid className="border-bottom">
            <ApplicantsContainer
              companyName={"Sterling International Computing"}
              companyComment={
                "After reviewing the project details, I'm excited about the opportunity but feel that the allocated budget may not fully accommodate the project's requirements. I've prepared a revised budget proposal that I believe better aligns with the scope and complexity of the work. I'd love to discuss this further at your convenience to ensure we can achieve the best possible outcome for the project. Looking forward to your response"
              }
              companyOffer={"25,000"}
            />
          </Container>
          <Container fluid className="border-bottom">
            <ApplicantsContainer
              companyName={"Sterling International Computing"}
              companyComment={
                "After reviewing the project details, I'm excited about the opportunity but feel that the allocated budget may not fully accommodate the project's requirements. I've prepared a revised budget proposal that I believe better aligns with the scope and complexity of the work. I'd love to discuss this further at your convenience to ensure we can achieve the best possible outcome for the project. Looking forward to your response"
              }
              companyOffer={"25,000"}
            />
          </Container>
          <Container fluid className="border-bottom">
            <ApplicantsContainer
              companyName={"Sterling International Computing"}
              companyComment={
                "After reviewing the project details, I'm excited about the opportunity but feel that the allocated budget may not fully accommodate the project's requirements. I've prepared a revised budget proposal that I believe better aligns with the scope and complexity of the work. I'd love to discuss this further at your convenience to ensure we can achieve the best possible outcome for the project. Looking forward to your response"
              }
              companyOffer={"25,000"}
            />
          </Container>
        </Row>
      </Container>
    </MainLayout>
  );
}
