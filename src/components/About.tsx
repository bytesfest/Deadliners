import React from 'react'
import { motion } from 'framer-motion'

import AboutImage1 from '../assets/about.png'
import AboutImage2 from '../assets/about2.png'
import AboutImage3 from '../assets/about3.png'

import { BsArrowRightShort } from 'react-icons/bs'

const TextAnimate = {
  offscreen: {
    y: 200,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1
    }
  }
}
const ButtonAnimate = {
  offscreen: {
    x: -200,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1
    }
  }
}
const ImageAnimate = {
  offscreen: {
    x: "24px",
    y: "24px",
  },
  onscreen: {
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: .5,
      delay: .5
    }
  }
}

const About = () => {
  return (
    <motion.div id='about' className=' w-full min-h-screen base-background bg-gradient-to-br pt-36 pb-20'
      initial="offscreen"
      whileInView="onscreen"
      transition={{
        staggerChildren: .2,
      }}
      viewport={{
        once: true,
        amount: .3
      }}
    >
      <div className=' layout flex flex-col gap-y-20 md:flex-row-reverse md:gap-16 overflow-hidden sm:overflow-visible'>
        <div className='flex flex-col justify-center items-start relative w-fit mx-auto'>
          <motion.div className=' w-[250px] aspect-[3/4] overflow-hidden relative z-10 shadow-2xl neu-flat'
            variants={ImageAnimate}
          ><img className=' w-full' src={AboutImage1.src} /></motion.div>
          <motion.div className=' w-[250px] aspect-[3/4] overflow-hidden absolute z-[8] top-20 -right-36 neu-convex hidden sm:block'
            variants={ImageAnimate}
          ><img className=' w-full' src={AboutImage2.src} /></motion.div>
          <motion.div className=' w-[150px] aspect-[3/4] overflow-hidden absolute z-[9] -top-12 -right-32 neu-flat hidden sm:block'
            variants={ImageAnimate}
          ><img className=' w-full' src={AboutImage3.src} /></motion.div>

          <div className=' w-[350px] aspect-square absolute border-primary border-[8px] top-6 -right-32'></div>
        </div>

        <div className='flex flex-col gap-12 text-center md:w-[60%] md:text-left md:gap-16 justify-center items-start mt-16'>
          <motion.div variants={TextAnimate} className=' font-sendFlower text-5xl mx-auto md:mx-0'>Find your true beauty</motion.div>
          <motion.div variants={TextAnimate} className=' text-sm text-shade'><span className=' text-white'>MiSides</span> is a community-based fashion platform that focuses on minimalism and elegance. supported by many parties and brands, we are ready to provide the most suitable fashion consulting service for those of you who are looking for dress satisfaction and also business consultation for the latest fashion trends</motion.div>
          <motion.div variants={ButtonAnimate} className=' flex flex-col gap-6 justify-center items-center md:flex-row mx-auto md:mx-0 md:justify-start'>
            <div className=' py-1 px-8 bg-primary text-black w-fit font-medium flex items-center gap-2 cursor-pointer hover:bg-primaryHover transition-all duration-300 ease-out'>Learn more <BsArrowRightShort className=' text-2xl' /></div>
            <div className=' py-1 px-8 border-primary border-2 w-fit font-medium flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-black transition-all duration-300 ease-out'>Contact us <BsArrowRightShort className=' text-2xl' /></div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About