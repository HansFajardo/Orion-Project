import React from "react";
import { Container, Col, Row, Stack, Image, Button } from "react-bootstrap";
import defaultPic from "../../assets/img/defaultProfPic.png";
import Bookmark from "../Bookmark/Bookmark";
import SendMessageModal from "../sendMessageModal/sendMessageModal";
import StartProjectModal from "../StartProjectModal/StartProjectModal";

export default function ApplicantsContainer({
  companyName,
  companyPic,
  companyComment,
  companyOffer,
}) {
  const [modalMessageShow, setModalMessageShow] = React.useState(false);
  const [modalHireShow, setModalHireShow] = React.useState(false);
  return (
    <Container fluid className="pb-4">
      <Row>
        {/* companyheader */}
        <Container className="px-5 py-4">
          <Row>
            {/* image */}
            <Col lg={1} className="d-flex justify-content-center">
              <Image
                src={companyPic != null ? companyPic : defaultPic}
                roundedCircle
                width={75}
                height={75}
                className="border border-primary border-3"
              ></Image>
            </Col>
            {/* company description */}
            <Col className="d-flex flex-column gap-2">
              <div className="fw-medium">{companyName}</div>
              <Stack direction="horizontal" gap={2}>
                <Bookmark />
                <Button variant="outline-primary px-4 fw-medium" onClick={()=>setModalHireShow(true)}>Hire</Button>
                <StartProjectModal show={modalHireShow} onHide = {()=>setModalHireShow(false)}/>
                <Button
                  variant="primary rounded-5 px-4 fw-medium"
                  onClick={() => setModalMessageShow(true)}
                >
                  Message
                </Button>
                <SendMessageModal
                  show={modalMessageShow}
                  onHide={() => setModalMessageShow(false)}
                />
              </Stack>
            </Col>
          </Row>
        </Container>
        {/* companymessage */}
        <Container className="px-5 fw-light">
          <Row>
            <div>{companyComment}</div>
          </Row>
        </Container>
        {/* proposedbudget */}
        {companyOffer != null && (
          <Container className="px-5 pt-3">
            <Row>
              <Col>
                <span className="fw-medium pe-2">Proposed Budget: </span>
                <span>Php {companyOffer != null ? companyOffer : "0.00"}</span>
              </Col>
            </Row>
          </Container>
        )}
      </Row>
    </Container>
  );
}
