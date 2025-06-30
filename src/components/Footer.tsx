import React from 'react'
import Link from 'next/link';
import {  FaLinkedin, FaGithub,FaWhatsapp} from 'react-icons/fa';

const Footer = () => {
   const  date = new Date().getFullYear();
  return (
    <div className='footer'>
    <Link href="/" className="name"> <b className='text-green-500'>Is</b>rael</Link>
      <div className='navigation'>
       <ul className='nav-menu-show'>
      <Link href="/" > <li className='footlist'>Home</li></Link> 
      <Link href="#about" > <li className='footlist'>About</li></Link> 
      <Link href="#skills">  <li className='footlist'>Skills</li></Link> 
      <Link href="#projects" > <li className='footlist'>Projects</li></Link> 
      <Link href="#contact" > <li className='footlist'>Contact</li></Link> 
      </ul>
     </div>
     
     <div className='socials'>
     <FaLinkedin className='linked'/>
      <a href="">
          </a>
          <a href="">
     <FaGithub className="hub"/></a>
     <a href="">
      <FaWhatsapp className='wats' />
      </a>
      </div>

      <div className='copyright'> <p > &copy; {date} <b style={{
    color:"orange"
     }}> Eze Israel O.</b> All Rights Reserved.</p></div>
      </div>
  )
}



export default Footer





        // <div className='flex justify-space-between gap-20 border border-white items-center shadow-2xl'>
        //     <Link href="https://linkedin.com/in/israel-eze-ab471a305" rel="norerrer">
        //     <FaLinkedin className='text-blue-900 text-4xl mt-8'/></Link>
        //     <Link href="https://github.com/Eze-Israel" rel='norerrer'>
        //     <FaGithub  className='text-gray-900 text-4xl  mt-8'/></Link>
        //     <Link href="https://wa.me/+2347061033459" rel="norerrer">
        //       <FaWhatsapp  className='text-green-500 text-4xl mt-8' /></Link> 
        //       </div>