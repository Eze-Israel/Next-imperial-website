import React from 'react'
import Image from 'next/image'




const services =[
  {
    title: 'Empowering Your Digital Future',
    description:'From beginners to professionals, our computer training programs equip you with the skills needed to thrive in today’s tech-driven world.' ,
    icon:'/images/cap.png',
    bg:"bg-blue-500",

  },
  {
    title: 'Websites That Work for You',
    description:'We build modern, responsive websites that not only look great but also drive results — tailored for individuals, businesses, and organizations.' ,
    icon:'/images/code.png',
     bg:"bg-orange-500",

  },
  {
    title: ' Marketing That Delivers',
    description:'Boost your online presence with result-driven digital marketing strategies — including SEO, social media, and content marketing — to grow your brand faster.' ,
    icon:'/images/speak.png',
    bg:"bg-orange-500",

  },
  {
    title: ' Creativity That Speaks',
    description:'Stand out with stunning graphic designs that capture your brands identity and connect with your audience visually and emotionally.' ,
    icon:'/images/design.png',
     bg:"bg-blue-500",

  },
]

const WhyChooseUs = () => {
  return (
    <section className='py-16'
    id='services'
    >
      <div className='text-center'>
     <h2 className="text-center font-bold text-2xl md:text-3xl text-blue-500">Why Choose Us</h2>
         <div className="w-16 h-1 bg-indigo-500 mx-auto mt-3"></div>
         </div>
    <div
    className='flex md:flex-row flex-col md:gap-8 gap-4 mt-8 px-6 md:px-24'>
    
   
   {services.map((service, index) => (
    <div key={index} className='bg-gray-300 md:p-6 p-8  rounded-lg  flex flex-col text-center'>
     <Image  
     className={`md:w-16 w-12 md:h-16 h-12 mb-4 rounded-lg mx-auto ${service.bg}`}
     src={service.icon}
     alt={service.title}
     width={100}
     height={100}
     />
     <h3
     className='text-xl font-semibold text-gray-700' 
     >
      {service.title}
     </h3>
     <p className='text-gray-600 mt-2'>  {service.description}  </p>

    </div>
   ))}
    </div>
    </section>
  );
}

export default WhyChooseUs