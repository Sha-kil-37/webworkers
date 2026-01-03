import { motion } from "motion/react";
import SplitText from "./SplitText";
import ScrollDownIndicator from "./ScrollDownIndicator";
import Paragraph from "./Paragraph";
import background from "../assets/backgroundImages/background.jpg";

//
export default function Banner() {
  //

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  //

  //
  return (
    <motion.section
      id="home"
      
      className="xl:py-55 bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="relative xl:w-6xl mx-auto">
        <SplitText
          text="We Build Creative Digital Solutions"
          className="text-center font-bold xl:text-7xl 
          xl:w-3xl tracking-wide mx-auto"
          delay={50}
          duration={0.5}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 10 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <Paragraph className="xl:w-4xl xl:mx-auto font-medium text-center mt-7">
          In today’s fast-moving digital world, Every business needs a strong
          online presence to thrive in the digital world. With “We Build
          Creative Digital Solutions,” we deliver innovative, user-friendly Web
          Development, Digital Marketing, and UI/UX Design that help businesses
          attract customers, strengthen their brand, and grow online
        </Paragraph>
        <ScrollDownIndicator targetId="workexperience" />
      </div>
    </motion.section>
  );
}
