import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='flex items-center flex-col justify-center text-center w-full h-32 py-8 bg-gray-800'>
        <p className='text-sm sm:text-base text-white'>Made with NextJs, Tailwind and ❤️ by Vaibhav!</p>
        <p className='text-sm sm:text-base text-white'>© Vaibhav 2023 </p>

        <div className="flex items-center justify-center my-1 sm:my-0 space-x-4 w-full sm:items-end">
            <Link href="https://www.linkedin.com/in/vaibhav-prasad-495451166/">
              <div className="rounded-full bg-gray-100 p-2 sm:p-[8px] mt-2 cursor-pointer hover:text-blue-800 hover:scale-105 ease-in duration-200">
                  <FaLinkedinIn className="text-base" />
              </div>
            </Link>
            <Link href="https://twitter.com/webdev_07">
              <div className="rounded-full bg-gray-100 p-2 sm:p-[8px] mt-2 cursor-pointer hover:text-blue-500 hover:scale-105 ease-in duration-200">
                  <FaTwitter className="text-base" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/vaybhav77/">
              <div className="rounded-full bg-gray-100 p-2 mt-2 sm:p-[8px] cursor-pointer hover:text-pink-600 hover:scale-105 ease-in duration-200">
                  <AiOutlineInstagram className="text-base" />
              </div>
            </Link>
            <Link href="https://github.com/vaibhavprasad54">
              <div className="rounded-full bg-gray-100 p-2 sm:p-[8px] mt-2 cursor-pointer hover:text-black hover:scale-105 ease-in duration-200">
                  <FaGithub className="text-base" />
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Footer