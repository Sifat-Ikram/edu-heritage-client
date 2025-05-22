"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import AcademicProgram from "../cards/AcademicProgram";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const programs = [
  {
    id: 1,
    title: "Undergraduate Programs",
    description:
      "Build foundational skills and explore your passions across various fields.",
    image: "https://i.ibb.co/XkpnFsc6/Programming-in-Computer-Science.jpg",
    link: "/programs/undergraduate",
  },
  {
    id: 2,
    title: "Graduate Programs",
    description:
      "Advance your career and research potential with specialized degrees.",
    image: "https://i.ibb.co/pBtzCkv1/img1.png",
    link: "/programs/graduate",
  },
  {
    id: 3,
    title: "Professional Studies",
    description:
      "Enhance practical knowledge with executive and industry-aligned programs.",
    image:
      "https://i.ibb.co/6cSw9r3d/taylors-professional-studies-acca-fia-hero-banner-1920x1080.png",
    link: "/programs/professional",
  },
  {
    id: 4,
    title: "Engineering & Technology",
    description:
      "Explore applied sciences and real-world problem solving in tech.",
    image: "https://i.ibb.co/3qkj8m4/banner-dep-1-1-9-1.png",
    link: "/programs/engineering",
  },
  {
    id: 5,
    title: "Health Sciences",
    description: "Study to innovate and improve health outcomes worldwide.",
    image: "https://i.ibb.co/d4t0Xmqn/bmb.jpg",
    link: "/programs/health",
  },
  {
    id: 6,
    title: "Business & Economics",
    description: "Master economics, finance, and global business strategies.",
    image: "https://i.ibb.co/rGdDZG43/buisness.jpg",
    link: "/programs/business-economics",
  },
  {
    id: 7,
    title: "Arts & Humanities",
    description:
      "Engage with culture, history, and creative expression across time and place.",
    image: "https://i.ibb.co/Q7DKTKDg/students-study-computer-graphs.jpg",
    link: "/programs/arts-humanities",
  },
  {
    id: 8,
    title: "Environmental Studies",
    description:
      "Explore sustainability and environmental challenges facing the modern world.",
    image: "https://i.ibb.co/qYfNnbqQ/What-does-undergraduate-mean-02.webp",
    link: "/programs/environmental-studies",
  },
  {
    id: 9,
    title: "Law & Policy",
    description:
      "Gain a deep understanding of legal systems and policy-making processes.",
    image: "https://i.ibb.co/xqsfC3Yz/cq5dam-web-808-454.webp",
    link: "/programs/law-policy",
  },
  {
    id: 10,
    title: "Media & Communication",
    description:
      "Learn to shape stories and communicate effectively in the digital age.",
    image: "https://i.ibb.co/3919TZgJ/images.jpg",
    link: "/programs/media-communication",
  },
  {
    id: 11,
    title: "Education",
    description:
      "Prepare to lead in classrooms and educational innovation environments.",
    image: "https://i.ibb.co/C55xbK2w/bmb-2.jpg",
    link: "/programs/education",
  },
  {
    id: 12,
    title: "Psychology",
    description:
      "Understand human behavior and mental processes with scientific insight.",
    image: "https://i.ibb.co/xSw61kw8/buiss-1-980.webp",
    link: "/programs/psychology",
  },
];

export default function FeaturedPrograms() {
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
          Academic Programs
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text">
          Explore top programs built for the leaders and innovators of tomorrow.
        </p>
      </div>

      <div>
        {loading ? (
          <div>
            <h1 className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text text-center">
              Programmes are loading!
            </h1>
          </div>
        ) : programs && programs.length > 0 ? (
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
              There is no programmes yet!
            </h1>
          </div>
        )}
      </div>
    </section>
  );
}
