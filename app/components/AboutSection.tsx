"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
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
        <div>
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
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
