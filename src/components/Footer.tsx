import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

import Logo from '../assets/logoLight.svg'


const TextAnimate = {
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

const Footer = () => {
  return (
    <motion.div className=' w-full base-background bg-gradient-to-bl pb-8 pt-36'
      initial="offscreen"
      whileInView="onscreen"
      transition={{
        staggerChildren: .2,
      }}
      viewport={{
        once: true
      }}
    >
      <div className=' layout'>
        <div className=' flex flex-wrap gap-x-6 gap-y-16 justify-around items-start'>

          <motion.div variants={TextAnimate} className=' flex gap-4'>
            <div><Image src={ "/Deadliners" + Logo.src} height="35px" width="35px" /></div>
            <div>
              <div className=' footer__title'>Mi Sides</div>
              <div className=' footer__text'>Clean lines, silent expressiveness, modern sophistication. <br /> Simplicity is everything.</div>
            </div>
          </motion.div>

          <motion.div variants={TextAnimate} className=' footer__wrap'>
            <div className=' footer__title'>Developers</div>
            <div className=' footer__link'>About Developer</div>
            <div className=' footer__link'>About Website</div>
          </motion.div>
          <motion.div variants={TextAnimate} className=' footer__wrap'>
            <div className=' footer__title'>Help</div>
            <div className=' footer__link'>Customer Support</div>
            <div className=' footer__link'>Contact</div>
          </motion.div>
          <motion.div variants={TextAnimate} className=' footer__wrap'>
            <div className=' footer__title'>Social</div>
            <div className=' footer__link'>Github</div>
            <div className=' footer__link'>Linkedin</div>
            <div className=' footer__link'>Twitter</div>
          </motion.div>
          <motion.div variants={TextAnimate} className=' footer__wrap'>
            <div className=' footer__title'>Legal</div>
            <div className=' footer__link'>Terms of Use</div>
            <div className=' footer__link'>Privacy Policy</div>
            <div className=' footer__link'>Legal Notice</div>
          </motion.div>

        </div>
        <div className=' mt-12 flex justify-between text-sm text-shade '>
          <div>&#169; MiSides. All right reserved</div>
          <div>Skillfully crafted by Deadliners</div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer