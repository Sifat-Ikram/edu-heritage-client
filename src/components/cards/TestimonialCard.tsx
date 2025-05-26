import { TestimonialCardProps } from "@/types/testimonial";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="relative bg-white dark:bg-white px-6 w-full mx-auto text-center">
      <div className="mb-3 sm:mb-6 lg:mb-8 xl:mb-10">
        {/* Quotation Icon */}
        <FaQuoteLeft className="text-3xl sm:text-4xl lg:text-5xl text-teal-600 dark:text-gray-800 mb-4 mx-auto opacity-70" />

        {/* Testimonial Quote */}
        <p className="text-gray-700 dark:text-gray-800 paragraph-text leading-relaxed italic">
          “{testimonial?.quote}”
        </p>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-1/4 bg-teal-500 dark:bg-black mx-auto mb-2 sm:mb-4 lg:mb-6 xl:mb-8" />

      {/* Name and Title */}
      <div className="text-center">
        <p className="paragraph-text font-semibold text-gray-900 dark:text-gray-800">
          {testimonial?.name}
        </p>
        <p className="testimonial-position text-gray-500 dark:text-gray-800 mt-1 mb-5 xl:mb-8 2xl:mb-8">
          {testimonial?.title}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
