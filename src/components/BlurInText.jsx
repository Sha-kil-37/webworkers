import { motion, useInView } from "framer-motion";
import { useRef } from "react";
//
const BlurInText = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  //
  return (
    <motion.h2
      ref={ref}
      initial={{ filter: "blur(10px)", opacity: 0 }}
      animate={isInView ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 2 }}
      className={`${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default BlurInText;
