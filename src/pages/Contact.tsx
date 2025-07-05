'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, User, } from 'lucide-react';
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from 'react-icons/fa6';
import Image from 'next/image';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-gray-100 py-10 px-5 md:px-20">
        <h3 className='text-2xl mb-2 text-center text-gray-800 font-semibold'>Contact Form</h3>
      <div className="flex flex-col md:flex-row bg-gray-300 rounded-2xl shadow-lg overflow-hidden">
        {/* Contact Info */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8 }} 
          className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">We’d love to hear from you.</p>
          <div className="flex items-center gap-3 mb-4">
            <Mail className="text-blue-500" />
            <span className="text-gray-700">info@nextimperial.com</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <Phone className="text-blue-500" />
            <span className="text-gray-700">+234 7061033459</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <User className="text-blue-500" />
            <span className="text-gray-700">Next Imperial Ltd, Lagos State</span>

            <div className='flex'>
            <a href='https://www.facebook.com/share/1JQm1YDc4V/?mibextid=wwXIfr' target='_blank'>
              <FaFacebook  className='p-4 rounded-full text-blue-700 text-6xl' />
              </a>

              <a href='https://www.youtube.com/@nextimperial' target='_blank'>
                            <FaYoutube  className='p-4 rounded-full text-blue-700 text-6xl' />
                            </a>
              <a href='https://www.instagram.com/nextimperial?igsh=cDh4Mjd3cWd1aTQx&utm_source=qr' target='_blank'>
                          <FaInstagram  className='p-4 rounded-full text-blue-700 text-6xl'/>
                          </a>
              <a href='https://wa.me/+2348166558072' target='_blank'>
                            <FaWhatsapp  className='p-4 rounded-full text-blue-700 text-6xl' />
                            </a>
            </div>

          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.3 }} 
          className="w-full md:w-1/2 p-8 flex flex-col gap-4"
        >
         <div className="flex flex-col items-center mb-2">
          <Image
            src="/images/btc.png"
            alt="email"
            width={100}
            height={100}
            className="w-10 h-10"
          />
          </div>
        
          <input 
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input 
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea 
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          />
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="mt-4 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-600 transition-all"
          >
            {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
