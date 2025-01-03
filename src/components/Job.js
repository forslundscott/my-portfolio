import React, { useState, useEffect } from "react";
// import './App.css';

function Job(props) {
  return (
    <span>
    
    <img src={`/images/${props.name}.png`} alt={`${props.name}`} style={{height: '10vh'}}>
    </img>
    </span>
  );
}

export default Job;
