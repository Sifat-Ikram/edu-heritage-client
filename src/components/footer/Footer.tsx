"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-[#008080] text-white dark:text-white dark:bg-[#161929] w-full font-roboto pt-8 lg:pt-10 xl:pt-14 2xl:pt-[70px] pb-3 space-y-8 lg:space-y-14 xl:space-y-20"
    >
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-4 title-text">Edu Heritage</h3>
          <p className=" text-sm lg:text-lg xl:text-xl leading-relaxed max-md:max-w-2xl">
            Empowering future leaders through academic excellence and vibrant
            campus life. Visit us and be part of a legacy.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 flex flex-col items-center md:items-start">
          <h3 className="paragraph-text font-semibold mb-4">Contact Us</h3>
          <div className="gap-[6px] sm:gap-3 md:gap-4 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-[6px] text-[10px] sm:text-sm lg:text-lg xl:text-xl">
              <FaPhoneAlt className="text-white" />
              <span>+880-123-456789</span>
            </div>
            <div className="flex items-center gap-[6px] text-[10px] sm:text-sm lg:text-lg xl:text-xl">
              <FaEnvelope className="text-white" />
              <span>info@eduheritage.edu</span>
            </div>
            <div className="flex items-center gap-[6px] text-[10px] sm:text-sm lg:text-lg xl:text-xl">
              <FaMapMarkerAlt className="text-white" />
              <span>University Avenue, Sylhet, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div className="space-x-4 md:space-y-4 flex md:flex-col items-center max-md:justify-center">
          <h3 className="paragraph-text font-semibold">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" aria-label="Facebook">
              <FaFacebookF className="hover:text-gray-300 testimonial-position transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="hover:text-gray-300 testimonial-position transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn className="hover:text-gray-300 testimonial-position transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-[9] sm:text-xs lg:text-sm xl:text-lg mt-10 border-t border-white/40 pt-3">
        © {new Date().getFullYear()} Edu Heritage University. All rights
        reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
