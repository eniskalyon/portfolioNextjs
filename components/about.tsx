"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

  const { ref } = useSectionInView('About');

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
        delay: 0.175,
    }}
    id='about'
    >
    <SectionHeading>About Me</SectionHeading>
    <p className='mb-3'>
    I am a law graduate who found his true calling in programming. My educational journey took an exciting turn when I embarked on a{" "}
    <span className="font-medium rounded-lg bg-amber-200 dark:bg-amber-400 px-1 relative">Web Developer Associate&apos;s Degree</span> in Ankara. Although I had to relocate to the UK and leave the program midway, my passion for{" "}
    <span className="font-medium">web development</span> did not wane. Over the last three years, I have been engaged in diverse web development projects in both Turkey and the UK,{" "}
    <span className="italic">continuously expanding my expertise</span>.
</p>

<p>
    Recently, I have taken a significant step in my career by enrolling in a{" "}
    <span className="font-medium rounded-lg bg-amber-200 dark:bg-amber-400 px-1 relative">Master&apos;s Degree Program in IT Systems and Management</span>. This program is enriching my understanding of{" "}
    <span className="font-medium">full-stack development</span> and broadening my knowledge of IT systems. It&apos;s an academic pursuit that aligns perfectly with my passion.
</p>

<p>
    My current tech stack includes{" "}
    <span className="font-medium">JavaScript, React, React Native, and Supabase</span>, and I occasionally work with{" "}
    <span className="font-medium">WordPress and PHP</span>. This blend of technologies enables me to build robust and efficient web applications.
</p>

<p>
    <span className="italic">Outside of coding</span>, I have a penchant for exploring new languages, sampling various cuisines, and immersing myself in books that open new perspectives and{" "}
    <span className="underline">challenge conventional thinking</span>. Each of these hobbies contributes to my broad worldview and creativity in problem-solving.
</p>

      </motion.section>
  )
}
