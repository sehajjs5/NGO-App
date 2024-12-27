import React, { useState } from 'react';
import i1 from '../assets/Awards/1.jpeg';
import i2 from '../assets/Awards/2.jpeg';
import i3 from '../assets/Awards/3.jpeg';
import i4 from '../assets/Awards/4.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [i1, i2, i3, i4];

export default function Awards() {
    const [selectedImage, setSelectedImage] = useState(null);
    const containerVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1, transition: { duration: 1
         } },
      };
    const ref = useRef(null);
    const isInView = useInView(ref, {once: false})
    return (
        <div id= 'awards' className="w-full h-full overflow-hidden relative py-10 bg-[#D9D9D9] max-w-screen-2xl px-6 py-10 md:px-16 lg:px-40 bg-[#D9D9D9] items-center">
            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
                        onClick={() => setSelectedImage(null)}
                    ></div>
                    <div
                        className="relative max-w-3xl w-full p-4 transform transition-transform duration-300 ease-in-out scale-100 hover:scale-105"
                    >
                        <img
                            src={selectedImage}
                            alt="fullscreen"
                            className="w-full h-auto object-contain rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}

            <div className="md:flex">
                {/* Left Section */}
                <div className="md:w-1/2">
                    <h1 className="md:text-5xl text-3xl mb-8 text-center">
                        AWARDS AND RECOGNITIONS
                    </h1>
                    <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        slidesPerView={1}
                        spaceBetween={30}
                        className="mySwiper"
                    >
                        {images.length > 0 &&
                            [...images, ...images].map((src, index) => (
                                <SwiperSlide key={index}>
                                    <div className="items-center justify-center p-10 font-primary flex flex-col">
                                        <div
                                            className="w-full max-w-[300px] md:max-w-[400px] aspect-[16/9] mb-5 items-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                                            onClick={() => setSelectedImage(src)}
                                        >
                                            <img
                                                src={src}
                                                alt={`carousel-${index}`}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 bg-black">
                {[
                        {
                            title: 'Global Sustainability Award 2024',
                            details: ['6th- 7th December, 2024', 'Indian Mountaineering Destination, New Delhi'],
                        },
                        {
                            title: 'Best Women Empowerment in Tech & Research Industry NPO 2024',
                            details: ['Non-Profit Organisations Award'],
                        },
                        {
                            title: 'Suvidha Foundation - Suvida Mahila Mandal: Manish Motghare',
                            details: ['Climate Action Award'],
                        },
                    ].map((award, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, { once: true });

                        return (
                            <motion.div
                                key={index}
                                className="bg-black text-white p-10 text-center"
                                ref={ref}
                                initial="hidden"
                                animate={isInView ? 'visible' : 'hidden'}
                                variants={containerVariants}
                            >
                                <h2 className="md:text-3xl text-2xl mb-8 text-center">
                                    {award.title}
                                </h2>
                                {award.details.map((detail, i) => (
                                    <p key={i}>{detail}</p>
                                ))}
                            </motion.div>
                        );
                    })}
                    </div>
            </div>
        </div>
    );
}
