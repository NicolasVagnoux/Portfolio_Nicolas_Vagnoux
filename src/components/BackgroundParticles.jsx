import Particles from "particlesjs";
import React, { useEffect } from "react";

const BackgroundParticles = () => {
  useEffect(() => {
    Particles.init({
      selector: ".background",
      color: ["#ffffff"],
      connectParticles: false,
      speed: 0.3,
      maxParticles: 200,
      sizeVariations: 3,
      responsive: [
        {
          breakpoint: 800,
          options: {
            maxParticles: 80,
          },
        },
      ],
    });
  }, []);

  return <canvas className="background" />;
};

export default BackgroundParticles;
