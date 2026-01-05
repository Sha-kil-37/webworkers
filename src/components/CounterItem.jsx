import { useEffect, useRef, useState } from "react";
import Paragraph from "./Paragraph";

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
  //
  const animateCount = () => {
    let start = 0;
    const startTime = performance.now();
    //
    const update = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const value = Math.floor(eased * end);
      //
      setCount(value);
      //
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    //
    requestAnimationFrame(update);
  };
  //
  return (
    <div ref={ref}>
      <h3 className="text-[#0076DF] text-center xl:text-3xl xl:font-bold xl:tracking-wide font-primary lg:text-3xl lg:font-bold lg:tracking-wide md:tracking-wide md:text-3xl md:font-bold font-bold">
        {count}+
      </h3>
      <Paragraph className="text-center mt-2 uppercase xl:tracking-wide md:font-primary md:tracking-wide md:mt-2 font-medium font-primary lg:tracking-wide lg:mt-2 lg:font-medium md:font-medium">
        {label}
      </Paragraph>
    </div>
  );
};
export default CounterItem;
