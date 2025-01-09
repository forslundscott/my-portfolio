import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./particleConfig";

function Particle() {
  return (
    <Particles
      params={particleConfig}
    />
  );
}

export default Particle;
