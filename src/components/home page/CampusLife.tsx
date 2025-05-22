"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { GalleryItem } from "@/types/homeGallery";

const images: GalleryItem[] = [
  {
    title: "Cultural Fest",
    imageUrl:
      "https://i.ibb.co/yFz7w57P/bc2c7ae8-195e-4238-a400-13f1b25e3341-sized-1000x1000.jpg",
    height: "tall",
  },
  {
    title: "Science Fair",
    imageUrl: "https://i.ibb.co/VWQyZT75/Science-Fair.jpg",
    height: "small",
  },
  {
    title: "Library",
    imageUrl: "https://i.ibb.co/LXG43X5z/Library.jpg",
    height: "small",
  },
  {
    title: "Sports Week",
    imageUrl: "https://i.ibb.co/1J0yDzVc/Sports-week.jpg",
    height: "small",
  },
  {
    title: "Dorm",
    imageUrl: "https://i.ibb.co/d00GTsgD/dorm.jpg",
    height: "medium",
  },
  {
    title: "Event",
    imageUrl: "https://i.ibb.co/yBVhjNWf/events.jpg",
    height: "tall",
  },
  {
    title: "Picnic",
    imageUrl: "https://i.ibb.co/NnshW7fn/Picnic.jpg",
    height: "small",
  },
];

const heightMap: Record<GalleryItem["height"], string> = {
  small: "h-40 md:h-48",
  medium: "h-60 md:h-72",
  tall: "h-96 md:h-[30rem]",
};

export default function CampusLife() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Prepare array for lightbox images in required format
  const slides = images.map((img) => ({
    src: img.imageUrl,
    alt: img.title,
  }));

  return (
    <section className="bg-white w-11/12 mx-auto dark:bg-[#161929] font-roboto">
      <div className="w-full space-y-6 sm:space-y-10 md:space-y-14 lg:space-y-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="title-text text-gray-800 dark:text-white">
            Photo Gallery
          </h2>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`Open image: ${img.title}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
              whileHover={{ scale: 1.05 }}
              className={`relative w-full overflow-hidden rounded-xl shadow-lg group transition-shadow duration-300 hover:shadow-2xl cursor-pointer ${
                heightMap[img.height]
              } before:content-[''] before:absolute before:inset-0 before:bg-black/10 before:backdrop-blur-sm before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300`}
            >
              <Image
                src={img.imageUrl}
                alt={img.title}
                fill
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index === 0} // prioritize first image for loading
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
        animation={{ fade: 300 }}
      />
    </section>
  );
}
