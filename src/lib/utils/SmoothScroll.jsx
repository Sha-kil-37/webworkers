import { ReactLenis } from "lenis/react";
import {  useRef } from "react";
//
const SmoothScroll = ({ children }) => {
  //
  const lenisRef = useRef();
  // const lenis = useLenis((lenis) => {
  //   /* console.log("lenis in callback", lenis); */
  //   // console.log("lenis in callback", lenis.scroll.instance.scroll.y);
  //   // console.log("lenis in callback", lenis.scroll.instance.limit);
  //   // console.log("lenis in callback", lenis.scroll.instance.delta.y);
  //   // console.log("lenis in callback", lenis.scroll.instance.delta.x);
  // });
  //

  //
  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.05,
        //   infinite: true,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
