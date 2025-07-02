'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

const menuItems = [
  { label: 'Home', icon: HomeIcon, href: '/' },
  { label: 'About Us', icon: UserGroupIcon, href: '/About' },
  { label: 'Contact', icon: PhoneIcon, href: '/Contact' },
  { label: 'Services', icon: ServerIcon, href: '/Services' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-800 text-white p-3 sticky top-0 z-50 shadow-md h-20 md:px-[20vh]">
      <div className="flex justify-between items-center max-w-7xl mx-auto  h-15">
        {/* Logo & Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/NEXT.png"
            alt="NextLogo"
            width={40}
            height={40}
            priority
            className="rounded-full"
          />
          <h1 className="text-lg md:text-2xl font-semibold">Next Imperial Tech</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center ">
          {menuItems.map(({ label, href }) => (
            <Link key={label} href={href} className="hover:underline">
              {label}
            </Link>
          ))}
          <Link
            href="/Contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-blue-500 focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="md:hidden mt-4 bg-gray-900 rounded-lg shadow-lg"
        >
          <ul className="flex flex-col p-4 space-y-3">
            {menuItems.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="flex items-center space-x-3 hover:bg-gray-700 p-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5 text-blue-400" />
                  <span>{label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/Contact"
                className="block bg-blue-500 text-center text-white py-2 rounded hover:bg-blue-600"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
