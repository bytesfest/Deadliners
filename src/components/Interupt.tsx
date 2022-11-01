import React from 'react'
import { motion } from 'framer-motion'
import Minim from '../assets/MINIMALIST.png'

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

const BackAnimate = {
  offscreen: {
    y: -200,
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


const Interupt = () => {
  return (
    <motion.div className=' w-full min-h-screen pt-20 overflow-hidden neu-convex'
      initial="offscreen"
      whileInView="onscreen"
      transition={{
        staggerChildren: .2,
      }}
      viewport={{
        once: true
      }}
    >
      <div className='layout flex flex-col gap-24 justify-center items-center'>
        <div className=' relative'>
          <motion.div className=' text-9xl mix-blend-overlay opacity-80 w-full'
            variants={BackAnimate}
          ><img className=' h-[100px] sm:h-[150px] md:h-[170px] lg:h-[200px] w-[90%] lg:w-[90%] mx-auto' src={Minim.src} /></motion.div>
          <motion.div className=' absolute text-5xl top-0 left-0 w-full h-full font-sendFlower flex justify-center items-center sm:text-7xl lg:text-8xl'
            variants={TextAnimate}
          >Stay Elegant</motion.div>
        </div>
        <div className=' flex flex-col gap-y-24 gap-x-8 md:flex-row justify-center lg:w-[50%] lg:ml-auto'>
          <motion.div variants={TextAnimate} className=' text-center text-sm text-shade md:text-left'>Minimalist and simple are elements that give the impression of elegance and class without unnecessary quantity.</motion.div>
          <div className=' text-center text-sm flex flex-col gap-8 md:text-left'>
            <motion.div variants={TextAnimate} className=' text-shade'>Look elegant is everyone`s desire, here we embody an elegance with a simplicity that excels and stands out. Spread the air of luxury wherever you go</motion.div>
            <motion.div variants={TextAnimate} className=' text-slate-200'>Minimalism and elegance is not just a word but a way of life and passion. Show your elegance all over the place</motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Interupt