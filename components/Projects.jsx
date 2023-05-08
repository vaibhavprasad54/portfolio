import Image from "next/image";
import React from "react";
import Link from "next/link";
import notesy from "../public/assets/notesyNew.png"
import nextbuy from "../public/assets/nextBuyNew.png"
import bingeme from "../public/assets/bingeMeNew.png"
import payday from "../public/assets/paydayNew.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-7 sm:px-2 py-5 sm:py-16">
        <h2 className="py-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 py-2">
          
          <ProjectItem title='Notesy' desc='Full stack ( MERN )' backgroundImg={notesy} projectUrl="https://viridian-woodpecker-boot.cyclic.app/login" />
          <ProjectItem title='NextBuy' desc='NextJs, Tailwind, Firebase, Stripe' backgroundImg={nextbuy} projectUrl="https://next-buy.vercel.app/" />
          <ProjectItem title='BingeMe' desc='NextJs, TMDB API, Tailwind' backgroundImg={bingeme} projectUrl="https://binge-me.vercel.app/" />
          <ProjectItem title='Payday' desc='Next.js | Tailwind' backgroundImg={payday} projectUrl="https://payday-design.vercel.app/" />

        </div>
      </div>
    </div>
  );
};

export default Projects;
