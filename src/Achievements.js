import React, { useState, useEffect } from "react";
import {Container,Col,Row} from "react-bootstrap"
import Card from "react-bootstrap/Card";
import Header from "./Header";
function Achievements() {
  return (
    <Container fluid className="project-section">
      <Header title="Achievements"/>
      <Row className="project-card">
      <Card className="project-card-view">
      <Card.Img src={`${process.env.PUBLIC_URL}/images/PWAA.png`} style={{ height: "10vh" }} />
      <Card.Img src={`${process.env.PUBLIC_URL}/images/RGBSI.png`} style={{ height: "10vh" }} />
        <p>Automated processes at Pratt & Whitney AutoAir, achieving over $1 million in annual cost savings.</p>
        <p>Developed a VoIP call line using Twilio, Node.js, and Express.js, saving $100,000 annually and additional cost avoidance during union contract negotiations.</p>
        <p>Built a company-wide dashboard for Pratt & Whitney AutoAir, streamlining operations across six plants through real-time data access.</p>
        <p>Automated a proprietary process for Pratt & Whitney AutoAir, saving over 13,000 hours annually and made necessary data more easily accessible.</p>
        <p>Created a dynamic and user friendly interface that is used by multiple Pratt & Whitney locations to ensure consistent data collection and storage.</p>
      </Card>
      </Row>
      <Row className="project-card">
      <Card className="project-card-view">
      <Card.Img src={`${process.env.PUBLIC_URL}/images/GLOS.png`} style={{ height: "10vh" }} />
        <p>Developed a league management app for a local soccer organization with EJS and React, transitioning to React Native for broader compatibility.</p>
      </Card>
      </Row>
      <br/>
    </Container>
  );
}

export default Achievements;
