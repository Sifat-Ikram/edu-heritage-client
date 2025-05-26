"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const aidTypes = [
  {
    title: "Scholarships",
    description:
      "Awarded for academic excellence, leadership, or extracurricular achievements.",
    image: "https://i.ibb.co/XkpnFsc6/Programming-in-Computer-Science.jpg",
  },
  {
    title: "Grants",
    description:
      "Need-based aid provided without the requirement of repayment.",
    image: "https://i.ibb.co/pBtzCkv1/img1.png",
  },
  {
    title: "Work-Study",
    description:
      "Part-time campus jobs for students to support their education financially.",
    image:
      "https://i.ibb.co/6cSw9r3d/taylors-professional-studies-acca-fia-hero-banner-1920x1080.png",
  },
  {
    title: "Student Loans",
    description:
      "Loans with low interest and flexible repayment options for education.",
    image: "https://i.ibb.co/3qkj8m4/banner-dep-1-1-9-1.png",
  },
  {
    title: "Scholarships",
    description:
      "Awarded for academic excellence, leadership, or extracurricular achievements.",
    image: "https://i.ibb.co/XkpnFsc6/Programming-in-Computer-Science.jpg",
  },
  {
    title: "Grants",
    description:
      "Need-based aid provided without the requirement of repayment.",
    image: "https://i.ibb.co/pBtzCkv1/img1.png",
  },
];

export default function AidCarousel() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pb-20 bg-white dark:bg-[#161929]">
      <h2 className="title-text text-center font-bold text-gray-800 dark:text-white mb-10">
        Types of Financial Aid
      </h2>

      <div className="relative w-11/12 mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 1.2 },
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
            1280: { slidesPerView: 3 },
            1700: { slidesPerView: 3.5 },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="w-11/12 mx-auto"
        >
          {aidTypes.map((aid, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-[#212532] transition-transform duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600 h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={aid.image}
                    alt={aid.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-[#008080] dark:text-white mb-2">
                    {aid.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {aid.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous Button */}
        {activeIndex > 0 && (
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="p-[5px] sm:p-[10px] md:p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white text-[#008080] dark:text-[#161929] shadow-lg transition transform hover:scale-105"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-lg sm:text-xl md:text-lg lg:text-4xl" />
            </button>
          </div>
        )}

        {/* Next Button */}
        {swiperInstance &&
          activeIndex <
            swiperInstance.slides.length -
              (swiperInstance.params.slidesPerView as number) && (
            <div className="absolute inset-y-0 right-0 flex items-center z-10">
              <button
                onClick={() => swiperInstance?.slideNext()}
                className="p-[5px] sm:p-[10px] md:p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white text-[#008080] dark:text-[#161929] shadow-lg transition transform hover:scale-105"
                aria-label="Next"
              >
                <FaChevronRight className="text-lg sm:text-xl md:text-lg lg:text-4xl" />
              </button>
            </div>
          )}
      </div>
    </section>
  );
}
