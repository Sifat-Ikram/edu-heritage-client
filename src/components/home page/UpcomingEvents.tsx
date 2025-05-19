"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { EventItem } from "@/types/homeEvents";
import HomeEvent from "../cards/homeEvent";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const events: EventItem[] = [
  {
    title: "Tech Fest 2025",
    description:
      "Explore innovative projects and workshops by students across departments.",
    date: "July 15, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
    imageUrl: "https://i.ibb.co/VWQyZT75/Science-Fair.jpg",
  },
  {
    title: "Cultural Night",
    description: "An evening of music, dance, and celebration of diversity.",
    date: "August 2, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Open Air Theater",
    imageUrl: "https://i.ibb.co/VWQyZT75/Science-Fair.jpg",
  },
  {
    title: "Career Fair 2025",
    description:
      "Meet top companies and explore internship and job opportunities.",
    date: "September 10, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Campus Convention Center",
    imageUrl: "https://i.ibb.co/VWQyZT75/Science-Fair.jpg",
  },
];

export default function UpcomingEvents() {
  const swiperRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoverSide, setHoverSide] = useState<"left" | "right" | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    setMousePos({ x, y });

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const half = rect.left + rect.width / 2;

    if (x < half) {
      setHoverSide(swiperRef.current?.isBeginning ? null : "left");
    } else {
      setHoverSide(swiperRef.current?.isEnd ? null : "right");
    }
  };

  const goNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const goPrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverSide(null)}
      onClick={() => {
        if (hoverSide === "right") goNext();
        else if (hoverSide === "left") goPrev();
      }}
      className={`relative bg-gray-50 py-16 px-4 md:px-12 lg:px-20 ${
        hoverSide ? "cursor-none" : "cursor-default"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
          Upcoming Events
        </h2>
        <p className="mt-3 text-center text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          Stay updated with what's happening on campus.
        </p>

        <div className="relative mt-12">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <HomeEvent event={event} index={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {hoverSide && (
        <div
          className="pointer-events-none fixed z-50 text-3xl text-[#008080]"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          {hoverSide === "right" ? <FaArrowRight /> : <FaArrowLeft />}
        </div>
      )}
    </section>
  );
}
