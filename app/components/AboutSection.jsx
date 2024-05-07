"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TabButton } from "./Imports";

const TAB_CONTENT = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>Python</li>
        <li>C++</li>
        <li>HTML/CSS</li>
        <li>REACT/NEXT</li>
        <li>SQL/POSTGRESQL</li>
        <li>git/github</li>
        <li>OOP</li>
        <li>XML</li>
        <li>TDD/BDD</li>
        <li>SCRUM/Agile</li>
        <li>REST API</li>
        <li>GRAPHQL</li>
        <li>Data Structures and Algorithms</li>
        <li>docker</li>
        <li>kubernetes</li>
        <li>cloud</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>4 years of Python && C++ experience (school and own projects)</li>
        <li>3 years of JS experience (school and own projects)</li>
      </ul>
    ),
  },
];

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
          src="/images/animeStyleBackground.jfif"
          width={550}
          height={500}
          alt="About"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a software engineer with 4 years of programming experience and
            I have a passion for creating interactive and responsive web
            applications. I'm currently looking for intresting projects to work
            on to expand my knowledge and skills.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                Skills
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "Experience"}
            >
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                Experience
              </span>
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_CONTENT.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
