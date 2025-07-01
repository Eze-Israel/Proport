import React from 'react';
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
      <a  href="https://linkedin.com/in/israel-eze-ab471a305" rel="norerrer">
          </a>

          <a href="https://github.com/Eze-Israel" target='_blank'>

     <FaGithub className="hub" /></a>
     <a href="https://wa.me/+2347061033459" rel="norerrer" target='_blank'>
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




