/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { skillsIcons } from "@/data";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { Tabs } from "./ui/tabs";

type SkillItem = {
  id: number;
  name: string;
  image: string;
};

const DummyContent = ({ items }: { items: SkillItem[] }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-6 max-lg:flex-wrap w-full">
      <AnimatedTooltip items={items} />
    </div>
  );
};

const tabs = [
    {
      title: "Frontend",
      value: "frontend",
      content: (
        <div 
        style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
        className="flex flex-col lg:flex-row items-center justify-center gap-6 w-fit overflow-hidden relative h-fit rounded-2xl border border-white/[0.1] group/bento p-10 text-xl md:text-4xl font-bold text-white">
          <p>Front-End</p>
          <DummyContent items={skillsIcons.frontend.map((item: any) => ({
            ...item,
            image: item.img,
          }))}/>
        </div>
      ),
    },
    {
      title: "Backend",
      value: "backend",
      content: (
        <div 
        style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
        className="flex flex-col lg:flex-row items-center justify-center gap-6 w-fit overflow-hidden relative h-fit rounded-2xl border border-white/[0.1] group/bento p-10 text-xl md:text-4xl font-bold text-white">
          <p>Back-End</p>
          <DummyContent items={skillsIcons.backend.map((item: any) => ({
            ...item,
            image: item.img,
          }))}/>
        </div>
      ),
    },
    {
      title: "Tools",
      value: "tools",
      content: (
        <div 
        style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
        className="flex flex-col lg:flex-row items-center justify-center gap-6 w-fit overflow-hidden relative h-fit rounded-2xl border border-white/[0.1] group/bento p-10 text-xl md:text-4xl font-bold text-white">
          <p>Tools</p>
          <DummyContent items={skillsIcons.tools.map((item: any) => ({
            ...item,
            image: item.img,
          }))}/>
        </div>
      ),
    },
  ];

const Skills = () => {
  return (
    <section id="skills" className='flex flex-col items-center py-20'>
      <h1 className='heading relative'>
        My <span className='text-purple'>Skills</span>
      </h1>
      <div className="h-[20rem] md:h-[20rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center mt-10 mb-40">
        <Tabs tabs={tabs} />
      </div>
    </section>
  )
}

export default Skills

