import Image from "next/image";

const AdmissionsCall = () => {
  const ADMISSIONS_IMAGE_URL: string =
    "https://i.ibb.co/VcF0xmPn/happy-woman-travel-london-big-600nw-222159805.webp";

    
  return (
    <section className="bg-[#008080] dark:bg-[#161929] w-full pt-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-sm:px-5 sm:w-11/12 mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-white leading-tight mb-4">
            Begin Your Journey with Us
          </h2>
          <p className="text-sm sm:text-base text-white dark:text-gray-300 mb-6">
            Secure your future by applying to one of the leading universities.
            Join a vibrant academic community, world-class faculty, and exciting
            student life.
          </p>
          <button className="buttons border-2 border-white text-white dark:bg-transparent dark:!border-white dark:!text-white hover:!bg-white hover:!text-gray-800">Apply Now</button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={ADMISSIONS_IMAGE_URL}
            alt="Admissions"
            width={480}
            height={300}
            className="rounded-lg shadow-xl object-cover w-full max-w-xs sm:max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AdmissionsCall;
