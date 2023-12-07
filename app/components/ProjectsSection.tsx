import React from "react";
import ProjectCard from "./ProjectCard";
const projectsData = [
  {
    id: 1,
    title: "Project title 1",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
  },
  {
    id: 2,
    title: "Project title 2",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
  },
  {
    id: 3,
    title: "Project title 3",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
  },
  {
    id: 4,
    title: "Project title 4",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
  },
  {
    id: 5,
    title: "Project title 5",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
  },
  {
    id: 6,
    title: "Project title 6",
    description: "Project Description",
    image: "./projects/1.jpg",
    tag: ["All, Web"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
