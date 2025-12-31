// pages/ContactSuccess.jsx
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function ContactSuccess() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center bg-[#F5F5F7]"
    >
      <div className="text-center bg-white p-10 rounded-2xl shadow-xl max-w-md">
        <h2 className="text-3xl font-bold text-[#0076DF]">
          Message Sent 🎉
        </h2>
        <p className="mt-4 text-[#082032]">
          Thanks for reaching out. We’ll get back to you very soon.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 rounded-lg bg-[#0076DF] px-6 py-2 text-white font-medium hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </motion.section>
  );
}
