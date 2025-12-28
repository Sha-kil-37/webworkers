// Loader.jsx
import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
//
export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-10 flex items-center justify-center bg-gray-100"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <motion.h3
          layoutId="site-logo"
          className="text-xl font-bold tracking-wide text-[#082032]"
        >
          AGENCY
        </motion.h3>
        <Paragraph className='mt-3 font-medium text-[#082032]'>Please Wait...</Paragraph>
      </div>
    </motion.div>
  );
}
