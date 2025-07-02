// 'use client';

// import React, {useState} from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { motion } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";
// import {
//   HomeIcon,
//   PhoneIcon,
//   UserGroupIcon,
//   ServerIcon,
// } from  '@heroicons/react/24/outline';

// const Header: React.FC = () => { 
//   const [isOpen, setIsOpen] = useState(false);
//       const toggleMenu = () => setIsOpen(!isOpen);

    
//     //ARRAY OF LINKS ON NAV MOBILE MENU
    
//     const menuItems = [
//       { label: "Home", icon: HomeIcon, href: "/" },
//       { label: "About Us", icon: UserGroupIcon, href: "/About" },
//       { label: "Contact", icon: PhoneIcon, href: "/Contact"},
//       {label: "Services", icon: ServerIcon, href: "/Services" }
//     ];


//   return (
//     <div className='bg-gray-800 text-white p-2  shadow:md sticky top-0 z-50 md:flex justify-between border border-red-500'>
      
//      <button onClick={toggleMenu} className="sticky  z-50 text-blue-500 text-2xl  md:hidden flex items-center  justify-center">
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       <div className='border border-blue-600'>
//       {isOpen && (
//         <motion.nav
//           initial={{ x: "-100%" }}
//           animate={{ x: 0 }}
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//           // START FROM HERE
//           className="nava w-full h-screen z-50"
//         >
//           <ul className="flex flex-col space-y-2 bg-gray-800/70">
//             {menuItems.map(({ label, icon: Icon, href }) => (
//               <li key={label}>
//                 <a
//                   href={href}
//                   className="w-full flex items-center space-x-3 text-left 
//                   text-lg p-3 rounded-lg hover:bg-black/40 mt-3"
//                 >
//                   <Icon className="w-5 h-5 text-blue-500" />
//                   <span>{label}</span>
//                 </a>
                
//               </li>
//             ))}
//           </ul>

//         </motion.nav>
//       )}
//     </div>


//         <div className='flex  w-full md:mx-[100px] md:my-[15px] justify-between items-center'>

//         <div className=''> 
//        {!isOpen && (
//         <Link className='flex flex-row' href="/">
//         <Image
//         src="/images/NEXT.png"
//         alt='NextLogo'
//         width={40}
//         height={40}
//         priority
//         className='cursor-pointer rounded-full relative'
//         />
//         <h1 className='md:text-3xl mt-1 ml-2'>Next Imperial Limited</h1>
//         </Link>
//         )}
//          </div>

//            <div className='hidden md:block mt-3'>
//             {!isOpen && (
//               <div className='flex justify-end gap-3  '>
//             <div >
//             <Link href="/" className="hover:underline">Home</Link>
//             </div>
//             <div>
//             <Link href="/About" className="hover:underline">About Us</Link>
//             </div>
//             <div>
//             <Link href="/Services" className="hover:underline">Services</Link>
//             </div>
//             <div>
//             <Link href="/Contact" className="hover:underline">Contact</Link>
//             </div>
//             <div>
//             <Link href="/Contact" className="hover:bg-gray-400 bg-blue-400 text-white rounded-[35px] py-2 px-3">Get Started</Link>
//             </div>
            
//             </div>
//             )}
//             </div>

//           </div>
//           </div>
          
       
//   )
// }

// export default Header



'use client';

import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HomeIcon,
  PhoneIcon,
  UserGroupIcon,
  ServerIcon,
} from  '@heroicons/react/24/outline';

const Header: React.FC = () => { 
  const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => setIsOpen(!isOpen);

    
    //ARRAY OF LINKS ON NAV MOBILE MENU
    
    const menuItems = [
      { label: "Home", icon: HomeIcon, href: "/" },
      { label: "About Us", icon: UserGroupIcon, href: "/About" },
      { label: "Contact", icon: PhoneIcon, href: "/Contact"},
      {label: "Services", icon: ServerIcon, href: "/Services" }
    ];


  return (
    <div className='bg-gray-800 text-white p-2 h-20 shadow:md sticky top-0 z-50 flex justify-between items-center border border-red-500'>
      <div className=''>
        {!isOpen && (
        <Link className='flex flex-row' href="/">
        <Image
        src="/images/NEXT.png"
        alt='NextLogo'
        width={40}
        height={40}
        priority
        className='cursor-pointer rounded-full relative'
        />
        <h1 className='md:text-3xl mt-1 ml-2'>Next Imperial Limited</h1>
        </Link>
        )}
      </div>
      <div>
        <button onClick={toggleMenu} className="sticky  z-50 text-blue-500 text-2xl   flex items-center  justify-center">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
      </div>
      <div>
        {!isOpen ? (
            <div className='flex justify-end gap-3 hidden md:flex'>
            <div >
            <Link href="/" className="hover:underline">Home</Link>
            </div>
            <div>
            <Link href="/About" className="hover:underline">About Us</Link>
            </div>
            <div>
            <Link href="/Services" className="hover:underline">Services</Link>
            </div>
            <div>
            <Link href="/Contact" className="hover:underline">Contact</Link>
            </div>
            <div>
            <Link href="/Contact" className="hover:bg-gray-400 bg-blue-400 text-white rounded-[35px] py-2 px-3">Get Started</Link>
            </div>
            
            </div>
            ): (
              <div  className='border border-blue-600'>
               <motion.nav
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          // START FROM HERE
          className="nava w-full h-screen z-50"
        >
          <ul className="flex flex-col space-y-2 bg-gray-800/70">
            {menuItems.map(({ label, icon: Icon, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="w-full flex items-center space-x-3 text-left 
                  text-lg p-3 rounded-lg hover:bg-black/40 hi"
                >
                  <Icon className="w-5 h-5 text-blue-500" />
                  <span>{label}</span>
                </a>
                
              </li>
            ))}
          </ul>

        </motion.nav>
        </div>
            )}

      </div>
    </div>
          
       
  )
}

export default Header

