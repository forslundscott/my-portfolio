import React from "react";
import Card from "react-bootstrap/Card";
import Jobs from "./Jobs.json";

function Job(props) {
  const job = Jobs[props.name];
  if (!job || !Array.isArray(job.tasks)) {
    return <p>Job data or tasks not found for {props.name}</p>;
  }
  return (
    <span>
      <Card className="project-card-view">
        {job.images.map((image, index) => (
          <Card.Img key={index}
          src={`${process.env.PUBLIC_URL}${image}`} 
          alt={props.name} 
          style={{ height: "10vh" }}
        />
        ))}
        {/* <Card.Img 
          src={`${process.env.PUBLIC_URL}/images/${props.name}.png`} 
          alt={props.name} 
          style={{ height: "10vh" }}
        /> */}
        <Card.Body>
          <Card.Title>{job.name}</Card.Title>
        </Card.Body>
        
        {job.tasks.map((task, index) => (
          <p key={index}>{task}</p>
        ))}
      </Card>
    </span>
  );
}

export default Job;
