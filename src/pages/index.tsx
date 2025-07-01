import React from 'react'
import SwiperCarousel from '@/components/Animation'
import VideoCom from '@/components/VideoCom'
import WhyChooseUs from '@/components/WhyChooseUs'
import Faq from '@/components/FAQ'
import Testimonies from '@/components/Testimonials'

const index = () => {
  return (
    <div>
      <SwiperCarousel/>
      <VideoCom/>
      <WhyChooseUs/>
      <Testimonies/>
      <Faq/>
    </div>
  )
}

export default index