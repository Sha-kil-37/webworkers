import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";
//
export default function BlogSlider({ blogs }) {
  //
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  //
  return (
    <Swiper
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      autoplay={{
        delay: 3000,
        // disableOnInteraction: false,
      }}
      className="w-full mt-5"
    >
      {blogs.map((blog, i) => {
        //
        return (
          <SwiperSlide className="bg-green-500">
            <p className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est atque
              vel placeat mollitia voluptas quod neque, ipsa explicabo maxime
              inventore consequuntur quibusdam nisi quas, odio necessitatibus
              adipisci itaque animi? Deserunt velit culpa fuga dolorum delectus
              eum assumenda molestias esse facilis!
            </p>
          </SwiperSlide>
        );
      })}
      <div
        className="absolute right-2 bottom-0 z-10 h-10 w-10 flex justify-center items-center text-black"
        slot="container-end"
      >
        <svg
          className="absolute 
    left-0 
    top-0 
    z-10 
    w-full 
    h-full 
    stroke-[2px] 
    fill-none 
    stroke-[green]
    [stroke-dasharray:125.6]
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
  );
}
