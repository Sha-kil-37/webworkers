import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";

export default function BlogSlider({ blogs }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div
      onMouseEnter={() => swiperRef?.autoplay?.stop()}
      onMouseLeave={() => swiperRef?.autoplay?.start()}
      className="w-full py-20 bg-green-200"
    >
      <Swiper
        onSwiper={setSwiperRef}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 4 },
          768: { slidesPerView: 3, spaceBetween: 4 },
          1024: { slidesPerView: 4, spaceBetween: 4 },
        }}
        autoplay={{
          delay: 3000,
        }}
        className="w-full mt-5"
      >
        {blogs.map((blog, i) => (
          <SwiperSlide key={i} className="p-4 bg-cyan-300">
            <p className="font-semibold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              vel placeat mollitia voluptas quod neque.
            </p>
          </SwiperSlide>
        ))}

        <div
          className="absolute right-2 bottom-[-20px] z-10 h-10 w-10 flex justify-center items-center text-black"
          slot="container-end"
        >
          <svg
            className="absolute left-0 top-0 z-10 w-full h-full stroke-[4px] fill-none 
            stroke-[white] [stroke-dasharray:125.6]
            [stroke-dashoffset:calc(125.6px*(1-var(--progress)))]
            -rotate-90"
            viewBox="0 0 48 48"
            ref={progressCircle}
          >
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
