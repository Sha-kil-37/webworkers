import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
//
export default function BackgroundAnimation({ active }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#030617", // dark navy
            },
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: active ? 60 : 20, // increases when title highlighted
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: { value: ["#00eaff", "#0ab8ff", "#ffffff"] },
            opacity: {
              value: active ? 0.8 : 0.3,
              animation: {
                enable: true,
                speed: 0.6,
              },
            },
            size: {
              value: 3,
              random: true,
            },
            move: {
              enable: true,
              speed: active ? 2 : 0.7,
              direction: "none",
              outModes: "out",
            },
            links: {
              enable: active ? true : false,
              distance: 120,
              color: "#00eaff",
              opacity: 0.4,
              width: 1,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
