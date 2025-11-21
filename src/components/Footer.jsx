import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* left section of the footer  */}
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-40'/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, magni tempore? Expedita, et quas! Doloremque molestias hic obcaecati, repudiandae enim quis dolorem cumque ipsa aspernatur exercitationem, similique qui magni dolor.</p>
            </div>

            {/* center section of the footer  */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>

            {/* right section of the footer  */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+91-0000-0000-00</li>
                    <li>careQueue@gmail.com</li>
                </ul>

            </div>
        </div>
        {/* copyright text  */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
        Copyright 2025@ Prescripto - All Right Reserved

            </p>
        </div>
    </div>
  )
}

export default Footer