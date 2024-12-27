import React from 'react';
import img1 from '../assets/Goals/1.jpg';
import img2 from '../assets/Goals/2.jpg';
import img3 from '../assets/Goals/3.jpg';
import img4 from '../assets/Goals/4.jpg';
import img5 from '../assets/Goals/5.jpg';
import img6 from '../assets/Goals/6.jpg';
import img7 from '../assets/Goals/7.jpg';
import img8 from '../assets/Goals/8.jpg';
import img9 from '../assets/Goals/9.jpg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Gallery() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,img9,
    "https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80",
  ];

  return (
    <div id= 'gallery' className="max-w-screen-2xl px-6 py-10 md:px-16 lg:px-40 bg-[#D9D9D9] items-center">
      <div className="items-center mb-5">
        <h1 className="text-5xl text-black">Our Work</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 bg-[#D9D9D9]">
        {images.map((src, index) => (
          <InViewImage key={index} src={src} alt={`gallery-photo-${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

function InViewImage({ src, alt }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="grid gap-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5, staggerChildrem: 0.25, } },
      }}
    >
      <img
        className="h-auto max-w-full rounded-lg object-cover object-center transform transition duration-300 hover:scale-105"
        src={src}
        alt={alt}
      />
    </motion.div>
  );
}
