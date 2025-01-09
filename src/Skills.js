import React, { useState } from "react";
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
} from "react-icons/tb";
import {
  FaStripe,
  FaServer
} from "react-icons/fa";
import {
  SiTwilio,
  SiJest,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiBraintree,
  SiDbeaver,
  SiExpress
} from "react-icons/si";

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <DiNodejs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <DiReact />, label: "React" },
    { icon: <DiUbuntu />, label: "Ubuntu" },
    { icon: <TbSql />, label: "SQL" },
    { icon: <DiGit />, label: "Git" },
    { icon: <DiVisualstudio />, label: "VS Code" },
    { icon: <SiTwilio />, label: "Twilio" },
    { icon: <TbApi />, label: "APIs" },
    { icon: <DiMsqlServer />, label: "MS SQL Server" },
    { icon: <SiHtml5 />, label: "HTML5" },
    { icon: <SiJest />, label: "Jest" },
    { icon: <SiCss3 />, label: "CSS3" },
    { icon: <SiGithub />, label: "GitHub" },
    { icon: <TbDatabase />, label: "Database" },
    { icon: <FaStripe />, label: "Stripe" },
    { icon: <SiBraintree />, label: "Braintree" },
    { icon: <TbTerminal />, label: "Terminal" },
    { icon: <SiDbeaver />, label: "DBeaver" },
    { icon: <FaServer />, label: "Servers" },
  ];

  const chunkedSkills = [];
  for (let i = 0; i < skills.length; i += 3) {
    chunkedSkills.push(skills.slice(i, i + 3));
  }

  return (
    <Container fluid className="project-section">
      <Header title="Skills" />
      {chunkedSkills.map((skillRow, rowIndex) => (
        <Row key={rowIndex}>
          {skillRow.map((skill, colIndex) => {
            const index = rowIndex * 3 + colIndex;
            return (
              <Col
                key={index}
                xs={4}
                md={2}
                className="skillIcons"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{ 
                  position: "relative",                
                   }}
              >
                {skill.icon}
                {hoveredSkill === index && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(206, 255, 0, 0.8)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#121212",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      zIndex: 1,
                      borderRadius: "5px"
                    }}
                  >
                    {skill.label}
                  </div>
                )}
              </Col>
            );
          })}
        </Row>
      ))}
    </Container>
  );
}

export default Skills;
