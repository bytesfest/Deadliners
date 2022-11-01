import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'


import { AiOutlineCloseSquare } from 'react-icons/ai'
import { VscListSelection } from 'react-icons/vsc'
import Logo from '../assets/logoLight.svg'

const NavContainerAnimate = {
  offscreen: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: .7,
      type: "tween",
      ease: "easeInOut",
    }
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .7,
      type: "tween",
      ease: "easeInOut",
      staggerChildren: 0.1
    }
  }
}

const SvgAnimate = {
  offscreen: {
    opacity: 0,
    pathLength: 0
  },
  onscreen: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
}

const NavLinkAnimate = {
  offscreen: {
    y: 400,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
      type: "tween",
      ease: "easeInOut",
    }
  }
}

const Navigation = () => {
  const [active, setActive] = useState(false)

  const handleActive = (active: boolean) => {
    setActive(!active)
  }

  return (
    <div className=' bg-transparent w-full h-fit fixed top-0 z-50'>
      <div className='layout flex justify-between'>
        <div className=' py-6'>
          <Image src={Logo} width="35px" height="35px" />
        </div>
        <div className='py-6 text-3xl cursor-pointer' onClick={() => handleActive(active)}><VscListSelection /></div>
      </div>

      <AnimatePresence>
      {active && (
        <motion.div className='fixed w-screen h-screen base-background bg-gradient-to-br top-0 flex flex-col items-center gap-12 pt-36'
          variants={NavContainerAnimate}
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
        >
          <div className=' absolute top-6 right-6 xsm:right-12 text-4xl font-bold text-white cursor-pointer hover:text-primary transition-colors duration-200 ease-out' onClick={() => handleActive(active)}><AiOutlineCloseSquare/></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 212.28 231.49"
            width="120px"
            height="120px"
          >
            <motion.path
              variants={SvgAnimate}
              className="cls-1"
              d="M5,175.56V56.33L125.76,160s13.46,11.93,13.15,25.68-6.33,36.08-33.74,40.36S53,204.91,53.61,180.15"
              fill='none'
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth="10px"
            />
            <motion.path
              variants={SvgAnimate}
              className="cls-1"
              d="M207.28,55.55V175.16L86.52,71.51S73.06,59.59,73.37,45.83,79.7,9.76,107.11,5.48s52.17,21.09,51.56,45.86"
              fill='none'
              stroke='#fff'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth="10px"
            />
          </svg>

          <div className=' flex flex-col text-white text-lg font-light justify-center items-center text-center gap-6'>
            <motion.div variants={NavLinkAnimate} className='nav__link' onClick={() => handleActive(active)}><a href="#home">Home</a></motion.div>
            <motion.div variants={NavLinkAnimate} className='nav__link' onClick={() => handleActive(active)}><a href="#service">Service</a></motion.div>
            <motion.div variants={NavLinkAnimate} className='nav__link' onClick={() => handleActive(active)}><a href="#about">About Us</a></motion.div>
            <motion.div variants={NavLinkAnimate} className='nav__link' onClick={() => handleActive(active)}><a href="#news">News</a></motion.div>
            <motion.div variants={NavLinkAnimate} className='nav__link' onClick={() => handleActive(active)}><a href="#contactus">Contact Us</a></motion.div>
          </div>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  )
}

export default Navigation