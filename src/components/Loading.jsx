// Loader.jsx
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
//
export default function Loader() {
  //
  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-center justify-center bg-[#232729]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h3
          layoutId="site-logo"
          className="text-xl font-bold tracking-wide text-white"
        >
          AGENCY
        </motion.h3>
        <Paragraph className="mt-3 font-medium text-white">
          Please Wait...
        </Paragraph>
      </div>
    </motion.div>
  );
}
