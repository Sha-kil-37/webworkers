import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
//
export default function LetsTalk() {
  //
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-5 text-[var(--black-color)]"
        >
          Let’s Talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-10 text-[var(--black-color)]"
        >
          Your business deserves a digital strategy that performs. Connect with us today, and let’s create innovative solutions that fuel growth, strengthen your brand, and move your business forward.
        </motion.p>

        <motion.a
          href="mailto:sakildevmern@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--white-color)] rounded-xl font-semibold shadow-sm hover:shadow-md hover:bg-[var(--primary-color)] transition-all text-[var(--black-color)]"
        >
          <FiMail className="text-2xl text-[var(--black-color)]" />
          Start a Conversation
        </motion.a>
      </div>
    </section>
  );
}
