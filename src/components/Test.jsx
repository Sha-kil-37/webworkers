import { motion } from "framer-motion";
//
const logos = [
  "/logos/google.svg",
  "/logos/meta.svg",
  "/logos/amazon.svg",
  "/logos/netflix.svg",
  "/logos/microsoft.svg",
  "/logos/apple.svg",
];

const Row = ({ reverse = false }) => (
  <div className="overflow-hidden">
    <motion.div
      className="flex gap-12 w-max"
      animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 20,
        ease: "linear",
      }}
    >
      {[...logos, ...logos].map((logo, i) => (
        <img key={i} src={logo} className="h-14 opacity-80" />
      ))}
    </motion.div>
  </div>
);

export default function Test() {
  return (
    <section className="py-10 space-y-6">
      <Row />
      <Row reverse />
    </section>
  );
}
