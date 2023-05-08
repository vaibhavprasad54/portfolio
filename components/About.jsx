import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";
import javascript from "../public/assets/javascript.png";
import react from "../public/assets/react.png";
import nextjs from "../public/assets/nextjs.png";
import github from "../public/assets/github1.png";
import firebase from "../public/assets/firebase.png";
import mongo from "../public/assets/mongo.png";
import node from "../public/assets/node.png";
import tailwind from "../public/assets/tailwind.png";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-5 sm:py-16 sm:px-10"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-7 sm:p-2">
          <h2>About</h2>
          <p className="py-4 text-gray-600 text-sm sm:text-base">
            As a frontend developer having experience of 1+ year, skilled in
            Javascript, Reactjs, Nextjs, and Tailwind, I carry a deep passion
            for coding and an unwavering commitment to creating robust websites
            and web-apps. I approach each project with an eagerness to learn,
            grow, and refine my skills. I also have working knowledge on backend
            stack such as Node and Express and MongoDB. With a desire to create
            beautiful and fast user interfaces, I keep learning daily and work
            on new projects, because as we know, ultimately practice is the key.
            I am keen to dive deeper into how the universe works and the world
            around us in space. I also have a Youtube channel where I upload my
            music covers since last 12 years.
          </p>

          <div className="">
            <p className="font-semibold text-xl pb-5">Skills</p>
            <div className="flex items-center justify-center space-x-8 border overflow-x-auto border-gray-400 py-12 mb-7 rounded-md shadow-lg scrollbar scrollbar-thin scrollbar-thumb-slate-500">
              <Image
                src={javascript}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={react}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={nextjs}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={github}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={firebase}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={mongo}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={node}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
              <Image
                src={tailwind}
                className="cursor-pointer"
                width={50}
                height={50}
                alt=""
              />
            </div>
          </div>

          <Link href="../assets/Vaibhav-Resume-Frontend.pdf" locale={false}>
            <button
              className="p-3 text-base sm:text-lg px-4 flex items-center justify-center bg-blue-800 hover:bg-blue-900 rounded-[4px]">
              Resume
              <FaDownload className="ml-2" />
            </button>
          </Link>

        </div>
        <div className="p-2 px-7 sm:px-2">
          <img
            className="rounded-md hover:scale-105 ease-in duration-200 sm:w-[435px] sm:h-[435px]"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
