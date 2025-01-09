import React, {useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./components/Job";
import Header from "./Header";

function WorkHistory() {

  return (
    <Container fluid className="project-section">

      <Header title="Work History"/>
      <Col>
        <Row md={4} className="project-card snap-row">
          <Job name="RGBSI" />
        </Row>
        <Row md={4} className="project-card snap-row">
          <Job name="Dart" />
        </Row>
        <Row md={4} className="project-card snap-row">
          <Job name="Yeo" />
        </Row>
        <Row md={4} className="project-card snap-row">
          <Job name="Block" />
        </Row>
      </Col>
    </Container>
  );
}

export default WorkHistory;
