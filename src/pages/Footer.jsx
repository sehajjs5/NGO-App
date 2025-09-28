import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='bg-black max-w-screen-2xl px-6 py-10 md:px-16 lg:px-40 justify-between font-primary'>
        <div className='flex'>
        <div className='text-left mb-5 text-white'>
            <h3 className='lg:text-2xl text-red-500 lg:mb-3 mb-1 text-lg'>Welfare Foundation (Welfare Mahila Mandal)</h3>
            <p className='mb-1'> Office Headquarters - </p>
            <p className='text-red-500 mb-2 '> Nagpur Headquarter:</p>
<p className='mb-2'>Welfare Foundation, Motghare Bhavan, Ward No. 4, Santnagar, Annamod, Near Water Tank, Khaperkheda, Saoner, Nagpur, Maharashtra, India Pincode - 441102
</p>
<p className='text-red-500 mb-2'>Hyderabad Headquarter:</p>
<p>Vazhra Nirman Pushpak, C Block 701, 500090, Hyderabad</p>
        </div>
        <div className='md:flex-row flex flex-col'>
        <div className='text-left mb-5 text-white flex flex-col px-10'>
            <h3 className='lg:text-2xl text-red-500 lg:mb-3 text-lg mb-1'>Certificates</h3>
            <a href='https://suvidhafoundationedutech.org/Themes/doc/80G_APROVAL.pdf' className='hover:text-red-300 mb-2'>80 G Certificates</a>
            <a href='https://suvidhafoundationedutech.org/Themes/doc/12A_APPROVAL.pdf' className='hover:text-red-300 mb-2'>12 A Certificates</a>
            <a href='https://suvidhafoundationedutech.org/Themes/doc/CSR.PDF' className='hover:text-red-300 mb-2'>CSR Certificates</a>
            <a href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_darpan_portal_registration.pdf' className='hover:text-red-300 mb-2'>Welfare Darpan Registration</a>
            <a href='https://suvidhafoundationedutech.org/Themes/doc/suvidha_pan_card.pdf' className='hover:text-red-300 mb-2'>Welfare Pan Card</a>
        </div>
        <div className='text-left mb-5 text-white flex flex-col '>
            <h3 className='text-left lg:text-2xl text-red-500 lg:mb-3 mb-1 text-lg' >Useful Links</h3>
            <a href='https://suvidhafoundationedutech.org/verify.php' className=' text-left hover:text-red-300 mb-2'>Verify Your Cerificate</a>
            <a href='https://kidcoder.netlify.app/' className='text-left hover:text-red-300 mb-2'>Free Kids Coding Bootcamp</a>
            <Link to = '/privacy' className='text-left hover:text-red-300 mb-2'>Privacy Policy</Link>
            </div>
            </div>
            </div>
            <div className='bg-red-200 rounded-md px-6 py-0.5 mb-3'> </div>
            <div className='text-left text-white justify-between flex'>
                <p className='text-white'>© Welfare Foundation (Welfare Mahila Mandal), All Right Reserved.</p>
                <p className='text-white'>By <Link to='/' className='hover:text-red-300'>Welfare Foundations</Link></p>
            </div>
            
    </div>
  )
}
