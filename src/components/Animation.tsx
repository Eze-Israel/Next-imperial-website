'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
// import

const slides = [
  {
    image: '/images/first.png',
    title:
      'Expert-Led Training & Development', 
    subtitle: 'Get hands-on experience from certified professionals in web development, design, and digital tools. We don’t just teach — we mentor you for success.',
  },
  {
    image: '/images/second.png',
    title:
      'Affordable & High-Quality Services',
    subtitle: 'From websites to graphic design and digital marketing, we deliver premium results without breaking your budget.',
  },
  {
    image: '/images/third.png',
    title: 'All-in-One Tech Solution Hub',
    subtitle: 'One stop for computer training, web design, branding, online registration, and more — all under one roof, saving you time and stress.',
  },
  {
    image: '/images/fourth.png',
    title: 'Proven Track Record of Excellence',
    subtitle: 'Trusted by individuals and businesses across Lagos for timely delivery, professional service, and ongoing support.',
  },
]

export default function SwiperCarousel() {
  return (
    <div className="relative w-full overflow-hidden shadow-lg h-[85vh] ">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="object-cover w-full h-full bg-black"
              />

              {/* Overlay Text Container */}
              <div className="absolute md:bottom-36 bottom-50 md:left-8 bg-black/60 p-6 rounded-xl max-w-xl text-white space-y-2">
                <motion.h4
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="md:text-2xl font-bold text-yellow-300"
                >
                  {slide.title}
                </motion.h4>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="md:text-lg "
                >
                  {slide.subtitle}
                </motion.p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
