"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'

import SubmitBtn from './submit-btn'

export default function Contact() {
    const { ref } = useSectionInView('Contact');

  return (
    <motion.section id="contact" ref={ref} className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6 dark:text-white/80'>Please contact me directly at <a href="mailto:eniskalyon@gmail.com" className='underline'>eniskalyon@gmail.com</a>{" "} or through this form.</p>
        <form action={async (formData) => {
            await sendEmail(formData);

        }} className='mt-10 flex flex-col dark:text-black'>
            <input name="senderEmail" className='h-14 px-4 rounded-lg border borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none' type="email" required maxLength={500} placeholder='Your email'/>
            <textarea name="message" className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 transition-all dark:outline-none' required maxLength={5000} placeholder='Your message'/>
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
