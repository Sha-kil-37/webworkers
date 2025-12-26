import React, { useRef, useEffect } from "react";

const reviews = [
  { name: "John", role: "Founder", review: "Amazing quality and fast delivery." },
  { name: "Sarah", role: "Marketer", review: "Very professional service." },
  { name: "Mike", role: "Product Owner", review: "Highly recommend this team." },
];

const Test = () => {
  const trackRef = useRef(null);
  let offset = 0;

  useEffect(() => {
    let rafId;
// 
    const animate = () => {
      offset -= 0.4; // speed control
      if (Math.abs(offset) >= trackRef.current.scrollWidth / 2) {
        offset = 0;
      }
      trackRef.current.style.transform = `translateX(${offset}px)`;
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div className="overflow-hidden py-10">
      <div ref={trackRef} className="flex w-max">
        {[...reviews, ...reviews].map((item, index) => (
          <div
            key={index}
            className="mx-4 w-[300px] rounded-xl border bg-white p-5 shadow"
          >
            <p className="text-sm text-gray-600">“{item.review}”</p>
            <h4 className="mt-3 font-semibold">{item.name}</h4>
            <span className="text-xs text-gray-500">{item.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;

