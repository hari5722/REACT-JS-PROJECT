import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import sofaSlide from "../images/hero-img.png";
import phone08 from "../images/phone-08.png";
import wireless01 from "../images/wireless-01.png";
import watchSlide from "../images/watch-07.png";

export default function Carousel() {
  const slides = [
    {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: sofaSlide,
    },
    {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: phone08,
    },
    {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: wireless01,
    },
    {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      cover: watchSlide,
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex items-center justify-between px-45 py-10 bg-gray-100">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-gray-600 mb-4">{slide.desc}</p>
              <button className="text-black-600 border  hover:text-grey-800">Visit Collections</button>
            </div>
            <img src={slide.cover} alt="Slide" className="w-[400px] h-120 "/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
