import React from 'react'
import notesy from "../public/assets/notesy.png"
import Image from 'next/image'
import Link from 'next/link'

const ProjectItem = ({ title, desc, backgroundImg, projectUrl }) => {
  return (
    <div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-2 sm:p-4 group hover:bg-gradient-to-r from-blue-300 to-blue-400">
            <Image className="rounded-lg group-hover:opacity-5" src={backgroundImg} alt="" />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-base sm:text-2xl text-black tracking-wider text-center">{title}</h3>
                <p className="pb-2 pt-1 sm:pb-4 sm:pt-2 text-black text-center text-xs sm:text-xl">{desc}</p>
                <Link href={projectUrl}>
                    <p className="text-center py-2 px-1 sm:py-3 rounded-md bg-white text-gray-700 font-bold text-sm sm:text-lg cursor-pointer hover:bg-blue-900 hover:text-white">Live Demo</p>
                </Link>
            </div>
          </div>
    </div>
  )
}

export default ProjectItem