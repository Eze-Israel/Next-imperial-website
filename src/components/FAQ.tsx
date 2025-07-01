'use client'

import React, { useState } from 'react'

const faqs = [
  {
    question: 'What courses do you offer?',
    answer:
      'We offer courses in web development, digital marketing, graphic design, and more taught by professionals.',
  },
  {
    question: 'Are the trainings online or physical?',
    answer:
      'Our training is primarily online but we also organize periodic physical bootcamps and workshops.',
  },
  {
    question: 'Do I get a certificate after completing a course?',
    answer:
      'Yes, you will receive a verifiable certificate after completing any of our training programs.',
  },
  {
    question: 'What is the duration of the training?',
    answer:
      'Most of our programs run for 3 to 6 months, depending on the track and intensity.',
  },
  {
    question: 'Is there any support after training?',
    answer:
      'Yes, we offer mentorship, job placement guidance, and community support after training.',
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id='faq' className='py-16 bg-gray-50 px-4 md:px-10'>
      <div className='max-w-3xl mx-auto'>
        <h2 className='text-3xl font-bold text-center mb-10'>Frequently Asked Questions</h2>

        <div className='space-y-4'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className='border rounded-xl overflow-hidden bg-white shadow-sm'
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-100 transition'
              >
                <span className='text-lg font-medium'>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7' />
                </svg>
              </button>

              {openIndex === index && (
                <div className='px-6 pb-4 text-gray-700'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
