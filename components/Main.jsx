import Image from "next/image";
import React from "react";
import memoji from "../public/assets/memoji.png";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center z-10">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 pt-20 sm:pt-16 md:pt-20 flex justify-center items-center">
        <div className="flex flex-col items-center justify-center pt-14 sm:pt-16">
          <Image
            className="w-28 sm:w-36 py-5 drop-shadow-2xl"
            src={memoji}
            width={150}
            height={50}
            alt=""
          />
          <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-600">
            {" "}
            You've come to the right place{" "}
          </p>
          <h1 className="py-2 text-4xl sm:text-5xl text-gray-700">
            Hey, I'm <span className="text-blue-800"> Vaibhav </span>
          </h1>
          <h1 className="py-2 sm:py-4 text-3xl sm:text-5xl text-gray-700">A Front-end Web Developer</h1>
          <p className="py-2 text-gray-600 text-sm sm:text-base max-w-[80%] sm:max-w-[70%] m-auto"> 
            I have been working on JavaScript, ReactJS, NextJS, and Tailwind CSS and have built
            responsive, user-friendly and robust web applications. I am passionate about
            creating efficient and optimized code that delivers seamless user
            experiences. Let's work together to bring your project to life using
            cutting-edge technologies and industry best practices.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 space-x-2 sm:space-x-5">
            <Link href="https://www.linkedin.com/in/vaibhav-prasad-495451166/">
            <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-blue-800 ease-in duration-200">
                <FaLinkedinIn />
            </div>
            </Link>
            <Link href="https://twitter.com/webdev_07">
            <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-blue-500 ease-in duration-200">
                <FaTwitter />
            </div>
            </Link>
            <Link href="https://www.instagram.com/vaybhav77/">
            <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-pink-600 ease-in duration-200">
                <FaInstagram />
            </div>
            </Link>
            <Link href="https://github.com/vaibhavprasad54">
            <div className="rounded-lg shadow-lg shadow-gray-400 p-3 mt-2 cursor-pointer hover:scale-125 hover:text-black ease-in duration-200">
                <FaGithub />
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
