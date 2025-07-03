"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TabButton } from "./Imports";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (e) => {
    startTransition(() => {
      setTab(e);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/portfolio/images/animeStyleBackground.jfif"
          width={550}
          height={500}
          alt="About"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a software engineer with 5 years of hands-on programming
            experience, passionate about building interactive, user-friendly,
            and responsive web applications. I enjoy working across the full
            stack — from crafting clean, scalable backends to designing modern,
            intuitive frontends. I primarily code in PHP and JavaScript, and I
            love experimenting with new frameworks and tools that push my skills
            further. I like to play with AI, build scripts and bots, and
            automate stuff. Outside of work, I’m a big fan of sports and the
            outdoors — I play volleyball and basketball regularly, and I enjoy
            going on hikes to recharge. I’m also a gamer at heart and love
            spending time with story-rich or competitive video games when I’m
            not coding.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
