import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import defaultImage from "../../../assets/img/defaultProfPic.png";
import ReviewCardModal from "../../../components/ReviewCardModal/ReviewCardModal";

export default function CompletedCompanyTransaction({
  companyName,
  amount,
  dueDate,
}) {
  const [ReviewCardModalShow, setReviewCardModalShow] = React.useState(false);

  return (
    <Container fluid className="border-bottom p-3">
      <Row>
        {/* header */}
        <Container fluid>
          <Row className="h-100 align-items-center">
            {/* service provider */}
            <Col lg={3}>
              {/* company info */}
              <Container fluid>
                <Row className="h-100 align-items-center">
                  {/* image */}
                  <Col lg={2}>
                    <Image
                      src={defaultImage}
                      alt="company-pic"
                      roundedCircle
                      width={40}
                      height={40}
                      className="border"
                    />
                  </Col>
                  {/* name */}
                  <Col>
                  <div>{companyName}</div>
                  </Col>
                </Row>
              </Container>
            </Col>
            {/* amount */}
            <Col lg={3}>
              <div>
                Php {amount}
              </div>
            </Col>
            {/* due date */}
            <Col lg={3}>
              <div>
                {dueDate}
              </div>
            </Col>
            <Col lg={3}>
              <div>
                <Button variant="primary"
                onClick={() => setReviewCardModalShow(true)}>View Project Details</Button>
              </div>
              <ReviewCardModal
                show={ReviewCardModalShow}
                onHide={() => setReviewCardModalShow(false)}
              />
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
