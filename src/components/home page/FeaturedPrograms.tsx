"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Academics } from "@/types/academics";
import AcademicProgram from "../cards/AcademicProgram";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

interface FeaturedProgramsProps {
  programs: Academics[];
}

export default function FeaturedPrograms({ programs }: FeaturedProgramsProps) {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full max-sm:px-5 bg-white dark:bg-[#161929]">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#008080] dark:text-white">
          Academic Programs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          Explore top programs built for the leaders and innovators of tomorrow.
        </p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          loop={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 2 }, // extra small
            640: { slidesPerView: 3 }, // mobile
            768: { slidesPerView: 4 }, // tablet
            1024: { slidesPerView: 5 }, // desktop
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="w-11/12 mx-auto"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index} className="h-auto">
              <AcademicProgram program={program} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous Button */}
        {activeIndex > 0 && (
          <div className="absolute inset-y-0 left-0 flex items-center z-10">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="p-[5px] sm:p-[10px] md:p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white text-[#008080] shadow-lg transition transform hover:scale-105"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-lg sm:text-xl md:text-lg lg:text-xl" />
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
                className="p-[5px] sm:p-[10px] md:p-2 lg:p-3 rounded-full bg-white/80 hover:bg-white text-[#008080] shadow-lg transition transform hover:scale-105"
                aria-label="Next"
              >
                <FaChevronRight className="text-lg sm:text-xl md:text-lg lg:text-xl" />
              </button>
            </div>
          )}
      </div>
    </section>
  );
}
