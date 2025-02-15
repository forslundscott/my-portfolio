import React, { useState, useEffect } from "react";
import {Container,Col,Row} from "react-bootstrap"
import Card from "react-bootstrap/Card";
import Header from "./Header";
function School() {
  return (
    <Container fluid className="project-section">
      <Header title="School & Certifications"/>
      <Row className="project-card">
      <Card className="project-card-view">
        
      <Card.Img src={`${process.env.PUBLIC_URL}/images/SAU.gif`} style={{ height: "10vh" }} />
      <br/>
        Bachelor of Arts - Accounting

      
      </Card>
      
      
      </Row>
      <Row>
        <Card>
        <Card.Img src={`${process.env.PUBLIC_URL}/images/CPA.png`} style={{ height: "15vh", margin: "10px" }} />
        <Card.Img src={`${process.env.PUBLIC_URL}/images/CSSGB.png`} style={{ height: "15vh", margin: "10px" }} />
      </Card>
      </Row>
    </Container>
  );
}

export default School;
