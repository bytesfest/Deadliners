import React from 'react'
import { motion } from 'framer-motion';
import HeaderImage from '../assets/headerImage.png';

const TextAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeOut",
    }
  }
}

const LinkAnimation = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
  }
}


const Header = () => {
  return (
    <div id='home' className='w-full h-screen base-background bg-gradient-to-tl'>
      <div className='layout'>
        <div className=' mix-blend-overlay opacity-60 absolute -left-[150px] sm:left-[15vw] md:left-[25vw] lg:left-[30vw] bottom-0 h-auto'><img className=' h-full max-h-[90vh] sm:max-h-[80vh]' src={HeaderImage.src} /></div>
        <div className='relative z-10 w-full min-h-screen flex flex-col justify-center items-center'>
          <div className='flex flex-col justify-center items-center gap-6'>
            <motion.div 
              className='w-[50px] h-[200px] border-[5px] border-primary'
              initial={{
                y: -100,
                opacity: 0
              }}
              animate={{
                y: 0,
                opacity: 1
              }}
              transition={{
                type: "tween",
                duration: .7,
                ease: "easeOut",
              }}
            ></motion.div>
            <motion.div 
              className='text-center font-saira text-3xl tracking-[0.2em] md:text-4xl'
              variants={TextAnimation}
              initial="hidden"
              animate="visible"
            >
              BEAUTY <br /><span className='text-primary'>&</span>ELEGANT
            </motion.div>

          </div>
          <div className='text-sm text-shade text-center absolute bottom-8 sm:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing, magna aliqua.</div>
          <div className=' hidden sm:flex absolute bottom-8 gap-8 right-12'>
            <motion.div className=' footer__wrap'
              initial="hidden"
              animate="visible"
              transition={{staggerChildren: .3, }}
            >
              <motion.div variants={TextAnimation} className=' footer__title'>Follow Us</motion.div>
              <motion.div variants={TextAnimation} className=' footer__link'>@MiSides.business</motion.div>
              <motion.div variants={TextAnimation} className=' footer__link'>MiSides.com</motion.div>
            </motion.div>
            <motion.div className=' footer__wrap'
              initial="hidden"
              animate="visible"
              transition={{staggerChildren: .3, }}
            >
              <motion.div variants={TextAnimation} className=' footer__title'>Get in Touch</motion.div>
              <motion.div variants={TextAnimation} className=' footer__link'>misides.business@gmail.com</motion.div>
              <motion.div variants={TextAnimation} className=' footer__link'>+62 82131458838</motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;