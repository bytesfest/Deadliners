import React from 'react'
import NewsSwiper from './NewsSwiper'
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


const News = () => {
  return (
    <motion.div id='news' className=' w-full min-h-screen base-background bg-gradient-to-bl pt-36 pb-20'
      initial="offscreen"
      whileInView="onscreen"
      transition={{
        staggerChildren: .2,
      }}
      viewport={{
        once: true
      }}
    >
      <div className='layout'>
        <motion.div className=' title__container' variants={TextAnimate}>
          <div className=' sub__title'>Newest news</div>
          <div className=' title'>Keepup With Fashion</div>
        </motion.div>

        <div className='mt-20'>
          <NewsSwiper />
        </div>
      </div>
    </motion.div>
  )
}

export default News