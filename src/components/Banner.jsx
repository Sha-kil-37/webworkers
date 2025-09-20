import { Link } from "react-router";
import Button from "./Button";
import BlurInText from "./BlurInText";
// import CurvedLoop from "./CurvedLoop";
import ScrollFloat from "./ScrollFloat";
import ScrollReveal from "./ScrollReveal";
import DomeGallery from "./DomeGallery";

//
export default function Banner() {
  // Added a linear gradient background and text color for readability
  return (
    <section>
      <div className="relative max-w-7xl mx-auto px-6 py-26">
        <BlurInText className="text-6xl font-bold mb-6 max-w-[570px] mx-auto text-center">
          We Build Creative Digital Solutions
        </BlurInText>
        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          We are a modern digital agency dedicated to empowering businesses with
          creative and technical solution ✦ With expertise in web development,
          UI/UX design, and digital strategy ✦ we craft custom solutions that
          fit your unique goals. ✦ Our mission is simple: to turn your ideas
          into impactful online experiences
        </ScrollReveal>
        <div style={{ width: '100%', height: '100vh' }}>
          <DomeGallery />
        </div>
      </div>
    </section>
  );
}
