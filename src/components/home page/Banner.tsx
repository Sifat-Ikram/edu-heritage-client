'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import banner from "../../assets/banner.webp";

const Banner = () => {
    return (
        <section className="py-16 overflow-hidden">
            <div className="w-11/12 mx-auto flex font-roboto flex-col-reverse lg:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                    >
                        Empowering Minds, Shaping Futures
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-lg mb-8"
                    >
                        Join a legacy of excellence. Discover programs, research, and opportunities that will define your academic journey.
                    </motion.p>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        className="flex flex-wrap gap-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/apply">
                                <button className="bg-[#008080] text-white hover:bg-[#006666] text-xl buttons">
                                    Apply Now
                                </button>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href="/about">
                                <button className="buttons border border-[#008080] hover:bg-[#006666] text-[#008080] hover:text-white">
                                    Learn More
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full lg:w-1/2"
                >
                    <Image
                        src={banner}
                        alt="University Campus"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-xl w-full object-cover"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Banner;
