import logo from './logo.svg';
import {Container, Row, Card} from 'react-bootstrap'
import Header from './Header';

function About() {
  return (
    <Container>
      <Header title="About Me"/>
      <Row>
        Freelance Software Developer
      </Row>
      <Row>
        Avid Soccer Player
      </Row>
      <Row>
        Runner
      </Row>
      <Row>
        Coach
      </Row>
      <Row>
        Beekeeper
      </Row>
      <Row>
        Gardener
      </Row>
    </Container>
  );
}

export default About;
