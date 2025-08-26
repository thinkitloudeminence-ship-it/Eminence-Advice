import Particles from "react-tsparticles";

function BackgroundAnimation() {
  return (
    <Particles
      options={{
        background: {
          color: "#ffffff"
        },
        particles: {
          number: {
            value: 60
          },
          color: {
            value: "#ff6b00"
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.3
          },
          size: {
            value: 4
          },
          move: {
            enable: true,
            speed: 2
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        }
      }}
    />
  );
}

export default BackgroundAnimation;
