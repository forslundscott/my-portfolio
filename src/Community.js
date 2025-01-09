import React, { useState, useEffect } from "react";
import {Container,Col,Row} from "react-bootstrap"
import Card from "react-bootstrap/Card";
import './App.css';
import Header from "./Header";
function Community() {
  return (
    <Container>
      <Header title="Community"/>
      <Row className="project-card">
        <Card className="project-card-view">
          <Card.Img src="/images/Okemos.png" style={{ height: "10vh" }} />
          <Card.Title>3rd-4th Grade Basketball Coach</Card.Title>
          <Card.Title>T-ball Coach</Card.Title>
        </Card>
      </Row>
      <Row className="project-card">
      <Card className="project-card-view">
      <Card.Img src="/images/Meridian.png" style={{ height: "10vh" }} />
      <Card.Body>
          <Card.Title>4-6th Grade Soccer Coach</Card.Title>
      </Card.Body>
        <Card.Title>4-6th Grade Soccer Coach</Card.Title>
        <Card.Title>3rd Grade Soccer Coach</Card.Title>
        <Card.Title>2nd Grade Soccer Coach</Card.Title>
        <Card.Title>1st Grade Soccer Coach</Card.Title>
        <Card.Title>Kindergarten Soccer Coach</Card.Title>
      </Card>
      </Row>
    </Container>
  );
}

export default Community;
