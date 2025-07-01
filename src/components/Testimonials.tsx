import React from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Muhammad Umair',
    role: 'Product Designer at TechNova',
    feedback:
      'The professionalism and technical expertise that Eze Israel brought to our project were outstanding. He took our static design and brought them to life with seamless animations and flawless responsiveness. I highly recommend him for any front-end job.',
    image: '/images/testi9.png',
  },
  {
    name: 'Samantha Lee',
    role: 'Marketing Director at BrightPath',
    feedback:
      'From the very first meeting, Eze Israel understood our vision and translated it into a stunning, user-friendly interface. The redesign not only improved aesthetic but also enhanced the overall user experience. Truly a pleasure to work with!',
    image: '/images/testi2.jpg',
  },
  {
    name: 'Michael Green',
    role: 'CEO of EcoShop',
    feedback:
      'Eze Israel is not just a talented front-end developer but also a fantastic collaborator. He maintained clear communication throughout the project, ensuring all of our feedback was implemented promptly.',
    image: '/images/testi6.jpg',
  },
  {
    name: 'Jessica Patel',
    role: 'Founder of FitSphere',
    feedback:
      'We hit multiple roadblocks during production, but Eze Israel tackled each issue head-on with innovative solutions. His attention to detail and technical knowledge saved us time and elevated the final product.',
    image: '/images/testi7.jpg',
  },
];

const Testimonies = () => {
  return (
    <section
      id="testimonies"
      className="p-8 bg-white border-y-2 border-green-100"
    >
      <SectionTitle title="Testimonials" />

      <p className="text-center text-xl text-gray-700 mb-8">
        What clients say about me.
      </p>

      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 flex flex-col md:flex-row gap-6 items-center md:items-start max-w-5xl mx-auto">
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <Image
                  alt={testimonial.name}
                  src={testimonial.image}
                  width={160}
                  height={160}
                  className="rounded-full object-cover w-40 h-40 border-4 border-green-300 shadow-md"
                />
              </div>

              {/* TEXT */}
              <div className="text-center md:text-left flex-1">
                <p className="text-gray-700 text-lg leading-relaxed mb-4 relative">
                  <span className="text-3xl text-green-500 font-bold">&ldquo;</span>
                  {testimonial.feedback}
                  <span className="text-3xl text-green-500 font-bold">&rdquo;</span>
                </p>
                <p className="font-bold text-lg text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonies;

