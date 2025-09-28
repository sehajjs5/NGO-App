import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar2() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='w-full bg-gray-800 text-white z-20 font-primary px-6 py-10 md:px-20 lg:px-40 shadow-lg'>
            <div className='flex justify-between items-center'>
                <Link to= '/'>
                <h1 className='text-white lg:text-xl text-sm'>WELFARE FOUNDATIONS</h1>
                </Link>
                <div className='lg:hidden flex items-center'>
                    <button onClick={toggleMenu} className='text-white'>
                        <GiHamburgerMenu />
                    </button>
                </div>
                <div className='hidden lg:flex items-center space-x-6'>
                    <Link to='/awards' className='hover:text-black'>Awards</Link>
                    <Link to='/internships' className='hover:text-black'>Mentorship</Link>
                    <Link to='/gallery' className='hover:text-black'>Gallery</Link>
                    <Link to='/donors' className='hover:text-black'>Donors</Link>
                    <button

                        className="hover:text-black"
                    >
                        Contact Us
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 text-white py-4 px-6 w-full mt-2 shadow-lg`}
            >
                <Link to = '/awards' className='block py-2 hover:text-black' onClick={toggleMenu}>
                    Awards
                </Link>
                <Link to='/internships' className='block py-2 hover:text-black' onClick={toggleMenu}>
                    Mentorship
                </Link>
                <Link to='/gallery' className='block py-2 hover:text-black' onClick={toggleMenu}>
                    Gallery
                </Link>
                <Link to='/donors' className='block py-2 hover:text-black' onClick={toggleMenu}>
                    Donors
                </Link>
                <button
                        
                        className="hover:text-black"
                    >
                        Contact Us
                    </button>
            </div>
        </div>
    );
}
