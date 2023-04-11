import Image from "next/image";
import React from "react";
import Link from "next/link";
import notesy from "../public/assets/notesy2.png"
import nextbuy from "../public/assets/NextBuy.png"
import bingeme from "../public/assets/bingeme.png"
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-7 sm:px-2 py-16">
        <h2 className="py-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8 py-2">
          
          <ProjectItem title='Notesy' desc='Full stack ( MERN )' backgroundImg={notesy} projectUrl="/notesy" />
          <ProjectItem title='NextBuy' desc='NextJs, Tailwind, Firebase, Stripe' backgroundImg={nextbuy} projectUrl="/nextbuy" />
          <ProjectItem title='BingeMe' desc='NextJs, TMDB API, Tailwind' backgroundImg={bingeme} projectUrl="/nextbuy" />

        </div>
      </div>
    </div>
  );
};

export default Projects;
