"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Flask</li>
      </ul>
    ),
  },
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-2">
        <li>C</li>
        <li>Python</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>HTML/CSS</li>
        <li>SQL</li>
        <li>MIPS Assembly</li>
        <li>English and Cantonese :{")"}</li>
      </ul>
    ),
  },
  {
    title: "Dev Tools",
    id: "dev tools",
    content: (
      <ul className="list-disc pl-2">
        <li>Git</li>
        <li>Unity</li>
        <li>Agile</li>
        <li>Scrum</li>
        <li>Bash Scripting</li>
        <li>Figma</li>
        <li>MongoDB</li>
        <li>Firebase</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("frameworks");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-me.jpg" width={500} height={500}/>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a 4th year student at the University of Toronto Scarborough, studying Computer Science and 
            specializing in Software Engineering. I am also currently interning at RBC as an Automation Analyst until April 2025.
            Through both personal and academic work, I have experience in developing
            web applications, mobile applications, some video games and lots of small programs. A small tidbit about me aside from
            programming is that I really enjoy a nice cup of coffee. I&apos;m constantly searching
            for opportunities to learn and expand my skillset, and I hope to learn from you as well!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("frameworks")}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("dev tools")}
              active={tab === "dev tools"}
            >
              {" "}
              Dev Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
