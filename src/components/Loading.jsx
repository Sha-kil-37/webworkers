// Loader.jsx
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
//
export default function Loader() {
  //
  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-center justify-center "
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h3
          layoutId="site-logo"
          className="font-primary tracking-wide font-bold text-center 2xl:text-xl xl:text-xl lg:text-xl md:text-xl sm:text-lg"
        >
          AGENCY
        </motion.h3>
        <Paragraph className="text-center mt-1 font-primary text-sky-500">
          Please Wait...
        </Paragraph>
      </div>
    </motion.div>
  );
}
