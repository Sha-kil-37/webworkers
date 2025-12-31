import { useEffect, useRef, useState } from "react";
import ShinyText from "./ShinyText";

//
const CounterItem = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
  //
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCount = () => {
    let start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = Math.floor(eased * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };
  //
  return (
    <div ref={ref} className="p-4 grid xl:grid-cols-2 bg-[#F5F5F7] my-3 rounded-xl">
      <ShinyText
        text={`${count}+`}
        className="text-[#082032] text-center text-4xl md:text-5xl font-extrabold"
      />
      <p className="text-center mt-2 uppercase tracking-wide text-[#082032] font-medium">
        {label}
      </p>
    </div>
  );
};
export default CounterItem;
