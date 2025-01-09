import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./Header";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiUbuntu,
  DiGit,
  DiVisualstudio,
  DiMsqlServer

} from "react-icons/di";
import {
TbSql,
TbApi,
TbDatabase,
TbTerminal
} from "react-icons/tb"
import {
  FaStripe
  } from "react-icons/fa"
import {
  SiTwilio,
  SiJest,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiBraintree,
  SiGnometerminal
  } from "react-icons/si"
function Skills() {
  return (
    
    <Container fluid className="project-section">
      <Header title="Skills"/>
      <Row >
        <Col xs={4} md={2} className="skillIcons">
          <DiJavascript1 />
        </Col>
        <Col xs={2} md={2} className="skillIcons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          <DiReact />
        </Col>
      </Row>
      <Row >
        <Col xs={4} md={2} className="skillIcons">
          <DiUbuntu />
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < TbSql/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < DiGit/>
        </Col>
      </Row>
      <Row >
        <Col xs={4} md={2} className="skillIcons">
          < DiVisualstudio/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < SiTwilio/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < TbApi/>
        </Col>
      </Row>
      <Row >
        <Col xs={4} md={2} className="skillIcons">
          < DiMsqlServer/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < SiJest/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < SiHtml5/>
        </Col>
      </Row>
      <Row >
        <Col xs={4} md={2} className="skillIcons">
          < SiCss3/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < SiGithub/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < TbDatabase/>
        </Col>
      </Row>
      <Row >
        <Col xs={4} md={2} className="skillIcons">
          < FaStripe/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < SiBraintree/>
        </Col>
        <Col xs={4} md={2} className="skillIcons">
          < TbTerminal/>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
