"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { GalleryItem } from "@/types/homeGallery";
import culture from "../../assets/bc2c7ae8-195e-4238-a400-13f1b25e3341.sized-1000x1000.jpg";
import science from "../../assets/ScienceFair.jpg";
import library from "../../assets/Library.jpg";
import sport from "../../assets/Sports-week.jpg";
import dorm from "../../assets/dorm.jpg";
import picnic from "../../assets/Picnic.avif";
import event from "../../assets/events.jpg";

const images: GalleryItem[] = [
  { title: "Cultural Fest", imageUrl: culture, height: "tall" },
  { title: "Science Fair", imageUrl: science, height: "small" },
  { title: "Library", imageUrl: library, height: "small" },
  { title: "Sports Week", imageUrl: sport, height: "small" },
  { title: "Dorm", imageUrl: dorm, height: "medium" },
  { title: "Event", imageUrl: event, height: "tall" },
  { title: "Picnic", imageUrl: picnic, height: "small" },
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
    src: img.imageUrl.src || img.imageUrl, // for imported static images, use src
    alt: img.title,
  }));

  return (
    <section className="bg-white w-11/12 mx-auto dark:bg-[#161929]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-2xl lg:text-4xl font-bold text-gray-800 dark:text-white">
            Explore Campus Life
          </h2>
          <p className="mt-3 text-gray-600 dark:text-white max-w-xl mx-auto text-sm md:text-base">
            A colorful blend of academics, culture, and community captured
            through our students’ eyes.
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 mt-10 sm:mt-12 space-y-3 sm:space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative w-full overflow-hidden rounded-xl shadow-lg group transition-shadow duration-300 hover:shadow-2xl cursor-pointer ${
                heightMap[img.height]
              }`}
              // Open lightbox on click, set current index
              onClick={() => {
                setPhotoIndex(index);
                setOpen(true);
              }}
              // Parallax-like zoom on scroll (scale from 0.95 to 1.05 as user scrolls into view)
              whileHover={{ scale: 1.05 }}
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
        onIndexChange={setPhotoIndex}
        animation={{ fade: 300 }}
      />
    </section>
  );
}
