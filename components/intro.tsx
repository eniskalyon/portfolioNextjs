"use client";


import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsGithub, BsLinkedin, BsMedium } from'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]' id='home'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{opacity: 0, scale: 0}}
                animate={{opacity: 1, scale: 1}}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                >
                  <Image alt='Enis portrait' src="/avatar.jpg" width='192' height='192' quality='95' priority={true}
                  className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                  />
                </motion.div>
            </div>
        </div>
        <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I&apos;m Enis:</span> a{" "}
        <span className="font-bold rounded-lg bg-amber-200 dark:bg-amber-400 px-1 relative">web developer</span> with{" "}
        <span className="rounded-lg font-bold bg-amber-200 dark:bg-amber-400 px-1 relative">3 years</span> of experience. I enjoy
        building <span className="italic">websites & apps</span>. My focus is Javascript{" "}
        <span className=" rounded-lg font-medium bg-amber-200 dark:bg-amber-400 px-1 relative">(React, </span>
        <span className=" rounded-lg font-medium bg-amber-200 dark:bg-amber-400 px-1 relative">TypeScript</span> {" and "}
        <span className=" rounded-lg font-medium bg-amber-200 dark:bg-amber-400 px-1 relative">Next.js)</span>. <br />
        <span className=''>I also have proven experience in <span className='rounded-lg font-medium bg-amber-200 dark:bg-amber-400 px-1 relative'>PHP (Laravel, WordPress and MySQL)</span></span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      >
        <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center 
        rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
        onClick={() => {
          setActiveSection('Contact');
          setTimeOfLastClick(Date.now());
        }}
        >
          Contact me here <BsArrowRight className="group-hover:translate-x-2 transition opacity-70" />
        </Link>

        <a href="/Enis-Kalyon-CV.pdf" download className='group bg-white px-7 py-3 flex items-center 
        rounded-full gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'>Download CV <HiDownload className='group-hover:translate-y-1 opacity-60 transition' /></a>

        <a href="https://github.com/eniskalyon" target="_blank" className='bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-gray-200'><BsGithub /> GitHub</a>

        <a href="https://www.linkedin.com/in/eniskalyon/" target="_blank" className='bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 hover:text-gray-950 focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-gray-200'><BsLinkedin />LinkedIn</a>
        {/* <a href="" className='bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem]'><BsMedium />Medium</a> */}

      </motion.div>

    </section>
  )
}
