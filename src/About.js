import logo from './logo.svg';
import {Container, Row, Card, Col} from 'react-bootstrap'
import Header from './Header';

function About() {
  return (
    <Container fluid className="project-section">
      <Header title="About Me"/>
      <Col>
        <Row md={4} className="about-card snap-row" >
          <Card className="project-card-view" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px"}}>
            <h2>Freelance Developer</h2>
          </Card>
        </Row>
        <Row md={4} className="about-card snap-row">
          <Card className="project-card-view" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px"}}>
            <h2>Avid Soccer Player</h2>
          </Card>
        </Row>
        <Row md={4} className="about-card snap-row">
          <Card className="project-card-view" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px"}}>
            <h2>Runner</h2>
          </Card>
        </Row>
        <Row md={4} className="about-card snap-row">
          <Card className="project-card-view" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px"}}>
            <h2>Coach</h2>
          </Card>
        </Row>
        <Row md={4} className="about-card snap-row">
          <Card className="project-card-view" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px"}}>
            <h2>Beekeeper</h2>
          </Card>
        </Row>
        <Row md={4} className="about-card snap-row">
          <Card className="project-card-view" style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "0px", paddingBottom: "0px"}}>
            <h2>Gardener</h2>
          </Card>
        </Row>
      </Col>
    </Container>
  );
}

export default About;
