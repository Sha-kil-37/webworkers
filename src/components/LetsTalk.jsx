import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
//
export default function LetsTalk() {
  //
  return (
    <section className="w-full py-20 bg-[#F5F7F8]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-5"
        >
          Let’s Talk
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-10"
        >
          Have a project idea or want to grow your digital presence? Share your
          vision with us — we’re here to help your business succeed.
        </motion.p>

        <motion.a
          href="mailto:sakildevmern@gmail.com"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition-all"
        >
          <FiMail className="text-2xl" />
          Start a Conversation
        </motion.a>
      </div>
    </section>
  );
}
