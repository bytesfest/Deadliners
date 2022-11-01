import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper";
import type { StaticImageData } from 'next/image'

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import NewsImage1 from '../assets/news1.jpg'
import NewsImage2 from '../assets/news2.png'
import NewsImage3 from '../assets/news3.png'
import { BiRightArrow } from 'react-icons/bi'

interface NewsType {
  key: React.Key
  name: String
  desc: String
  date: String
  link: String
  img: StaticImageData
}



function NewsSwiper() {

  const NewsContent: NewsType[] = [
    {
      key: 1,
      name: "13 Halloween Costumes Inspired By This Years Viral Fashion Moments",
      desc: "Are you struggling to come up with an amazing Halloween costume this year?",
      date: "October 11, 2022",
      link: "https://www.vogue.com/slideshow/halloween-costume-ideas-viral-fashion-moments",
      img: NewsImage1
    },
    {
      key: 2,
      name: "The Princess Diana Uniform in Street Style",
      desc: "With The Crowns fifth season closely upon us, we`re getting in the mood to dress like Princess Diana.",
      date: "October 26, 2022",
      link: "https://www.vogue.com/article/street-style-fashion-week-princess-diana-street-style-looks",
      img: NewsImage2
    },
    {
      key: 3,
      name: "6 Fall Fashion Trends That Are Celebrity-Approved",
      desc: "Wondering what fall fashion trends are worth the investment right now?",
      date: "October 26, 2022",
      link: "https://www.vogue.com/article/6-fall-fashion-trends-inspired-by-celebrity-outfits",
      img: NewsImage3
    },
  ]

  return (
    <div>
      <Swiper
        slidesPerView={1.1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            centeredSlides: false
          },
          900: {
            slidesPerView: 3
          }
        }}
        spaceBetween={80}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="newsswiper"
      >

        {NewsContent.map((data) => (
          <SwiperSlide key={data.key}>
            <div className=' w-full h-auto min-h-[250px] xsm:min-h-[250px] max-h-[300px] xsm:max-h-[300px] xsm:max-w-[400px]  flex relative hover:neu-flat transition-all duration-300 ease-in-out overflow-hidden'>
              <div className=' w-full h-full'><img src={data.img.src} alt="" /></div>
              <div className=' base-background bg-gradient-to-r h-2/3 xsm:h-full xsm:w-[60%] absolute bottom-0 flex flex-col gap-8 p-4 xsm:hover:w-[90%] xsm:hover:rounded-r-[500px] group transition-all duration-500 ease-in-out'>
                <div className='text-sm font-semibold max-w-[200px]'>{data.name}</div>
                <div className=' text-shade text-[10px] max-w-[200px]'>{data.desc} </div>
                <div className=' text-shade text-[10px]  font-light'>-- {data.date}</div>
                <div className=' w-fit py-2 px-2 bg-white rounded-full text-4xl text-primary absolute xsm:-right-12 xsm:top-[50%] xsm:translate-y-[-50%] opacity-0 xsm:group-hover:opacity-100 xsm:group-hover:right-6 transition-all duration-300 ease-in-out cursor-pointer'><a href={`${data.link}`}><BiRightArrow /></a></div>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div >
  )
}

export default NewsSwiper