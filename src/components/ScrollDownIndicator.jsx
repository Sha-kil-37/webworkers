import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
//
export default function ScrollDownIndicator({ targetId = "services" }) {
  const handleScroll = () => {
    const section = document.getElementById(targetId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  //
  return (
    <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2">
      <button
        onClick={handleScroll}
        aria-label="Scroll Down"
        className="flex flex-col items-center gap-2 text-[#082032] transition"
      >
        <span className="font-medium text-[#082032] tracking-widest uppercase cursor-pointer">Scroll</span>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30"
        >
          <FiChevronDown size={22} />
        </motion.div>
      </button>
    </div>
  );
}
