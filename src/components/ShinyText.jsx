
export default function ShinyText({
  text,
  className = "",
}) {
  return (
    <span
      className={`relative overflow-hidden text-transparent bg-clip-text
      bg-gradient-to-r from-[#FFE100] via-white to-[#FFE100]
      animate-shine ${className}`}
    >
      {text}
    </span>
  );
}
