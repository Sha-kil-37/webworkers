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
    <div ref={ref} className="mb-2">
      <h3 className="tracking-wide font-semibold font-primary text-center 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl text-[#0076DF]">
        {count}+
      </h3>
      <Paragraph className="text-center 2xl:font-semibold xl:font-semibold lg:font-semibold md:font-semibold sm:font-normal font-medium  font-primary">
        {label}
      </Paragraph>
    </div>
  );
};
export default CounterItem;
