"use client";
import React, { useState, useRef } from "react";
import { ProjectCard, ProjectTag } from "./Imports";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HijabisAtWork",
    description: "Job search platform for people with Hijabis",
    image: "/portfolio/images/projects/hijabis.png",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://hijabisatwork.com/en",
  },
  {
    id: 2,
    title: "Craftails",
    description:
      "Craftails is a premium ready-to-serve cocktail and mocktail company based in Belgium",
    image: "/portfolio/images/projects/craftailsimg.jpg",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://www.craftails.be/",
  },
  {
    id: 3,
    title: "Hngry",
    description:
      "Craftails is a premium ready-to-serve cocktail and mocktail company based in Belgium",
    image: "/portfolio/images/projects/hngry.png",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://hngry.be/",
  },
  {
    id: 4,
    title: "PecheClinic",
    description: "Skin Care clinic in Belgium",
    image: "/portfolio/images/projects/skincare.webp",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://pecheclinic.com/",
  },
  {
    id: 5,
    title: "News Aggregator App",
    description:
      " News aggregator app that collects and displays news from various sources, similar to Google News, Digg or The Factual. University project for the course of Programming Project Databases.",
    image: "/portfolio/images/projects/image.webp",
    tag: ["Fullstack"],
    gitUrl: "https://github.com/Marcel-aka-Satum/ProgrammingProjectDatabases",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Compiler",
    description:
      "Compiler made in Python for C language. University Project for the course of Compilers.",
    image: "/portfolio/images/projects/other1.jpg",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/Compilers",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Chess Game",
    description: "Chess game made in C++ for course Programming at univeristy.",
    image: "/portfolio/images/projects/other2.png",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/ChessUniversityProject",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Meatboy Game",
    description:
      "Meatboy game made in C++ for course Advanced Programming at univeristy.",
    image: "/portfolio/images/projects/other3.webp",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/MeatboySFML",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Traffic simulation",
    description:
      "CLI Traffic simulation made in C++98 for course Software Engineering at univeristy.",
    image: "/portfolio/images/projects/other4.png",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/ProjectSoftwareEngineering",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Pattern-Searching",
    description:
      "Pattern-Searching using qt-gui made in C++ for course Talen Automaten at univeristy.",
    image: "/portfolio/images/projects/other5.jpg",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/Pattern-Searching",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("Fullstack");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-6 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Other"
          isSelected={tag === "Fullstack"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
