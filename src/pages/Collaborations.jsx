import React from 'react';
import img1 from '../assets/Collaborations/img1.jpg'
import img2 from '../assets/Collaborations/img2.jpg'
import img3 from '../assets/Collaborations/img3.jpg'
const images = [img1, img2, img3,
];

export default function ContinuousCarousel() {
  return (
    <div id='collaborations' className="w-full h-full overflow-hidden relative py-10 bg-[#D9D9D9]">
        <div>
            <h1 className='md:text-5xl text-3xl mb-8 text-center'> COLLABORATIONS </h1>
        </div>
      <div className="flex max-w-[500px] md:max-w-[600px] aspect-[16/9] p-10 animate-scroll">
        {/* Duplicate images for seamless scrolling */}
        {[...images, ...images].map((src, index) => (
          <div key={index} className="flex-shrink-0 mx-2">
            <img
              src={src}
              alt={`carousel-${index}`}
              className="w-full h-full object-cover rounded-lg  p-10 bg-[#D9D9D9]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

