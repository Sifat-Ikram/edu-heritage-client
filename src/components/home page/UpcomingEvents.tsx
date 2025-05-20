"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { EventItem } from "@/types/homeEvents";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HomeEvent from "../cards/HomeEvent";

const events: EventItem[] = [
  {
    title: "Tech Fest 2025",
    description:
      "Explore innovative projects, hands-on tech demos, and interactive workshops led by students from various departments. A day full of creativity and learning awaits!",
    date: "July 15, 2025",
    time: "10:00 AM - 5:00 PM",
    location: "Main Auditorium",
    imageUrl: "https://i.ibb.co/B0x11vk/Tech-Fest-24-Crowds-39-scaled.jpg",
    slug: "/link",
  },
  {
    title: "Cultural Night",
    description:
      "Celebrate the rich cultural diversity of our campus with music, dance performances, fashion shows, and traditional cuisines from around the world.",
    date: "August 2, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Open Air Theater",
    imageUrl: "https://i.ibb.co/N2rg1YRv/SDK-0514-1024x683.jpg",
    slug: "/link",
  },
  {
    title: "Career Fair 2025",
    description:
      "Network with representatives from top companies and explore exciting job and internship opportunities. Get your resume reviewed and attend career workshops too!",
    date: "September 10, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Campus Convention Center",
    imageUrl: "https://i.ibb.co/pB7JH9jb/1.webp",

    slug: "/link",
  },
  {
    title: "Research Symposium",
    description:
      "Dive into the world of research with student and faculty presentations. Discover innovative ideas, cutting-edge studies, and exciting collaborations.",
    date: "October 5, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Science Building Atrium",
    imageUrl: "https://i.ibb.co/YF00tR62/Research-Sym-2020.jpg",
    slug: "/link",
  },
  {
    title: "Hackathon 2025",
    description:
      "Join a 24-hour coding sprint to build solutions, win prizes, and collaborate with fellow tech lovers. Mentors and sponsors will be available throughout the event.",
    date: "November 18–19, 2025",
    time: "Starts at 9:00 AM",
    location: "Tech Lab Hall",
    imageUrl: "https://i.ibb.co/ynnF9Q0S/1730707533.jpg",
    slug: "/link",
  },
  {
    title: "Alumni Meetup",
    description:
      "Reconnect with former classmates, listen to inspiring alumni stories, and expand your professional network in a relaxed, fun atmosphere.",
    date: "December 3, 2025",
    time: "4:00 PM - 8:00 PM",
    location: "University Club House",
    imageUrl:
      "https://i.ibb.co/cK7tm7FZ/SRMIST-Kolkata-Alumni-Chapter-Meetup-2025-scaled.jpg",
    slug: "/link",
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

    // Prevent arrow icon if hovering Learn More
    const target = e.target as HTMLElement;
    if (target.closest("a")) {
      setHoverSide(null);
      return;
    }

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="relative dark:bg-[#161929] w-11/12 mx-auto">
      <div className="w-full space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
        <div className="flex flex-col">
          <h2 className="title-text text-center text-gray-800 dark:text-white">
            Upcoming Events
          </h2>
          <p className="mt-3 text-center text-gray-600 dark:text-white mx-auto paragraph-text">
            Stay updated with what's happening on campus.
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoverSide(null)}
          onClick={() => {
            if (hoverSide === "right") goNext();
            else if (hoverSide === "left") goPrev();
          }}
          className={`${
            hoverSide ? "cursor-none" : "cursor-default"
          } relative`}
        >
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
          className="pointer-events-none fixed z-50 text-3xl text-white dark:text-[#161929] h-10 w-10 rounded-full bg-[#008080] dark:bg-white p-1 "
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
