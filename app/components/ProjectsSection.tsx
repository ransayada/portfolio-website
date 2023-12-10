"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

//TODO: add filter to project find out what is the problem
const projectsData = [
  {
    id: 1,
    title: "Project title 1",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://nextjs.org/docs",
  },
  {
    id: 2,
    title: "Project title 2",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://nextjs.org/docs",
  },
  {
    id: 3,
    title: "Project title 3",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://nextjs.org/docs",
  },
  {
    id: 4,
    title: "Project title 4",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://nextjs.org/docs",
  },
  {
    id: 5,
    title: "Project title 5",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://nextjs.org/docs",
  },
  {
    id: 6,
    title: "Project title 6",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
    gitUrl: "https://github.com/",
    previewUrl: "https://nextjs.org/docs",
  },
];

const projectTags = [
  {
    name: "All",
    color: "purple",
  },
  {
    name: "Web",
    color: "blue",
  },
  {
    name: "Next.js",
    color: "stone",
  },
  {
    name: "React",
    color: "cyan",
  },
  {
    name: "Angular",
    color: "rose",
  },
  {
    name: "Vue",
    color: "emerald",
  },
];

const ProjectsSection = () => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setActiveTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) => {
    project.tag.includes(activeTag);
  });
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {projectTags.map((tag, index) => (
          <ProjectTag
            key={index}
            onClick={handleTagChange}
            isSelected={activeTag === tag.name}
            name={tag.name}
            color={tag.color}
          />
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
