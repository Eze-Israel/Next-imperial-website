import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'




const services =[
  {
    title: 'Tech Training',
    description:'Learn from experienced professionals in digital marketing, web development, and graphic design.' ,
    icon:'/images/cap.png',
    bg:"bg-blue-500",

  },
  {
    title: 'Web Development',
    description:'Digital Transformation That Lasts.From building websites to boosting online presence' ,
    icon:'/images/code.png',
     bg:"bg-orange-500",

  },
  {
    title: 'Digital Marketing',
    description:'Learn from experienced professionals in digital marketing, web development, and graphic design' ,
    icon:'/images/speak.png',
     bg:"bg-blue-500",

  },
  {
    title: 'Graphic Design',
    description:'Professional graphic design services for branding and marketing materials' ,
    icon:'/images/design.png',
    bg:"bg-orange-500",

  },
]

const WhyChooseUs = () => {
  return (
    <section className='py-16'
    id='services'
    >
      <SectionTitle title='Why Choose Us'/>
    <div
    className='flex md:flex-row flex-col md:gap-8 gap-4 mt-8 px-6 md:px-24'>
    
   
   {services.map((service, index) => (
    <div key={index} className='bg-gray-300 md:p-6 p-8  rounded-lg  flex flex-col text-center'>
     <Image  
     className={`md:w-16 w-8 md:h-16 h-8 mb-4 rounded-lg mx-auto ${service.bg}`}
     src={service.icon}
     alt={service.title}
     width={100}
     height={100}
     />
     <h3
     className='text-xl font-semibold text-white' 
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