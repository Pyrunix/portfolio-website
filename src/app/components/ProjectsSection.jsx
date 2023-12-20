"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Act It Out",
    description: `Bringing the popular party game Charades online and accessible to everyone`,
    image: "/images/projects/actitout.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/UTSCC09/project-verycoolproject",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Passion Pals",
    description: "Connect with people around the world that share your interest and passions",
    image: "/images/projects/passionpals-image.gif",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CSCC012023/final-project-s23-passion-pals",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Power Platform",
    description: "A small platforming game made in MARS 4.5 MIPS Assembly",
    image: "/images/projects/powerplatform.gif",
    tag: ["All", "Game"],
    gitUrl: "https://github.com/Pyrunix/b58_assembly_game",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "2D Platformer",
    description: "Made with Unity, a platforming game that features simple combat and movement",
    image: "/images/projects/2dplatformer.gif",
    tag: ["All", "Game"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "System Monitoring Tool",
    description: "Using C and Linux, this customizable program displays system usage of resources",
    image: "/images/projects/sysmonitoring.gif",
    tag: ["All"],
    gitUrl: "https://github.com/Pyrunix/system-monitoring-tool",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
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
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === "Game"}
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

export default ProjectsSection;
