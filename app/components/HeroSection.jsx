"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Marceli",
                1000,
                "Software Developer",
                1000,
                "Fullstack Developer",
                1000,
                "Backend Developer",
                1000,
                "Software Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Welcome to my programming portfolio.
          </p>
          <div>
            <a href="mailto:wilczynskimarceli@gmail.com">
              <button className="px-6 py-3 rounded-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white">
                Contact me
              </button>
            </a>
          </div>
        </div>

        <div className="col-span-5 rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/portfolio/images/Marcel-Anime.png"
            alt="Hero image"
            width={315}
            height={400}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
