
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
      className="text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem] max-w-[570px] mx-auto text-black" 
    >
      {children}
    </motion.h2>
  );
};

export default BlurInText;
