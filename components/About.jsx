import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16 sm:px-10">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 p-7 sm:p-2">
          <h2>About</h2>
          <p className="py-4 text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            harum non natus molestiae dicta odit, necessitatibus neque eveniet
            assumenda quasi deserunt? Soluta harum nam commodi distinctio
            officia corporis ea repellat quos error corrupti provident rerum,
            totam dolor qui esse inventore mollitia recusandae similique? Cumque
            quo autem distinctio eligendi quos provident praesentium? Soluta
            rerum quam accusantium ut non reprehenderit culpa, ea dolorum quasi
            consequatur, molestias, sapiente laborum labore asperiores omnis
            reiciendis. Vitae quibusdam saepe inventore vel illo sapiente
            nesciunt quia numquam tempora ullam!
          </p>

          <div className="">
            <p className="font-semibold text-xl pb-5">Skills</p>
            <div className="flex items-center justify-center space-x-8 border overflow-x-auto border-gray-400 py-12 mb-7 rounded-md shadow-lg">
              <Image src="/../public/assets/skills/javascript.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/react.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/node.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/mongo.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/firebase.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/nextjs.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/tailwind.png" className="cursor-pointer" width={50} height={50} alt="" />
              <Image src="/../public/assets/skills/github1.png" className="cursor-pointer" width={50} height={50} alt="" />
            </div>
          </div>

          <a href="/../public/assets/mojo.pdf" download>
          <button className="p-3 text-base sm:text-lg px-4 flex items-center justify-center bg-blue-800 hover:bg-blue-900 rounded-[4px]"> 
             Resume
             <FaDownload className="ml-2" />
          </button>
          </a>
        </div>
        <div className="p-2 px-7 sm:px-2">
          <img className="rounded-md hover:scale-105 ease-in duration-200 sm:w-[435px] sm:h-[435px]"
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
