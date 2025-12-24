import { motion } from 'framer-motion';

const Test = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }} // Initial state (hidden and below original position)
      whileInView={{ opacity: 1, y: 0 }} // Animate to this state when in view
      viewport={{ once: true, amount: 0.5 }} // Options: animate once, when 50% of the element is visible
      transition={{ duration: 0.8, delay: 0.2 }} // Animation duration and delay
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <h2>This section animates on scroll!</h2>
    </motion.section>
  );
};

export default Test;
