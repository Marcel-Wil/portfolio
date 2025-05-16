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
            I am a software engineer with 5 years of programming experience,
            passionate about creating interactive and responsive web
            applications. (Though I prefer backend development - I&apos;m more
            of a data person). In my personal time, I enjoy playing volleyball
            and basketball, going on hikes, and playing video games.
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
          </div>
          <div className="mt-2">
            <div className="font-bold text-white flex flex-col space-y-2">
              <span className="text-xl text-purple-300">
                Programming Languages:
              </span>
              <div className="text-sm">PHP, Javascript, Python, C++</div>

              <div className="font-bold text-white flex flex-col space-y-2">
                <span className="text-xl text-purple-300">Frontend:</span>
                <div className="text-sm">
                  React, Next, TailwindCSS, CSS, HTML, SCSS, GSAP, Framer
                </div>
              </div>

              <div className="font-bold text-white flex flex-col space-y-2">
                <span className="text-xl text-purple-300">Backend:</span>
                <div className="text-sm">Laravel, Django, FastAPI, Flask</div>
              </div>

              <div className="font-bold text-white flex flex-col space-y-2">
                <span className="text-xl text-purple-300">Devops:</span>
                <div className="text-sm">Digitalocean, CI/CD, AWS, Docker</div>
              </div>

              <div className="font-bold text-white flex flex-col space-y-2">
                <span className="text-xl text-purple-300">CMS:</span>
                <div className="text-sm">WP, Statamic, Strapi, CraftCMS</div>
              </div>
              <div className="font-bold text-white flex flex-col space-y-2">
                <span className="text-xl text-purple-300">Databases:</span>
                <div className="text-sm">SQL, MYSQL, PostgreSQL, Redis</div>
              </div>
              <div className="font-bold text-white flex flex-col space-y-2">
                <span className="text-xl text-purple-300">Other:</span>
                <div className="text-sm">
                  Git, GitHub, JSON, XML, TDD/BDD, SCRUM, REST API,
                  GraphQL,NGINX, Authentication/Authorization, Networks, OWASP,
                  Web-security, Linux, Jira, Agile, Node.js, NPM, Composer, Bash
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
