import { useEffect, useRef, useState } from "react";

export default function CopyRight() {
  //
  //
  const [progress, setProgress] = useState(0);
  const copyRightRef = useRef(null);
  //
  //  observe the footer for show the progress bar
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(100); // Move progress bar to 100% when footer is in view
        } else {
          setProgress(0); // Reset when footer is not in view
        }
      },
      { threshold: 0.5 } // Adjust this to trigger at different visibility levels
    );

    if (copyRightRef.current) {
      observer.observe(copyRightRef.current);
    }

    return () => {
      if (copyRightRef.current) {
        observer.unobserve(copyRightRef.current);
      }
    };
  }, []);
  //
  return (
    <div ref={copyRightRef} className="relative py-5">
      <div className="relative top-0 left-0 w-full h-[3px] z-40">
        <div
          className="h-full bg-white transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p>All Right </p>
        <p> Web Workers</p>
      </div>
    </div>
  );
}
