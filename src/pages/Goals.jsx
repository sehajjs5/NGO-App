import React,{useState, useEffect, useRef} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import food from '../assets/Goals/Food.jpg'
import tree from '../assets/Goals/Tree.jpg'
import { motion } from 'framer-motion';
export default function Goals() {
    const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

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
      { threshold: 0.3 } // Trigger when 50% of the element is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up the observer
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

    const item =[
        {
            'id': 1,
            'heading': 'OUR SUSTAINABLE GOALS',
            'title': 'Healthy Food',
            'text': 'By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.',
            'image': food,
        },
        {
            'id': 2,
            'heading': 'OUR SUSTAINABLE GOALS',
            'title': 'Tree Plantation',
            'text': 'Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.' ,
            'image': tree,

        },
        {
            'id': 3,
            'heading': 'OUR SUSTAINABLE GOALS',
            'title': 'Social Awareness',
            'text': 'We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.', 
            'image': tree,

        },
        {
            'id': 4,
            'heading': 'OUR SUSTAINABLE GOALS',
            'title': 'Health Care',
            'text': 'We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.',
            'image': tree,
        },
        {
            'id': 5,
            'heading': 'OUR SUSTAINABLE GOALS',
            'title': 'Primary Education',
            'text': 'By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.',
            'image': tree,
        },
        {
            'id': 6,
            'heading': 'OUR SUSTAINABLE GOALS',
            'title': 'Social Care',
            'text': 'Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals', 
            'image': tree,
        },
    ]
  return (
    <div id= 'goalss'className='font-primary max-w-screen-2xl items-center justify-between bg-[#8685ef] top-0 text-black max-w-screen-2xl px-6 py-10 md:px-16 lg:px-40 bg-[#D9D9D9] items-center'>
        <div className='bg-[#D9D9D9]'>
            <div ref= {sectionRef}>
                {
                    isVisible && (
                        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
    <Swiper navigation={true} modules={[Pagination, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 1,
                    spaceBetween: 50,
                  },
                  1180:{
                    slidesPerView: 1,
                    spaceBetween: 50,
                  }
                }}
                className="mySwiper" >

                {
                    item.length>0 && item.map((i) => {
                        return(
                        <SwiperSlide key={i.id}>
                            <motion.div className='lg:flex lg:h-full items-center bg-[#D9D9D9]'>
                                <div className='lg:w-1/2 lg:h-full'>
                                    <img src={i.image} className='w-full h-full object-cover'/>
                                </div>
                                <div className=' px-6 py-10 md:px-16 lg:px-40 lg:w-1/2 bg-[#D9D9D9]'>
                                    <p className='md:text-lg mb-5 text-sm'>{i.heading}</p>
                                    <h2 className='md:text-5xl mb-7 text-2xl'>{i.title}</h2>
                                    <span className='text-2xl text-extralight text-lg text-justify'>{i.text}</span>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    )})
                }
                </Swiper>
                </motion.div>
                    )}
                </div>
                </div>
    </div>
  )
}
