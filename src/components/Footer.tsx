import React from 'react'
import Link from 'next/link';
import {  FaFacebook, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa6';



const Footer = () => {
  const date = new Date().getFullYear()


  return (
    <div className='bg-gray-800 text-white py-10'>
      <div className=' flex md:flex-row flex-col  justify-between mx-[30px] md:mx-[100px] gap-3'>

        <div className=' flex-1'>
          <h3 className='text-lg font-bold mb-4'>Next Imperial Tech</h3>
          <p className='text-sm'>
           Next Imperial, your Tech Hub
          </p>
        </div>
        {/* quick links */}
        <div className=' flex-1'>
          <h3 className='text-lg font-bold mb-4 '> Quick Links</h3>
          <ul className='text-sm'>

            <li className='mb-2'>
              <Link href="/" className='hover:underline'>
              Home
              </Link>
            </li>

            <li className='mb-2'>
              <Link href="/" className='hover:underline'>
              About
              </Link>
            </li>

            <li className='mb-2'>
              <Link href="/" className='hover:underline'>
              Services
              </Link>
            </li>

            <li className='mb-2'>
              <Link href="/" className='hover:underline'>
              Contact
              </Link>
            </li>

          </ul>
        </div>
        {/* contact section */}
        <div className=' flex-1'>
          <h3 className='text-lg font-bold mb-4 '> Contact Us </h3>
          <ul className='text-sm'>
            <li className='mb-2'>Email:@nextImperialLimited.com</li>
            <li className='mb-2'>Address: No 15 Esuola Street, Off Ago Palace Way, Okota, Lagos</li>
          </ul>
        </div>
        {/* social media section */}
        <div className='flex-1'>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <ul className='flex space-x-1 text-sm'>
            <li>
              <a href='https://www.facebook.com/share/1JQm1YDc4V/?mibextid=wwXIfr' target='_blank'>
              <FaFacebook  className='p-4 rounded-full text-blue-700 text-6xl' />
              </a>
            </li>
          
            <li>
              <a href='https://www.youtube.com/@nextimperial' target='_blank'>
              <FaYoutube  className='p-4 rounded-full text-blue-700 text-6xl' />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/nextimperial?igsh=cDh4Mjd3cWd1aTQx&utm_source=qr' target='_blank'>
              <FaInstagram  className='p-4 rounded-full text-blue-700 text-6xl'/>
              </a>
            </li>
            <li>
              <a href='https://wa.me/+2348166558072' target='_blank'>
              <FaWhatsapp  className='p-4 rounded-full text-blue-700 text-6xl' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className='text-center mt-10 text-sm border-t border-blue-700 pt-4'>
        <p>&copy; {date} Next Imperial Limited. All rights reserved.</p>
      </div>
      </div>
  );
};

export default Footer