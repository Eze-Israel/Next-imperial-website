import React from 'react';
import SectionTitle from './SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade,  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Image from 'next/image';

const testimonials = [
  {
    name: '— Emmanuel I',
    role: 'Freelance Product Designer',
    feedback:
      "Joining the Graphic Design and UI/UX program at Next-Imperial was a game-changer for me. The instructors broke down complex tools like Figma and Photoshop in a way that made design feel natural. Today, I confidently design interfaces for mobile apps and websites—and clients love my work!",
    image: '/images/i.jpeg',
  },
  {
    name: '— Mary A., ',
    role: 'Frontend Developer',
    feedback:
      "From zero coding knowledge to building fully responsive websites—Next-Imperial made it possible. The Web Development course gave me hands-on experience with HTML, CSS, JavaScript, and React. Thanks to their support, I now work as a junior frontend developer at a tech startup.",
    image: '/images/k.jpeg',
    
  },
  {
    name: '— Chinedu O., ',
    role: 'Entrepreneur & Digital Marketer',
    feedback:
          "Next-Imperial’s Digital Marketing course didn’t just teach theory—it gave me real-world skills. I now run targeted ad campaigns, create social media content that converts, and use analytics to make smart decisions. My small business has seen massive growth because of what I learned.",
    image: '/images/j.jpeg',

  },
  {
    name: '— Blessing U.,',
    role: 'Freelance Desktop Publisher',
    feedback:
          "Before this training, I struggled with designs for flyers and business documents. Now I use CorelDRAW and Microsoft Publisher like a pro. The Desktop Publishing course was practical, clear, and fun. I’m now designing for churches, schools, and small businesses in my area.",
    image: '/images/L.jpg',
 
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
                  className="rounded-full object-cover w-40 h-40 border-4 border-blue-400 shadow-md"
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

