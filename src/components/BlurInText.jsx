import { motion, useInView } from "framer-motion";
import * as React from "react";
//
const BlurInText = ({ children }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.h2
      ref={ref}
      initial={{ filter: "blur(20px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 1.2 }}
      className="text-6xl font-bold max-w-[570px] mx-auto bg-clip-text text-transparent bg-[#102E50] text-center"
    >
      {children}
    </motion.h2>
  );
};

export default BlurInText;
