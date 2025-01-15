import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

export default function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main); // Load full particles capabilities
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#1e1e1e" }, // Background color
        },
        particles: {
          number: {
            value: 150, // Number of particles
            density: {
              enable: true,
              area: 800, // Density area
            },
          },
          color: {
            value: "#ffffff", // Particle color
          },
          shape: {
            type: "circle", // Particle shape
          },
          opacity: {
            value: 0.6, // Opacity of particles
            random: true,
          },
          size: {
            value: 5, // Size of particles
            random: true,
          },
          move: {
            enable: true,
            speed: 3, // Particle speed
            direction: "none", // Particle movement direction
            random: true,
            straight: false,
            outModes: {
              default: "out", // Particles move out when leaving the screen
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Repulse particles on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Add particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100, // Repulse distance
              duration: 0.4, // Repulse duration
            },
            push: {
              quantity: 4, // Particles added on click
            },
          },
        },
        detectRetina: true, // Retina display support
      }}
    />
  );
}
