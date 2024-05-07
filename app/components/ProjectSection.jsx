"use client";
import React, { useState, useRef } from "react";
import { ProjectCard, ProjectTag } from "./Imports";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Twitter Clone",
    description: "Popular social media platform clone",
    image: "/images/projects/twitter.png",
    tag: ["Fullstack"],
    gitUrl: "https://github.com/Marcel-aka-Satum/twitter-clone",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "News Aggregator App",
    description:
      " News aggregator app that collects and displays news from various sources, similar to Google News, Digg or The Factual. University project for the course of Programming Project Databases.",
    image: "/images/projects/image.webp",
    tag: ["Fullstack"],
    gitUrl: "https://github.com/Marcel-aka-Satum/ProgrammingProjectDatabases",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "The website u are looking at :)",
    image: "/images/projects/frontend1.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/Marcel-aka-Satum/portfolio",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Carhub",
    description: "Search up cars and get the latest news about them",
    image: "/images/projects/frontend2.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/Marcel-aka-Satum/CarHub",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "E-commerce Website",
    description: "E-commerce website for selling products online",
    image: "/images/projects/frontend3.png",
    tag: ["Frontend"],
    gitUrl: "https://github.com/Marcel-aka-Satum/E-commerce",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Compiler",
    description:
      "Compiler made in Python for C language. University Project for the course of Compilers.",
    image: "/images/projects/other1.jpg",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/Compilers",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Chess Game",
    description: "Chess game made in C++ for course Programming at univeristy.",
    image: "/images/projects/other2.png",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/ChessUniversityProject",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Meatboy Game",
    description:
      "Meatboy game made in C++ for course Advanced Programming at univeristy.",
    image: "/images/projects/other3.webp",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/MeatboySFML",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Traffic simulation",
    description:
      "CLI Traffic simulation made in C++98 for course Software Engineering at univeristy.",
    image: "/images/projects/other4.png",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/ProjectSoftwareEngineering",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Pattern-Searching",
    description:
      "Pattern-Searching using qt-gui made in C++ for course Talen Automaten at univeristy.",
    image: "/images/projects/other5.jpg",
    tag: ["Other"],
    gitUrl: "https://github.com/Marcel-aka-Satum/Pattern-Searching",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
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
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Fullstack"
          isSelected={tag === "Fullstack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
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
