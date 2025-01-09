import React, { useState, useEffect } from "react";
import {Container,Row,Card} from "react-bootstrap"
import './App.css';
import Header from "./Header";
import SwirlyWrapper from "./swirlyWrapper";

function Home() {
  return (
    <Container>
      
      <Header title="Hi I'm Scott!"/>
      <Card>
        <Card.Body>
        <p>I created this so you can get a chance to know me and see a little bit of what I have done and can do!</p>

        <p>Please feel free to look around. There is both personal and professional information. Let me know if you have any questions or if I can use my skills to help you out in any way!</p>
        </Card.Body>
      </Card>
    </Container>
    
  );
}

export default Home;
