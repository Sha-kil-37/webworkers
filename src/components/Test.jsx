import { motion } from "framer-motion";
//
const Test = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start state (initial load)
      animate={{ opacity: 1, y: 0 }} // End state (after load)
      transition={{ duration: 0.5 }} // Animation duration
    >
      <h1>Hello, World!</h1>
      <p>This content fades and slides in after the component mounts.</p>
    </motion.div>
  );
};

export default Test;
