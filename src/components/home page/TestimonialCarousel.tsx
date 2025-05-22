"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import TestimonialCard from "../cards/TestimonialCard";
import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "My experience at Edu Heritage has been transformative. The faculty is incredibly supportive and the campus life is vibrant and inclusive. I’ve grown both academically and personally.",
    name: "Mushfiq Rahman",
    title: "BSc in Computer Science, Class of 2024",
  },
  {
    quote:
      "Edu Heritage provided me with the tools and guidance to pursue my dreams. The curriculum is top-notch and the professors are always willing to go the extra mile.",
    name: "Nusrat Jahan",
    title: "BBA in Marketing, Class of 2023",
  },
  {
    quote:
      "The campus is buzzing with energy and opportunities. I’ve participated in research, clubs, and internships that have prepared me for real-world challenges.",
    name: "Tanvir Ahmed",
    title: "BSc in Electrical Engineering, Class of 2025",
  },
  {
    quote:
      "As an international student, I felt welcomed and supported from day one. Edu Heritage truly values diversity and inclusion.",
    name: "Fatima Khan",
    title: "BA in English Literature, Class of 2024",
  },
  {
    quote:
      "From the career center to student services, every aspect of this university is focused on student success. I’ve built friendships and skills that will last a lifetime.",
    name: "Shahriar Kabir",
    title: "BSc in Environmental Science, Class of 2023",
  },
  {
    quote:
      "Edu Heritage encourages innovation and creativity. The hands-on learning approach helped me understand complex concepts with ease.",
    name: "Rima Sultana",
    title: "BSc in Architecture, Class of 2026",
  },
];

const TestimonialCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Simulate fetching
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // fake loading
  }, []);

  return (
    <section className="w-full font-roboto max-sm:px-5 bg-white dark:bg-[#161929] space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
      <div className="text-center">
        <h2 className="title-text text-gray-800 dark:text-white">
          Student Testimonials
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text">
          Hear what our students say about their time at Edu Heritage
          University.
        </p>
      </div>

      <div className="w-11/12 sm:w-4/5 lg:w-3/4 xl:w-4/5 mx-auto">
        {loading ? (
          <div>
            <h1 className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text text-center">
              Testimonials are loading!
            </h1>
          </div>
        ) : testimonials && testimonials.length > 0 ? (
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              loop={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              onSwiper={(swiper) => setSwiperInstance(swiper)}
              className="w-4/5 mx-auto"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="h-auto">
                  <TestimonialCard testimonial={testimonial} />
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
        ) : (
          <div>
            <h1 className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text text-center">
              There is no Testimonials yet!
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialCarousel;
