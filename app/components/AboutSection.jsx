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
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="list-disc pl-2">
        <li>a1</li>
        <li>b2</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "Experience",
    content: (
      <ul className="list-disc pl-2">
        <li>exp1</li>
        <li>exp2</li>
        <li>exp3</li>
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
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
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
              selectTab={() => handleTabChange("Education")}
              active={tab === "Education"}
            >
              <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE]">
                Education
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
