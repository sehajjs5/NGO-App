import React from 'react'
import bg from '../assets/bg.jpg'
export default function Banner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
  {/* Background Image */}
  <div
    className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/bg.jpg')" }}
  ></div>

  {/* Content */}
  <div className="relative z-10 px-6 md:px-20 lg:px-40 text-white flex flex-col justify-center h-full font-primary text-left sm:text-left">
    <h1 className="text-5xl xl:text-8xl font-medium mb-6 xl:mb-10 md:text-6xl leading-tight">
      Making the world, a better place
    </h1>
    <p className="text-md xl:text-2xl font-medium mb-6 sm:mb-10 md:text-xl text-justify">
      Suvidha Mahila Mandal, established on September 8, 1995, is a non-profit organization working to impart education among the financially challenged sections to help them realize parity in education and strength of little minds in building a promising future. The organization has provisions of student internships, student mentorship, and the scope to volunteer. Through these programs, the organization aims to achieve the vision of imparting innovative education that stays with the students forever and equips them for the unforeseen future.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
      <button className="bg-white animate-bounce text-black rounded-full py-3 px-6 sm:py-4 sm:px-8 hover:bg-transparent hover:border hover:text-white border border-white transition duration-300">
        DONATE NOW
      </button>
      <button className="bg-transparent border border-white rounded-full text-white py-3 px-6 sm:py-4 sm:px-8 hover:bg-white hover:text-black transition duration-300">
        VIEW GALLERY
      </button>
    </div>
  </div>
</div>

  )
}

