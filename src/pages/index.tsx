import React from 'react'
import SwiperCarousel from '@/components/Animation'
import VideoCom from '@/components/VideoCom'
import WhyChooseUs from '@/components/WhyChooseUs'
import Faq from '@/components/FAQ'
import Testimonies from '@/components/Testimonials'
import { useLayoutEffect } from 'react'

const index = () => {
  useLayoutEffect(()=> {
   window.scrollTo(0,0)
  }, [])

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
