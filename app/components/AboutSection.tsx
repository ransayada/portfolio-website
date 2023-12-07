"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

//TODO: Why Experience dose not work ? change back to start with the skills .
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js (JS and TS)</li>
        <li>Express and Nest.js</li>
        <li>MongoDB and PostgreSQL</li>
        <li>React, Angular and Vue</li>
        <li>HTML5, CSS3, SASS, Styled Components and Tailwind</li>
        <li>AWS, Docker, K8S with Microservices</li>
        <li>ElasticSearch, Grafana, Postman, Swagger and more.</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>2021-2022 Coding Academy - Full stack course.</li>
        <li>2019-2021 Ben Gurion University - Computer Science degree.</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>2022-2023 Bittax - Tax solutions for crypto consumers.</li>
        <li>2019-2021 Elementor - Wordpress websites building platform.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          className="rounded"
          width={500}
          height={500}
          alt=""
          src="/view-3d-personal-computer-with-workstation-office-items.jpg"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Im a Fullstack web developer with passion for creating interactive
            and responsive wev applications. I have experience working with{" "}
            <span className="underline decoration-purple-500">Javascript</span>{" "}
            (and{" "}
            <span className="underline decoration-purple-500">Typescript</span>
            ).{" "}
            <span className="underline decoration-cyan-400">
              React, Redux, Node.js, Nest.js, Next.js and Express
            </span>
            .{" "}
            <span className="underline decoration-emerald-400">
              MongoDB, PostgreSQL, HTML, GIT, CSS3, SASS, Tailwind
            </span>
            . Beyond the front-end and back-end intricacies, I navigate cloud
            ecosystems like{" "}
            <span className="underline decoration-orange-400">AWS</span>,
            orchestrate with{" "}
            <span className="underline decoration-sky-400">Docker and K8s</span>
            , and delve into data analysis tools such as{" "}
            <span className="underline decoration-pink-400">
              Elasticsearch and Grafana
            </span>
            . Im a quick learner and im always looking to expand my knowledge
            and skill set. Im a team player and Im excited to work with others
            to create amazing SaaS applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
