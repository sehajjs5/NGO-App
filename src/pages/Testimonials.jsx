import React, { useState, useEffect, useRef } from 'react'
import test1 from '../assets/Goals/10.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

export default function Testimonials() {

    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Set up IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is in view
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger re-render when the section is in the viewport
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);
    const test = [
        {
            image: test1,
            name: 'Hargun Sachdeva',
            verdict: 'This is what I have to say about Suvidha foundations. They are the best and mae it even better for me to participate in. This is what I have to say about Suvidha foundatiion.s they are the best and mae it even better for me to participate in . This is.', 
        },
        {
            image: test1,
            name: 'Hargun Sachdeva',
            verdict: 'This is what I have to say about Suvidha foundations. They are the best and mae it even better for me to participate in. This is what I have to say about Suvidha foundatiion.s they are the best and mae it even better for me to participate in . This is.', 
        },
        {
            image: test1,
            name: 'Hargun Sachdeva',
            verdict: 'This is what I have to say about Suvidha foundations. They are the best and mae it even better for me to participate in. This is what I have to say about Suvidha foundatiion.s they are the best and mae it even better for me to participate in . This is.', 
        },
        {
            image: test1,
            name: 'Hargun Sachdeva',
            verdict: 'This is what I have to say about Suvidha foundations. They are the best and mae it even better for me to participate in. This is what I have to say about Suvidha foundatiion.s they are the best and mae it even better for me to participate in . This is.', 
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeInOut',
          },
        },
      };

  return (
    <div className='max-w-screen-2xl px-6 py-10 md:px-16 lg:px-40 bg-[#D9D9D9] items-center'>
        <div>
            <h1 className='md:text-5xl text-3xl mb-8 text-center'> Don't take our word, take theirs. </h1>
        </div>

        <div ref = {sectionRef}>
        { isVisible && (
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
    <Swiper navigation={true} modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                className="mySwiper" >
                
        {   
            
            test.length>0 && test.map((item, index) => {
                return(
                <SwiperSlide key={index}>
                    <motion.div 
                    initial="hidden"
                    animate= "visible"
                    variants={ containerVariants}
                    className='bg-[#D9D9D9] items-center justify-center p-10 rounded-3xl font-primary flex flex-col'>
                        <div className='w-full max-w-[300px] md:max-w-[400px] aspect-[16/9] rounded-3xl mb-5 items-center'>
                        <img src = {item.image} className='rounded-lg'/>
                        </div>
                        <h4 className='text-2xl text-red-500 mb-5'>{item.name}</h4>
                        <span className='text-lg text-black text-center'>{item.verdict}</span>
                    </motion.div>
                </SwiperSlide>
            )})
        }
        </Swiper>
        </motion.div>
        )}
        </div>
        </div>
  )
}
