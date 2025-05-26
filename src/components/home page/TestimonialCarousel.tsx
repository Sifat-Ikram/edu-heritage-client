"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "../cards/TestimonialCard";
import { useEffect, useState } from "react";

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
  const [loading, setLoading] = useState(true);

  // Simulate fetching
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // fake loading
  }, []);

  return (
    <section
      className="relative w-full h-[500px] sm:h-[460px] md:h-[550px] lg:h-[700px] xl:h-[720px] 2xl:h-[1200px] bg-cover bg-center bg-no-repeat font-roboto max-sm:px-5 bg-white dark:bg-[#161929]"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/xKGbwKDX/Image-4-Under-1-MB.jpg')",
      }}
    >
      <div className="absolute bottom-0 right-1/12 h-3/4 md:h-3/5 lg:h-1/2 xl:h-3/5 2xl:h-1/2 w-3/4 sm:w-1/2 bg-white rounded-t-2xl dark:bg-[#161929] space-y-6 sm:space-y-10 lg:space-y-14 2xl:space-y-20">
        <div className="px-6">
          <h1 className="title-text text-gray-900 text-center mt-5 xl:mt-8 2xl:mt-8">
            What's students say
          </h1>
        </div>
        <div className="">
          {loading ? (
            <div>
              <h1 className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text text-center">
                Testimonials are loading!
              </h1>
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <div className="relative">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={false}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className=" mx-auto"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <TestimonialCard testimonial={testimonial} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <div>
              <h1 className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text text-center">
                There is no Testimonials yet!
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

// font-semibold text-base sm:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl
