import React from 'react'
import { motion } from 'framer-motion'


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
const TextLAnimate = {
  offscreen: {
    x: -600,
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
const TextRAnimate = {
  offscreen: {
    x: 200,
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


const LearnMore = () => {
  return (
    <motion.div className=' w-full min-h-screen base-background bg-gradient-to-tr relative neu-flat'
      initial="offscreen"
      whileInView="onscreen"
      transition={{
        staggerChildren: .2,
      }}
      viewport={{
        once: true
      }}
    >
      <div className=' absolute w-full h-full learn__background md:w-[50%] overflow-hidden'>
        <motion.div variants={TextLAnimate} className=' text-white font-black text-8xl sm:text-9xl mix-blend-overlay opacity-30'>DEFINE <br /> YOUR <br /> STYLE</motion.div>
      </div>

      <div className=' layout relative z-[1] pt-20 w-full md:right-0'>
        <div className=' w-full h-full flex flex-col gap-44 text-center md:text-right'>
          <motion.div variants={TextAnimate} className=' font-sendFlower text-5xl '>Find Your Confident</motion.div>
          <div className=' flex flex-col gap-8 justify-end items-end'>
            <motion.div variants={TextAnimate} className=' text-slate-200 mx-auto md:mx-0'>Freestyle with minimalist outfit.</motion.div>
            <motion.div variants={TextAnimate} className=' text-shade text-sm md:max-w-[40%]'>A wide selection of clothes and accessories with a minimalist style that can be explored further to determine the style that best fits your style. Always look confident with an elegant and stylish design </motion.div>
          </div>
        </div>
      </div>

      <motion.div variants={TextRAnimate} className=' relative z-[2] w-fit ml-auto mt-24 text-white font-semibold text-lg pr-12 pb-2 pl-2 explore__button [&:hover:after]:h-full cursor-pointer transition-all duration-300 ease-in-out'>Start explore now</motion.div>
    </motion.div>
  )
}

export default LearnMore