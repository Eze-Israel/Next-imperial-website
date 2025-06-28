import React from 'react'

const VideoCom = () => {
// bg-[#090342]
  return (

    <div className='flex items-center  md:p-20 bg-gray-600'>
       <iframe width="560" height="315" className="mx-auto border-[2] border-white" src="https://www.youtube.com/embed/vC9EkJuS5PM?si=zvDbSdypAfP2XaLn" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
        
        </div>
  )
}

export default VideoCom