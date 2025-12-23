import { useInView } from "./useInView";

const AnimatedSection = ({ children }) => {
  const { ref, isVisible } = useInView();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-16"}
      `}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
