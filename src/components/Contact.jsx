import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import copy from "copy-to-clipboard";
export default function Contact() {
  const [copyText, setCopyText] = useState('info@suvidhafoundationedutech.org ')
  const handleCopyText = (e) => {
    setCopyText(e.target.value)
  }
  const copyToClipboard = () =>{
    copy(copyText)
    alert('Mail ID copied to clipboard.')
  }

  return (
    <div className='bg-black w-full h-full flex justify-between px-2 py-2 md:px-16 lg:px-40 font-primary'>
            <div className='items-center text-white flex mx-2'>
            <IoIosCall className='text-white'/>
            <span>+91 7020044091 </span>
            <div className='bg-white h-full mx-2'></div>
            <button onClick={copyToClipboard}>
            <CiMail className='text-white'/>
            </button>
            <span className='hidden lg:block'> 
            info@suvidhafoundationedutech.org
            </span>
            </div>
            <div className='flex'>
            <div className='bg-white h-full w-1 mx-2'></div>
            <button
                onClick={() => window.open('https://www.linkedin.com/company/suvidha-foundation/', '_blank')}
                className="hover:bg-white hover:text-black"
            >
            <CiLinkedin className="text-white text-2xl" />
            </button>
            <button
                onClick={() => window.open('https://instagram.com/suvidha_mahila_mandal/?igshid=YmMyMTA2M2Y%3D', '_blank')}
                className="hover:bg-white hover:text-black"
            >
            <FaInstagram className="text-white text-2xl" />
            </button>
            </div>
        </div>
  )
}
