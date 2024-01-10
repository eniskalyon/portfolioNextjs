import React from "react";
import { FaReact, FaCode } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import aacImg from "@/public/AAC.png"
import universityImg from "@/public/university.png";
import marketstreamImg from "@/public/marketstream.png";
import zanyaroImg from "@/public/zanyaro.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Web Developer",
    location: "Amber Accident Claims",
    description:
      "Developed the company's first modern website, using Next.js, Tailwind, React, and TypeScript. This initiative boosted the firm's online presence significantly, with the website appearing in the top 5 Google search results for relevant keywords. Implemented SEO strategies that resulted in a 60% increase in web traffic and a 40% increase in client inquiries within the first six months of launch.",
    icon: React.createElement(FaCode),
    date: "2023",
  },
  {
    title: "Master's Degree in IT Systems and Management",
    location: "Yassawi University, Turkey",
    description:
      "Currently enrolled in a program enhancing my understanding of full-stack development and broadening my knowledge in IT systems.",
    icon: React.createElement(FaReact),
    date: "2023-2025 (Expected)",
  },
  {
    title: "Associate's Program in Web Development",
    location: "Ankara, Turkey",
    description:
      "Began my formal education in web development, but relocated to the UK midway. This experience laid the foundation for my career in web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    title: "Bachelor's in Law",
    location: "Gazi University, Turkey",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2019"
  }
] as const;


export const projectsData = [
  {
    title: "Marketstream",
    description:
      "Marketstream is a full-fledged frontend development project. This project features advanced UI components, seamless data synchronization, and an intuitive layout, ensuring a top-tier user experience.",
    tags: ["React", "Next.js", "SyncFusion", "TypeScript", "Tailwind"],
    imageUrl: marketstreamImg,
    url: "https://marketstream.vercel.app/"
  },
  {
    title: "Amber Accident Claims",
    description: "Developed the modern website of the Amber Accident Claims, West Midlands's leading accident claims management company. This initiative boosted the firm's online presence by 70%, with the website appearing in the top 5 Google search results for relevant keywords.",
    tags: [],
    imageUrl: aacImg,
    url: "https://amber-sandy.vercel.app/"
  },
  {
    title: "Zanyaro",
    description:
      "Zanyaro is a public web application designed to streamline programming-related inquiries. It harnesses the power of OpenAI's APIs, providing users with AI responses. What sets Zanyaro apart is its hard-coded prompting, ensuring that queries remain focused on programming.",
    tags: ["React", "Next.js", "Vercel", "OpenAI API"],
    imageUrl: zanyaroImg,
    url: 'https://zanyaro.vercel.app/'
  },
  
  {
    title: "Fictional University",
    description:
      "Fictional University is a comprehensive full-stack CRUD application tailored for academic institutions. It integrates advanced functionalities like dynamic search capabilities, robust relational databases, and user-friendly interfaces.",
    tags: ["React", "WordPress", "PHP", "ACF", "Theme Development", "REST API", "MySQL"],
    imageUrl: universityImg,
    url: 'https://kalyon.tech',
  },
  

  
] as const;

export const skillsData = [
  "HTML5",
  "Javascript",
  "React",
  "Typescript",
  "Next.js",
  "Redux",
  "jQuery",
  "Git",
  "Node",
  "Express",
  "MySQL",
  "MongoDB",
  "PHP",
  "Python",
  "Supabase",
  "AppWrite",
  "WordPress Theme & Plugins",
  "CSS3",
  "Tailwind",
  "Bootstrap",
  "Sass",
  "Framer Motion",
  "Jest",
  "Cypress",
  "REST API",
  "GraphQL",
  "SEO",
  "Performance Optimization",
  "WCAG Guidelines",
  "Figma",
  "Adobe Photoshop",
  "Notion",
  "Multilingual: English, Kurdish, Turkish, Arabic",
] as const;