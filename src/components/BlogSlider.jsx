import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef, useState } from "react";
//
export default function BlogSlider({ blogs }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [swiperRef, setSwiperRef] = useState(null);
  //
  const onAutoplayTimeLeft = (s, time, progress) => {
    // Prevent null error
    if (!progressCircle.current || !progressContent.current) return;

    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  //
  return (
    <section className="relative w-full py-15">
      <Swiper
        // pagination={{
        //   clickable: true,
        // }}
        onSwiper={setSwiperRef}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 4, spaceBetween: 0 },
        }}
        autoplay={{ delay: 3000 }}
        className="w-full"
      >
        {blogs.map((blog, i) => (
          // blog.image,blog.author,blog.category
          <SwiperSlide
            onMouseEnter={() => swiperRef?.autoplay?.stop()}
            onMouseLeave={() => swiperRef?.autoplay?.start()}
            key={i}
            className="cursor-pointer group"
          >
            <div className="relative h-full w-full overflow-hidden">
              {/* IMAGE */}
              <img
                className="h-full w-full object-cover"
                src={blog.image}
                alt={blog.image}
              />

              {/* OVERLAY + TEXT + BUTTON */}
              <div className=" absolute inset-0 bg-[#F5F7F8] opacity-0  group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content that slides up */}
              <div
                className="
        absolute bottom-0 left-0 w-full
        translate-y-full
        group-hover:translate-y-0
        transition-transform
        duration-500
        px-4 pb-4
        text-white
      "
              >
                <h3 className="text-lg font-semibold">{blog.title}</h3>

                <button className="mt-2 px-4 py-2 rounded-lg bg-white  text-blue-500 font-medium hover:bg-gray-200 transition">
                  View Project
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Progress Circle OUTSIDE swiper to avoid clipping */}
      <div className="absolute right-4 bottom-[1rem] z-20 h-7 w-7 flex justify-center items-center text-black">
        <svg
          className="absolute inset-0 w-full h-full stroke-[2px] fill-none 
          stroke-red-500 [stroke-dasharray:125.6]
          [stroke-dashoffset:calc(125.6px*(1-var(--progress)))]
          -rotate-90"
          viewBox="0 0 48 48"
          ref={progressCircle}
        >
          <circle cx="24" cy="24" r="20"></circle>
        </svg>

        <span
          ref={progressContent}
          className="text-sm font-semibold text-black"
        ></span>
      </div>
    </section>
  );
}
