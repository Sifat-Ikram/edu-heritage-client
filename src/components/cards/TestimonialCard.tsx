import { TestimonialCardProps } from "@/types/testimonial";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="relative bg-white dark:bg-white shadow-xl rounded-sm px-6 py-10 sm:px-10 sm:py-12 w-full mx-auto text-center">
      <div className="mb-5 sm:mb-9 md:mb-9 lg:mb-11 xl:mb-14">
        {/* Quotation Icon */}
        <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-5xl text-teal-600 dark:text-gray-800 mb-4 mx-auto opacity-70" />

        {/* Testimonial Quote */}
        <p className="text-gray-700 dark:text-gray-800 paragraph-text leading-relaxed italic">
          “{testimonial?.quote}”
        </p>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-1/4 bg-teal-500 dark:bg-black mx-auto mb-4 sm:mb-6 md:mb-7 lg:mb-8 xl:mb-10" />

      {/* Name and Title */}
      <div className="text-center">
        <p className="paragraph-text font-semibold text-gray-900 dark:text-gray-800">
          {testimonial?.name}
        </p>
        <p className="testimonial-position text-gray-500 dark:text-gray-800 mt-1">
          {testimonial?.title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
