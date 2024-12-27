import {React, useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import img1 from '../assets/Goals/10.jpg'
const text = [
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },
    {
        image: img1, 
        name: 'Anushmita Paul',
        q1: 'Yes, it did. I learnt a lot through this intenship. Not only about hiring people/ candidates but also how to maintain decorum and work in a team setting. ',
        q2: 'Really grateful to Suvidha Foundations for hiring me for this HR internship. I learnt a lot, everything was systematic and expectations were met. '
    },


]
export default function Internships() {



  return (
    <div id= 'internships' className='max-w-screen-2xl px-6 py-10 md:px-16 lg:px-40 items-center bg-black'>
        <div>
            <h1 className='md:text-5xl text-3xl mb-8 text-center text-[#D9D9D9]'> INTERNSHIP OPPORTUNITIES </h1>
        </div>
        <div className='bg-[#D9D9D9] text-black px-6 py-10 md:px-16 lg:px-40 items-center rounded-2xl lg:text-xl mb-2'>
            <div className='mb-5'>
            <p className='mb-2'>The Suvidha Foundation's Student Intenship Mentorship Program offers valuable real-world experience and personalized guidance to empower students  in their professional journey. This initiative bridges the gap between academic learning and industry demands, fostering career readiness and personal growth. </p>
            <p className='font-bold mb-2'>Available domains</p>
            <ul className='list-disc mb-2'>
                <li> HR </li>
                <li> Social Media Marketing </li>
                <li> Web Development </li>
                <li> Graphic Development </li>
                <li> Machine Learning </li>
            </ul>
            <p className='mb-5'> and many more. These internships are subject to availability. </p>
        <div className='w-full h-full items-center'>
        <button className='w-full animate-pulse bg-transparent border border-black rounded-full text-black py-3 px-6 sm:py-4 sm:px-8 hover:bg-black hover:text-white transition duration-300'> <a href='https://forms.gle/pD89BmSfZhioPFK99'>Apply Now </a></button>
        </div>
        </div>
        
        <div className='bg-[#D9D9D9] rounded-lg'>
        
        <h1 className='md:text-5xl text-3xl mb-8 text-center'> Hear from our past employees </h1>
        <div className='mb-5'>
        <Swiper
        direction={'vertical'}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        className="mySwiper"
        style={{
            height: '500px', // Set a fixed height for the scrollable box
         // Add padding for better spacing
        }}
      >
            {
                text.length>0 && text.map((src, index)=>(
                    <SwiperSlide key={index} 
                    style={{
                        minHeight: '150px', // Explicit minimum height for each slide
                        height: 'auto', // Adjust to content height
                        alignItems: 'flex-start', // Ensure content aligns to the top
                    }}
                    className={`flex p-4 rounded-lg mb-4 bg-black items-center justify-between`}
                    >
                        <div className='md:flex'>
                            <div className='md:w-1/3'>
                    <img src= {src.image} className='rounded-lg w-full max-w-[300px] md:max-w-[400px] aspect-[16/9]'/>
                    </div>
                    <div className='md:w-2/3 md:pl-4 '>
                        <p className='font-bold text-lg mb-2'>{src.name}</p>
                    <p className='mb-1 font-semibold'> Did this internship meet your expectations? How?</p>
                    <p className='mb-3'>{src.q1}</p>
                    <p className='mb-1 font-semibold'>Feedback of your internship at Suvidha Foundations.</p>
                    <p>{src.q2} </p>
                    </div>
                    </div>
                    </SwiperSlide>
                ))
            }
          
      </Swiper>
      </div>
      <div className='w-full h-full items-center'>
        <button className='w-full animate-pulse bg-transparent border border-black rounded-full text-black py-3 px-6 sm:py-4 sm:px-8 hover:bg-black hover:text-[#D9D9D9] transition duration-300'> <a href='https://forms.gle/pD89BmSfZhioPFK99'>Apply Now </a></button>
        </div>
      </div>
      </div>
        </div>
  )
}
