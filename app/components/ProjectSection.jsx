"use client";
import React, { useState, useRef } from "react";
import { ProjectCard, ProjectTag } from "./Imports";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "HijabisAtWork",
    description:
      "​Hijabis at Work is a Belgian platform founded by diversity and inclusion strategist Hanan Challouki. It connects hijab-wearing women with inclusive employers, aiming to bridge the gap between these professionals and workplaces that embrace diversity.",
    image: "/portfolio/images/projects/hijabis.png",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://hijabisatwork.com/en",
  },
  {
    id: 2,
    title: "Craftails",
    description:
      "​Craftails is a Belgian company that specialises in premium ready-to-serve cocktails and mocktails, designed to help bars, restaurants, and event venues deliver high-quality drinks quickly and consistently. Founded by award-winning bartenders, Craftails offers a range of pre-mixed beverages that can be served in under 10 seconds—just add ice, pour, and garnish.",
    image: "/portfolio/images/projects/craftailsimg.jpg",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://www.craftails.be/",
  },
  {
    id: 3,
    title: "Hngry",
    description:
      "​HNGRY is a Belgian meal delivery service offering ready-made meal boxes prepared by professional chefs. Customers can select from a weekly menu of fresh, healthy dishes, which are delivered free of charge to homes across Flanders and Brussels every Saturday and Monday.",
    image: "/portfolio/images/projects/hngry.png",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://hngry.be/",
  },
  {
    id: 4,
    title: "PecheClinic",
    description:
      "​Pêche Skin Clinic is a modern aesthetic clinic located in Antwerp, Belgium, specialising in advanced skin rejuvenation, injectables, and laser treatments. Led by certified medical professionals, the clinic offers personalised care using state-of-the-art technology to deliver safe, natural-looking results.​",
    image: "/portfolio/images/projects/skincare.webp",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://pecheclinic.com/",
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
  {
    id: 11,
    title: "Qtem",
    description:
      "QTEM.org is the official website of the QTEM (Quantitative Techniques for Economics and Management) Masters Network, an international academic and corporate partnership that offers a specialised master's-level programme designed to develop future decision-makers with strong analytical and quantitative skills in economics and management",
    image: "/portfolio/images/projects/qtem.png",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://www.qtem.org/",
  },
  {
    id: 12,
    title: "Crowdcooks",
    image: "/portfolio/images/projects/crowdcooks.png",
    description:
      "​Crowd Cooks is a Belgian meal delivery service offering fresh, ready-to-eat meals made with local, seasonal ingredients. Each week, customers can choose from 12 new dishes, which are delivered in eco-friendly packaging and can be stored for up to 5 days in the fridge. The service is flexible, allowing users to pause or cancel at any time, and delivers to major cities across Belgium, including Antwerp, Brussels, and Ghent.",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://crowdcooks.be/en",
  },
  {
    id: 13,
    title: "Ilfaro",
    image: "/portfolio/images/projects/ilfaro.jpeg",
    description:
      "​Ilfaro is a Belgian organisation specialising in solution-focused coaching, training, and consultancy for individuals, teams, and organisations.",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://ilfaro.be/",
  },
  {
    id: 13,
    title: "Bokertov",
    image: "/portfolio/images/projects/bokertov.jpg",
    description:
      "Bokertov is a vibrant Tel Aviv-inspired deli, bar, and restaurant with locations in Antwerp (Markgrave and Zuid) and Ghent (Gravensteen). It offers a flavorful mix of Middle Eastern cuisine, ranging from all-day brunch to dinner, with a strong focus on fresh, colorful, and plant-based dishes.",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://bokertov.be/nl",
  },
  {
    id: 14,
    title: "MYwastudio",
    description:
      "Mywastudio is a dynamic company specializing in building innovative websites and web applications.",
    image: "/portfolio/images/projects/mywastudio.jpg",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://mywastudio.be/",
  },
  {
    id: 15,
    title: "Architects Antwerpen",
    description: "Architectural highlights and design inspirations in Antwerp.",
    image: "/portfolio/images/projects/architect.jpg",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://architectsantwerpen.mywastudio.be/",
  },
  {
    id: 16,
    title: "MAmodels",
    description:
      "Discover the elegance and talent of Antwerp's top models with MAmodels — a premier platform showcasing a curated selection of professional and aspiring models based in the fashion-forward city of Antwerp. From editorial shoots to runway talent, explore detailed profiles, portfolios, and booking opportunities all in one place.",
    image: "/portfolio/images/projects/models.jpg",
    tag: ["Fullstack"],
    gitUrl: "/",
    previewUrl: "https://modelsantwerpen.mywastudio.be/",
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
        Projects I have worked on
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
          isSelected={tag === "Other"}
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
