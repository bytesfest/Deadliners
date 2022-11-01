import React from 'react'
import { motion } from 'framer-motion'

import ServiceImage1 from '../assets/service1.png'
import ServiceImage2 from '../assets/service2.png'
import ServiceImage3 from '../assets/service3.png'
import type { StaticImageData } from 'next/image'

import { BsArrowRightShort } from 'react-icons/bs'

const titleAnimate = {
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

const CardAnimate = {
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


interface Details {
  key: React.Key
  name: String
  desc: String
  icon: StaticImageData
}

const Services = () => {

  const ServiceDetail: Details[] = [
    {
      key: 1,
      name: "User Friendly",
      desc: "MiSides brings comfort and friendliness to the user by considering many things. Misides is the best community for people who are looking for minimalist fashion",
      icon: ServiceImage1
    },
    {
      key: 2,
      name: "Best Classification",
      desc: "With so many fashions available, MiSides comes with a breakthrough to classify fashion into certain categories to make it easier for you to find the design you like.",
      icon: ServiceImage2
    },
    {
      key: 3,
      name: "Latest Trends",
      desc: "MiSides always keeps up and is present in every latest fashion trend for you, of course, to look more trendy and confident to show off",
      icon: ServiceImage3
    }
  ]

  return (
    <motion.div id='service' className='w-full min-h-screen base-background bg-gradient-to-bl pt-36 pb-36'
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className='layout'>
        <motion.div className='title__container' variants={titleAnimate}>
          <div className='sub__title'>Our services</div>
          <div className='title'>What we offer</div>
        </motion.div>
        <motion.div className='flex flex-wrap justify-center items-center mt-24 gap-12 md:gap-20 lg:gap-28'
          transition={{ staggerChildren: .3 }}
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true}}
        >

          {ServiceDetail.map((service) => (
            <motion.div key={service.key} className=' w-[260px] aspect-[3/4] p-6 flex flex-col gap-6 text-center items-center service__card'
              variants={CardAnimate}

            >
              <div className='w-[50px] h-auto'><img src={service.icon.src} /></div>
              <div className=' font-semibold'>{service.name}</div>
              <div className=' text-sm text-shade'>{service.desc}</div>
              <div className=' text-primary font-semibold flex gap-3 items-center group hover:text-primaryHover cursor-pointer transition-all duration-300 ease-out'>More <BsArrowRightShort className='text-2xl font-bold group-hover:translate-x-2 transition-all duration-300 ease-out' /></div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </motion.div>
  )
}

export default Services