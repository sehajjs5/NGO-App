import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import im1 from '../assets/Goals/1.jpg'
import im2 from '../assets/Goals/2.jpg'
import im3 from '../assets/Goals/3.jpg'
import im4 from '../assets/Goals/4.jpg'
import im5 from '../assets/Goals/5.jpg'
import im6 from '../assets/Goals/6.jpg'
import im7 from '../assets/Goals/7.jpg'

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import donation from '../assets/Donation.png';
import Footer from './Footer';
import Contact from '../components/Contact';
import Navbar3 from '../components/Navbar3'
const campaigns = [
    {
      name: "Clothes Distribution",
      details: "Supports providing clothes to those in need.",
      link: 'https://pages.razorpay.com/pl_PNqr3Fn1KJ5Nzk/view',
      amount: 'Rs. 2000/-',
      image: im1, 
    },
    {
      name: "Food Distribution",
      details: "Provides meals for underprivileged communities.",
      link: 'https://pages.razorpay.com/pl_PNV8LO3zFLvW8P/view',
      amount: 'Rs. 5000/-',
      image: im2,
    },
    {
      name: "Education",
      details: "Funds educational materials and resources.",
      link: 'https://pages.razorpay.com/pl_PNqt0egn0pTKRQ/view',
      amount: 'Rs. 10,000/-',
      image: im3,
    },
    {
      name: "Empower Her Future",
      details: "Supports women's empowerment initiatives.",
      link: 'https://pages.razorpay.com/pl_PNqt0egn0pTKRQ/view',
      amount: 'Rs. 15, 000/-',
      image: im4,
    },
    {
      name: "Health Care",
      details: "Provides medical aid and health check-ups.",
      link: 'https://pages.razorpay.com/pl_PNqvh8mf1ORde8/view',
      amount: 'Rs. 20, 000/-',
      image: im5,
    },
    {
      name: "Support a Smile",
      details: "Well-being programs (mental health support, recreation).",
      link: 'https://pages.razorpay.com/pl_PNztFxhixjKywz/view',
      amount: 'Any other amount',
      image: im6,
    },
  ];


export default function Help() {
  return (
    
    <div className='bg-[#D9D9D9] font-primary text-black max-w-screen-2xl '>
        <h1 className='md:text-5xl text-3xl text-center  mb-6 mt-5'> DONATE NOW </h1>
        <div className=' px-6 py-10 md:px-16 lg:px-40 mb-10'>
        
        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 '>
        {/* <p className='text-justify'>In a world where small acts of kindness can create significant ripples of change, Suvidha Forundations empower individuals to make a meaningful difference. This initiative offers an opportunity to contribute to impactful campaigns addressing critical societal needs, ranging from providing clothes to the underprivileged and distributing meals to combating hunger, to fostering education and empowering women for a brighter future. By donating to campaigns such as health care initiatives, mental health support, and community well-being programs, you become a catalyst for positive change. Together, we can build a more compassionate and equitable world, one contribution at a time. Let’s unite to support these causes and create lasting impact for those who need it the most. </p> */}
        {
            campaigns.length>0 && (
                campaigns.map((src, index)=>(
                    <div className='font-primary p-4 shadow-lg text-black rounded-lg' key={index}>
                        <h2 className='text-2xl font-semibold'>{src.name}</h2>
                        <h3 className='text-medium'>{src.details}</h3>
                        
                        <img src= {src.image} className='w-full h-auto max-w-[300px] rounded-md mx-auto mt-3 aspect-auto object-cover'/>
                        <button className='animate-pulse bg-transparent border border-black rounded-lg text-black py-1 px-4 m-3 hover:bg-black hover:text-white transition duration-300 font-bold w-full shadow-lg'>
                            <a href={src.link} target="_blank" rel="noopener noreferrer">
                         {src.amount}
                            </a>
                        </button>
                    </div>
                ))
            )
        }
        </div>
        <div className='justify-between mt-10 ml-10 flex'>
            <div>
            <img src= {donation} className='max-w-[200px] max-h-[400px] aspect-[16/9]'/>
            <h3 className='text-lg font-semibold mb-5'>Or scan the qr code</h3>
            </div>
            <div >
                <h3 className='text-3xl font-semibold mb-5'>Account Details</h3>
                <p className='text-lg mb-2'>Bank Of Baroda</p>

                <p className='text-lg mb-2'>City: Nagpur</p>

                <p className='text-lg mb-2'>Contact No: +91 8010996763</p>

                <p className='text-lg mb-2'>Account Name: Suvidha Mahila Mandal</p>

                <p className='text-lg mb-2'>Account No: 97840100027609</p>

                <p className='text-lg mb-2'>IFSC Code: BARB0DBKPAR</p>
            </div>
        </div>
        

    </div>
    </div>
  )
}
