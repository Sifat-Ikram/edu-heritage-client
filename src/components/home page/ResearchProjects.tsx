"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AcademicProgram from "../cards/AcademicProgram";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

const programs = [
  {
    id: 1,
    title: "Artificial Intelligence Research",
    description:
      "Pushing the boundaries of machine learning, robotics, and cognitive systems.",
    image: "https://i.ibb.co/XkpnFsc6/Programming-in-Computer-Science.jpg",
    link: "/research/ai",
  },
  {
    id: 2,
    title: "Climate Change and Sustainability",
    description:
      "Investigating solutions for global warming, renewable energy, and sustainable living.",
    image: "https://i.ibb.co/pBtzCkv1/img1.png",
    link: "/research/climate",
  },
  {
    id: 3,
    title: "Biomedical Innovations",
    description:
      "Developing new technologies for diagnostics, treatment, and public health.",
    image:
      "https://i.ibb.co/6cSw9r3d/taylors-professional-studies-acca-fia-hero-banner-1920x1080.png",
    link: "/research/biomedical",
  },
  {
    id: 4,
    title: "Renewable Energy Systems",
    description:
      "Exploring solar, wind, and other renewable sources to power the future.",
    image: "https://i.ibb.co/3qkj8m4/banner-dep-1-1-9-1.png",
    link: "/research/energy",
  },
  {
    id: 5,
    title: "Public Health & Epidemiology",
    description:
      "Studying disease patterns and health interventions worldwide.",
    image: "https://i.ibb.co/d4t0Xmqn/bmb.jpg",
    link: "/research/public-health",
  },
  {
    id: 6,
    title: "Economic Development Studies",
    description:
      "Analyzing policies, markets, and development in emerging economies.",
    image: "https://i.ibb.co/rGdDZG43/buisness.jpg",
    link: "/research/economics",
  },
  {
    id: 7,
    title: "Cultural Heritage & Digital Humanities",
    description:
      "Preserving culture and history through modern technology and research.",
    image: "https://i.ibb.co/Q7DKTKDg/students-study-computer-graphs.jpg",
    link: "/research/humanities",
  },
  {
    id: 8,
    title: "Environmental Conservation",
    description:
      "Researching biodiversity, ecosystems, and conservation technologies.",
    image: "https://i.ibb.co/qYfNnbqQ/What-does-undergraduate-mean-02.webp",
    link: "/research/environment",
  },
  {
    id: 9,
    title: "Legal Studies and Human Rights",
    description:
      "Investigating justice systems, policy reforms, and international law.",
    image: "https://i.ibb.co/xqsfC3Yz/cq5dam-web-808-454.webp",
    link: "/research/law",
  },
  {
    id: 10,
    title: "Media, Technology & Society",
    description:
      "Studying digital communication, media ethics, and societal impacts.",
    image: "https://i.ibb.co/3919TZgJ/images.jpg",
    link: "/research/media",
  },
  {
    id: 11,
    title: "Education Systems & Innovation",
    description:
      "Exploring new teaching methods, policy reforms, and learning technologies.",
    image: "https://i.ibb.co/C55xbK2w/bmb-2.jpg",
    link: "/research/education",
  },
  {
    id: 12,
    title: "Neuroscience and Psychology",
    description:
      "Uncovering the complexities of brain function, behavior, and mental health.",
    image: "https://i.ibb.co/xSw61kw8/buiss-1-980.webp",
    link: "/research/psychology",
  },
];

export default function ResearchProjects() {
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Simulate fetching
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <section className="w-full max-sm:px-5 dark:bg-[#161929] font-roboto space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
      <div className="text-center dark:bg-[#161929]">
        <h2 className="title-text text-gray-800 dark:text-white">
          Innovation & Discovery
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-3 paragraph-text">
          Dive into transformative research shaping the future — driven by our
          brilliant minds and bold ideas.
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
              modules={[Navigation]}
              spaceBetween={10}
              slidesPerView={2}
              loop={false}
              breakpoints={{
                0: { slidesPerView: 2 }, // extra small
                640: { slidesPerView: 2 }, // mobile
                768: { slidesPerView: 3 }, // tablet
                1024: { slidesPerView: 4 }, // desktop
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
